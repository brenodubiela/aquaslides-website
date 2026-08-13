import { mockBlogPosts } from "@/data/mock-blog";
import { ArticleCard } from "@/components/ui/article-card";
import { BlogCard } from "@/components/ui/blog-card";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/sections/hero";
import { HomeStats } from "@/components/sections/home-stats";

export const metadata = {
  title: "Blog | Notícias e Tendências",
  description: "Fique por dentro das novidades, tendências e normas de segurança em atrações aquáticas.",
  alternates: {
    canonical: "/blog",
  },
};

const BG_BLOG = "/bghero-blog.png";

export default function BlogPage() {
  const latestPosts = mockBlogPosts.slice(0, 3);
  const olderPosts = mockBlogPosts.slice(3);

  return (
    <div className="w-full bg-canvas min-h-screen">
      <Hero 
        eyebrow="BLOG"
        title={
          <>
            Notícias e <span className="text-secondary">Tendências</span>
          </>
        }
        description="Fique por dentro das novidades, tendências e melhores práticas operacionais para parques e complexos aquáticos."
        bgDesktop={BG_BLOG}
        bgMobile={BG_BLOG}
      />
      
      <HomeStats />

      <div id="artigos" className="w-full">
        {/* Grid 1: Posts Recentes (Destaque - Variação 2) */}
        <section className="w-full max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Destaque Principal */}
            {latestPosts[0] && (
              <div className="lg:col-span-7">
                <Reveal delay={0.1} className="h-full">
                  <BlogCard 
                    layout="vertical"
                    title={latestPosts[0].title}
                    excerpt={latestPosts[0].excerpt}
                    imageSrc={latestPosts[0].image}
                    href={`/blog/${latestPosts[0].slug}`}
                    className="h-full"
                  />
                </Reveal>
              </div>
            )}
            
            {/* Lista Secundária */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              {latestPosts.slice(1).map((post, index) => (
                <Reveal key={post.id} delay={0.2 + (0.1 * index)} className="flex-1">
                  <BlogCard 
                    layout="horizontal"
                    title={post.title}
                    excerpt={post.excerpt}
                    imageSrc={post.image}
                    href={`/blog/${post.slug}`}
                    className="h-full"
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Grid 2: Posts Antigos (Padrão - Variação 1) */}
        <section className="w-full max-w-7xl mx-auto px-4 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {olderPosts.map((post, index) => (
              <Reveal key={post.id} delay={0.1 * index}>
                <ArticleCard 
                  title={post.title}
                  excerpt={post.excerpt}
                  imageSrc={post.image}
                  href={`/blog/${post.slug}`}
                />
              </Reveal>
            ))}
          </div>

          {/* Botão Ver Mais */}
          <div className="flex justify-center mt-16">
            <Reveal delay={0.3}>
              <Button variant="outline">Carregar mais artigos</Button>
            </Reveal>
          </div>
        </section>
      </div>
    </div>
  );
}
