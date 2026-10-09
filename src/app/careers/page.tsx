import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Briefcase, MapPin, Clock } from "lucide-react";

export default function CareersPage() {

  return (
    <>
      <Header />
      <main className="flex flex-col min-h-screen">
        {/* Dark Hero Section */}
        <section className="bg-ink pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-red/10 to-transparent pointer-events-none" />
          <div className="container mx-auto max-w-[1200px] px-5 lg:px-6 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Join Our Team
            </h1>
            <p className="text-lg md:text-xl text-paper/80 max-w-[600px] mx-auto">
              Help us build the mobile-first media ecosystem of the future. We are always looking for passionate individuals to join VEERAMACHINENI TECHNOLOGIES PRIVATE LIMITED.
            </p>
          </div>
        </section>

        {/* Why Join Us & Jobs Section */}
        <section className="py-20 bg-paper">
          <div className="container mx-auto max-w-[1200px] px-5 lg:px-6">
            
            <div className="text-center mb-16">
              <h2 className="text-3xl font-display font-bold text-ink mb-4">Open Positions</h2>
              <p className="text-ink/70">Find the perfect role and become part of our growing family.</p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-sm border border-border text-center max-w-[800px] mx-auto">
              <h3 className="text-xl font-medium text-ink mb-2">Currently, there are no open positions.</h3>
              <p className="text-ink/70">Please check back later for future opportunities.</p>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
