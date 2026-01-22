"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const projects = [
  {
    id: 1,
    title: "The Glass House",
    category: "Private Residence",
    location: "Malibu",
    year: "2024",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  },
  {
    id: 2,
    title: "Urban Loft",
    category: "Interior Design",
    location: "New York",
    year: "2023",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
  },
  {
    id: 3,
    title: "Minimal Living",
    category: "Private Residence",
    location: "Tokyo",
    year: "2024",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
  },
  {
    id: 4,
    title: "Nordic Retreat",
    category: "Hospitality",
    location: "Oslo",
    year: "2023",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
];

export default function FeaturedWork() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="work" className="py-28 md:py-36 lg:py-44">
      <div className="max-w-[1200px] mx-auto px-8 md:px-16 lg:px-20">
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <div className="flex items-baseline justify-between">
            <h2 className="font-serif text-3xl md:text-4xl font-light tracking-[-0.02em]">
              Selected Work
            </h2>
            <a
              href="#"
              className="hidden md:inline-flex items-center gap-2 text-[11px] tracking-[0.2em] text-white/30 hover:text-[#b8956b] uppercase transition-colors duration-300"
            >
              <span>All Projects</span>
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Project List */}
        <div ref={containerRef} className="project-list">
          {projects.map((project, index) => (
            <a
              key={project.id}
              href="#"
              className="project-row"
              onMouseEnter={() => setActiveProject(index)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <span className="project-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="project-title">{project.title}</span>
              <span className="project-meta">{project.category}</span>
              <span className="project-arrow">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M7 17L17 7M17 7H7M17 7V17"
                  />
                </svg>
              </span>
            </a>
          ))}
        </div>

        {/* Mobile: View All */}
        <div className="mt-12 md:hidden">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] text-white/30 hover:text-[#b8956b] uppercase transition-colors duration-300"
          >
            <span>View All Projects</span>
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Floating Image Preview */}
      {projects.map((project, index) => (
        <div
          key={project.id}
          className={`project-preview ${activeProject === index ? "active" : ""}`}
          style={{
            left: mousePos.x + 20,
            top: mousePos.y - 140,
          }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </section>
  );
}
