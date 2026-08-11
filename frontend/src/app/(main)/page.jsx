import { Hero } from "@/components/sections/hero";
import { HomeStats } from "@/components/sections/home-stats";
import { HomeSolutions } from "@/components/sections/home-solutions";
import { HomeClients } from "@/components/sections/home-clients";
import { HomeSuccessCases } from "@/components/sections/home-success-cases";
import { HomeReference } from "@/components/sections/home-reference";
import { HomeTestimonials } from "@/components/sections/home-testimonials";
import { HomeBlog } from "@/components/sections/home-blog";
import { HomeFaq } from "@/components/sections/home-faq";

export const metadata = {
  title: "Início",
  description: "Página inicial da Aqua Slides.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <HomeStats />
      <HomeSolutions />
      <HomeClients />
      <HomeSuccessCases />
      <HomeReference />
      <HomeTestimonials />
      <HomeBlog />
      <HomeFaq />
    </main>
  );
}
