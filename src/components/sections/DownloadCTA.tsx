import React from "react";
import Image from "next/image";

export function DownloadCTA() {
  return (
    <section id="download" className="pt-24 md:pt-32 bg-[#1A0A0B] text-paper overflow-hidden relative">
      {/* Red Tint Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-red/5 to-brand-red/20 pointer-events-none" />

      <div className="container mx-auto max-w-[800px] px-5 lg:px-6 relative z-10 text-center">
        <h2 className="mb-4">Get Tehelka News on your phone.</h2>
        <p className="text-paper/80 text-lg mb-10">
          Free. Available on Android and iOS.
        </p>

        {/* Badges */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
          <a href="#" className="transition-transform hover:scale-105 active:scale-95 block h-[52px] w-[170px] relative bg-black rounded-[12px] overflow-hidden shadow-lg border border-white/10">
            <Image src="/images/play-store.png" alt="Get it on Google Play" fill className="object-contain scale-[1.02]" />
          </a>
          <a href="#" className="transition-transform hover:scale-105 active:scale-95 block h-[52px] w-[170px] relative bg-black rounded-[12px] overflow-hidden shadow-lg border border-white/10">
            <Image src="/images/app-store.png" alt="Download on the App Store" fill className="object-cover scale-[1.05]" />
          </a>
        </div>

        {/* Peeking Phone */}
        <div className="relative mx-auto w-[280px] md:w-[320px] h-[300px] md:h-[400px] mt-8 overflow-hidden">
          <div className="absolute top-0 left-0 w-full aspect-[9/16] bg-ink rounded-t-[36px] border-t-[10px] border-l-[10px] border-r-[10px] border-ink shadow-[0_-20px_60px_rgba(0,0,0,0.5)] overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[28px] bg-ink rounded-b-[18px] z-20" />
            <Image
              src="/images/mockup-telugu.webp"
              alt="Tehelka News Telugu"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
