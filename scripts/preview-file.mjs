// Builds the whole site into one self-contained HTML file (preview/site.html) for
// sharing a draft: hash-based routing, with the CSS, JS and public/ images inlined.
import { execSync } from "node:child_process";
import { mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUT = "dist-preview";
execSync(`npx vite build --outDir ${OUT} --emptyOutDir`, { stdio: "inherit", env: { ...process.env, VITE_HASH_ROUTER: "1", BASE_PATH: "./" } });

const MIME = { png: "image/png", jpg: "image/jpeg", jpeg: "image/jpeg", svg: "image/svg+xml", webp: "image/webp" };
const assets = {};
for (const dir of ["brand", "gallery"]) {
  for (const f of readdirSync(join("public", dir))) {
    const type = MIME[f.split(".").pop().toLowerCase()];
    if (type) assets[`${dir}/${f}`] = `data:${type};base64,${readFileSync(join("public", dir, f)).toString("base64")}`;
  }
}

let html = readFileSync(join(OUT, "index.html"), "utf8");
const inline = (re, wrap) => { html = html.replace(re, (_, src) => wrap(readFileSync(join(OUT, src), "utf8"))); };
inline(/<link rel="stylesheet"[^>]*href="\.\/([^"]+)"[^>]*>/g, css => `<style>${css}</style>`);
inline(/<script type="module"[^>]*src="\.\/([^"]+)"[^>]*><\/script>/g, js => `<script type="module">${js.replace(/<\/script/gi, "<\\/script")}</script>`);
html = html.replace(/<link rel="icon"[^>]*>/, `<link rel="icon" href="${assets["brand/emblem.png"]}">`);
html = html.replace("<head>", `<head><script>window.__ASSETS=${JSON.stringify(assets)}</script>`);

mkdirSync("preview", { recursive: true });
writeFileSync("preview/site.html", html);
console.log(`preview/site.html · ${(html.length / 1024 / 1024).toFixed(1)} MB`);
