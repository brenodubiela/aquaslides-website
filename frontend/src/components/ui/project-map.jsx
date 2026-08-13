"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { X } from "lucide-react";
import { cn } from "@/utils/cn";
import { Button } from "./button";
import { Eyebrow } from "./eyebrow";

import { Select } from "./select";

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
        <Eyebrow variant="dark">{project.linhaAtracao}</Eyebrow>

        <h3 className="font-display text-h3-mobile text-primary md:text-h3">
          {project.title}
        </h3>

        <p className="text-small text-muted">{project.locationText}</p>

        <Button variant="halo-primary" href={`/projetos/${project.slug}`} className="mt-sm">
          Acessar projeto
        </Button>
      </div>
    </div>
  );
}

export function ProjectMap({ className, projects = [] }) {
  const [activeProject, setActiveProject] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [filterAtracao, setFilterAtracao] = useState("all");
  const [filterAtuacao, setFilterAtuacao] = useState("all");

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const linhasAtracao = [
    "Ball",
    "Fresh",
    "Ramp",
    "Free Fall",
    "Playground",
    "Toboágua",
    "Complexos"
  ];
  const areasAtuacao = [...new Set(projects.map(p => p.areaAtuacao))].filter(Boolean);

  const filteredProjects = projects.filter(p => {
    const matchAtracao = filterAtracao === "all" || p.linhaAtracao === filterAtracao;
    const matchAtuacao = filterAtuacao === "all" || p.areaAtuacao === filterAtuacao;
    return matchAtracao && matchAtuacao;
  });

  return (
    <div className={cn("relative w-full h-[600px] md:h-[800px] bg-canvas overflow-hidden", className)}>
      
      {/* Filtros flutuantes */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20 flex flex-col md:flex-row gap-4 w-[calc(100%-2rem)] md:w-auto min-w-[300px]">
        <Select value={filterAtracao} onChange={(e) => { setFilterAtracao(e.target.value); setActiveProject(null); }}>
          <option value="all">Todas as Linhas de Atração</option>
          {linhasAtracao.map(linha => (
            <option key={linha} value={linha}>{linha}</option>
          ))}
        </Select>
        <Select value={filterAtuacao} onChange={(e) => { setFilterAtuacao(e.target.value); setActiveProject(null); }}>
          <option value="all">Todas as Áreas de Atuação</option>
          {areasAtuacao.map(area => (
            <option key={area} value={area}>{area}</option>
          ))}
        </Select>
      </div>

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

        {filteredProjects.map((project) => {
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
