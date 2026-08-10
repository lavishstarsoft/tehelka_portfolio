import React from "react";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-paper border-t border-border">
      <div className="container mx-auto max-w-[1200px] px-5 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
           {/* Left Col: Heading & Quote */}
           <div className="lg:col-span-5">
              <h2 className="mb-10 text-balance">
                A technology company building mobile-first media.
              </h2>
              <div className="pl-6 border-l-[3px] border-brand-red">
                 <p className="text-xl md:text-2xl font-display font-medium text-ink leading-snug mb-4">
                   &quot;Our mission is to deliver the news in the language you think in, precisely from the places you care about.&quot;
                 </p>
                 <span className="text-sm font-semibold text-muted uppercase tracking-wider">
                   Tehelka News Founding Principle
                 </span>
              </div>
           </div>

           {/* Right Col: Manifesto */}
           <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="prose prose-lg text-ink/80 prose-p:leading-relaxed">
                 <p className="mb-6">
                   Developed by <strong>Veeramachaneni Technologies</strong>, Tehelka News is a first-of-its-kind mobile media platform dedicated to transforming how regional audiences consume information. We recognized a fundamental disconnect between legacy news formats and modern mobile reading habits.
                 </p>
                 <p className="mb-6">
                   By building a proprietary news delivery engine, we have created an ecosystem where verified local reporters can instantly reach audiences at a hyperlocal level. Our Made-for-Mobile content strategy ensures that every story is crisp, visual, and highly relevant.
                 </p>
                 <p>
                   We are deeply committed to Indian local languages, recognizing that true digital inclusion happens only when technology speaks the language of its users. Our platform is engineered not just for scale, but for intimacy—bringing you news from your state, down to your street.
                 </p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
