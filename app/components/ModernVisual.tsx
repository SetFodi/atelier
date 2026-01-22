"use client";

import Image from "next/image";
import { useState } from "react";

const projects = [
    {
        id: 1,
        name: "Villa Serenity",
        location: "Kyoto, Japan",
        area: "850 m²",
        year: "2024",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=85"
    },
    {
        id: 2,
        name: "The Glass House",
        location: "Malibu, CA",
        area: "1,200 m²",
        year: "2023",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=85"
    },
    {
        id: 3,
        name: "Nordic Retreat",
        location: "Oslo, Norway",
        area: "680 m²",
        year: "2024",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=85"
    }
];

export default function ModernVisual() {
    const [activeProject, setActiveProject] = useState(0);
    const project = projects[activeProject];

    return (
        <div className="relative w-full h-[540px] flex items-center justify-end">
            {/* Floating Geometric Shapes */}
            <div className="absolute -top-8 right-20 w-24 h-24 border border-[#b8956b]/20 rotate-45 animate-pulse" />
            <div className="absolute top-32 -right-4 w-16 h-16 border border-white/10 rounded-full" />
            <div className="absolute bottom-20 right-1/2 w-3 h-3 bg-[#b8956b] rounded-full blur-[1px]" />

            {/* Main Card Container */}
            <div className="relative group">
                {/* Background Glow */}
                <div className="absolute -inset-4 bg-gradient-to-br from-[#b8956b]/20 via-transparent to-[#b8956b]/10 blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-700" />

                {/* Card */}
                <div className="relative w-[380px] overflow-hidden rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/[0.08] shadow-2xl">
                    {/* Image Section */}
                    <div className="relative h-[280px] overflow-hidden">
                        <Image
                            src={project.image}
                            alt={project.name}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-transparent" />

                        {/* Top Badge */}
                        <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-black/40 backdrop-blur-md rounded-full border border-white/10">
                            <span className="w-1.5 h-1.5 bg-[#b8956b] rounded-full animate-pulse" />
                            <span className="text-[10px] tracking-[0.15em] text-white/80 uppercase">Featured</span>
                        </div>

                        {/* Project Number */}
                        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                            <span className="text-white/70 text-xs font-light">0{activeProject + 1}</span>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6">
                        {/* Title */}
                        <div className="mb-5">
                            <h3 className="font-serif text-2xl text-white mb-1 tracking-wide">{project.name}</h3>
                            <div className="flex items-center gap-2 text-[#b8956b]">
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="text-xs tracking-wider">{project.location}</span>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-4 mb-5">
                            <div className="p-3 bg-white/[0.03] rounded-xl border border-white/[0.05]">
                                <span className="block text-[10px] tracking-[0.2em] text-white/40 uppercase mb-1">Area</span>
                                <span className="text-white/90 text-sm font-light">{project.area}</span>
                            </div>
                            <div className="p-3 bg-white/[0.03] rounded-xl border border-white/[0.05]">
                                <span className="block text-[10px] tracking-[0.2em] text-white/40 uppercase mb-1">Year</span>
                                <span className="text-white/90 text-sm font-light">{project.year}</span>
                            </div>
                        </div>

                        {/* CTA & Navigation */}
                        <div className="flex items-center justify-between">
                            <button className="group/btn flex items-center gap-2 px-5 py-2.5 bg-[#b8956b] hover:bg-[#d4b896] rounded-full transition-all duration-300">
                                <span className="text-[11px] tracking-[0.1em] text-[#090909] font-medium uppercase">View Project</span>
                                <svg className="w-3.5 h-3.5 text-[#090909] transition-transform group-hover/btn:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>

                            {/* Dots Navigation */}
                            <div className="flex items-center gap-2">
                                {projects.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveProject(idx)}
                                        className={`transition-all duration-300 rounded-full ${
                                            idx === activeProject
                                                ? "w-6 h-1.5 bg-[#b8956b]"
                                                : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Line */}
            <div className="absolute bottom-0 right-0 w-[1px] h-32 bg-gradient-to-t from-[#b8956b]/50 to-transparent" />
        </div>
    );
}
