"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "../ui/Button";

const NODES = [
  { title: "State", desc: "Broad regional coverage" },
  { title: "District", desc: "Local governance news" },
  { title: "Locality", desc: "Neighborhood updates" },
  { title: "People", desc: "Verified ground reporters" },
];

export function Ecosystem() {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.3 }
    );
    const el = document.getElementById("ecosystem-section");
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <section id="ecosystem-section" className="py-16 md:py-20 bg-ink text-paper relative overflow-hidden border-t border-white/5">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-red/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-[1000px] px-5 lg:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-white">
            From your state to your street.
          </h2>
          <p className="text-muted text-lg">
            A hyper-local network funneling news straight to your screen.
          </p>
        </div>

        {/* Desktop Layout (Horizontal Graph) */}
        <div className="hidden md:flex items-center justify-between relative max-w-5xl mx-auto h-[260px]">
          {/* Base Track */}
          <div className="absolute left-[10%] right-[15%] top-[120px] h-[2px] bg-white/10" />
          
          {/* Animated Red Line */}
          <div 
            className="absolute left-[10%] top-[120px] h-[2px] bg-brand-red transition-all duration-[1500ms] ease-out z-10 shadow-[0_0_10px_rgba(227,30,36,0.8)]"
            style={{ width: inView ? "75%" : "0%" }}
          />

          <div className="flex justify-between w-[75%] relative z-20">
            {NODES.map((node, i) => (
              <div 
                key={i} 
                className="flex flex-col items-center gap-4 transition-all duration-700"
                style={{ 
                  opacity: inView ? 1 : 0, 
                  transform: inView ? "translateY(0)" : "translateY(15px)",
                  transitionDelay: `${i * 200}ms` 
                }}
              >
                <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center w-[130px] backdrop-blur-sm shadow-xl relative group hover:border-brand-red/50 transition-colors">
                   <h4 className="text-white text-sm font-semibold">{node.title}</h4>
                   <p className="text-[10px] text-muted mt-1 leading-snug">{node.desc}</p>
                </div>
                {/* Node Dot */}
                <div className="w-4 h-4 rounded-full bg-ink border-[2px] border-brand-red shadow-[0_0_12px_rgba(227,30,36,0.6)]" />
              </div>
            ))}
          </div>

          {/* Destination: Phone Mockup */}
          <div 
            className="relative z-20 transition-all duration-1000 ease-out"
            style={{ 
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0) scale(1)" : "translateX(30px) scale(0.95)",
              transitionDelay: "1000ms"
            }}
          >
            <div className="w-[140px] aspect-[9/16] bg-black rounded-[20px] border-[6px] border-ink-blue shadow-2xl overflow-hidden relative">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60px] h-[14px] bg-ink-blue rounded-b-[8px] z-20" />
               <Image 
                 src="/images/mockup-telugu.webp" 
                 alt="Tehelka News Feed" 
                 fill 
                 className="object-cover opacity-90" 
               />
            </div>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-brand-red text-white text-[10px] font-bold px-4 py-1.5 rounded-full whitespace-nowrap shadow-lg uppercase tracking-wider">
              Your Feed
            </div>
          </div>
        </div>

        {/* Mobile Layout (Side-by-Side Graph) */}
        <div className="md:hidden flex flex-row items-center justify-between gap-4 pb-8 w-full max-w-[420px] mx-auto">
           {/* Left Column (Nodes Timeline) */}
           <div className="flex flex-col gap-4 w-full flex-1 relative z-20">
             {/* Vertical Line relative to dots container */}
             <div className="absolute top-[20px] bottom-[20px] left-[18px] w-[2px] bg-white/10 -z-10" />
             <div 
              className="absolute top-[20px] left-[18px] w-[2px] bg-brand-red transition-all duration-[1500ms] ease-out -z-10 shadow-[0_0_10px_rgba(227,30,36,0.8)]"
              style={{ height: inView ? "calc(100% - 40px)" : "0%" }}
             />
              {NODES.map((node, i) => (
                <div 
                  key={i} 
                  className="flex items-center gap-3 transition-all duration-700"
                  style={{ 
                    opacity: inView ? 1 : 0, 
                    transform: inView ? "translateX(0)" : "translateX(-15px)",
                    transitionDelay: `${i * 200}ms` 
                  }}
                >
                  <div className="w-4 h-4 rounded-full bg-ink border-[2px] border-brand-red shadow-[0_0_12px_rgba(227,30,36,0.6)] shrink-0 ml-[11px]" />
                  <div className="bg-white/5 border border-white/10 rounded-xl p-2.5 backdrop-blur-sm flex-1 shadow-lg">
                    <h4 className="text-white text-[13px] font-semibold mb-0.5 leading-tight">{node.title}</h4>
                    <p className="text-[11px] text-muted leading-snug">{node.desc}</p>
                  </div>
                </div>
              ))}
           </div>

           {/* Right Column (Mobile Destination Phone) */}
           <div 
            className="relative z-20 shrink-0 transition-all duration-1000 ease-out"
            style={{ 
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(20px)",
              transitionDelay: "1000ms"
            }}
          >
            <div className="w-[120px] aspect-[9/16] bg-black rounded-[18px] border-[5px] border-ink-blue shadow-2xl overflow-hidden relative">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[50px] h-[12px] bg-ink-blue rounded-b-[6px] z-20" />
               <Image 
                 src="/images/mockup-telugu.webp" 
                 alt="Tehelka News Feed" 
                 fill 
                 className="object-cover opacity-90" 
               />
            </div>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-brand-red text-white text-[9px] font-bold px-3 py-1.5 rounded-full whitespace-nowrap shadow-xl uppercase tracking-wider">
              Your Feed
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
