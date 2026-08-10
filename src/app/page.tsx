import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Coverage } from "@/components/sections/Coverage";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { Ecosystem } from "@/components/sections/Ecosystem";
import { Features } from "@/components/sections/Features";
import { LanguagesReach } from "@/components/sections/LanguagesReach";
import { About } from "@/components/sections/About";
import { Technology } from "@/components/sections/Technology";
import { DownloadCTA } from "@/components/sections/DownloadCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <Hero />
        <Coverage />
        <ProductShowcase />
        <Ecosystem />
        <Features />
        <LanguagesReach />
        <About />
        <Technology />
        <DownloadCTA />
      </main>
      <Footer />
    </>
  );
}
