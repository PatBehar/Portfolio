# Marco Behar Portfolio

Static, dependency-light portfolio for Marco Behar: a senior operations leader building AI-enabled products, systems, and workflows around real business problems.

## Run locally

From the project root:

```bash
python3 -m http.server 4173 --directory portfolio-local
```

Open [http://127.0.0.1:4173/](http://127.0.0.1:4173/).

## Structure

- `index.html` — semantic page structure and accessible QuantChaos modal.
- `styles.css` — Canva-derived visual system and responsive composition.
- `content.js` — structured `content.en` / `content.es` copy objects.
- `script.js` — language switching, rendered lists, navigation, game activation, and mobile modal behavior.
- `assets/` — the production images used by the portfolio.

## Scope

The site is a static HTML/CSS/vanilla JavaScript experience. QuantChaos remains isolated inside an iframe and is only referenced through its public URL. No build step or package installation is required.
