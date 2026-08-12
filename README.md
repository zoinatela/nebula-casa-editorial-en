# Nébula Casa Editorial — International (EN)

Public **English** sales storefront for the **Life in Order** collection (international). Separate from Brazilian Hotmart and Kiwify shops.

| Channel | Repo / folder | Site |
|---------|---------------|------|
| **Hotmart BR** | `nebula-casa-editorial-loja` · `loja/` | https://zoinatela.github.io/nebula-casa-editorial-loja/ |
| **Kiwify BR** | `nebula-casa-editorial-kiwify` · `loja-kiwify/` | https://zoinatela.github.io/nebula-casa-editorial-kiwify/ |
| **International EN** | `nebula-casa-editorial-en` · `loja-en/` | https://zoinatela.github.io/nebula-casa-editorial-en/ |

Do not mix CTAs: here every buy button uses `#paste-intl-checkout` until you paste Gumroad, Hotmart International, Stripe, or similar.

## Purpose

- English marketing site for volume pricing abroad
- Distinct visual (ocean ink + soft gold) from BR cream/teal and Kiwify dark mint
- Brand stays **Nébula Casa Editorial** / seal **NÉBULA** / collection **Life in Order**
- Covers + marketing only on Pages — sold PDFs stay off public Pages

## Structure

```
loja-en/   (also repo root on GitHub Pages)
  index.html
  money-in-control.html
  extra-digital-income.html
  body-and-mind-at-home.html
  conversation-that-connects.html
  kit-life-in-order.html          → 4 ebooks (NO spreadsheet)
  spreadsheet-control-pack.html
  css/intl.css
  js/intl.js
  img/                            → covers (marketing)
  products/                       → EN stubs (title, blurb, translation notes)
  README.md
```

## Provisional USD prices

| Product | Price |
|---------|-------|
| Ebooks 01–04 | **$4.99** |
| Kit Life in Order (4 volumes, no spreadsheet) | **$9.99** |
| Spreadsheet + Guide pack | **$7.99** |

These are **provisional** placeholders for volume strategy. Update when checkout and localization are final.

## How to paste checkout links

1. On each product page, find:

```html
<script>
  window.NEBULA_CHECKOUT_INTL = {
    "01": "#paste-intl-checkout"
  };
</script>
```

2. Replace `#paste-intl-checkout` with the real URL on **all** `.btn` links for that product (hero, final CTA, sticky) — search for `data-product="XX"`.

### Current placeholders

| Product | Page | Placeholder |
|---------|------|-------------|
| 01 Money in Control | `money-in-control.html` | `#paste-intl-checkout` |
| 02 Extra Digital Income | `extra-digital-income.html` | `#paste-intl-checkout` |
| 03 Body & Mind at Home | `body-and-mind-at-home.html` | `#paste-intl-checkout` |
| 04 Conversation that Connects | `conversation-that-connects.html` | `#paste-intl-checkout` |
| Kit | `kit-life-in-order.html` | `#paste-intl-checkout` |
| 06 Spreadsheet + Guide | `spreadsheet-control-pack.html` | `#paste-intl-checkout` |

## Product content stubs

See [`products/`](products/). Full ebook HTML/PDF translation is **next phase**. Portuguese sources: parent monorepo `kit-vida-em-ordem/ebooks/`.

## Design

Ocean ink + soft gold · Fraunces + Sora · full-bleed hero · editorial catalog list.

- Colors: ink `#0a121c` · paper `#eae4d6` · gold `#c9a96a`
- Faceless · NÉBULA seal · Life in Order collection

## Deploy (GitHub Pages)

Repo: `zoinatela/nebula-casa-editorial-en`

1. Publish the contents of `loja-en/` at the **repo root**.
2. Settings → Pages → Source: branch `main` / root (`/`).
3. URL: https://zoinatela.github.io/nebula-casa-editorial-en/

## Next steps (ebook translation)

1. Translate volumes 01–04 HTML/PDF from `kit-vida-em-ordem/ebooks/`.
2. Localize spreadsheet labels + guide for the pack.
3. Paste live international checkout URLs.
4. Confirm final USD prices and currency display.
5. Optional: EN cover variants if PT covers are not preferred abroad.
