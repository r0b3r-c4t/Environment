import { About } from '@/sections/About';
import { Hero } from '@/sections/Hero';
import { Navbar } from '@/components/Navbar';
import { Contact } from '@/sections/Contact';
import { Services } from '@/sections/Services';
import { Solutions } from '@/sections/Solutions';

export default function HomePage() {
  return (
    <main className="bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Solutions />
      <Contact />
    </main>
  );
}
