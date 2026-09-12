import { Hero } from '@/sections/Hero.jsx';
import { About } from '@/sections/About.jsx';
import { Navbar } from '@/components/Navbar.jsx';

function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <About />
      {/* <Features /> */}
      {/* <Pricing /> */}
      {/* <Footer /> */}
    </main>
  );
}

export default App;
