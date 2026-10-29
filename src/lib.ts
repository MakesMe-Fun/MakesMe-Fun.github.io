import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from './data/site';

export type Post = CollectionEntry<'blog'>;

export const slugOf = (p: Post) => p.id.split('/').slice(1).join('/');

export async function getPosts(lang: Lang) {
  const all = await getCollection('blog', (p) => p.id.startsWith(`${lang}/`) && !p.data.draft);
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
