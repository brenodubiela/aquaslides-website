"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ProjectCard } from "./project-card";
import { Button } from "./button";
import { cn } from "@/utils/cn";

const cases = [
  {
    id: "f36",
    title: "Complexo F36",
    subtitle: "Instalação Completa",
    logo: "/logoaquacomplexopreto.svg",
    image: "/img-projetos/complexof36.jpg",
    href: "/projetos/complexo-f36",
  },
  {
    id: "f36-mod",
    title: "Complexo F36 Mod",
    subtitle: "Projeto Modular",
    logo: "/logoaquacomplexopreto.svg",
    image: "/img-projetos/complexof36mod.jpg",
    href: "/projetos/complexo-f36-mod",
  },
  {
    id: "playground-021",
    title: "Playground Aqua-021",
    subtitle: "Diversão Infantil",
    logo: "/aquaplaygoundpreto.svg",
    image: "/img-projetos/playgroundaqua021.jpg",
    href: "/projetos/playground-aqua-021",
  }
];

export function SuccessCasesGallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % cases.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-xl items-center">
      {/* Coluna Esquerda: Lista de Cards (No mobile exibe só o ativo) */}
      <div className="flex flex-col gap-base w-full">
        {cases.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <div 
              key={item.id} 
              onClick={() => setActiveIndex(index)}
              className={cn(
                "relative rounded-lg overflow-hidden transition-all duration-300 cursor-pointer",
                isActive 
                  ? "block bg-surface-white shadow-md ring-2 ring-primary" 
                  : "hidden lg:block bg-surface-strong opacity-70 hover:opacity-100 hover:-translate-y-1"
              )}
            >
              <ProjectCard 
                title={item.title}
                subtitle={item.subtitle}
                isActive={isActive}
                className="bg-transparent shadow-none hover:shadow-none hover:-translate-y-0"
                logoSlot={
                  <Image 
                    src={item.logo} 
                    alt={`Logo ${item.title}`} 
                    width={120} 
                    height={40} 
                    className="h-auto w-auto max-h-[40px] object-contain"
                  />
                }
              />
              {isActive && (
                <motion.div
                  key={`progress-${activeIndex}`}
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 8, ease: "linear" }}
                  className="absolute bottom-0 left-0 h-[4px] bg-primary z-10"
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Coluna Direita: Imagem em Destaque e Paginação Mobile */}
      <div className="flex flex-col gap-base w-full">
        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden group shadow-lg w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={cases[activeIndex].image}
                alt={cases[activeIndex].title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </motion.div>
          </AnimatePresence>

          {/* Overlay Hover */}
          <div className="absolute inset-0 z-10 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button href={cases[activeIndex].href} variant="primary" size="lg">
              Ver projeto completo
            </Button>
          </div>
        </div>

        {/* Paginação Mobile */}
        <div className="flex lg:hidden justify-center gap-3 mt-sm">
          {cases.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-colors",
                index === activeIndex ? "bg-primary" : "bg-hairline hover:bg-hairline-soft"
              )}
              aria-label={`Ver case ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
