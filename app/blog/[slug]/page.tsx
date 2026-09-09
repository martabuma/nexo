import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts } from "../posts";
import BlogPostClient from "./BlogPostClient";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: `${post.title.es} - Nexo Market Entry`, description: post.excerpt.es };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title.es,
    description: post.excerpt.es,
    datePublished: post.isoDate,
    author: { "@type": "Organization", name: "Nexo Market Entry" },
    publisher: { "@type": "Organization", name: "Nexo Market Entry" },
    mainEntityOfPage: `https://nexomarketentry.com/blog/${post.slug}`,
    inLanguage: "es",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BlogPostClient post={post} allPosts={posts} />
    </>
  );
}
