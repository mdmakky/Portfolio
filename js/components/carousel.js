// Image Carousel Component
export function initCarousels() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        const carouselContainer = card.querySelector('.carousel-container');
        const allImages = card.querySelectorAll('.carousel-image');
        const dotsContainer = card.querySelector('.carousel-dots');
        const prevBtn = card.querySelector('.carousel-prev');
        const nextBtn = card.querySelector('.carousel-next');
        
        // Track which images successfully loaded
        let loadedImages = [];
        let failedImages = 0;
        
        // Listen for image load/error events
        allImages.forEach((img, idx) => {
            img.addEventListener('load', () => {
                loadedImages.push(idx);
                initializeCarousel();
            });
            
            img.addEventListener('error', () => {
                failedImages++;
                // If first image fails, show fallback
                if (idx === 0) {
                    const fallback = card.querySelector('[id*="-fallback"]');
                    if (fallback && carouselContainer) {
                        carouselContainer.style.display = 'none';
                        fallback.style.display = 'flex';
                    }
                }
                // Check if we should reinitialize with remaining images
                if (loadedImages.length > 0 || (allImages.length - failedImages) > 0) {
                    initializeCarousel();
                }
            });
        });
        
        function initializeCarousel() {
            // Get images that either loaded or haven't failed yet
            const validImages = Array.from(allImages).filter((img, idx) => {
                // Show images that loaded or haven't been marked as failed
                return !img.classList.contains('hidden') || 
                       (img.complete && img.naturalHeight !== 0);
            });
            
            if (validImages.length === 0) {
                // Show fallback if no images
                const fallback = card.querySelector('[id*="-fallback"]');
                if (fallback && carouselContainer) {
                    carouselContainer.style.display = 'none';
                    fallback.style.display = 'flex';
                }
                return;
            }
            
            // For single image, hide carousel controls and dots
            if (validImages.length === 1) {
                validImages[0].classList.remove('hidden');
                if (dotsContainer) dotsContainer.style.display = 'none';
                if (prevBtn) prevBtn.style.display = 'none';
                if (nextBtn) nextBtn.style.display = 'none';
                return;
            }
            
            // Dynamically generate dots based on valid images
            if (dotsContainer) {
                dotsContainer.innerHTML = '';
                validImages.forEach((_, index) => {
                    const dot = document.createElement('span');
                    dot.className = `dot w-2 h-2 rounded-full cursor-pointer shadow-sm transition-all ${
                        index === 0 ? 'bg-white active' : 'bg-white/50'
                    }`;
                    dot.setAttribute('data-index', index);
                    dotsContainer.appendChild(dot);
                });
            }
            
            const dots = card.querySelectorAll('.dot');
            let currentIndex = 0;
            
            function showImage(index) {
                validImages.forEach((img, i) => {
                    img.classList.toggle('hidden', i !== index);
                });
                dots.forEach((dot, i) => {
                    dot.classList.toggle('active', i === index);
                });
            }
            
            function nextImage() {
                currentIndex = (currentIndex + 1) % validImages.length;
                showImage(currentIndex);
            }
            
            function prevImage() {
                currentIndex = (currentIndex - 1 + validImages.length) % validImages.length;
                showImage(currentIndex);
            }
            
            if (prevBtn) prevBtn.onclick = prevImage;
            if (nextBtn) nextBtn.onclick = nextImage;
            
            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    currentIndex = index;
                    showImage(currentIndex);
                });
            });
        }
        
        // Check if images are already loaded (cached)
        setTimeout(() => {
            allImages.forEach(img => {
                if (img.complete && img.naturalHeight !== 0) {
                    loadedImages.push(Array.from(allImages).indexOf(img));
                }
            });
            if (loadedImages.length > 0) {
                initializeCarousel();
            }
        }, 100);
    });
}
