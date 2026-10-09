import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Mail, MapPin, Building2 } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex flex-col min-h-screen">
        {/* Dark Hero Section */}
        <section className="bg-ink pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-red/10 to-transparent pointer-events-none" />
          <div className="container mx-auto max-w-[1200px] px-5 lg:px-6 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-paper/80 max-w-[600px] mx-auto">
              We&apos;re here to help you. For any support or queries, reach out to us and our team will get back to you shortly.
            </p>
          </div>
        </section>

        {/* Contact Content Section */}
        <section className="py-20 bg-paper">
          <div className="container mx-auto max-w-[1200px] px-5 lg:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
              
              {/* Left Column: Contact Details */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <h2 className="text-3xl font-display font-bold text-ink mb-8">Contact Information</h2>
                
                <div className="flex flex-col gap-8">
                  {/* Legal Entity */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 shrink-0 bg-brand-red/10 rounded-full flex items-center justify-center text-brand-red">
                      <Building2 size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-ink mb-1">Legal Entity Name</h4>
                      <p className="text-ink/70">VEERAMACHINENI TECHNOLOGIES PRIVATE LIMITED</p>
                      <p className="text-ink/60 text-sm">operating the Tehelka News platform</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 shrink-0 bg-brand-red/10 rounded-full flex items-center justify-center text-brand-red">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-ink mb-1">Email Us</h4>
                      <p className="text-ink/70 mb-2">For general inquiries and support.</p>
                      <a href="mailto:support@tehelkanews.in" className="text-brand-red font-medium hover:underline">
                        support@tehelkanews.in
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 shrink-0 bg-brand-red/10 rounded-full flex items-center justify-center text-brand-red">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-ink mb-1">Our Office</h4>
                      <p className="text-ink/70 leading-relaxed">
                        Flat no: G2, SB Capital Apartment, Advocate Colony,<br />
                        Atmakur, Mangalagiri, Guntur Dt,<br />
                        Andhra Pradesh 522503
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div className="lg:col-span-7">
                <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-border">
                  <h3 className="text-2xl font-semibold text-ink mb-6">Send us a Message</h3>
                  <form className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="firstName" className="text-sm font-medium text-ink">First Name</label>
                        <input 
                          type="text" 
                          id="firstName" 
                          className="px-4 py-3 rounded-xl border border-border bg-paper focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all"
                          placeholder="John"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="lastName" className="text-sm font-medium text-ink">Last Name</label>
                        <input 
                          type="text" 
                          id="lastName" 
                          className="px-4 py-3 rounded-xl border border-border bg-paper focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-sm font-medium text-ink">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="px-4 py-3 rounded-xl border border-border bg-paper focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-sm font-medium text-ink">Your Message</label>
                      <textarea 
                        id="message" 
                        rows={5}
                        className="px-4 py-3 rounded-xl border border-border bg-paper focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all resize-none"
                        placeholder="How can we help you?"
                      />
                    </div>

                    <button 
                      type="button" 
                      className="mt-2 bg-brand-red text-white py-4 px-8 rounded-xl font-medium hover:bg-brand-red/90 transition-colors active:scale-[0.98]"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
