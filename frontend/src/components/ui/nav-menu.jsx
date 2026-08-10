"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/utils/cn";
import { TextLink } from "./text-link";
import { DropdownLink } from "./dropdown-link";
import { Button } from "./button";

/**
 * `<NavMenu />` — Aqua Slides Design System
 *
 * Barra de navegação principal com dois estados visuais:
 * - Normal (topo): fundo transparente/canvas, links em ink, botão primary azul
 * - Scroll (fixo): fundo primary (#09aae0), links em branco, botão secondary amarelo
 *
 * Client Component justificado: escuta `scroll` para alternar `isScrolled`.
 * Reutiliza <TextLink />, <DropdownLink /> e <Button />.
 *
 * DESIGN.md > components > nav-menu.
 * Figma: 20509:120 (normal), 20108:106 (scroll).
 *
 * @param {object} props
 * @param {React.ReactNode} [props.logoSlot] - Slot para a logo SVG (inserida pelo layout)
 * @param {boolean} [props.forceScrolled] - Força o estado scrolled (para demos no Sandbox)
 * @param {string} [props.position] - "fixed", "sticky" ou "relative" (default "fixed")
 * @param {string} [props.className] - Classes Tailwind adicionais
 */

const atracoesItems = [
  { label: "Ball", href: "/atracoes/ball" },
  { label: "Fresh", href: "/atracoes/fresh" },
  { label: "Ramp", href: "/atracoes/ramp" },
  { label: "Free Fall", href: "/atracoes/free-fall" },
  { label: "Playground", href: "/atracoes/playground" },
  { label: "Toboágua", href: "/atracoes/toboagua" },
  { label: "Complexos", href: "/atracoes/complexos" },
];

export function NavMenu({
  logoSlot,
  forceScrolled,
  position = "fixed",
  className,
  ...props
}) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (forceScrolled !== undefined) return;

    function handleScroll() {
      setIsScrolled(window.scrollY > 50);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [forceScrolled]);

  const scrolled = forceScrolled !== undefined ? forceScrolled : isScrolled;

  return (
    <nav
      className={cn(
        "top-0 left-0 right-0 z-50 flex items-center justify-between px-xl py-md transition-all duration-300",
        position === "fixed" && "fixed",
        position === "sticky" && "sticky",
        position === "relative" && "relative",
        scrolled
          ? "bg-primary shadow-md"
          : "bg-transparent",
        className
      )}
      {...props}
    >
      {/* Logo Container (flex-1 para empurrar o centro) */}
      <div className="flex flex-1 items-center justify-start min-w-[120px]">
        {logoSlot || (
          <Image
            src="/logomenu.svg"
            alt="Aqua Slides"
            width={112}
            height={55}
            className="h-auto w-[112px]"
            priority
          />
        )}
      </div>

      {/* Links de Navegação (Centro Perfeito) */}
      <div className="flex items-center justify-center gap-xl whitespace-nowrap">
        <TextLink
          href="/"
          active
          className="text-secondary"
        >
          Início
        </TextLink>

        <TextLink
          href="/sobre"
          className={cn(
            scrolled ? "text-canvas hover:text-secondary" : "text-ink hover:text-secondary"
          )}
        >
          Sobre a Empresa
        </TextLink>

        <DropdownLink
          title="Linhas de Atrações"
          items={atracoesItems}
          className={cn(
            "[&_button]:transition-colors [&_button]:duration-300",
            scrolled
              ? "[&_button]:text-canvas [&_button]:hover:text-secondary"
              : "[&_button]:text-ink [&_button]:hover:text-secondary",
            scrolled
              ? "[&_svg]:text-canvas"
              : "[&_svg]:text-ink"
          )}
        />

        <TextLink
          href="/projetos"
          className={cn(
            scrolled ? "text-canvas hover:text-secondary" : "text-ink hover:text-secondary"
          )}
        >
          Projetos
        </TextLink>

        <TextLink
          href="/blog"
          className={cn(
            scrolled ? "text-canvas hover:text-secondary" : "text-ink hover:text-secondary"
          )}
        >
          Blog
        </TextLink>
      </div>

      {/* Botão CTA Container (flex-1 para empurrar o centro e alinhar à direita) */}
      <div className="flex flex-1 items-center justify-end min-w-[120px]">
        <Button
          variant={scrolled ? "secondary" : "primary"}
          href="/contato"
        >
          Contato
        </Button>
      </div>
    </nav>
  );
}

export default NavMenu;

