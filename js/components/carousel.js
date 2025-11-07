// Image Carousel Component
export function initCarousels() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        const images = card.querySelectorAll('.carousel-image');
        const dots = card.querySelectorAll('.dot');
        const prevBtn = card.querySelector('.carousel-prev');
        const nextBtn = card.querySelector('.carousel-next');
        
        if (images.length <= 1) return; // Skip if no carousel needed
        
        let currentIndex = 0;
        
        function showImage(index) {
            images.forEach((img, i) => {
                img.classList.toggle('hidden', i !== index);
            });
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        }
        
        function nextImage() {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        }
        
        function prevImage() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        }
        
        if (prevBtn) prevBtn.addEventListener('click', prevImage);
        if (nextBtn) nextBtn.addEventListener('click', nextImage);
        
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentIndex = index;
                showImage(currentIndex);
            });
        });
    });
}
