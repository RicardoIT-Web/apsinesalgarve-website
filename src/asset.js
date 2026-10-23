// Path to a file in public/, respecting the base path the site is served from
// (e.g. /apsinesalgarve-website/ on GitHub Pages). The single-file preview
// (npm run preview:file) embeds the files and lists them in window.__ASSETS.
export const asset = path => (typeof window !== "undefined" && window.__ASSETS?.[path]) || import.meta.env.BASE_URL + path;
