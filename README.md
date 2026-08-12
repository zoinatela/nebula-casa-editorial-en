# Nébula Casa Editorial — Hotmart EN (International)

**Platform:** Hotmart International (English)  
**Live:** https://zoinatela.github.io/nebula-casa-editorial-en/  
**Repo:** https://github.com/zoinatela/nebula-casa-editorial-en

This is the **English Hotmart-pattern** storefront. Do **not** confuse it with:

| Surface | Repo / folder | Market |
|---------|---------------|--------|
| BR Hotmart | 
ebula-casa-editorial-loja · monorepo loja/ | Brazil BRL |
| BR Kiwify | 
ebula-casa-editorial-kiwify · monorepo loja-kiwify/ | Brazil BRL |
| **EN Hotmart (this)** | 
ebula-casa-editorial-en | International USD |
| EN Kiwify | 
ebula-casa-editorial-en-kiwify | International USD |

## Structure (mirrors BR Hotmart loja/)

```
index.html
money-in-control.html
extra-digital-income.html
body-and-mind-at-home.html
conversation-that-connects.html
kit.html
spreadsheet-control-pack.html
css/loja.css
js/loja.js
img/
README.md
```

## Provisional USD prices

| Product | Price |
|---------|-------|
| Ebooks 01–04 | $4.99 |
| Kit Life in Order (4 ebooks only) | $9.99 |
| Spreadsheet + Guide pack | $7.99 |

## Checkout placeholders

All CTAs use ` #paste-hotmart-intl-checkout ` and:

```html
window.NEBULA_CHECKOUT_HOTMART_INTL = { "01": "#paste-hotmart-intl-checkout" };
```

Replace in **every** .btn-cta on that product page (hero, final CTA, sticky). Do **not** paste Kiwify or Brazil Hotmart links here.

## Design

Same Hotmart BR visual system: Fraunces + Source Sans 3, teal/cream product grid, cream catalog sections.

## Disclaimers

Educational personal-organization content. Not financial, legal, medical, or therapeutic advice. Results vary.