/**
 * Vite plugin to inject preload links for critical resources
 * This improves FCP (First Contentful Paint) by loading CSS and JS earlier
 */
export default function preloadPlugin() {
  return {
    name: 'vite-plugin-preload',
    transformIndexHtml(html, { bundle }) {
      if (!bundle) return html

      const preloadLinks = []

      // Find critical CSS files
      const cssFiles = Object.keys(bundle).filter(
        (file) => file.endsWith('.css') && bundle[file].type === 'asset'
      )

      // Find hero poster image for LCP optimization
      const posterImage = Object.keys(bundle).find(
        (file) => file.includes('video-poster') && bundle[file].type === 'asset'
      )

      // Find main JS chunks (vendor chunks and main entry)
      const jsFiles = Object.keys(bundle).filter(
        (file) =>
          file.endsWith('.js') &&
          (file.includes('vendor-react') ||
            file.includes('vendor-i18n') ||
            file.includes('index-'))
      )

      // Add preload for hero poster image (highest priority for LCP)
      if (posterImage) {
        preloadLinks.push({
          tag: 'link',
          attrs: {
            rel: 'preload',
            href: `/${posterImage}`,
            as: 'image',
            fetchpriority: 'high',
          },
          injectTo: 'head-prepend',
        })
      }

      // Add preload for CSS
      cssFiles.forEach((file) => {
        preloadLinks.push({
          tag: 'link',
          attrs: {
            rel: 'preload',
            href: `/${file}`,
            as: 'style',
          },
          injectTo: 'head-prepend',
        })
      })

      // Add preload for critical JS
      jsFiles.forEach((file) => {
        preloadLinks.push({
          tag: 'link',
          attrs: {
            rel: 'modulepreload',
            href: `/${file}`,
          },
          injectTo: 'head-prepend',
        })
      })

      return preloadLinks
    },
  }
}
