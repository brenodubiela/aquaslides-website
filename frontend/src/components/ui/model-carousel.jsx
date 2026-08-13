"use client";

import { useRef } from "react";
import { ModelCard } from "./model-card";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function ModelCarousel({ models }) {
  const scrollRef = useRef(null);

  if (!models || models.length === 0) return null;

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.85; // Move nearly one card width
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="w-full relative group">
      
      {/* Botões de Navegação (visíveis no desktop) */}
      <button 
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center size-12 rounded-full bg-surface shadow-xl text-primary border border-canvas/20 hover:scale-105 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-primary"
        aria-label="Modelo anterior"
      >
        <ChevronLeft className="size-6" strokeWidth={2.5} />
      </button>

      <button 
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center size-12 rounded-full bg-surface shadow-xl text-primary border border-canvas/20 hover:scale-105 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-primary"
        aria-label="Próximo modelo"
      >
        <ChevronRight className="size-6" strokeWidth={2.5} />
      </button>

      {/* Container com scroll horizontal nativo */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 -mx-4 px-4 md:mx-0 md:px-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        
        {models.map((model) => (
          <div 
            key={model.id} 
            className="snap-start shrink-0 w-[85vw] md:w-[450px]"
          >
            <ModelCard model={model} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ModelCarousel;
