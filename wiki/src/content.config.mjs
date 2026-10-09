// The wiki's pages stay in the repository's docs/ folder (English at its root, one folder per
// other language); docs/updates/ is the project's work log and is not part of the site, and neither
// are the project's own design documents that happen to live under docs/ (../internal-pages.json:
// they are not built here and tools/publish_wiki.py does not send them to the wiki's repository).
// Entry ids keep the file path as written, so locale folders such as zh_TW and pt_BR keep
// their case in the URLs.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

import internalPages from '../internal-pages.json';

export const collections = {
  docs: defineCollection({
    loader: glob({
      base: '../docs', // relative to the wiki folder (the Astro root)
      pattern: ['**/*.md', '!updates/**', ...internalPages.map((page) => `!${page}`)],
      // A language's home page (zh_TW/index.md) is the entry zh_TW, as Starlight expects.
      generateId: ({ entry }) => entry.replace(/\.md$/, '').replace(/\/index$/, ''),
    }),
    schema: docsSchema(),
  }),
};
