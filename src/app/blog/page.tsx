import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="min-h-[60vh] pt-32 pb-16 flex flex-col items-center justify-center text-center bg-ink text-white">
        <div className="container mx-auto px-5 lg:px-6 relative z-10">
          <h1 className="text-4xl font-bold mb-6 text-white">Blog</h1>
          <p className="text-lg text-white/80">Coming soon.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
