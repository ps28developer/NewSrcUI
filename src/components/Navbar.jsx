import React, { useState, useEffect } from 'react';
import { Compass, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'How it works', href: 'problem' },
    { name: 'See It in Action', href: 'destinations' },
    { name: 'About us', href: 'about' },
  ];

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header id="navbar" className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div 
        id="navbarInner"
        className={`mx-auto max-w-7xl w-full px-5 sm:px-8 lg:px-12 flex items-center justify-between transition-all duration-300 ${
          isScrolled 
            ? 'bg-navy-950/80 backdrop-blur-2xl h-16 shadow-lg rounded-2xl'             : 'h-20'
        }`}
      >
        {/* Logo */}
        <a 
          href="/" 
          className="flex items-center gap-2 font-display font-bold tracking-tight text-xl"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <span className="inline-flex items-center justify-center">
            <Compass className="h-6 w-6 text-indigo-400" />
          </span>
          <span>Travellingo</span>
        </a>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/75">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              className="nav-underline hover:text-white transition-colors" 
              href={`#${link.href}`}
              onClick={(e) => handleScrollTo(e, link.href)}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a 
            href="#early-access" 
            className="px-5 py-2.5 rounded-full bg-indigo-500 text-white font-semibold shadow-glow hover:brightness-110 hover:-translate-y-0.5 transition-all"
            onClick={(e) => handleScrollTo(e, 'early-access')}
          >
            Join Early Access
          </a>
        </div>

        {/* Mobile hamburger */}
        <button 
          id="menuBtn"
          className="md:hidden inline-flex items-center justify-center h-11 w-11 rounded-xl bg-white/10 ring-1 ring-white/10 backdrop-blur hover:bg-white/15 transition-colors"
          aria-label="Open menu"
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu panel */}
      <div id="mobileMenu" className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="mx-auto w-full px-5 sm:px-8 lg:px-12 pb-6 pt-2">
          <div className="rounded-3xl bg-navy-950 shadow-2xl ring-1 ring-white/10 p-4">
            <div className="grid gap-2 text-sm text-white/80">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  className="rounded-2xl px-4 py-3 hover:bg-white/10 transition-colors" 
                  href={`#${link.href}`}
                  onClick={(e) => handleScrollTo(e, link.href)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                className="mt-2 rounded-2xl px-4 py-3 bg-white text-navy-950 font-semibold text-center hover:opacity-90 transition-opacity"
                href="#early-access"
                onClick={(e) => handleScrollTo(e, 'early-access')}
              >
                Join Early Access
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
