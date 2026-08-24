import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts } from "../posts";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: `${post.title} — Nexo Market Entry`, description: post.excerpt };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return notFound();

  return (
    <main className="min-h-screen">
      <header className="border-b border-white/10 bg-ink/90 px-5 py-4">
        <div className="mx-auto flex max-w-2xl items-center justify-between">
          <a href="/" className="leading-tight">
            <span className="block font-display text-lg font-bold tracking-tight text-textlight">
              Nexo<span className="text-ouro">.</span>
            </span>
            <span className="block font-mono text-[9px] uppercase tracking-[0.18em] text-textlight/50">
              Market Entry
            </span>
          </a>
          <a href="/blog" className="font-mono text-xs text-textlight/70 hover:text-textlight">
            ← Blog
          </a>
        </div>
      </header>

      <article className="px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest text-textlight/45">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime} de lectura</span>
          </div>
          <h1 className="mt-3 font-display text-2xl font-bold leading-snug text-textlight sm:text-4xl">
            {post.title}
          </h1>

          <div className="mt-8 space-y-5">
            {post.content.map((paragraph, i) => (
              <p key={i} className="font-body text-[15px] leading-relaxed text-textlight/80">
                {paragraph}
              </p>
            ))}
          </div>

          <a
            href="/#contacto"
            className="mt-10 inline-block rounded-full bg-ouro px-6 py-3 font-body text-sm font-semibold text-inkdeep"
          >
            Habla con nosotros sobre tu proyecto
          </a>
        </div>
      </article>

      <footer className="border-t border-white/10 px-5 py-8">
        <div className="mx-auto max-w-2xl text-center font-mono text-[11px] text-textlight/40">
          © {new Date().getFullYear()} Nexo Market Entry. Todos los derechos reservados.
        </div>
      </footer>
    </main>
  );
}
