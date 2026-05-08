import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Features from './components/Features';
import Destinations from './components/Destinations';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';

function App() {
  useEffect(() => {
    // Scroll reveal animations
    const revealEls = document.querySelectorAll("[data-reveal]");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    
    revealEls.forEach((el) => revealObserver.observe(el));

    return () => {
      revealEls.forEach((el) => revealObserver.unobserve(el));
    };
  }, []);

  return (
    <div className="bg-navy-950 text-white antialiased selection:bg-indigo-500/30">
      <Navbar />
      <main id="top">
        <Hero />
        <Problem />
        <Features />
        <Destinations />
        <Testimonials />
        <CTA />
      </main>
    </div>
  );
}

export default App;
