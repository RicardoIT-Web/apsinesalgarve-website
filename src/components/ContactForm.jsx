import { useState } from "react";
import { RECIPIENTS } from "../data/content.js";

// No PHP: the form posts JSON to a serverless endpoint or form service set in
// VITE_FORM_ENDPOINT (see README). Without it, the form shows a preview only.
const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT;

const EMPTY = { email: "", to: "", subject: "", msg: "", ok: false };

function validate(f) {
  const e = {};
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.email)) e.email = "Indique um email válido, por exemplo nome@empresa.pt.";
  if (!f.to) e.to = "Escolha o departamento.";
  if (!f.subject.trim()) e.subject = "Escreva o assunto.";
  if (f.msg.trim().length < 10) e.msg = "Escreva a mensagem (pelo menos 10 caracteres).";
  if (!f.ok) e.ok = "Assinale “Consinto” para podermos responder.";
  return e;
}

export default function ContactForm() {
  const [f, setF] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | preview | failed

  const set = k => e => setF({ ...f, [k]: e.target.type === "checkbox" ? e.target.checked : e.target.value });

  const submit = async e => {
    e.preventDefault();
    const found = validate(f);
    setErrors(found);
    if (Object.keys(found).length) return;
    if (!ENDPOINT) { setStatus("preview"); return; }
    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email: f.email, destinatario: f.to, assunto: f.subject, mensagem: f.msg, consentimento: f.ok })
      });
      setStatus(res.ok ? "sent" : "failed");
    } catch {
      setStatus("failed");
    }
  };

  if (status === "sent" || status === "preview") {
    return (
      <div className="tile">
        <span className="mono muted">{status === "sent" ? "Enviado" : "Pré-visualização"}</span>
        <h3>{status === "sent" ? `Mensagem enviada para “${f.to}”` : `Mensagem pronta para “${f.to}”`}</h3>
        <p className="muted">{status === "sent" ? "Obrigado. Vamos responder para " + f.email + "." : "O envio ainda não está configurado (VITE_FORM_ENDPOINT), por isso nada foi enviado."}</p>
        <div><button type="button" className="btn btn-ghost" onClick={() => { setF(EMPTY); setStatus("idle"); }}>Nova mensagem</button></div>
      </div>
    );
  }

  return (
    <form className="tile form" onSubmit={submit} noValidate>
      <h3>Envie-nos uma mensagem</h3>
      <div className="frow">
        <div className="field">
          <label htmlFor="c-email">Email</label>
          <input id="c-email" type="email" autoComplete="email" value={f.email} onChange={set("email")} placeholder="nome@empresa.pt" />
          {errors.email && <span className="err">{errors.email}</span>}
        </div>
        <div className="field">
          <label htmlFor="c-to">Destinatário</label>
          <select id="c-to" value={f.to} onChange={set("to")}>
            <option value="">Escolha o destinatário</option>
            {RECIPIENTS.map(r => <option key={r}>{r}</option>)}
          </select>
          {errors.to && <span className="err">{errors.to}</span>}
        </div>
      </div>
      <div className="field">
        <label htmlFor="c-subject">Assunto</label>
        <input id="c-subject" value={f.subject} onChange={set("subject")} />
        {errors.subject && <span className="err">{errors.subject}</span>}
      </div>
      <div className="field">
        <label htmlFor="c-msg">Mensagem</label>
        <textarea id="c-msg" rows="5" value={f.msg} onChange={set("msg")} />
        {errors.msg && <span className="err">{errors.msg}</span>}
      </div>
      <label className="consent" htmlFor="c-ok">
        <input id="c-ok" type="checkbox" checked={f.ok} onChange={set("ok")} />
        <span><b style={{ color: "var(--ink)" }}>Consinto</b> a recolha e tratamento dos meus dados pessoais para resposta a este pedido. A APS não trata nem fornece dados para efeitos de marketing ou publicidade.</span>
      </label>
      {errors.ok && <span className="err">{errors.ok}</span>}
      {status === "failed" && <span className="err">Não foi possível enviar. Tente novamente ou escreva para geral@apsinesalgarve.pt.</span>}
      <div><button className="btn btn-primary" type="submit" disabled={status === "sending"}>{status === "sending" ? "A enviar…" : "Enviar mensagem"}</button></div>
    </form>
  );
}
