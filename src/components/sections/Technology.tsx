import React from "react";
import { Zap, Languages, Smartphone } from "lucide-react";

const PILLARS = [
  {
    icon: <Zap size={24} className="text-brand-red" strokeWidth={1.5} />,
    title: "Real-time delivery",
    desc: "A globally distributed architecture ensuring sub-second content delivery.",
  },
  {
    icon: <Languages size={24} className="text-brand-red" strokeWidth={1.5} />,
    title: "Multilingual engine",
    desc: "Native support for complex Indic scripts, rendering beautifully on any device.",
  },
  {
    icon: <Smartphone size={24} className="text-brand-red" strokeWidth={1.5} />,
    title: "Mobile-first performance",
    desc: "Highly optimized media pipelines reducing bandwidth while maximizing quality.",
  },
];

export function Technology() {
  return (
    <section id="technology" className="py-24 md:py-32 bg-ink-blue text-paper overflow-hidden relative">
      <div className="container mx-auto max-w-[1200px] px-5 lg:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Col: Pillars */}
          <div className="lg:col-span-6">
             <h2 className="mb-16">Fast, reliable, and built for scale.</h2>
             <div className="flex flex-col gap-10">
                {PILLARS.map((pillar, i) => (
                  <div key={i} className="flex gap-5">
                     <div className="shrink-0 mt-1">{pillar.icon}</div>
                     <div>
                        <h4 className="text-xl font-semibold mb-2">{pillar.title}</h4>
                        <p className="text-muted text-base">{pillar.desc}</p>
                     </div>
                  </div>
                ))}
             </div>
          </div>

          {/* Right Col: Abstract System Illustration */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end mt-8 lg:mt-0">
             <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
                {/* Thin-line abstract illustration */}
                <div className="absolute inset-0 rounded-full border border-white/5 animate-[spin_60s_linear_infinite]" />
                <div className="absolute inset-8 rounded-full border border-white/10 animate-[spin_40s_linear_infinite_reverse]" />
                <div className="absolute inset-16 rounded-full border border-brand-red/20 border-dashed animate-[spin_30s_linear_infinite]" />
                
                {/* Center Node */}
                <div className="w-24 h-24 rounded-full bg-ink flex items-center justify-center border border-white/20 shadow-[0_0_40px_rgba(227,30,36,0.15)] relative z-10">
                   <div className="w-12 h-12 rounded-full bg-brand-red/20 flex items-center justify-center">
                      <div className="w-4 h-4 bg-brand-red rounded-full" />
                   </div>
                </div>

                {/* Connecting Lines & Outer Nodes */}
                {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                   <div 
                     key={i} 
                     className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"
                     style={{ transform: `rotate(${deg}deg)` }}
                   >
                      <div className="absolute right-[10%] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-ink border border-white/30" />
                   </div>
                ))}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
