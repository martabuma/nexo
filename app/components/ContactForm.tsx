"use client";

import { useState, FormEvent } from "react";
import { WEB3FORMS_ACCESS_KEY } from "../lib/web3forms";

type FormLabels = {
  name: string;
  email: string;
  phone: string;
  message: string;
  messagePlaceholder: string;
  submit: string;
  sending: string;
  success: string;
  error: string;
};

export default function ContactForm({ lang, labels }: { lang: string; labels: FormLabels }) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "Novo contato: Nexo Market Entry");
    formData.append("from_name", "Nexo Market Entry (site)");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="mt-8 rounded-sm border border-visto/40 bg-visto/10 px-6 py-8">
        <p className="font-body text-sm text-textlight/90">{labels.success}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-4 text-left">
      <input type="hidden" name="language" value={lang} />

      <div>
        <label className="mb-1 block font-mono text-[11px] uppercase tracking-wide text-textlight/55">
          {labels.name}
        </label>
        <input
          type="text"
          name="name"
          required
          className="w-full rounded-sm border border-white/15 bg-white/5 px-4 py-2.5 font-body text-sm text-textlight outline-none focus:border-ouro/60"
        />
      </div>

      <div>
        <label className="mb-1 block font-mono text-[11px] uppercase tracking-wide text-textlight/55">
          {labels.email}
        </label>
        <input
          type="email"
          name="email"
          required
          className="w-full rounded-sm border border-white/15 bg-white/5 px-4 py-2.5 font-body text-sm text-textlight outline-none focus:border-ouro/60"
        />
      </div>

      <div>
        <label className="mb-1 block font-mono text-[11px] uppercase tracking-wide text-textlight/55">
          {labels.phone}
        </label>
        <input
          type="tel"
          name="phone"
          className="w-full rounded-sm border border-white/15 bg-white/5 px-4 py-2.5 font-body text-sm text-textlight outline-none focus:border-ouro/60"
        />
      </div>

      <div>
        <label className="mb-1 block font-mono text-[11px] uppercase tracking-wide text-textlight/55">
          {labels.message}
        </label>
        <textarea
          name="message"
          required
          rows={4}
          placeholder={labels.messagePlaceholder}
          className="w-full resize-none rounded-sm border border-white/15 bg-white/5 px-4 py-2.5 font-body text-sm text-textlight outline-none placeholder:text-textlight/30 focus:border-ouro/60"
        />
      </div>

      {status === "error" && <p className="font-body text-xs text-selo">{labels.error}</p>}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-ouro px-6 py-3 font-body text-sm font-semibold text-inkdeep transition-opacity hover:bg-ouro/90 disabled:opacity-60"
      >
        {status === "sending" ? labels.sending : labels.submit}
      </button>
    </form>
  );
}
