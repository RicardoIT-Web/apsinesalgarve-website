import { useState } from "react";
import { useContent, useLang } from "../i18n.jsx";

// No PHP: the form posts JSON to a serverless endpoint or form service set in
// VITE_FORM_ENDPOINT (see README). Without it, the form shows a preview only.
const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT;

const EMPTY = { email: "", to: "", subject: "", msg: "", ok: false };

function validate(f, t) {
  const e = {};
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.email)) e.email = t("Indique um email válido, por exemplo nome@empresa.pt.", "Enter a valid email, for example name@company.com.");
  if (!f.to) e.to = t("Escolha o departamento.", "Choose the department.");
  if (!f.subject.trim()) e.subject = t("Escreva o assunto.", "Enter a subject.");
  if (f.msg.trim().length < 10) e.msg = t("Escreva a mensagem (pelo menos 10 caracteres).", "Write your message (at least 10 characters).");
  if (!f.ok) e.ok = t("Assinale “Consinto” para podermos responder.", "Tick “I consent” so we can reply.");
  return e;
}

export default function ContactForm() {
  const { RECIPIENTS } = useContent();
  const { lang, t } = useLang();
  const [f, setF] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | preview | failed

  const set = k => e => setF({ ...f, [k]: e.target.type === "checkbox" ? e.target.checked : e.target.value });

  const submit = async e => {
    e.preventDefault();
    const found = validate(f, t);
    setErrors(found);
    if (Object.keys(found).length) return;
    if (!ENDPOINT) { setStatus("preview"); return; }
    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email: f.email, destinatario: f.to, assunto: f.subject, mensagem: f.msg, consentimento: f.ok, idioma: lang })
      });
      setStatus(res.ok ? "sent" : "failed");
    } catch {
      setStatus("failed");
    }
  };

  if (status === "sent" || status === "preview") {
    return (
      <div className="tile">
        <span className="mono muted">{status === "sent" ? t("Enviado", "Sent") : t("Pré-visualização", "Preview")}</span>
        <h3>{status === "sent" ? t(`Mensagem enviada para “${f.to}”`, `Message sent to “${f.to}”`) : t(`Mensagem pronta para “${f.to}”`, `Message ready for “${f.to}”`)}</h3>
        <p className="muted">{status === "sent" ? t("Obrigado. Vamos responder para ", "Thank you. We will reply to ") + f.email + "." : t("O envio ainda não está configurado (VITE_FORM_ENDPOINT), por isso nada foi enviado.", "Sending is not set up yet (VITE_FORM_ENDPOINT), so nothing was sent.")}</p>
        <div><button type="button" className="btn btn-ghost" onClick={() => { setF(EMPTY); setStatus("idle"); }}>{t("Nova mensagem", "New message")}</button></div>
      </div>
    );
  }

  return (
    <form className="tile form" id="formulario" onSubmit={submit} noValidate>
      <h3>{t("Envie-nos uma mensagem", "Send us a message")}</h3>
      <div className="frow">
        <div className="field">
          <label htmlFor="c-email">Email</label>
          <input id="c-email" type="email" autoComplete="email" value={f.email} onChange={set("email")} placeholder={t("nome@empresa.pt", "name@company.com")} />
          {errors.email && <span className="err">{errors.email}</span>}
        </div>
        <div className="field">
          <label htmlFor="c-to">{t("Destinatário", "Department")}</label>
          <select id="c-to" value={f.to} onChange={set("to")}>
            <option value="">{t("Escolha o destinatário", "Choose a department")}</option>
            {RECIPIENTS.map(r => <option key={r}>{r}</option>)}
          </select>
          {errors.to && <span className="err">{errors.to}</span>}
        </div>
      </div>
      <div className="field">
        <label htmlFor="c-subject">{t("Assunto", "Subject")}</label>
        <input id="c-subject" value={f.subject} onChange={set("subject")} />
        {errors.subject && <span className="err">{errors.subject}</span>}
      </div>
      <div className="field">
        <label htmlFor="c-msg">{t("Mensagem", "Message")}</label>
        <textarea id="c-msg" rows="5" value={f.msg} onChange={set("msg")} />
        {errors.msg && <span className="err">{errors.msg}</span>}
      </div>
      <label className="consent" htmlFor="c-ok">
        <input id="c-ok" type="checkbox" checked={f.ok} onChange={set("ok")} />
        <span>{t(<><b style={{ color: "var(--ink)" }}>Consinto</b> a recolha e tratamento dos meus dados pessoais para resposta a este pedido. A APS não trata nem fornece dados para efeitos de marketing ou publicidade.</>, <><b style={{ color: "var(--ink)" }}>I consent</b> to the collection and processing of my personal data to answer this request. APS does not process or share data for marketing or advertising.</>)}</span>
      </label>
      {errors.ok && <span className="err">{errors.ok}</span>}
      {status === "failed" && <span className="err">{t("Não foi possível enviar. Tente novamente ou escreva para geral@apsinesalgarve.pt.", "The message could not be sent. Try again or write to geral@apsinesalgarve.pt.")}</span>}
      <div><button className="btn btn-primary" type="submit" disabled={status === "sending"}>{status === "sending" ? t("A enviar…", "Sending…") : t("Enviar mensagem", "Send message")}</button></div>
    </form>
  );
}
