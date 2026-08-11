"use client";

import { useState, useEffect } from "react";
import { NavMenu } from "@/components/ui/nav-menu";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/utils/cn";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 50);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logo = (
    <Link href="/" aria-label="Aqua Slides" className="block outline-none rounded-sm focus-visible:ring focus-visible:ring-secondary focus-visible:ring-offset-2">
      <Image
        src="/logomenu.svg"
        alt="Aqua Slides"
        width={112}
        height={55}
        className="h-auto w-[112px]"
        priority
      />
    </Link>
  );

  return (
    <header className={cn(
      "fixed inset-x-0 top-0 z-50 transition-colors duration-300 [will-change:opacity]",
      isScrolled ? "bg-primary shadow-md" : "bg-transparent"
    )}>
      <NavMenu logoSlot={logo} forceScrolled={isScrolled} position="relative" className="!bg-transparent !shadow-none" />
    </header>
  );
}
