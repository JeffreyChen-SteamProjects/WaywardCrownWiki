# Wayward Crown Wiki

The wiki of **Wayward Crown**, a kingdom game in which the heroes decide for themselves and the crown
steers them with bounties, buildings and gold.

**Read it here: <https://jeffreychen-steamprojects.github.io/WaywardCrownWiki/>**

It is written in fifteen languages. Each has its own front page:

| Language | Address |
|---|---|
| English | <https://jeffreychen-steamprojects.github.io/WaywardCrownWiki/> |
| 繁體中文 | <https://jeffreychen-steamprojects.github.io/WaywardCrownWiki/zh_TW/> |
| 简体中文 | <https://jeffreychen-steamprojects.github.io/WaywardCrownWiki/zh_CN/> |
| 日本語 | <https://jeffreychen-steamprojects.github.io/WaywardCrownWiki/ja/> |
| 한국어 | <https://jeffreychen-steamprojects.github.io/WaywardCrownWiki/ko/> |
| Deutsch | <https://jeffreychen-steamprojects.github.io/WaywardCrownWiki/de/> |
| Français | <https://jeffreychen-steamprojects.github.io/WaywardCrownWiki/fr/> |
| Español | <https://jeffreychen-steamprojects.github.io/WaywardCrownWiki/es/> |
| Italiano | <https://jeffreychen-steamprojects.github.io/WaywardCrownWiki/it/> |
| Português (Brasil) | <https://jeffreychen-steamprojects.github.io/WaywardCrownWiki/pt_BR/> |
| Русский | <https://jeffreychen-steamprojects.github.io/WaywardCrownWiki/ru/> |
| Polski | <https://jeffreychen-steamprojects.github.io/WaywardCrownWiki/pl/> |
| Türkçe | <https://jeffreychen-steamprojects.github.io/WaywardCrownWiki/tr/> |
| ไทย | <https://jeffreychen-steamprojects.github.io/WaywardCrownWiki/th/> |
| Tiếng Việt | <https://jeffreychen-steamprojects.github.io/WaywardCrownWiki/vi/> |

## How this repository works

- `docs/` holds the pages as Markdown: English at its root, one folder for each other language.
- `wiki/` builds them into a site with [Starlight](https://starlight.astro.build/); `npm ci` then
  `npm run build` in that folder writes the site into `site/`.
- Every push to `main` builds the site and publishes it (`.github/workflows/pages.yml`).

The pages are written alongside the game and sent here from the game's own repository, so a change
made in this repository is replaced by the next edition. Found a mistake? Please open an issue.
