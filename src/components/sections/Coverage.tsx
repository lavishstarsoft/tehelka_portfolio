import React from "react";

const STATS = [
  { value: "08", label: "Languages" },
  { value: "12", label: "States Covered" },
  { value: "250+", label: "Districts" },
  { value: "20+", label: "Categories" },
];

export function Coverage() {
  return (
    <section id="coverage" className="py-12 md:py-16 bg-paper border-b border-border">
      <div className="container mx-auto max-w-[1200px] px-5 lg:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 md:gap-0 divide-y-0 md:divide-x md:divide-border/60">
          {STATS.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center px-4">
              <span className="font-display font-semibold text-4xl md:text-5xl text-ink mb-2">
                {stat.value}
              </span>
              <span className="text-sm font-medium text-muted uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
