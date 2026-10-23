import { useState } from "react";

export default function Copy({ value, label = "Copiar" }) {
  const [text, setText] = useState(label);
  const onClick = () => {
    const done = () => { setText("Copiado"); setTimeout(() => setText(label), 1400); };
    try { navigator.clipboard.writeText(value).then(done, done); } catch { done(); }
  };
  return <button type="button" className="copy" onClick={onClick}>{text}</button>;
}
