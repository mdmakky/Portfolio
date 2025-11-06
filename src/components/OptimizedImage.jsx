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
  // Optional: override the base path where images are stored. If not provided and
  // `src` is just a filename (no `/`), the component defaults to `/photos`.
  basePathOverride = null,
}) => {
  const handleError = (e) => {
    const img = e.target;
    // If a fallback image URL was provided, try it first
    if (fallbackSrc && img.src !== fallbackSrc) {
      img.src = fallbackSrc;
      return;
    }

    // If we tried loading from /photos/ by default, also try the site root
    // (useful when images live in `public/` as `/photo.jpg`). Use a dataset flag
    // to avoid retry loops.
    try {
      if (img.src.includes('/photos/') && !img.dataset.triedRoot) {
        img.dataset.triedRoot = '1';
        const rootSrc = `/${filename}`;
        img.src = rootSrc;
        return;
      }
    } catch (err) {
      // ignore and fall through to inline fallback
    }

    // Inline SVG fallback as last resort
    img.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}"><rect width="${width}" height="${height}" fill="%236366f1"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="24" font-family="Arial">Image</text></svg>`;
  };

  // Normalize and determine base path and filename.
  // If `src` is a bare filename (no slash) we assume images live in `/photos`
  // unless `basePathOverride` is provided.
  const normalizedSrc = src.startsWith('/') ? src.slice(1) : src;
  const pathParts = normalizedSrc.split('/');
  const filename = pathParts[pathParts.length - 1];
  const baseFilename = filename.split('.')[0];

  let basePath = '';
  if (basePathOverride) {
    // allow user to pass either with or without leading slash
    basePath = basePathOverride.startsWith('/') ? basePathOverride : `/${basePathOverride}`;
  } else if (pathParts.length === 1) {
    basePath = '/photos';
  } else {
    basePath = `/${pathParts.slice(0, -1).join('/')}`;
  }

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
        // Use the provided src if it already contains a path; otherwise build a path
        // using the computed `basePath` so users can pass just the filename.
        src={pathParts.length === 1 ? `${basePath}/${filename}` : src}
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
