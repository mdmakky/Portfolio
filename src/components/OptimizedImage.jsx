import React from 'react';

/**
 * OptimizedImage Component
 * A modern, performance-optimized image component with:
 * - Multiple format support (AVIF, WebP, JPEG)
 * - Lazy loading
 * - Responsive sizing
 * - Layout shift prevention
 * - Error handling with fallback
 */
const OptimizedImage = ({
  src,
  alt,
  className = '',
  width,
  height,
  loading = 'lazy',
  priority = false,
  fallbackSrc = null,
}) => {
  const handleError = (e) => {
    if (fallbackSrc) {
      e.target.src = fallbackSrc;
    } else {
      // Inline SVG fallback
      e.target.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}"><rect width="${width}" height="${height}" fill="%236366f1"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="24" font-family="Arial">Image</text></svg>`;
    }
  };

  // Get base path and filename
  const pathParts = src.split('/');
  const filename = pathParts[pathParts.length - 1];
  const basePath = pathParts.slice(0, -1).join('/');
  const baseFilename = filename.split('.')[0];

  return (
    <picture>
      {/* AVIF - Best compression, modern browsers */}
      <source 
        srcSet={`${basePath}/${baseFilename}.avif`} 
        type="image/avif" 
      />
      
      {/* WebP - Good compression, wide support */}
      <source 
        srcSet={`${basePath}/${baseFilename}.webp`} 
        type="image/webp" 
      />
      
      {/* JPEG/PNG - Fallback for older browsers */}
      <img
        src={src}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading={priority ? 'eager' : loading}
        fetchpriority={priority ? 'high' : 'auto'}
        decoding="async"
        onError={handleError}
      />
    </picture>
  );
};

export default OptimizedImage;
