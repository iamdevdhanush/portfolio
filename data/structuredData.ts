import { siteConfig } from './seo';
import type { Project } from '../types';

export function personId() {
  return siteConfig.siteUrl + '/#person';
}

export function websiteId() {
  return siteConfig.siteUrl + '/#website';
}

export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': personId(),
    name: 'Dhanush D Prabhu',
    givenName: 'Dhanush',
    familyName: 'Prabhu',
    jobTitle: 'AI Engineer & Software Developer',
    description: 'AI engineer and software developer building intelligent systems with Python, FastAPI, PostgreSQL, Docker, and modern web technologies.',
    url: siteConfig.siteUrl + '/',
    image: 'https://avatars.githubusercontent.com/u/169132950?v=4',
    sameAs: [
      'https://github.com/iamdevdhanush',
      'https://www.linkedin.com/in/dhanushdprabhu/',
    ],
    knowsAbout: ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'React', 'TypeScript', 'AI Systems'],
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': websiteId(),
    name: siteConfig.name,
    url: siteConfig.siteUrl + '/',
    description: 'Portfolio of Dhanush D Prabhu — AI Engineer & Software Developer',
    author: {
      '@type': 'Person',
      '@id': personId(),
      name: 'Dhanush D Prabhu',
    },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : siteConfig.siteUrl + item.url,
    })),
  };
}

export function projectSchema(project: Project) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': siteConfig.siteUrl + '/project/' + project.slug,
    name: project.title,
    description: project.description,
    url: siteConfig.siteUrl + '/project/' + project.slug,
    applicationCategory: 'AIApplication',
    operatingSystem: 'Web',
    author: { '@type': 'Person', '@id': personId(), name: 'Dhanush D Prabhu' },
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  };
}
