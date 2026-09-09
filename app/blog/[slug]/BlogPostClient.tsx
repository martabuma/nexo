"use client";

import { useState } from "react";
import { Post, Lang } from "../posts";

const dict: Record<Lang, { backBlog: string; readingSuffix: string; cta: string }> = {
  es: { backBlog: "← Blog", readingSuffix: "de lectura", cta: "Habla con nosotros sobre tu proyecto" },
  pt: { backBlog: "← Blog", readingSuffix: "de leitura", cta: "Fale conosco sobre o seu projeto" },
  en: { backBlog: "← Blog", readingSuffix: "read", cta: "Talk to us about your project" },
};

const langLabel: Record<Lang, string> = { es: "ES", pt: "PT", en: "EN" };

export default function BlogPostClient({ post }: { post: Post }) {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const l = params.get("lang");
      if (l === "es" || l === "pt" || l === "en") return l;
    }
    return "es";
  });
  const t = dict[lang];

  return (
    <main className="min-h-screen">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/90 px-5 py-4 backdrop-blur">
        <div className="mx-auto flex max-w-2xl items-center justify-between">
          <a href="/" className="leading-tight">
            <span className="block font-display text-lg font-bold tracking-tight text-textlight">
              Nexo<span className="text-ouro">.</span>
            </span>
            <span className="block font-mono text-[9px] uppercase tracking-[0.18em] text-textlight/50">
              Market Entry
            </span>
          </a>
          <div className="flex items-center gap-3">
            <a href={`/blog?lang=${lang}`} className="font-mono text-xs text-textlight/70 hover:text-textlight">
              {t.backBlog}
            </a>
            <div className="flex items-center gap-1 rounded-full border border-white/15 p-1 font-mono text-xs">
              {(Object.keys(dict) as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  aria-pressed={lang === l}
                  className={`rounded-full px-2.5 py-1 transition-colors ${
                    lang === l ? "bg-ouro text-inkdeep" : "text-textlight/60 hover:text-textlight"
                  }`}
                >
                  {langLabel[l]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      <article className="px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest text-textlight/45">
            <span>{post.date[lang]}</span>
            <span>·</span>
            <span>
              {post.readTime[lang]} {t.readingSuffix}
            </span>
          </div>
          <h1 className="mt-3 font-display text-2xl font-bold leading-snug text-textlight sm:text-4xl">
            {post.title[lang]}
          </h1>

          <div className="mt-8 space-y-5">
            {post.content[lang].map((paragraph, i) => (
              <p key={i} className="font-body text-[15px] leading-relaxed text-textlight/80">
                {paragraph}
              </p>
            ))}
          </div>

          <a
            href={`/#contacto`}
            className="mt-10 inline-block rounded-full bg-ouro px-6 py-3 font-body text-sm font-semibold text-inkdeep"
          >
            {t.cta}
          </a>
        </div>
      </article>

      <footer className="border-t border-white/10 px-5 py-8">
        <div className="mx-auto max-w-2xl text-center font-mono text-[11px] text-textlight/40">
          © {new Date().getFullYear()} Nexo Market Entry.
        </div>
      </footer>
    </main>
  );
}
