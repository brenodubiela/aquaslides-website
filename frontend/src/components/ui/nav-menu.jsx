"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/utils/cn";
import { TextLink } from "./text-link";
import { DropdownLink } from "./dropdown-link";
import { Button } from "./button";
import { Menu, X } from "lucide-react";

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
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    if (forceScrolled !== undefined) return;

    function handleScroll() {
      setIsScrolled(window.scrollY > 50);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [forceScrolled]);
  
  // Close mobile menu on resize to desktop
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) setIsMobileOpen(false);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  const scrolled = forceScrolled !== undefined ? forceScrolled : isScrolled;
  const isDarkBg = scrolled || isMobileOpen;

  return (
    <>
      <nav
        className={cn(
          "top-0 left-0 right-0 z-50 transition-colors duration-300",
          position === "fixed" && "fixed",
          position === "sticky" && "sticky",
          position === "relative" && "relative",
          isDarkBg
            ? "bg-primary shadow-md"
            : "bg-transparent",
          className
        )}
        {...props}
      >
        <div className="mx-auto w-full max-w-content px-xl py-md flex items-center justify-between">
          {/* Logo Container (flex-1 para empurrar o centro) */}
          <div className="flex flex-1 items-center justify-start min-w-[120px] relative z-50">
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

          {/* Links de Navegação (Centro Perfeito - Apenas Desktop) */}
          <div className="hidden md:flex items-center justify-center gap-xl whitespace-nowrap">
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

          {/* Botão CTA Container Desktop (flex-1 para empurrar o centro e alinhar à direita) */}
          <div className="hidden md:flex flex-1 items-center justify-end min-w-[120px]">
            <Button
              variant={scrolled ? "secondary" : "primary"}
              href="/contato"
            >
              Contato
            </Button>
          </div>

          {/* Hamburger Menu Button (Apenas Mobile) */}
          <div className="flex md:hidden flex-1 items-center justify-end relative z-50">
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={cn(
                "p-2 rounded-md outline-none transition-colors",
                isDarkBg ? "text-canvas" : "text-ink"
              )}
              aria-label={isMobileOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-40 bg-primary pt-[100px] px-xl pb-section overflow-y-auto flex flex-col md:hidden animate-in fade-in duration-200">
          <div className="flex flex-col gap-lg flex-1">
            <TextLink href="/" className="text-h2-mobile text-canvas hover:text-secondary" onClick={() => setIsMobileOpen(false)}>
              Início
            </TextLink>
            <TextLink href="/sobre" className="text-h2-mobile text-canvas hover:text-secondary" onClick={() => setIsMobileOpen(false)}>
              Sobre a Empresa
            </TextLink>
            
            <div className="flex flex-col gap-md">
              <span className="text-canvas/50 text-eyebrow uppercase tracking-widest font-bold">Linhas de Atrações</span>
              <div className="flex flex-col gap-4 pl-4 border-l-2 border-canvas/20">
                {atracoesItems.map((item) => (
                  <TextLink key={item.href} href={item.href} className="text-p-mobile font-bold text-canvas hover:text-secondary" onClick={() => setIsMobileOpen(false)}>
                    {item.label}
                  </TextLink>
                ))}
              </div>
            </div>

            <TextLink href="/projetos" className="text-h2-mobile text-canvas hover:text-secondary" onClick={() => setIsMobileOpen(false)}>
              Projetos
            </TextLink>
            
            <TextLink href="/blog" className="text-h2-mobile text-canvas hover:text-secondary" onClick={() => setIsMobileOpen(false)}>
              Blog
            </TextLink>

            <div className="mt-auto pt-xl border-t border-canvas/20">
              <Button variant="secondary" size="lg" className="w-full" href="/contato" onClick={() => setIsMobileOpen(false)}>
                Contato
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NavMenu;

