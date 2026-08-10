import React from "react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-ink pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto max-w-[1200px] px-5 lg:px-6">

        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-20">

          {/* Left Side: Brand, About, Socials */}
          <div className="flex flex-col max-w-[400px]">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logo.png"
                alt="Tehelka News Logo"
                width={140}
                height={32}
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-muted text-[15px] leading-relaxed mb-8">
              A modern mobile-media company delivering short, local news in the language you think in. Tehelka empowers people with clear, compelling news — making it easier to share, understand, and act on.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-5">
              <a href="#" className="text-paper hover:text-brand-red transition-colors" aria-label="Twitter">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
              <a href="#" className="text-paper hover:text-brand-red transition-colors" aria-label="Instagram">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-paper hover:text-brand-red transition-colors" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Side: Closely Grouped Link Columns */}
          <div className="flex flex-wrap md:flex-nowrap gap-12 md:gap-20">
            {/* Column 1 */}
            <div className="flex flex-col min-w-[120px]">
              <h4 className="text-paper font-semibold mb-6 text-base">Product</h4>
              <ul className="flex flex-col gap-4">
                <li><Link href="/#features" className="text-muted hover:text-paper transition-colors text-[15px]">Features</Link></li>
                <li><Link href="/#languages" className="text-muted hover:text-paper transition-colors text-[15px]">Languages</Link></li>
                <li><Link href="/#coverage" className="text-muted hover:text-paper transition-colors text-[15px]">Coverage</Link></li>
                <li><Link href="/#download" className="text-muted hover:text-paper transition-colors text-[15px]">Download</Link></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col min-w-[120px]">
              <h4 className="text-paper font-semibold mb-6 text-base">Resources</h4>
              <ul className="flex flex-col gap-4">
                <li><Link href="/tutorials" className="text-muted hover:text-paper transition-colors text-[15px]">Tutorials</Link></li>
                <li><Link href="/blog" className="text-muted hover:text-paper transition-colors text-[15px]">Blog</Link></li>
                <li><Link href="/support" className="text-muted hover:text-paper transition-colors text-[15px]">Support</Link></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col min-w-[120px]">
              <h4 className="text-paper font-semibold mb-6 text-base">Company</h4>
              <ul className="flex flex-col gap-4">
                <li><Link href="/#about" className="text-muted hover:text-paper transition-colors text-[15px]">About</Link></li>
                <li><Link href="/careers" className="text-muted hover:text-paper transition-colors text-[15px]">Careers</Link></li>
                <li><Link href="/contact" className="text-muted hover:text-paper transition-colors text-[15px]">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col-reverse md:flex-row justify-between items-center gap-6">
          <p className="text-muted text-[13px]">
            © {new Date().getFullYear()} Tehelka News. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/privacy-policy" className="text-muted hover:text-paper transition-colors text-[13px] underline decoration-muted/50 underline-offset-4">Privacy Policy</Link>
            <Link href="/terms" className="text-muted hover:text-paper transition-colors text-[13px] underline decoration-muted/50 underline-offset-4">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
