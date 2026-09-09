"use client";

import { useState } from "react";
import { posts, Lang } from "./posts";

const dict: Record<
  Lang,
  { eyebrow: string; title: string; intro: string; readMore: string; backHome: string; readingSuffix: string }
> = {
  es: {
    eyebrow: "Blog",
    title: "Guías para entrar al mercado brasileño",
    intro:
      "Artículos prácticos sobre estructura societaria, trámites y todo lo que conviene saber antes de abrir una empresa en Brasil desde fuera del país.",
    readMore: "Leer artículo →",
    backHome: "← Inicio",
    readingSuffix: "de lectura",
  },
  pt: {
    eyebrow: "Blog",
    title: "Guias para entrar no mercado brasileiro",
    intro:
      "Artigos práticos sobre estrutura societária, trâmites e tudo o que vale a pena saber antes de abrir uma empresa no Brasil estando fora do país.",
    readMore: "Ler artigo →",
    backHome: "← Início",
    readingSuffix: "de leitura",
  },
  en: {
    eyebrow: "Blog",
    title: "Guides to entering the Brazilian market",
    intro:
      "Practical articles about corporate structure, paperwork, and everything worth knowing before opening a company in Brazil from abroad.",
    readMore: "Read article →",
    backHome: "← Home",
    readingSuffix: "read",
  },
};

const langLabel: Record<Lang, string> = { es: "ES", pt: "PT", en: "EN" };

export default function BlogIndex() {
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
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <a href="/" className="leading-tight">
            <span className="block font-display text-lg font-bold tracking-tight text-textlight">
              Nexo<span className="text-ouro">.</span>
            </span>
            <span className="block font-mono text-[9px] uppercase tracking-[0.18em] text-textlight/50">
              Market Entry
            </span>
          </a>
          <div className="flex items-center gap-3">
            <a href="/" className="font-mono text-xs text-textlight/70 hover:text-textlight">
              {t.backHome}
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

      <section className="px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-widest text-visto/90">{t.eyebrow}</p>
          <h1 className="mt-3 font-display text-2xl font-bold leading-snug text-textlight sm:text-4xl">
            {t.title}
          </h1>
          <p className="mt-4 max-w-xl font-body text-sm leading-relaxed text-textlight/65">{t.intro}</p>

          <div className="mt-12 space-y-6">
            {posts.map((post) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}?lang=${lang}`}
                className="block rounded-sm border border-white/10 p-6 transition-colors hover:border-ouro/40 sm:p-7"
              >
                <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest text-textlight/45">
                  <span>{post.date[lang]}</span>
                  <span>·</span>
                  <span>
                    {post.readTime[lang]} {t.readingSuffix}
                  </span>
                </div>
                <h2 className="mt-3 font-display text-xl font-bold text-textlight">{post.title[lang]}</h2>
                <p className="mt-2 font-body text-sm leading-relaxed text-textlight/65">{post.excerpt[lang]}</p>
                <span className="mt-4 inline-block font-mono text-xs font-medium text-ouro">{t.readMore}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8">
        <div className="mx-auto max-w-4xl text-center font-mono text-[11px] text-textlight/40">
          © {new Date().getFullYear()} Nexo Market Entry. Todos os direitos reservados.
        </div>
      </footer>
    </main>
  );
}
