import type { Metadata } from "next";
import { posts } from "./posts";

export const metadata: Metadata = {
  title: "Blog — Nexo Market Entry",
  description: "Guías prácticas sobre cómo abrir y estructurar una empresa en Brasil siendo extranjero.",
};

export default function BlogIndex() {
  return (
    <main className="min-h-screen">
      <header className="border-b border-white/10 bg-ink/90 px-5 py-4">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <a href="/" className="leading-tight">
            <span className="block font-display text-lg font-bold tracking-tight text-textlight">
              Nexo<span className="text-ouro">.</span>
            </span>
            <span className="block font-mono text-[9px] uppercase tracking-[0.18em] text-textlight/50">
              Market Entry
            </span>
          </a>
          <a href="/" className="font-mono text-xs text-textlight/70 hover:text-textlight">
            ← Inicio
          </a>
        </div>
      </header>

      <section className="px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-widest text-visto/90">Blog</p>
          <h1 className="mt-3 font-display text-2xl font-bold leading-snug text-textlight sm:text-4xl">
            Guías para entrar al mercado brasileño
          </h1>
          <p className="mt-4 max-w-xl font-body text-sm leading-relaxed text-textlight/65">
            Artículos prácticos sobre estructura societaria, trámites y todo lo que conviene saber antes de abrir
            una empresa en Brasil desde fuera del país.
          </p>

          <div className="mt-12 space-y-6">
            {posts.map((post) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block rounded-sm border border-white/10 p-6 transition-colors hover:border-ouro/40 sm:p-7"
              >
                <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest text-textlight/45">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime} de lectura</span>
                </div>
                <h2 className="mt-3 font-display text-xl font-bold text-textlight">{post.title}</h2>
                <p className="mt-2 font-body text-sm leading-relaxed text-textlight/65">{post.excerpt}</p>
                <span className="mt-4 inline-block font-mono text-xs font-medium text-ouro">Leer artículo →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8">
        <div className="mx-auto max-w-4xl text-center font-mono text-[11px] text-textlight/40">
          © {new Date().getFullYear()} Nexo Market Entry. Todos los derechos reservados.
        </div>
      </footer>
    </main>
  );
}
