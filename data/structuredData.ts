import { siteConfig } from './seo';
import type { Project } from '../types';

export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Dhanush D Prabhu',
    givenName: 'Dhanush',
    familyName: 'Prabhu',
    jobTitle: 'Backend Developer | AI Systems Builder',
    description: 'Backend developer and AI systems builder specializing in FastAPI, PostgreSQL, Docker, and distributed systems.',
    url: siteConfig.siteUrl,
    sameAs: [
      'https://github.com/iamdevdhanush',
      'https://www.linkedin.com/in/dhanushdprabhu/',
    ],
    knowsAbout: ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'React', 'TypeScript', 'AI Systems'],
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Bachelor of Computer Applications',
    },
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    description: 'Portfolio of Dhanush D Prabhu — Backend Developer & AI Systems Builder',
    author: {
      '@type': 'Person',
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
    name: project.title,
    description: project.description,
    url: siteConfig.siteUrl + '/project/' + project.slug,
    applicationCategory: 'AIApplication',
    operatingSystem: 'Web',
    author: { '@type': 'Person', name: 'Dhanush D Prabhu' },
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  };
}
