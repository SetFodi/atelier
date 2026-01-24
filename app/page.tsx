"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import FeaturedWork from "./components/FeaturedWork";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="min-h-screen bg-[#080808]">
      {/* Navigation - Ultra Minimal */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled ? "bg-[#080808]/95 backdrop-blur-xl" : ""
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <a href="#" className="group flex items-center">
              <span className="font-serif text-lg md:text-xl tracking-[0.3em] text-white">
                ATELIER
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-16">
              <div className="flex items-center gap-10">
                {["Work", "About", "Services", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-[11px] tracking-[0.2em] text-white/50 hover:text-white transition-colors duration-500 uppercase"
                  >
                    {item}
                  </a>
                ))}
              </div>
              <div className="w-px h-4 bg-white/10" />
              <a
                href="#contact"
                className="text-[11px] tracking-[0.2em] text-[#b8956b] hover:text-[#d4b896] transition-colors duration-500 uppercase"
              >
                Inquire
              </a>
            </div>

            {/* Mobile Menu */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <div className="w-6 flex flex-col gap-1.5">
                <span className={`h-px bg-white transition-all duration-500 ${menuOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
                <span className={`h-px bg-white transition-all duration-500 ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`h-px bg-white transition-all duration-500 ${menuOpen ? "-rotate-45 -translate-y-[5px]" : ""}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        <div className={`lg:hidden fixed inset-0 top-20 bg-[#080808] transition-all duration-500 ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}>
          <div className="flex flex-col items-start justify-center h-full px-6 gap-8">
            {["Work", "About", "Services", "Contact"].map((item, idx) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`font-serif text-5xl text-white/90 transition-all duration-500 ${menuOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`}
                style={{ transitionDelay: menuOpen ? `${idx * 100}ms` : "0ms" }}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-end overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=90"
            alt="Luxury interior"
            fill
            className="object-cover"
            priority
            quality={95}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/20" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24 pb-24 md:pb-32">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">
            {/* Left - Main Content */}
            <div className="max-w-2xl">
              <div className="mb-8 animate-fade-up">
                <span className="text-[10px] tracking-[0.5em] text-white/30 uppercase">
                  Architecture & Interior Design
                </span>
              </div>

              <h1 className="font-serif text-[clamp(2.5rem,7vw,5.5rem)] font-light leading-[1] tracking-[-0.02em] mb-8 animate-fade-up delay-100">
                <span className="text-white">We Design</span>
                <br />
                <span className="text-[#b8956b] italic">Timeless</span>
                <span className="text-white"> Spaces</span>
              </h1>

              <p className="text-white/40 text-sm md:text-base max-w-sm leading-relaxed mb-10 animate-fade-up delay-200">
                Award-winning studio creating bespoke architectural experiences since 2001.
              </p>

              <div className="flex items-center gap-6 animate-fade-up delay-300">
                <a
                  href="#work"
                  className="group flex items-center gap-3 text-[11px] tracking-[0.2em] text-white uppercase"
                >
                  <span>View Work</span>
                  <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#b8956b] group-hover:bg-[#b8956b] transition-all duration-500">
                    <svg className="w-3 h-3 group-hover:text-[#080808] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>

            {/* Right - Stats */}
            <div className="hidden lg:flex items-end">
              <div className="flex gap-12">
                {[
                  { value: "200+", label: "Projects" },
                  { value: "24", label: "Years" },
                  { value: "15", label: "Awards" },
                ].map((stat, idx) => (
                  <div key={idx} className="text-right animate-fade-up" style={{ animationDelay: `${400 + idx * 100}ms` }}>
                    <div className="font-serif text-4xl text-white/90 mb-1">{stat.value}</div>
                    <div className="text-[10px] tracking-[0.2em] text-white/30 uppercase">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Line */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-16 w-px bg-gradient-to-b from-transparent to-[#b8956b]/50 animate-fade-in delay-700" />
      </section>

      {/* Divider */}
      <div className="h-px bg-white/[0.04]" />

      {/* Featured Work */}
      <FeaturedWork />

      {/* About Section - Editorial Split */}
      <section id="about" className="py-32 md:py-44 bg-[#080808]">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24">
          {/* Section Header */}
          <div className="flex items-baseline justify-between mb-20 md:mb-32">
            <span className="text-[10px] tracking-[0.3em] text-white/30 uppercase">About</span>
            <span className="text-[10px] tracking-[0.3em] text-white/20 uppercase hidden md:block">02</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Left - Image */}
            <div className="lg:col-span-5 lg:col-start-1">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=85"
                  alt="Studio"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </div>
            </div>

            {/* Right - Content */}
            <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-[-0.02em] mb-10">
                Design That
                <br />
                <span className="text-[#b8956b]">Transcends</span>
              </h2>

              <div className="space-y-6 text-white/40 text-sm md:text-base leading-[1.9] max-w-lg mb-12">
                <p>
                  For over two decades, Atelier has stood at the intersection of
                  innovation and tradition, creating spaces that honor both the
                  past and the future.
                </p>
                <p>
                  We don&apos;t follow trends—we create enduring environments that
                  evolve gracefully with those who inhabit them.
                </p>
              </div>

              <div className="flex gap-16 pt-10 border-t border-white/[0.06]">
                <div>
                  <div className="font-serif text-3xl md:text-4xl text-white mb-1">2001</div>
                  <div className="text-[10px] tracking-[0.2em] text-white/30 uppercase">Founded</div>
                </div>
                <div>
                  <div className="font-serif text-3xl md:text-4xl text-white mb-1">48</div>
                  <div className="text-[10px] tracking-[0.2em] text-white/30 uppercase">Team</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services - Horizontal List */}
      <section id="services" className="py-32 md:py-44 bg-[#0a0a0a]">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20">
          {/* Section Header */}
          <div className="flex items-baseline justify-between mb-20 md:mb-32">
            <span className="text-[10px] tracking-[0.3em] text-white/30 uppercase">Services</span>
            <span className="text-[10px] tracking-[0.3em] text-white/20 uppercase hidden md:block">03</span>
          </div>

          {/* Services List */}
          <div className="space-y-0">
            {[
              { num: "01", title: "Architecture", desc: "From concept to completion" },
              { num: "02", title: "Interior Design", desc: "Bespoke spatial experiences" },
              { num: "03", title: "Furniture Design", desc: "Custom pieces, unique identity" },
              { num: "04", title: "Consulting", desc: "Strategic creative guidance" },
            ].map((service, idx) => (
              <a
                key={idx}
                href="#"
                className="group flex items-baseline justify-between py-8 md:py-10 border-b border-white/[0.04] hover:border-white/10 transition-colors duration-500 cursor-pointer"
              >
                <div className="flex items-baseline gap-6 md:gap-12">
                  <span className="text-[10px] tracking-[0.2em] text-white/20">{service.num}</span>
                  <span className="font-serif text-2xl md:text-4xl lg:text-5xl font-light text-white group-hover:text-[#b8956b] transition-colors duration-500">
                    {service.title}
                  </span>
                </div>
                <div className="hidden md:flex items-center gap-8">
                  <span className="text-[11px] tracking-[0.15em] text-white/30 uppercase">
                    {service.desc}
                  </span>
                  <span className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <svg className="w-4 h-4 text-[#b8956b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section - Full Screen */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1920&q=85"
            alt="Architecture"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-[#080808]/60" />
        </div>
        <div className="relative z-10 max-w-[1000px] mx-auto px-6 md:px-12 text-center">
          <blockquote className="font-serif text-2xl md:text-4xl lg:text-5xl font-light leading-[1.4] tracking-[-0.01em] text-white/90">
            &ldquo;Architecture is the learned game, correct and magnificent, of forms assembled in the light.&rdquo;
          </blockquote>
          <cite className="block mt-10 text-[10px] tracking-[0.3em] text-white/30 uppercase not-italic">
            Le Corbusier
          </cite>
        </div>
      </section>

      {/* Testimonial - Single Featured */}
      <section className="py-32 md:py-44 bg-[#080808]">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <span className="text-[10px] tracking-[0.3em] text-white/30 uppercase">Testimonial</span>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <p className="font-serif text-2xl md:text-3xl lg:text-4xl font-light leading-[1.5] text-white/80 mb-12">
                &ldquo;Atelier transformed our vision into a masterpiece. Their attention to detail and commitment to excellence is unparalleled. Our home has been featured in Architectural Digest.&rdquo;
              </p>
              <div>
                <div className="text-sm text-white mb-1">Victoria Laurent</div>
                <div className="text-[11px] tracking-[0.15em] text-white/30 uppercase">Private Client, Monaco</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact - Split Screen */}
      <section id="contact" className="py-32 md:py-44 bg-[#0a0a0a]">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20">
          {/* Section Header */}
          <div className="flex items-baseline justify-between mb-20 md:mb-32">
            <span className="text-[10px] tracking-[0.3em] text-white/30 uppercase">Contact</span>
            <span className="text-[10px] tracking-[0.3em] text-white/20 uppercase hidden md:block">05</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 lg:gap-32">
            {/* Left - Info */}
            <div>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-[-0.02em] mb-12">
                Let&apos;s Create
                <br />
                <span className="text-[#b8956b]">Together</span>
              </h2>

              <div className="space-y-8">
                <div>
                  <div className="text-[10px] tracking-[0.2em] text-white/30 uppercase mb-2">Email</div>
                  <a href="mailto:hello@atelier.design" className="text-lg text-white hover:text-[#b8956b] transition-colors">
                    hello@atelier.design
                  </a>
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.2em] text-white/30 uppercase mb-2">Location</div>
                  <p className="text-lg text-white/70">
                    845 Design District
                    <br />
                    Los Angeles, CA 90028
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div>
              <form className="space-y-8">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full bg-transparent border-b border-white/10 py-4 text-white text-sm placeholder:text-white/30 focus:border-[#b8956b] outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-transparent border-b border-white/10 py-4 text-white text-sm placeholder:text-white/30 focus:border-[#b8956b] outline-none transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project"
                    className="w-full bg-transparent border-b border-white/10 py-4 text-white text-sm placeholder:text-white/30 focus:border-[#b8956b] outline-none transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="group flex items-center gap-3 text-[11px] tracking-[0.2em] text-white uppercase mt-8"
                >
                  <span>Send Message</span>
                  <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#b8956b] group-hover:bg-[#b8956b] transition-all duration-500">
                    <svg className="w-4 h-4 group-hover:text-[#080808] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Ultra Minimal */}
      <footer className="py-12 border-t border-white/[0.04]">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <span className="font-serif text-sm tracking-[0.2em] text-white/50">
              ATELIER
            </span>
            <div className="flex items-center gap-8">
              <a href="#" className="text-[10px] tracking-[0.2em] text-white/30 hover:text-white/60 uppercase transition-colors">
                Instagram
              </a>
              <a href="#" className="text-[10px] tracking-[0.2em] text-white/30 hover:text-white/60 uppercase transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-[10px] tracking-[0.2em] text-white/30 hover:text-white/60 uppercase transition-colors">
                Pinterest
              </a>
            </div>
            <span className="text-[10px] tracking-[0.15em] text-white/20">
              © 2024
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
