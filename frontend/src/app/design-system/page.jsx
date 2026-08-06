"use client";

import { useState } from "react";
import { Search, Layers, Component, ChevronRight } from "lucide-react";
import { cn } from "@/utils/cn";

const navItems = [
  { key: "buttons", label: "Buttons", icon: Component },
  { key: "navigation", label: "Navigation", icon: ChevronRight },
  { key: "eyebrow-lists", label: "Eyebrow & Lists", icon: Layers },
  { key: "cards", label: "Cards", icon: Layers },
  { key: "forms", label: "Forms", icon: Component },
];

function CodeBlock({ code, className }) {
  return (
    <pre
      className={cn(
        "overflow-x-auto rounded-md bg-surface-strong p-lg font-mono text-small text-body",
        className
      )}
    >
      <code>{code}</code>
    </pre>
  );
}

function LibraryComponentItem({ title, children, className }) {
  return (
    <div
      className={cn(
        "rounded-md border border-hairline bg-surface p-lg",
        className
      )}
    >
      <h3 className="mb-md font-sans text-card-h font-bold text-ink">
        {title}
      </h3>
      <div>{children}</div>
    </div>
  );
}

export default function DesignSystemPage() {
  const [activeCategory, setActiveCategory] = useState("buttons");
  const [search, setSearch] = useState("");

  const filteredItems = navItems.filter((item) =>
    item.label.toLowerCase().includes(search.toLowerCase())
  );

  const activeCategoryLabel =
    navItems.find((item) => item.key === activeCategory)?.label ?? "Buttons";

  return (
    <div className="flex min-h-screen">
      <aside className="flex w-72 shrink-0 flex-col border-r border-hairline bg-surface-strong">
        <div className="border-b border-hairline p-lg">
          <h1 className="font-display text-h3 text-primary">Aqua Slides</h1>
          <p className="mt-xs font-sans text-small text-muted">
            Design System Library
          </p>
        </div>

        <div className="p-lg pb-md">
          <div className="relative">
            <Search className="pointer-events-none absolute left-md top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
            <input
              type="text"
              placeholder="Buscar componente…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-full border border-hairline bg-surface-white py-sm pl-xl pr-md font-sans text-small text-ink placeholder:text-muted focus:border-secondary focus:bg-secondary-tint focus:outline-none"
            />
          </div>
        </div>

        <nav className="flex flex-1 flex-col gap-xs px-md pb-lg">
          {filteredItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeCategory === item.key;
            return (
              <button
                key={item.key}
                onClick={() => setActiveCategory(item.key)}
                className={cn(
                  "flex items-center gap-md rounded-md px-md py-sm text-left font-sans text-small transition-colors duration-150",
                  isActive
                    ? "bg-primary-tint font-semibold text-primary"
                    : "text-body hover:bg-surface hover:text-ink"
                )}
              >
                <Icon className="h-4 w-4 shrink-0" />
                {item.label}
              </button>
            );
          })}

          {filteredItems.length === 0 && (
            <p className="px-md py-lg text-center font-sans text-small text-muted">
              Nenhum resultado para &ldquo;{search}&rdquo;
            </p>
          )}
        </nav>

        <div className="border-t border-hairline p-md">
          <p className="font-sans text-spec-label uppercase tracking-wider text-muted">
            Fase 2
          </p>
        </div>
      </aside>

      <main className="flex flex-1 flex-col bg-canvas">
        <header className="border-b border-hairline px-xl py-lg">
          <h2 className="font-display text-h3 text-ink">{activeCategoryLabel}</h2>
          <p className="mt-xs font-sans text-small text-muted">
            Componentes da categoria &ldquo;{activeCategoryLabel}&rdquo;
          </p>
        </header>

        <section className="flex flex-1 items-center justify-center p-xl">
          <div className="flex max-w-sm flex-col items-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary-tint">
              <Layers className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mt-lg font-sans text-card-h font-bold text-ink">
              Nenhum componente cadastrado nesta categoria ainda.
            </h3>
            <p className="mt-sm font-sans text-small text-muted">
              Os primitivos serão injetados aqui conforme a Fase 2 avança.
              Cada componente criado em{" "}
              <code className="rounded-sm bg-surface-strong px-xs py-[2px] font-mono text-inline-code text-body">
                src/components/ui/
              </code>{" "}
              ganha um preview e um bloco de código neste painel.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
