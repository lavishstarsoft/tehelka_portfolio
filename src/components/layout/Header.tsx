"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button, cn } from "../ui/Button";

const NAV_LINKS = [
  { label: "Product", href: "/#product" },
  { label: "Coverage", href: "/#coverage" },
  { label: "Technology", href: "/#technology" },
  { label: "About", href: "/#about" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
          isScrolled
            ? "bg-ink/95 backdrop-blur-md shadow-sm border-white/5 py-4"
            : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto max-w-[1200px] px-5 lg:px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative z-50 flex items-center shrink-0">
              <Image
                src="/images/logo.png"
                alt="Tehelka News Logo"
                width={140}
                height={32}
                className="h-8 w-auto object-contain"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8 ml-auto mr-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors relative group",
                    isScrolled ? "text-paper/80 hover:text-paper" : "text-paper/90 hover:text-white"
                  )}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand-red transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center gap-4 relative z-50">
              <Button 
                className="hidden md:inline-flex shrink-0"
                onClick={() => {
                  document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get the App
              </Button>
              <button
                className="md:hidden p-2 -mr-2 text-paper focus:outline-none"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-ink/40 backdrop-blur-sm transition-opacity duration-300 md:hidden",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className={cn(
            "absolute right-0 top-0 bottom-0 w-4/5 max-w-sm bg-ink border-l border-white/10 shadow-2xl p-6 flex flex-col transition-transform duration-300 ease-out",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mt-20 flex flex-col gap-6 flex-1">
            {NAV_LINKS.map((link, i) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-2xl font-semibold text-paper hover:text-brand-red transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  transitionDelay: isMobileMenuOpen ? `${100 + i * 50}ms` : "0ms",
                  opacity: isMobileMenuOpen ? 1 : 0,
                  transform: isMobileMenuOpen ? "translateX(0)" : "translateX(20px)",
                  transition: "all 0.4s ease-out",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-auto pt-6 border-t border-white/10">
            <Button 
              className="w-full"
              onClick={() => {
                setIsMobileMenuOpen(false);
                document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get the App
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
