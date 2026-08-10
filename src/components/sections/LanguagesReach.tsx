"use client";

import React from "react";

const LANGUAGES = [
  "తెలుగు", // Telugu
  "தமிழ்", // Tamil
  "ಕನ್ನಡ", // Kannada
  "मराठी", // Marathi
  "हिन्दी", // Hindi
  "English",
  "ગુજરાતી", // Gujarati
  "മലയാളം", // Malayalam
];

export function LanguagesReach() {
  return (
    <section className="py-24 md:py-32 bg-offwhite overflow-hidden relative">
      
      {/* Subtle Background Language Pills */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex flex-col justify-evenly opacity-[0.04]">
         {[0, 1, 2, 3, 4].map((row) => (
           <div 
             key={row} 
             className="flex whitespace-nowrap" 
             style={{ 
               animation: `marquee ${40 + row * 10}s linear infinite ${row % 2 === 0 ? 'normal' : 'reverse'}`,
               marginLeft: row % 2 === 0 ? '-10%' : '-20%'
             }}
           >
              {[...LANGUAGES, ...LANGUAGES, ...LANGUAGES, ...LANGUAGES].map((lang, j) => (
                <span 
                  key={j} 
                  className="mx-4 px-6 py-2 rounded-full border-2 border-ink text-ink font-bold text-2xl"
                >
                  {lang}
                </span>
              ))}
           </div>
         ))}
      </div>

      <div className="container mx-auto max-w-[1200px] px-5 lg:px-6 relative z-10 text-center">
        <h2 className="mb-16 text-ink relative z-20">One platform. Many Indian languages.</h2>

        <div className="flex flex-col items-center justify-center relative">
           
           {/* New Round Concentric Graphic */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] pointer-events-none flex items-center justify-center opacity-40">
              <div className="absolute inset-0 rounded-full border border-ink/10 animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-10 md:inset-16 rounded-full border border-ink/20 animate-[spin_40s_linear_infinite_reverse]" />
              <div className="absolute inset-20 md:inset-32 rounded-full border border-brand-red/20 border-dashed animate-[spin_30s_linear_infinite]" />
              <div className="absolute inset-28 md:inset-44 rounded-full bg-ink/5" />
           </div>

           <div className="text-[120px] md:text-[200px] font-display font-bold text-ink leading-none mb-12 tracking-tighter relative z-20">
             08+
           </div>

           {/* Main Foreground Marquee */}
           <div className="w-[100vw] relative left-1/2 -translate-x-1/2 flex overflow-hidden mask-edges z-20">
              <div className="flex whitespace-nowrap animate-marquee">
                 {[...LANGUAGES, ...LANGUAGES, ...LANGUAGES].map((lang, i) => (
                    <span 
                      key={i} 
                      className="mx-4 md:mx-6 px-6 md:px-8 py-3 md:py-4 rounded-full bg-white border border-border text-ink font-medium text-xl md:text-2xl shadow-sm"
                    >
                      {lang}
                    </span>
                 ))}
              </div>
           </div>
        </div>
      </div>
      
      {/* Add custom CSS for marquee animation and fade masks */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .mask-edges {
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
      `}} />
    </section>
  );
}
