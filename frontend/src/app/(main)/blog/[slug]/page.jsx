import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { mockBlogPosts } from "@/data/mock-blog";
import { Hero } from "@/components/sections/hero";
import { Button } from "@/components/ui/button";
import { FacebookIcon, InstagramIcon, LinkedinIcon, XIcon } from "@/components/ui/social-icons";

export async function generateStaticParams() {
  return mockBlogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = mockBlogPosts.find((p) => p.slug === slug);
  
  if (!post) {
    return {};
  }
  
  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = mockBlogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="w-full bg-canvas min-h-screen">
      <Hero
        eyebrow="BLOG"
        title={post.title}
        bgDesktop={post.image}
        bgMobile={post.image}
        overlayClassName="bg-black/70"
        leftContent={
          <div className="mt-8">
            <Button variant="halo-primary" href="/blog" icon={false}>
              <div className="flex items-center gap-2">
                <ArrowLeft className="size-4" />
                <span>Voltar para o blog</span>
              </div>
            </Button>
          </div>
        }
      />

      <article className="max-w-3xl mx-auto px-4 py-16 md:py-24">
        {post.content?.map((block, index) => {
          if (block.type === "heading") {
            return (
              <h2 key={index} className="font-display text-2xl md:text-3xl text-primary mt-12 mb-6">
                {block.text}
              </h2>
            );
          }
          if (block.type === "paragraph") {
            return (
              <p key={index} className="font-sans text-lg text-ink/80 leading-relaxed mb-6">
                {block.text}
              </p>
            );
          }
          if (block.type === "image") {
            return (
              <div key={index} className="relative w-full aspect-video rounded-2xl overflow-hidden my-12 bg-surface">
                <Image src={block.src} alt={post.title} fill className="object-cover" />
              </div>
            );
          }
          return null;
        })}

        {/* Footer do Artigo - Compartilhe */}
        <div className="mt-16 pt-8 border-t border-ink/10 flex flex-col items-center">
          <span className="font-sans font-bold text-ink/60 uppercase tracking-widest text-sm">Compartilhe</span>
          <div className="flex justify-center gap-4 mt-4">
            <Link href="#" className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10 text-secondary hover:scale-105 transition-transform" aria-label="Facebook">
              <FacebookIcon className="w-5 h-5" />
            </Link>
            <Link href="#" className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10 text-secondary hover:scale-105 transition-transform" aria-label="X">
              <XIcon className="w-5 h-5" />
            </Link>
            <Link href="#" className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10 text-secondary hover:scale-105 transition-transform" aria-label="LinkedIn">
              <LinkedinIcon className="w-5 h-5" />
            </Link>
            <Link href="#" className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10 text-secondary hover:scale-105 transition-transform" aria-label="Instagram">
              <InstagramIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
