import { Hero } from '@/sections/Hero.jsx';
import { Navbar } from '@/components/Navbar.jsx';

function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      {/* <Features /> */}
      {/* <Pricing /> */}
      {/* <Footer /> */}
    </main>
  );
}

export default App;
