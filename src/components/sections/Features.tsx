import React from "react";
import { Target, Globe2, Type, PlaySquare, UserCircle2, Share2 } from "lucide-react";

const FEATURES = [
  {
    icon: <Target size={24} className="text-brand-red" strokeWidth={1.5} />,
    title: "Hyperlocal targeting",
    desc: "News curated precisely down to your district and locality.",
  },
  {
    icon: <Globe2 size={24} className="text-brand-red" strokeWidth={1.5} />,
    title: "8+ languages",
    desc: "Read natively in Telugu, Tamil, Hindi, and more regional languages.",
  },
  {
    icon: <Type size={24} className="text-brand-red" strokeWidth={1.5} />,
    title: "Short-format news",
    desc: "60-word summaries saving you time without missing the facts.",
  },
  {
    icon: <PlaySquare size={24} className="text-brand-red" strokeWidth={1.5} />,
    title: "Video & photo",
    desc: "Rich media galleries and vertical videos built right into your feed.",
  },
  {
    icon: <UserCircle2 size={24} className="text-brand-red" strokeWidth={1.5} />,
    title: "Personalized feed",
    desc: "An intelligent algorithm that learns what matters to you.",
  },
  {
    icon: <Share2 size={24} className="text-brand-red" strokeWidth={1.5} />,
    title: "Share & WhatsApp",
    desc: "Native integrations to seamlessly forward stories to your network.",
  },
];

export function Features() {
  return (
    <section className="py-24 md:py-32 bg-paper">
      <div className="container mx-auto max-w-[1000px] px-5 lg:px-6">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="max-w-2xl mx-auto">
            Everything a local reader needs — nothing they don&apos;t.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 md:gap-y-16">
          {FEATURES.map((feature, i) => (
             <div 
               key={i} 
               className={`flex items-start gap-5 pb-8 md:pb-0 ${i !== FEATURES.length - 1 && i !== FEATURES.length - 2 ? 'border-b border-border md:border-b-0' : ''} ${i % 2 === 0 ? 'md:border-r md:border-border md:pr-12' : ''}`}
             >
               <div className="shrink-0 mt-1">{feature.icon}</div>
               <div>
                 <h4 className="text-xl text-ink font-semibold mb-2">{feature.title}</h4>
                 <p className="text-muted leading-relaxed">{feature.desc}</p>
               </div>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
