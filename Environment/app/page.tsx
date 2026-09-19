import { About } from '@/sections/About';
import { Hero } from '@/sections/Hero';
import { Navbar } from '@/components/Navbar';

export default function HomePage() {
  return (
    <main className="bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <About />
    </main>
  );
}
