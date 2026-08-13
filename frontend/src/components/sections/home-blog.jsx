import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { ArticleCard } from "@/components/ui/article-card";
import { mockBlogPosts } from "@/data/mock-blog";

export function HomeBlog() {
  const latestPosts = mockBlogPosts.slice(0, 3);

  return (
    <section className="py-section bg-canvas">
      <div className="mx-auto w-full max-w-content px-xl">
        
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div className="flex flex-col items-start">
            <Reveal delay={0.1}>
              <Eyebrow variant="yellow" className="mb-sm">BLOG</Eyebrow>
            </Reveal>
            <Reveal delay={0.2}>
              <h2 className="font-display text-h2-mobile md:text-h2 text-ink max-w-[800px] leading-tight pr-4">
                Tendências, Normas de Segurança <br className="hidden lg:block" /> e Gestão de Atrações
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.3} className="w-full md:w-auto">
            {/* Seguindo a regra universal de usar o botão do Hero (halo-primary) */}
            <Button variant="halo-primary" href="/blog" className="w-full md:w-auto">
              Ver Todas as Notícias
            </Button>
          </Reveal>
        </div>

        {/* Grid de Artigos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestPosts.map((article, index) => (
            <Reveal key={index} delay={0.4 + (index * 0.1)}>
              <ArticleCard 
                title={article.title}
                excerpt={article.excerpt}
                imageSrc={article.image}
                href={`/blog/${article.slug}`}
              />
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
