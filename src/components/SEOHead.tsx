import { useEffect } from 'react';
import faviconImage from 'figma:asset/d1c583c5e7039a32b3d3593a87b00512db731b6a.png';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  themeColor?: string;
}

export function SEOHead({
  title = 'إنكود - تطوير الأعمال من خلال الذكاء الاصطناعي | Encode',
  description = 'شركة إنكود متخصصة في تطوير الأعمال باستخدام الذكاء الاصطناعي. نقدم حلول تقنية مبتكرة تساعد الشركات على النمو والتطور.',
  keywords = 'إنكود، Encode، الذكاء الاصطناعي، تطوير الأعمال، تقنية، برمجة، مواقع، تطبيقات، السعودية',
  themeColor = '#e79a63'
}: SEOHeadProps = {}) {
  useEffect(() => {
    // Set page title
    document.title = title;

    // Create or update meta tags
    const metaTags = [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { name: 'theme-color', content: themeColor },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'author', content: 'Encode - إنكود' },
      { name: 'robots', content: 'index, follow' },
      { name: 'language', content: 'ar' },
      
      // Open Graph
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: faviconImage },
      { property: 'og:site_name', content: 'Encode - إنكود' },
      { property: 'og:locale', content: 'ar_SA' },
      
      // Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: faviconImage },
    ];

    metaTags.forEach(({ name, property, content }) => {
      const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
      let metaTag = document.querySelector(selector);
      
      if (!metaTag) {
        metaTag = document.createElement('meta');
        if (name) metaTag.setAttribute('name', name);
        if (property) metaTag.setAttribute('property', property);
        document.head.appendChild(metaTag);
      }
      
      metaTag.setAttribute('content', content);
    });

    // Setup favicon with multiple sizes
    const setupFavicon = () => {
      // Remove existing favicons
      const existingFavicons = document.querySelectorAll('link[rel*="icon"], link[rel="apple-touch-icon"]');
      existingFavicons.forEach(favicon => favicon.remove());

      // Favicon sizes
      const faviconSizes = [16, 32, 48, 64, 96, 128, 192, 256, 512];
      
      // Standard favicons
      faviconSizes.forEach(size => {
        const link = document.createElement('link');
        link.rel = 'icon';
        link.type = 'image/png';
        link.sizes = `${size}x${size}`;
        link.href = faviconImage;
        document.head.appendChild(link);
      });

      // Apple touch icon
      const appleIcon = document.createElement('link');
      appleIcon.rel = 'apple-touch-icon';
      appleIcon.sizes = '180x180';
      appleIcon.href = faviconImage;
      document.head.appendChild(appleIcon);

      // Add shortcut icon fallback
      const shortcutIcon = document.createElement('link');
      shortcutIcon.rel = 'shortcut icon';
      shortcutIcon.href = faviconImage;
      document.head.appendChild(shortcutIcon);
    };

    setupFavicon();

    // Web App Manifest
    const setupManifest = () => {
      let manifestLink = document.querySelector('link[rel="manifest"]');
      if (manifestLink) {
        manifestLink.remove();
      }

      const manifest = {
        name: 'إنكود - Encode',
        short_name: 'Encode',
        description: description,
        start_url: '/',
        display: 'standalone',
        background_color: '#00203f',
        theme_color: themeColor,
        orientation: 'portrait-primary',
        icons: [
          {
            src: faviconImage,
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: faviconImage,
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      };

      const manifestBlob = new Blob([JSON.stringify(manifest)], { type: 'application/json' });
      const manifestUrl = URL.createObjectURL(manifestBlob);

      const link = document.createElement('link');
      link.rel = 'manifest';
      link.href = manifestUrl;
      document.head.appendChild(link);
    };

    setupManifest();

  }, [title, description, keywords, themeColor]);

  return null; // This component doesn't render anything
}