import React, { useEffect, useRef } from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import heroBg from '../assets/images/hero-bg.jpg';
import heroCard1 from '../assets/images/hero-card-1.jpg';
import heroCard2 from '../assets/images/hero-card-2.jpg';

const Hero = () => {
  const blobARef = useRef(null);
  const blobBRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 16;
      const y = (e.clientY / window.innerHeight - 0.5) * 16;
      
      if (blobARef.current) blobARef.current.style.transform = `translate(${x}px, ${y}px)`;
      if (blobBRef.current) blobBRef.current.style.transform = `translate(${-x}px, ${y}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen pt-24 pb-14 sm:pb-16 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img 
          className="h-full w-full object-cover"
          src={heroBg}
          alt="Scenic coastline" 
          loading="eager" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/75 to-navy-950/45"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/55 via-navy-950/35 to-navy-950/65"></div>
        <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_70%_30%,rgba(99,102,241,0.12),transparent_55%)]"></div>
      </div>

      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div 
          ref={blobARef} 
          className="absolute -top-28 -left-24 h-80 w-80 rounded-full bg-indigo-500/25 blur-3xl animate-blob"
        ></div>
        <div 
          ref={blobBRef}
          className="absolute top-6 right-[-140px] h-96 w-96 rounded-full bg-violet-500/20 blur-3xl animate-blob [animation-delay:1800ms]"
        ></div>
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl" data-reveal>
            <div className="inline-flex items-center gap-2 text-[11px] tracking-widest text-white/70">
              <span className="h-2 w-2 rounded-full bg-indigo-400"></span>
              <span className="font-semibold">AI POWERED TRAVEL PLANNER</span>
            </div>

            <h1 className="mt-5 font-display font-extrabold tracking-tight text-5xl sm:text-6xl leading-[1.02]">
              <span className="text-white">Plan Less.</span><br />
              <span className="bg-gradient-to-r from-indigo-300 to-violet-300 bg-clip-text text-transparent">Explore More.</span>
            </h1>

            <p className="mt-5 text-white/75 text-lg leading-relaxed">
              Travellingo is your AI travel companion that creates perfect trips, local experiences and stress-free
              journeys from start to finish.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a 
                href="#features"
                onClick={(e) => handleScrollTo(e, 'features')}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-500 px-7 py-3.5 font-semibold shadow-glow hover:brightness-110 transition"
              >
                Start Planning
                <ArrowRight className="h-4 w-4" />
              </a>
              <a 
                href="#demo"
                onClick={(e) => handleScrollTo(e, 'demo')}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-7 py-3.5 font-semibold ring-1 ring-white/15 backdrop-blur hover:bg-white/15 transition"
              >
                <PlayCircle className="h-5 w-5" />
                Watch Demo
              </a>
            </div>

            <div className="mt-7 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[12, 32, 47, 18].map((img) => (
                  <img 
                    key={img}
                    className="h-9 w-9 rounded-full ring-2 ring-navy-950" 
                    src={`https://i.pravatar.cc/80?img=${img}`}
                    alt="Traveler" 
                    loading="lazy" 
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-300">
                  <span>★★★★★</span>
                </div>
                <div className="text-xs text-white/65">Already trusted by 2,000 early adopters</div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block" id="demo" data-reveal>
            <div className="absolute -inset-10 bg-indigo-500/20 blur-3xl rounded-[60px]"></div>

            <div className="relative h-[540px]">
              <div className="absolute left-24 top-6 w-[280px] rotate-[-12deg] animate-floaty will-change-transform">
                <div className="rounded-[44px] bg-white/10 ring-1 ring-white/15 backdrop-blur p-3 shadow-soft">
                  <div className="relative rounded-[36px] overflow-hidden bg-white">
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 h-6 w-28 rounded-full bg-black/80"></div>
                    <img
                      src={heroCard1}
                      alt="App screen map" 
                      className="h-[520px] w-full object-cover" 
                      loading="lazy" 
                    />
                  </div>
                </div>
              </div>

              <div className="absolute right-2 bottom-8 w-[280px] rotate-[10deg] animate-floaty will-change-transform [animation-delay:1200ms]">
                <div className="rounded-[44px] bg-white/10 ring-1 ring-white/15 backdrop-blur p-3 shadow-soft">
                  <div className="relative rounded-[36px] overflow-hidden bg-white">
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 h-6 w-28 rounded-full bg-black/80"></div>
                    <img
                      src={heroCard2}
                      alt="App screen itinerary" 
                      className="h-[520px] w-full object-cover" 
                      loading="lazy" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
