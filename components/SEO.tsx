import { useEffect } from 'react';
import { siteConfig } from '../data/seo';
import type { SEOData } from '../data/seo';

interface SEOProps extends SEOData {
  jsonLd?: Record<string, unknown>[];
}

export default function SEO({ title, description, ogTitle, ogDescription, canonical, jsonLd }: SEOProps) {
  useEffect(() => {
    document.title = title;
    setMeta('description', description);

    if (ogTitle) setMeta('og:title', ogTitle, 'property');
    if (ogDescription) setMeta('og:description', ogDescription, 'property');
    setMeta('og:image', siteConfig.defaultOgImage, 'property');
    setMeta('og:url', siteConfig.siteUrl + (canonical || '/'), 'property');
    setMeta('og:type', 'website', 'property');
    setMeta('og:site_name', siteConfig.name, 'property');

    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', ogTitle || title);
    setMeta('twitter:description', ogDescription || description);
    setMeta('twitter:image', siteConfig.defaultOgImage);
    setMeta('twitter:site', siteConfig.twitterHandle);

    if (canonical) {
      setCanonical(siteConfig.siteUrl + canonical);
    }

    if (jsonLd && jsonLd.length > 0) {
      injectJsonLd(jsonLd);
    }
  }, [title, description, ogTitle, ogDescription, canonical, jsonLd]);

  return null;
}

function setMeta(name: string, content: string, attr: 'name' | 'property' = 'name') {
  const selector = attr === 'property' ? `meta[property="${name}"]` : `meta[name="${name}"]`;
  let el = document.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(url: string) {
  let el = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', url);
}

function injectJsonLd(data: Record<string, unknown>[]) {
  document.querySelectorAll('script[type="application/ld+json"]').forEach(el => el.remove());
  data.forEach(item => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(item);
    document.head.appendChild(script);
  });
}
