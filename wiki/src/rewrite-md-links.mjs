// Relative links between wiki pages are written as the Markdown files they point at
// (`../systems/combat.md#damage`), so they also work when browsing docs/ on GitHub. This Sätteri
// plugin turns each one into the page's URL on the built site (`/systems/combat/#damage`, after the
// site's base path when it is served under one); links that are not to a `.md` file, or pages
// outside the docs folder, are left alone.
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const MD_LINK = /^([^:#?]+\.md)(#.*)?$/;

/** Site path for `target` (a docs-relative `.md` path) under `base`: `gameplay/index.md` becomes `/gameplay/`. */
export function pageUrl(target, base = '') {
  const slug = target.replace(/\.md$/, '').replace(/(^|\/)index$/, '');
  const root = base.replace(/\/+$/, '');
  return slug ? `${root}/${slug}/` : `${root}/`;
}

/**
 * A Sätteri mdast plugin factory that rewrites `.md` links in the pages under `docsDir`; `base` is
 * the path the site is served under (`/WaywardCrownWiki`), empty for a site at its host's root.
 */
export default function rewriteMdLinks(docsDir, base = '') {
  const root = path.resolve(docsDir);
  return ({ fileURL }) => {
    const file = fileURL && path.resolve(fileURLToPath(fileURL));
    if (!file || !file.startsWith(root + path.sep)) return undefined;
    const from = path.dirname(file);
    return {
      name: 'rewrite-md-links',
      link(node) {
        const match = MD_LINK.exec(node.url);
        if (!match) return undefined;
        const target = path.relative(root, path.resolve(from, match[1])).split(path.sep).join('/');
        return { ...node, url: pageUrl(target, base) + (match[2] ?? '') };
      },
    };
  };
}
