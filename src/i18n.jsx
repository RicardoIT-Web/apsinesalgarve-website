import { Link as RouterLink, NavLink as RouterNavLink, Navigate as RouterNavigate, useLocation, useNavigate } from "react-router-dom";
import * as PT from "./data/content.js";
import * as EN from "./data/content.en.js";

// The site is Portuguese at "/" and English under "/en". The language comes from the URL,
// so every page has a shareable address in both languages.
const isEn = pathname => pathname === "/en" || pathname.startsWith("/en/");

// Path without the language prefix, e.g. "/en/portos/faro" → "/portos/faro".
export const basePath = pathname => (isEn(pathname) ? pathname.slice(3) || "/" : pathname);

export function useLang() {
  const { pathname } = useLocation();
  const lang = isEn(pathname) ? "en" : "pt";
  const to = path => (lang === "en" && path.startsWith("/") ? (path === "/" ? "/en" : "/en" + path) : path);
  return { lang, t: (pt, en) => (lang === "en" ? en : pt), to, path: basePath(pathname) };
}

// Site content in the current language.
export function useContent() {
  return useLang().lang === "en" ? EN : PT;
}

// Drop-in replacements for the router components that keep the current language.
export function Link({ to, ...props }) {
  return <RouterLink to={useLang().to(to)} {...props} />;
}
export function NavLink({ to, ...props }) {
  return <RouterNavLink to={useLang().to(to)} {...props} />;
}
export function Navigate({ to, ...props }) {
  return <RouterNavigate to={useLang().to(to)} {...props} />;
}
export function useLangNavigate() {
  const navigate = useNavigate();
  const { to } = useLang();
  return path => navigate(to(path));
}
