import React from "react";
import Image from "next/image";
import { Button } from "../ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-ink text-paper">
      {/* Subtle radial background */}
      <div className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-red rounded-full blur-[120px] opacity-[0.06] pointer-events-none" />

      <div className="container mx-auto max-w-[1200px] px-5 lg:px-6 relative z-10 h-full flex flex-col justify-center">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Copy */}
          <div className="w-full md:w-[55%] flex flex-col items-center md:items-start text-center md:text-left mt-12 md:mt-0">
            <h1 className="mb-6">
              Hyperlocal news, built for every Indian language.
            </h1>
            <p className="text-paper/80 text-lg md:text-xl mb-10 max-w-[500px]">
              A modern mobile-media company delivering short, local news in the language you think in.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto">Download App</Button>
              <Button size="lg" variant="ghost" className="w-full sm:w-auto text-paper hover:bg-white/10 hover:text-paper border-white/20 border">
                Explore the product
              </Button>
            </div>
          </div>

          {/* Right: Device Mockups */}
          <div className="w-full md:w-[45%] relative mt-16 md:mt-0 flex justify-center md:justify-end">
            <div className="relative w-full max-w-[320px] md:max-w-full aspect-[4/5] flex items-center justify-center">

              {/* Background Left Phone (Hindi) */}
              <div className="hidden md:block absolute top-[10%] left-[5%] w-[260px] aspect-[9/16] bg-ink rounded-[32px] border-[8px] border-black/80 shadow-[0_20px_60px_rgba(0,0,0,0.5)] -rotate-[12deg] overflow-hidden opacity-70 z-0 scale-90 blur-[1px]">
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-[24px] bg-black/80 rounded-b-[16px] z-20" />
                 <Image
                  src="/images/mockup-hindi.jpeg"
                  alt="Tehelka News Hindi Feed"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Background Right Phone (Telugu) */}
              <div className="hidden md:block absolute top-[5%] right-[0%] w-[260px] aspect-[9/16] bg-ink rounded-[32px] border-[8px] border-black/80 shadow-[0_20px_60px_rgba(0,0,0,0.5)] rotate-[10deg] overflow-hidden opacity-80 z-0 scale-95 blur-[0.5px]">
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-[24px] bg-black/80 rounded-b-[16px] z-20" />
                 <Image
                  src="/images/mockup-telugu.webp"
                  alt="Tehelka News Telugu Feed"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Main front phone */}
              <div className="relative z-10 w-[280px] md:w-[320px] aspect-[9/16] bg-ink rounded-[36px] border-[10px] border-black shadow-[0_30px_60px_rgba(0,0,0,0.4)] overflow-hidden flex flex-col transition-transform hover:scale-[1.02] duration-700">
                {/* Dynamic Island / Notch area */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[28px] bg-black rounded-b-[18px] z-20" />

                <Image
                  src="/images/mockup-english.webp"
                  alt="Tehelka News English Feed"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
