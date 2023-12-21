import { allPosts } from 'contentlayer/generated';
import { MetadataRoute } from 'next';
import { allPrototypes } from './lib/prototypes';

function formatDate(date: Date) {
  return date.toISOString().split('T')[0];
}

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = allPosts.map(({ slug }) => ({
    url: `https://pink.codes/writing/${slug}`,
    lastModified: formatDate(new Date())
  }));

  const prototypes = allPrototypes.map(({ slug }) => ({
    url: `https://pink.codes/craft${slug}`,
    lastModified: formatDate(new Date())
  }));

  const routes = ['', '/now', '/writing', '/craft'].map((route) => ({
    url: `https://pink.codes${route}`,
    lastModified: formatDate(new Date())
  }));

  return [...routes, ...posts, ...prototypes];
}
