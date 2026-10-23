import { useState } from "react";
import { useLang } from "../i18n.jsx";

export default function Copy({ value }) {
  const { t } = useLang();
  const [done, setDone] = useState(false);
  const onClick = () => {
    const ok = () => { setDone(true); setTimeout(() => setDone(false), 1400); };
    try { navigator.clipboard.writeText(value).then(ok, ok); } catch { ok(); }
  };
  return <button type="button" className="copy" onClick={onClick}>{done ? t("Copiado", "Copied") : t("Copiar", "Copy")}</button>;
}
