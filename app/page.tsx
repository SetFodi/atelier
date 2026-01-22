"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import ModernVisual from "./components/ModernVisual";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="min-h-screen bg-[#090909]">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-[#090909]/90 backdrop-blur-xl py-3 shadow-lg shadow-black/10"
            : "bg-gradient-to-b from-[#090909]/80 to-transparent py-5"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="relative group flex items-center gap-3">
              {/* Logo Mark */}
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 border border-[#b8956b]/40 rotate-45 transition-all duration-500 group-hover:rotate-[135deg] group-hover:border-[#b8956b]" />
                <span className="font-serif text-[#b8956b] text-lg relative z-10">A</span>
              </div>
              {/* Logo Text */}
              <div className="flex flex-col">
                <span className="font-serif text-xl md:text-2xl tracking-[0.25em] font-light text-white">
                  ATELIER
                </span>
                <span className="text-[8px] tracking-[0.35em] text-white/30 uppercase hidden md:block">
                  Architecture Studio
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {["Work", "Studio", "Services", "Journal"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="group relative px-5 py-2"
                >
                  <span className="text-[0.8125rem] tracking-[0.12em] text-white/70 group-hover:text-white transition-colors duration-300 uppercase">
                    {item}
                  </span>
                  {/* Animated underline */}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#b8956b] transition-all duration-300 group-hover:w-6" />
                </a>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="hidden lg:flex items-center gap-3 group relative px-6 py-2.5 overflow-hidden rounded-full border border-[#b8956b]/40 hover:border-[#b8956b] transition-all duration-500"
            >
              {/* Button background fill on hover */}
              <span className="absolute inset-0 bg-[#b8956b] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
              <span className="relative z-10 text-[0.75rem] tracking-[0.12em] text-[#b8956b] group-hover:text-[#090909] transition-colors duration-300 uppercase font-medium">
                Get in Touch
              </span>
              <svg className="relative z-10 w-3.5 h-3.5 text-[#b8956b] group-hover:text-[#090909] transition-all duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            {/* Mobile Menu */}
            <button
              className="lg:hidden flex flex-col gap-[5px] p-3 rounded-lg hover:bg-white/5 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className={`w-5 h-[1.5px] bg-white transition-all duration-500 ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
              <span className={`w-5 h-[1.5px] bg-white transition-all duration-500 ${menuOpen ? "opacity-0 scale-0" : ""}`} />
              <span className={`w-5 h-[1.5px] bg-white transition-all duration-500 ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        <div className={`lg:hidden fixed inset-0 top-[72px] bg-[#090909]/98 backdrop-blur-xl transition-all duration-500 ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}>
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {["Work", "Studio", "Services", "Journal"].map((item, idx) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`font-serif text-4xl tracking-wider text-white/80 hover:text-white transition-all duration-300 ${menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
                style={{ transitionDelay: menuOpen ? `${idx * 75}ms` : "0ms" }}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              className={`mt-4 px-8 py-3 bg-[#b8956b] text-[#090909] font-medium tracking-wider rounded-full transition-all duration-300 ${menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
              style={{ transitionDelay: menuOpen ? "300ms" : "0ms" }}
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=85"
            alt="Luxury interior"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-[#090909]/30 to-[#090909]/60" />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24 pt-32 md:pt-0">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start text-left pl-2 md:pl-6 lg:pl-12">
              <div className="flex items-center gap-4 mb-8 animate-fade-up">
                <span className="h-[1px] w-12 bg-[#b8956b]" />
                <span className="text-[#b8956b] tracking-[0.2em] text-sm uppercase">Architecture & Interior Design</span>
              </div>

              <h1 className="font-serif text-[clamp(3.5rem,7vw,6.5rem)] font-light leading-[1.1] tracking-[-0.02em] mb-10 text-white">
                <span className="block animate-fade-up delay-200">We Create</span>
                <span className="block animate-fade-up delay-300">
                  <span className="text-gradient italic pr-4">Timeless</span>
                  Spaces
                </span>
              </h1>

              <p className="text-[#a3a3a3] text-lg md:text-xl max-w-[540px] leading-relaxed mb-12 animate-fade-up delay-400">
                Award-winning studio crafting bespoke architectural experiences
                that transcend the ordinary and redefine luxury living.
              </p>

              <div className="flex flex-wrap gap-6 animate-fade-up delay-500">
                <a href="#work" className="group relative px-8 py-4 bg-white text-black overflow-hidden rounded-full transition-all hover:scale-105">
                  <span className="relative z-10 font-medium tracking-wide">Explore Work</span>
                  <div className="absolute inset-0 bg-[#b8956b] transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
                  <span className="absolute inset-0 z-10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">Explore Work</span>
                </a>

                <a href="#studio" className="group px-8 py-4 border border-white/20 rounded-full hover:bg-white/5 transition-all text-white flex items-center gap-3">
                  <span className="tracking-wide">Our Story</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
              </div>
            </div>

            {/* Right Content - Modern Visual */}
            <div className="lg:col-span-5 hidden lg:block animate-fade-in delay-700">
              <ModernVisual />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 right-8 md:right-16 lg:right-24 flex flex-col items-center gap-4 animate-fade-in delay-800">
          <div className="w-[1px] h-20 bg-gradient-to-b from-[#b8956b] to-transparent" />
          <span className="text-[0.625rem] tracking-[0.3em] text-[#525252] [writing-mode:vertical-rl]">SCROLL</span>
        </div>
      </section>

      {/* Stats Marquee */}
      <section className="py-16 md:py-20 border-y border-white/[0.06] overflow-hidden bg-[#0a0a0a]">
        <div className="flex animate-[marquee_30s_linear_infinite]">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex shrink-0">
              {[
                { value: "25+", label: "Years of Excellence" },
                { value: "200+", label: "Projects Delivered" },
                { value: "15", label: "International Awards" },
                { value: "100%", label: "Client Satisfaction" },
              ].map((stat, idx) => (
                <div key={idx} className="flex items-center px-12 md:px-20">
                  <span className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-[#b8956b] mr-6">
                    {stat.value}
                  </span>
                  <span className="text-[0.75rem] tracking-[0.2em] text-[#525252] uppercase whitespace-nowrap">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Featured Work */}
      <section id="work" className="py-32 md:py-40 lg:py-48">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">
            <div>
              <div className="section-label mb-6">Selected Projects</div>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-[-0.02em]">
                Featured Work
              </h2>
            </div>
            <a href="#" className="btn-ghost self-start lg:self-auto">
              View All
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {[
              {
                title: "The Glass House",
                category: "Private Residence",
                location: "Malibu, CA",
                image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=85",
                size: "large"
              },
              {
                title: "Urban Loft",
                category: "Interior Design",
                location: "New York, NY",
                image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&q=85",
                size: "small"
              },
              {
                title: "Minimal Living",
                category: "Private Residence",
                location: "Tokyo, JP",
                image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900&q=85",
                size: "small"
              },
              {
                title: "Nordic Retreat",
                category: "Hospitality",
                location: "Oslo, NO",
                image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=85",
                size: "large"
              },
            ].map((project, index) => (
              <div
                key={index}
                className={`group cursor-pointer ${project.size === "large" ? "lg:row-span-2" : ""}`}
              >
                <div className={`relative img-zoom mb-6 ${project.size === "large" ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[#090909]/0 group-hover:bg-[#090909]/20 transition-all duration-700" />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="w-20 h-20 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[0.6875rem] tracking-[0.2em] text-[#b8956b] uppercase mb-2">
                      {project.category}
                    </p>
                    <h3 className="font-serif text-2xl md:text-3xl font-light group-hover:text-[#b8956b] transition-colors duration-500">
                      {project.title}
                    </h3>
                  </div>
                  <span className="text-[0.75rem] text-[#525252]">{project.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Philosophy */}
      <section id="studio" className="py-32 md:py-40 lg:py-48 bg-[#0d0d0d]">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative aspect-[4/5] img-zoom">
                <Image
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=85"
                  alt="Our studio"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Accent elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 border border-[#b8956b]/20 hidden lg:block" />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-[#b8956b]/5 hidden lg:block" />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <div className="section-label mb-8">Our Philosophy</div>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-light leading-[1.1] tracking-[-0.02em] mb-10">
                Design That<br />
                <span className="text-[#b8956b]">Transcends</span> Time
              </h2>

              <div className="space-y-6 text-[#a3a3a3] leading-[1.8]">
                <p>
                  For over two decades, Atelier has stood at the intersection of
                  innovation and tradition, creating spaces that honor both the
                  past and the future.
                </p>
                <p>
                  Our approach is rooted in deep collaboration with our clients,
                  understanding that every space tells a unique story. We don&apos;t
                  follow trends—we create enduring environments that evolve
                  gracefully with those who inhabit them.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 mt-12 pt-12 border-t border-white/[0.06]">
                {[
                  { value: "2001", label: "Founded" },
                  { value: "48", label: "Team Members" },
                ].map((item, idx) => (
                  <div key={idx}>
                    <div className="font-serif text-4xl md:text-5xl text-[#b8956b] mb-2">{item.value}</div>
                    <div className="text-[0.75rem] tracking-[0.2em] text-[#525252] uppercase">{item.label}</div>
                  </div>
                ))}
              </div>

              <a href="#" className="btn-primary mt-12">
                About Us
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-32 md:py-40 lg:py-48">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24">
          <div className="text-center mb-20 lg:mb-28">
            <div className="section-label justify-center mb-6">
              <span className="hidden"></span>What We Do
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-[-0.02em]">
              Our Expertise
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06]">
            {[
              {
                num: "01",
                title: "Architecture",
                desc: "Holistic design from concept to completion, blending form with function.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                )
              },
              {
                num: "02",
                title: "Interiors",
                desc: "Bespoke interior solutions that reflect your unique identity and lifestyle.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                )
              },
              {
                num: "03",
                title: "Furniture",
                desc: "Custom furniture design that becomes the soul of your space.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                )
              },
              {
                num: "04",
                title: "Consulting",
                desc: "Strategic guidance for developers, investors, and private clients.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                )
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="group bg-[#090909] p-10 lg:p-12 hover:bg-[#0f0f0f] transition-all duration-700 cursor-pointer"
              >
                <div className="text-[#b8956b]/30 mb-8">{service.icon}</div>
                <span className="text-[0.6875rem] tracking-[0.25em] text-[#525252]">{service.num}</span>
                <h3 className="font-serif text-2xl md:text-[1.75rem] font-light mt-3 mb-4 group-hover:text-[#b8956b] transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-[#737373] text-[0.9375rem] leading-relaxed">
                  {service.desc}
                </p>
                <div className="mt-8 flex items-center gap-2 text-[0.75rem] tracking-[0.15em] text-[#b8956b] opacity-0 group-hover:opacity-100 transition-all duration-500">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="relative py-40 md:py-56 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1920&q=85"
            alt="Architecture detail"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#090909]/70" />
        </div>
        <div className="relative z-10 max-w-[1000px] mx-auto px-8 md:px-16 text-center">
          <svg className="w-12 h-12 text-[#b8956b]/30 mx-auto mb-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <blockquote className="font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-[1.3] tracking-[-0.01em] mb-10">
            Architecture is the learned game, correct and magnificent, of forms
            assembled in the light.
          </blockquote>
          <cite className="text-[0.75rem] tracking-[0.25em] text-[#737373] uppercase not-italic">
            Le Corbusier
          </cite>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 md:py-40 lg:py-48 bg-[#0d0d0d]">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24">
          <div className="text-center mb-20">
            <div className="section-label justify-center mb-6">
              <span className="hidden"></span>Testimonials
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-[-0.02em]">
              Client Voices
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Atelier transformed our vision into a masterpiece. Their attention to detail and commitment to excellence is unparalleled.",
                name: "Victoria Laurent",
                title: "Private Client, Monaco"
              },
              {
                quote: "Working with the team was a revelation. They understood our brand DNA and created spaces that truly embody our ethos.",
                name: "James Chen",
                title: "CEO, Luxe Hospitality"
              },
              {
                quote: "The level of craftsmanship and design sophistication exceeded all expectations. Our home has been featured in AD.",
                name: "Sarah Mitchell",
                title: "Private Client, London"
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="glass-card p-10 lg:p-12 hover-lift">
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[#b8956b]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#d4d4d4] leading-[1.8] mb-10">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <div className="font-medium mb-1">{testimonial.name}</div>
                  <div className="text-[0.8125rem] text-[#525252]">{testimonial.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 md:py-40 lg:py-48">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24">
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-32">
            {/* Left */}
            <div>
              <div className="section-label mb-8">Get in Touch</div>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-light leading-[1.1] tracking-[-0.02em] mb-8">
                Let&apos;s Create<br />
                Something<br />
                <span className="text-[#b8956b]">Extraordinary</span>
              </h2>
              <p className="text-[#a3a3a3] leading-[1.8] max-w-md mb-16">
                Ready to transform your vision into reality? We&apos;d love to hear
                about your project and explore how we can bring it to life.
              </p>

              <div className="space-y-10">
                {[
                  { label: "Email", value: "hello@atelier.design" },
                  { label: "Phone", value: "+1 (310) 555-0187" },
                  { label: "Studio", value: "845 Design District\nLos Angeles, CA 90028" },
                ].map((item, idx) => (
                  <div key={idx}>
                    <div className="text-[0.6875rem] tracking-[0.25em] text-[#525252] uppercase mb-2">{item.label}</div>
                    <div className="text-lg whitespace-pre-line">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Form */}
            <div className="lg:pt-8">
              <form className="space-y-10">
                <div className="grid md:grid-cols-2 gap-10">
                  <div>
                    <label className="text-[0.6875rem] tracking-[0.25em] text-[#525252] uppercase block mb-4">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full bg-transparent border-b border-white/10 pb-4 text-white placeholder:text-[#525252] focus:border-[#b8956b] outline-none transition-colors duration-500"
                    />
                  </div>
                  <div>
                    <label className="text-[0.6875rem] tracking-[0.25em] text-[#525252] uppercase block mb-4">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full bg-transparent border-b border-white/10 pb-4 text-white placeholder:text-[#525252] focus:border-[#b8956b] outline-none transition-colors duration-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[0.6875rem] tracking-[0.25em] text-[#525252] uppercase block mb-4">
                    Project Type
                  </label>
                  <select className="w-full bg-transparent border-b border-white/10 pb-4 text-white focus:border-[#b8956b] outline-none transition-colors duration-500 cursor-pointer appearance-none">
                    <option value="" className="bg-[#090909]">Select a service</option>
                    <option value="architecture" className="bg-[#090909]">Architecture</option>
                    <option value="interior" className="bg-[#090909]">Interior Design</option>
                    <option value="furniture" className="bg-[#090909]">Furniture Design</option>
                    <option value="consultation" className="bg-[#090909]">Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="text-[0.6875rem] tracking-[0.25em] text-[#525252] uppercase block mb-4">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full bg-transparent border-b border-white/10 pb-4 text-white placeholder:text-[#525252] focus:border-[#b8956b] outline-none transition-colors duration-500 resize-none"
                  />
                </div>

                <button type="submit" className="btn-primary">
                  Send Message
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-white/[0.06]">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
            {/* Brand */}
            <div className="lg:col-span-2">
              <a href="#" className="font-serif text-2xl tracking-[0.2em] font-light block mb-6">
                ATELIER
              </a>
              <p className="text-[#737373] max-w-sm leading-relaxed">
                Award-winning architecture and interior design studio creating
                timeless spaces since 2001.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-[0.6875rem] tracking-[0.25em] text-[#525252] uppercase mb-6">Navigation</h4>
              <div className="space-y-4">
                {["Work", "Studio", "Services", "Journal", "Contact"].map((link) => (
                  <a key={link} href={`#${link.toLowerCase()}`} className="block text-[#737373] hover:text-white transition-colors duration-300">
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-[0.6875rem] tracking-[0.25em] text-[#525252] uppercase mb-6">Connect</h4>
              <div className="flex gap-4">
                {["In", "Be", "Pi"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 border border-white/10 flex items-center justify-center text-[#737373] hover:border-[#b8956b] hover:text-[#b8956b] transition-all duration-300"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#525252] text-[0.8125rem]">
              &copy; 2024 Atelier. All rights reserved.
            </p>
            <div className="flex gap-8 text-[0.8125rem] text-[#525252]">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
