"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/utils/cn";

/**
 * `<ButtonDropdown />` — Aqua Slides Design System
 * 
 * Botão Dropdown de Filtro extraído do Figma (Nó 20509:660).
 * Ajustado com `whitespace-nowrap` obrigatório para manter o texto em 1 única linha,
 * e responsividade aprimorada para mobile (px-5 py-2.5 em telas pequenas, px-8 py-3.5 em telas maiores).
 */

export function ButtonDropdown({
  label = "Linhas de atração",
  options = [],
  onSelect,
  className,
  align = "left",
  ...props
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Fecha o dropdown ao clicar fora
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Suporta ESC para fechar
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleOptionClick = (option) => {
    if (onSelect) {
      onSelect(option);
    }
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className={cn("relative inline-block text-left", className)} {...props}>
      {/* Botão Trigger pílula extraído do Figma 20509:660 (whitespace-nowrap garante 1 única linha) */}
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={toggleDropdown}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-full whitespace-nowrap font-sans font-bold text-primary select-none cursor-pointer transition-all duration-200",
          "px-5 py-2.5 sm:px-8 sm:py-3.5 text-button-sm sm:text-button-md",
          "bg-primary-tint/50 border border-primary/30",
          "hover:bg-primary-tint/80 hover:border-primary/50",
          "focus-visible:outline-none focus-visible:shadow-focus-ring",
          isOpen && "bg-primary-tint border-primary shadow-sm"
        )}
      >
        <span className="whitespace-nowrap shrink-0">{label}</span>
        <ChevronDown
          className={cn(
            "size-4 text-primary shrink-0 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {/* Menu suspenso flutuante */}
      {isOpen && (
        <div
          role="listbox"
          className={cn(
            "absolute top-full mt-2 z-50 min-w-[220px] max-w-[320px] w-full rounded-md border border-hairline bg-surface-white p-xs shadow-md animate-fade-in",
            align === "right" ? "right-0" : "left-0"
          )}
        >
          {options.length > 0 ? (
            <ul className="flex flex-col gap-xs">
              {options.map((option, index) => {
                const isString = typeof option === "string";
                const itemLabel = isString ? option : option.label;
                const itemHref = !isString ? option.href : null;

                const itemContent = (
                  <span className="font-sans text-small text-ink whitespace-nowrap">{itemLabel}</span>
                );

                const itemClasses = cn(
                  "flex items-center w-full px-md py-sm rounded-sm text-left transition-colors duration-150 cursor-pointer select-none",
                  "hover:bg-primary-tint hover:text-primary focus:bg-primary-tint focus:outline-none"
                );

                return (
                  <li key={index} role="option">
                    {itemHref ? (
                      <Link
                        href={itemHref}
                        onClick={() => setIsOpen(false)}
                        className={itemClasses}
                      >
                        {itemContent}
                      </Link>
                    ) : (
                      <button
                        type="button"
                        onClick={() => handleOptionClick(option)}
                        className={itemClasses}
                      >
                        {itemContent}
                      </button>
                    )}
                  </li>
                );
              })}
            </ul>
          ) : (
            <div className="px-md py-sm text-center font-sans text-small text-muted whitespace-nowrap">
              Nenhuma opção disponível
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ButtonDropdown;
