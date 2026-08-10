"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { X } from "lucide-react";
import { cn } from "@/utils/cn";
import { Button } from "./button";
import { Eyebrow } from "./eyebrow";

// Mocks simulando retorno do backend
const MOCK_PROJECTS = [
  {
    id: 1,
    title: "Complexo F36",
    subtitle: "Thermas da Mata Cutia/SP Tobo Joy-010 - Residencial - MG",
    type: "PARQUE AQUÁTICO",
    coordinates: [-46.825, -23.613], // Cutia/SP approx
    image: "https://placehold.co/600x400/e6e6e6/6c6c6c/png?text=Complexo+F36",
    href: "#"
  },
  {
    id: 2,
    title: "Eco Resort Praia",
    subtitle: "Resort Litoral Sul - Toboáguas e Piscina de Ondas",
    type: "RESORT",
    coordinates: [-38.481, -12.971], // Salvador approx
    image: "https://placehold.co/600x400/e6e6e6/6c6c6c/png?text=Eco+Resort+Praia",
    href: "#"
  },
  {
    id: 3,
    title: "Parque Acqua Sul",
    subtitle: "Complexo de lazer infantil e radical",
    type: "CLUBE",
    coordinates: [-51.217, -30.034], // Porto Alegre approx
    image: "https://placehold.co/600x400/e6e6e6/6c6c6c/png?text=Parque+Acqua+Sul",
    href: "#"
  },
  {
    id: 4,
    title: "Hotel Fazenda Sol",
    subtitle: "Piscina aquecida e complexo de rio lento",
    type: "HOTELARIA",
    coordinates: [-43.172, -22.906], // Rio de Janeiro approx
    image: "https://placehold.co/600x400/e6e6e6/6c6c6c/png?text=Hotel+Fazenda+Sol",
    href: "#"
  }
];

const geoUrl = "/topojson/world-110m.json";

function MapCard({ project, onClose, isMobile }) {
  if (!project) return null;

  return (
    <div
      className={cn(
        "z-50 flex flex-col gap-lg rounded-md bg-surface p-lg",
        !isMobile && "absolute left-xl top-1/2 w-[400px] -translate-y-1/2 xl:w-[492px]",
        isMobile && "fixed bottom-0 left-0 right-0 m-base max-h-[85vh] overflow-y-auto"
      )}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Fechar painel do projeto"
        className="absolute right-lg top-lg z-10 flex size-10 items-center justify-center rounded-full bg-surface text-primary transition-colors hover:text-primary-dark"
      >
        <X className="size-6" />
      </button>

      <div className="relative h-[200px] w-full shrink-0 overflow-hidden rounded-sm">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 400px"
        />
      </div>

      <div className="flex flex-col items-start gap-base">
        <Eyebrow variant="dark">{project.type}</Eyebrow>

        <h3 className="font-display text-h3-mobile text-primary md:text-h3">
          {project.title}
        </h3>

        <p className="text-small text-muted">{project.subtitle}</p>

        <Button variant="halo-primary" href={project.href} className="mt-sm">
          Acessar projeto
        </Button>
      </div>
    </div>
  );
}

export function ProjectMap({ className }) {
  const [activeProject, setActiveProject] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className={cn("relative w-full h-full bg-canvas overflow-hidden", className)}>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: isMobile ? 350 : 500, // Zoom maior no Brasil
          center: [-55, -15] // Focado na América do Sul
        }}
        className="size-full"
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#B0B0B0"
                stroke="#E0E0E0"
                strokeWidth={0.5}
                style={{
                  default: { outline: "none" },
                  hover: { outline: "none", fill: "#A0A0A0" },
                  pressed: { outline: "none" }
                }}
              />
            ))
          }
        </Geographies>

        {MOCK_PROJECTS.map((project) => {
          const isActive = activeProject?.id === project.id;
          return (
            <Marker
              key={project.id}
              coordinates={project.coordinates}
              onClick={() => setActiveProject(project)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setActiveProject(project);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`Ver projeto ${project.title}`}
              style={{
                default: { outline: "none", cursor: "pointer" },
                hover: { outline: "none", cursor: "pointer" },
                pressed: { outline: "none", cursor: "pointer" },
              }}
            >
              {isActive && <circle r={18} fill="#fea02e" opacity={0.2} />}
              <circle
                r={isActive ? (isMobile ? 8 : 10) : (isMobile ? 6 : 8)}
                fill="#facc01"
                stroke="#fea02e"
                strokeWidth={isActive ? 3 : 2}
                style={{ transition: "r 0.2s ease, stroke-width 0.2s ease" }}
              />
            </Marker>
          );
        })}
      </ComposableMap>

      {/* Overlay Escuro para Mobile quando Card Aberto */}
      {isMobile && activeProject && (
        <div 
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity" 
          onClick={() => setActiveProject(null)}
        />
      )}

      {/* Card do Projeto */}
      <MapCard 
        project={activeProject} 
        onClose={() => setActiveProject(null)} 
        isMobile={isMobile}
      />
    </div>
  );
}

export default ProjectMap;
