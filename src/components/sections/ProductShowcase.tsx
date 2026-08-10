"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "../ui/Button";

const FEATURES = [
  {
    title: "Short, crisp format",
    description: "60-word summaries that deliver the core facts without the fluff. Read an entire news story in seconds.",
  },
  {
    title: "Video & Photo Rich",
    description: "Experience the news natively with vertical videos and high-quality photo galleries built into the feed.",
  },
  {
    title: "Save & Share Instantly",
    description: "Native WhatsApp sharing and bookmarking so you never lose the stories that matter to you.",
  },
];

export function ProductShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768) return;
      const sections = document.querySelectorAll(".product-feature-text");
      
      let closestIndex = 0;
      let minDistance = Infinity;
      // Target exact center of the screen
      const targetY = window.innerHeight * 0.5;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const distance = Math.abs(targetY - elementCenter);
        
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Trigger once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="product" className="py-24 md:py-32 bg-offwhite">
      <div className="container mx-auto max-w-[1200px] px-5 lg:px-6">
        <div className="max-w-3xl mb-16 md:mb-24 md:text-left text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-ink leading-tight tracking-tight">
            See the news the way <br className="hidden md:block" />
            <span className="text-brand-red">people actually read it.</span>
          </h2>
        </div>

        {/* Desktop Layout (Sticky Scroll) */}
        <div className="hidden md:flex items-start gap-16 lg:gap-24 relative">
          {/* Left Text Col */}
          <div className="w-1/2 flex flex-col">
            {FEATURES.map((feature, i) => (
              <div
                key={i}
                className={cn(
                  "product-feature-text min-h-[calc(100vh-80px)] flex flex-col justify-center transition-all duration-700 ease-out pl-8 border-l-2",
                  activeIndex === i 
                    ? "opacity-100 border-brand-red translate-x-0" 
                    : "opacity-30 border-black/10 -translate-x-4"
                )}
              >
                <h3 className={cn(
                  "text-3xl lg:text-4xl mb-5 font-semibold transition-colors duration-700",
                  activeIndex === i ? "text-ink" : "text-muted"
                )}>
                  {feature.title}
                </h3>
                <p className="text-lg text-muted max-w-md leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Phone Col (Sticky) */}
          <div className="w-1/2 sticky top-[80px] h-[calc(100vh-80px)] flex justify-center items-center">
            {/* The Phone Container - 9:16 aspect ratio */}
            <div className="relative w-full max-w-[320px] aspect-[9/16] bg-paper rounded-[36px] border-[10px] border-black shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden transition-transform duration-700 ease-out hover:scale-[1.02]">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[28px] bg-black rounded-b-[18px] z-20" />

              {/* Screens */}
              <div className="w-full h-full relative bg-muted/10">
                <div className={cn("absolute inset-0 transition-opacity duration-700 ease-in-out", activeIndex === 0 ? "opacity-100 z-10" : "opacity-0 z-0")}>
                  <Image src="/images/mockup-english.webp" alt="English News Screen" fill className="object-cover" priority />
                </div>
                <div className={cn("absolute inset-0 transition-opacity duration-700 ease-in-out", activeIndex === 1 ? "opacity-100 z-10" : "opacity-0 z-0")}>
                  <Image src="/images/mockup-hindi.jpeg" alt="Hindi News Screen" fill className="object-cover" />
                </div>
                <div className={cn("absolute inset-0 transition-opacity duration-700 ease-in-out", activeIndex === 2 ? "opacity-100 z-10" : "opacity-0 z-0")}>
                  <Image src="/images/mockup-telugu.webp" alt="Telugu News Screen" fill className="object-cover" />
                </div>
              </div>
            </div>

            {/* Subtle Floating UI Element */}
            <div 
              className="absolute top-[35%] -left-12 w-[220px] bg-white p-4 rounded-xl shadow-[0_15px_35px_rgba(0,0,0,0.08)] border border-black/5 z-30 transition-all duration-700 ease-out delay-150"
              style={{ 
                opacity: activeIndex === 0 ? 1 : 0, 
                transform: activeIndex === 0 ? "translateY(0) scale(1)" : "translateY(20px) scale(0.95)" 
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] uppercase font-bold text-brand-red tracking-wider">Politics</span>
                <span className="text-[10px] text-muted">• Hyd</span>
              </div>
              <div className="w-full h-2.5 bg-ink/80 rounded mb-2" />
              <div className="w-4/5 h-2.5 bg-ink/80 rounded mb-4" />
              <div className="flex justify-between items-center text-[10px] text-muted font-medium">
                <span>Just now</span>
                <span className="flex items-center gap-1.5"><div className="w-3 h-3 border-2 border-muted/30 rounded-full" /> Share</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout (Horizontal Snap Scroll) */}
        <div className="md:hidden mt-8">
          <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 pb-8 -mx-5 px-5">
            {FEATURES.map((feature, i) => (
              <div key={i} className="min-w-[85vw] snap-center flex flex-col">
                <div className="relative w-full aspect-[9/16] bg-black rounded-[32px] border-[8px] border-black shadow-xl overflow-hidden mb-8">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-[24px] bg-black rounded-b-[16px] z-20" />
                  <Image
                    src={i === 0 ? "/images/mockup-english.webp" : i === 1 ? "/images/mockup-hindi.jpeg" : "/images/mockup-telugu.webp"}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-ink flex items-center gap-3">
                  <span className="w-1.5 h-6 bg-brand-red rounded-full block"></span>
                  {feature.title}
                </h3>
                <p className="text-muted leading-relaxed pl-4 text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
