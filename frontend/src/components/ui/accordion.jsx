"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/utils/cn";

/**
 * Primitivo `<Accordion />` — Aqua Slides Design System
 * 
 * Componente de FAQ interativo com transição de altura.
 * Figma: Nó 20509:467
 * 
 * @param {object} props
 * @param {Array<{ question: string, answer: string }>} props.items - Perguntas e respostas
 * @param {string} [props.className] - Classes Tailwind adicionais
 */
export function Accordion({ items = [], className, ...props }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={cn("flex flex-col gap-4 w-full", className)} {...props}>
      {items.map((item, index) => {
        const isActive = activeIndex === index;

        return (
          <div
            key={index}
            className={cn(
              "flex flex-col items-start p-6 rounded-xl shadow-sm backdrop-blur-[2px] transition-all duration-300 border",
              isActive
                ? "bg-surface/80 border-primary/60"
                : "bg-surface/80 border-primary/20"
            )}
          >
            {/* Header (Botão de Toggle) */}
            <button
              onClick={() => toggleItem(index)}
              className="flex w-full items-center justify-between outline-none group text-left"
              aria-expanded={isActive}
            >
              <h3
                className={cn(
                  "font-sans font-bold text-lg leading-tight transition-colors duration-300",
                  isActive ? "text-primary" : "text-ink"
                )}
              >
                {item.question}
              </h3>
              
              <div
                className={cn(
                  "shrink-0 flex items-center justify-center transition-transform duration-300",
                  isActive ? "rotate-180 text-primary" : "text-ink"
                )}
              >
                <ChevronDown className="w-5 h-5" />
              </div>
            </button>

            {/* Conteúdo Expansível Animado */}
            <AnimatePresence initial={false}>
              {isActive && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden w-full"
                >
                  <p className="pt-4 font-sans text-base tracking-[-0.8px] text-ink leading-relaxed">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
