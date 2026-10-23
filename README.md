# Portos de Sines e do Algarve — novo website

A new, modern version of [www.apsinesalgarve.pt](https://www.apsinesalgarve.pt), the website of
APS - Administração dos Portos de Sines e do Algarve, S.A.

Built with **React 18 + Vite** and React Router. There is no PHP anywhere: the build output is a
static site (`dist/`) that can be hosted on any static host or CDN.

## Run it

```bash
npm install
npm run dev       # local dev server at http://localhost:5173
npm run build     # production build into dist/
npm run preview   # serve the production build locally
```

## Structure

```
src/
  data/content.js   all site text: ports, news, contacts, departments (from the current site)
  components/       navigation, footer, search (⌘K), logo, animated sea, contact form
  pages/            one file per page
  styles.css        design tokens (APS gold/orange palette, light and dark) and layout
public/brand/       logo files
```

Pages: `/`, `/aps`, `/aps/governo`, `/portos`, `/portos/sines|faro|portimao`, `/estatisticas`,
`/sistemas`, `/noticias`, `/contactos`, `/contactos/visitas`, `/recrutamento`.

## Deployment (GitHub Pages)

`.github/workflows/deploy.yml` builds the site and publishes it to GitHub Pages on every push to
`main` (it can also be run by hand from the Actions tab). One-time setup: in the repository go to
**Settings → Pages** and set **Source** to **GitHub Actions**.

The site is then served at `https://ricardoit-web.github.io/apsinesalgarve-website/`. The
workflow reads the base path from Pages, so after adding a custom domain (e.g.
`www.apsinesalgarve.pt`) in the same settings page the next deploy serves from `/` with no code
change.

## Before going live

- **Logo files.** `public/brand/*.png` were cut from a screenshot of the current site, so they are
  low resolution. Replace them with the official files from the *Manual de Normas Gráficas*
  (same file names), ideally SVG or transparent PNG.
- **Contact form.** Set `VITE_FORM_ENDPOINT` to a serverless function or form service that
  accepts a JSON `POST` (`email`, `destinatario`, `assunto`, `mensagem`, `consentimento`) and
  routes it to the chosen department. Without it the form only shows a preview.
- **Routing on the host.** The site uses real URLs, so the host must serve `index.html` for
  unknown paths. On GitHub Pages the workflow copies it to `404.html`; `public/_redirects` does
  the same on Netlify and Cloudflare Pages.
- **Photos.** The design has no photography yet; the port and news cards are ready to take
  images from the APS photo library.
- Links to documents (reports, PDFs, governance pages) still point to the current site.
