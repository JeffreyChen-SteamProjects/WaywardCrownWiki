// Builds the Wayward Crown wiki: the Markdown pages in ../docs, 15 languages, into ../site.
// Run `npm ci` then `npm run build` in this folder.
//
// The wiki is published from its own public repository, which builds this very folder with GitHub
// Actions and serves the result with GitHub Pages (`py tools/publish_wiki.py` sends the pages and
// this folder there). A project site lives under the repository's name, so every address the build
// writes starts with BASE.
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { satteri } from '@astrojs/markdown-satteri';
import { fileURLToPath } from 'node:url';

import { locales, sidebar } from './navigation.mjs';
import rewriteMdLinks from './src/rewrite-md-links.mjs';

const DOCS_DIR = fileURLToPath(new URL('../docs/', import.meta.url));
// Where the wiki is served: https://jeffreychen-steamprojects.github.io/WaywardCrownWiki/
const SITE = 'https://jeffreychen-steamprojects.github.io';
const BASE = '/WaywardCrownWiki';

export default defineConfig({
  site: SITE,
  base: BASE,
  outDir: '../site',
  markdown: { processor: satteri({ mdastPlugins: [rewriteMdLinks(DOCS_DIR, BASE)] }) },
  integrations: [
    starlight({
      title: 'Wayward Crown — Wiki',
      description: 'Wayward Crown Game Wiki — Complete guides, system documentation & developer reference',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/JeffreyChen-SteamProjects/WaywardCrownWiki' },
      ],
      defaultLocale: 'root',
      locales,
      sidebar,
      customCss: ['./src/styles/theme.css'],
      // The pages live outside src/content/docs, so Starlight's asides and heading links need to be told.
      markdown: { processedDirs: [DOCS_DIR] },
    }),
  ],
});
