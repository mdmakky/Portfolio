// Image Optimization Script
// Run: node optimize-images.js
// Requires: npm install sharp

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const photosDir = './photos';
const photoPath = path.join(photosDir, 'photo.jpg');

console.log('🖼️  Starting image optimization...\n');

// Check if the image exists
if (!fs.existsSync(photoPath)) {
  console.error('❌ Error: photo.jpg not found in photos folder!');
  process.exit(1);
}

// Get original file size
const originalStats = fs.statSync(photoPath);
const originalSize = (originalStats.size / 1024).toFixed(2);
console.log(`📊 Original image size: ${originalSize} KB`);

// Optimize the image
Promise.all([
  // Create optimized JPEG (fallback)
  sharp(photoPath)
    .resize(800, 800, {
      fit: 'cover',
      position: 'center'
    })
    .jpeg({ 
      quality: 85,
      progressive: true,
      mozjpeg: true
    })
    .toFile(path.join(photosDir, 'photo-optimized.jpg'))
    .then(info => {
      const newSize = (info.size / 1024).toFixed(2);
      const savings = ((1 - info.size / originalStats.size) * 100).toFixed(1);
      console.log(`✅ JPEG optimized: ${newSize} KB (${savings}% smaller)`);
    }),

  // Create WebP version (best quality/size ratio)
  sharp(photoPath)
    .resize(800, 800, {
      fit: 'cover',
      position: 'center'
    })
    .webp({ 
      quality: 85,
      effort: 6
    })
    .toFile(path.join(photosDir, 'photo.webp'))
    .then(info => {
      const newSize = (info.size / 1024).toFixed(2);
      const savings = ((1 - info.size / originalStats.size) * 100).toFixed(1);
      console.log(`✅ WebP created: ${newSize} KB (${savings}% smaller)`);
    }),

  // Create AVIF version (future-proof, best compression)
  sharp(photoPath)
    .resize(800, 800, {
      fit: 'cover',
      position: 'center'
    })
    .avif({ 
      quality: 80,
      effort: 6
    })
    .toFile(path.join(photosDir, 'photo.avif'))
    .then(info => {
      const newSize = (info.size / 1024).toFixed(2);
      const savings = ((1 - info.size / originalStats.size) * 100).toFixed(1);
      console.log(`✅ AVIF created: ${newSize} KB (${savings}% smaller)`);
    })
    .catch(err => {
      console.log('⚠️  AVIF creation skipped (format not supported)');
    }),

  // Create smaller thumbnail for quick preview
  sharp(photoPath)
    .resize(400, 400, {
      fit: 'cover',
      position: 'center'
    })
    .webp({ quality: 80 })
    .toFile(path.join(photosDir, 'photo-thumb.webp'))
    .then(info => {
      const newSize = (info.size / 1024).toFixed(2);
      console.log(`✅ Thumbnail created: ${newSize} KB`);
    })
])
.then(() => {
  console.log('\n🎉 Optimization complete!');
  console.log('\n📝 Next steps:');
  console.log('1. Backup your original photo.jpg');
  console.log('2. Replace photo.jpg with photo-optimized.jpg');
  console.log('3. Update your code to use WebP with JPEG fallback');
  console.log('\nSuggested code update:');
  console.log(`
<picture>
  <source srcSet="/photos/photo.avif" type="image/avif" />
  <source srcSet="/photos/photo.webp" type="image/webp" />
  <img 
    src="/photos/photo.jpg" 
    alt="Md. Arafatuzzaman - Full-Stack Developer"
    loading="eager"
    fetchpriority="high"
    width="320"
    height="320"
  />
</picture>
  `);
})
.catch(err => {
  console.error('❌ Optimization failed:', err.message);
  console.log('\n💡 Make sure you have installed sharp:');
  console.log('   npm install sharp');
  process.exit(1);
});
