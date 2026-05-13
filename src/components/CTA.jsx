import React, { useState } from 'react';
import { MapPin, Mail } from 'lucide-react';
import { API_BASE_URL } from '../utils/constants';
import ctaBg from '../assets/images/cta-bg.jpg';

const CTA = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');
  const [feedback, setFeedback] = useState('');

  //backend api
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'loading') return;

    setStatus('loading');
    setFeedback('');

    try {
      const res = await fetch(`${API_BASE_URL}/request-demo`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      let data = {};
      try { data = await res.json(); } catch (_) {}

      if (!res.ok) throw new Error(data.error || 'Something went wrong. Please try again.');

      setStatus('success');
      setFeedback('Successfully joined early access! Check your inbox.');
      setEmail('');
    } catch (err) {
      setStatus('error');
      setFeedback(err.message === 'Failed to fetch' ? 'Failed to connect to the server.' : err.message);
    }
  };

  // mock submit — api
  const handleMockSubmit = async (e) => {
    e.preventDefault();
    if (status === 'loading') return;
    setStatus('loading');
    await new Promise(r => setTimeout(r, 800));
    setStatus('success');
    setEmail('');
  };

  const scrollTo = (e, id) => {
    e.preventDefault();
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="early-access" className="relative overflow-hidden pt-16 sm:pt-20 pb-24">
      <div className="absolute inset-0 -z-10">
        <img
          className="h-full w-full object-cover opacity-65"
          src={ctaBg}
          alt="CTA travel background"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/75 via-navy-950/45 to-navy-950/20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/20 via-navy-950/25 to-navy-950/60"></div>
      </div>

      <div className="mx-auto w-full px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl text-center" data-reveal>
          <h2 className="font-display font-extrabold tracking-tight text-3xl sm:text-5xl text-white">Skip the planning. Get on the plane.</h2>
          <p className="mt-3 text-white/80 text-base sm:text-lg">
            Join early access and be the first to experience<br className="hidden sm:block" />
            a better way to travel.
          </p>

          <form onSubmit={handleMockSubmit} className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-2xl mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full sm:flex-1 rounded-xl bg-white/95 px-5 py-3.5 text-slate-900 placeholder-slate-500 shadow-soft focus:outline-none focus:ring-2 focus:ring-indigo-500/60"
              disabled={status === 'loading'}
            />
            <button
              type="submit"
              className="w-full sm:w-auto rounded-xl bg-indigo-500 px-6 py-3.5 font-semibold text-white shadow-glow hover:brightness-110 transition disabled:opacity-50"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Joining...' : 'Join Early Access'}
            </button>
          </form>

          {feedback && (
            <div className={`mt-4 text-sm font-medium ${status === 'success' ? 'text-emerald-400' : 'text-rose-400'}`}>
              {feedback}
            </div>
          )}

          <div className="mt-3 text-xs text-white/70">We'll only email you when there's something to try.</div>
        </div>
      </div>

      {/* page footer */}
      <footer className="absolute bottom-0 left-0 right-0 bg-black/55 backdrop-blur-xl border-t border-white/10">
        <div className="mx-auto w-full px-5 sm:px-8 lg:px-12">
          <div className="h-16 sm:h-20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <a
              href="#top"
              onClick={(e) => scrollTo(e, 'top')}
              className="flex items-center gap-2 font-display font-bold tracking-tight text-lg text-white"
            >
              <MapPin className="h-5 w-5 text-indigo-300" />
              <span>Travellingo</span>
            </a>

            <nav className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-sm text-white/75">
              <a className="hover:text-white transition-colors" href="#problem" onClick={(e) => scrollTo(e, 'problem')}>How it works</a>
              <a className="hover:text-white transition-colors" href="#destinations" onClick={(e) => scrollTo(e, 'destinations')}>See It in Action</a>
              <a className="hover:text-white transition-colors" href="#about" onClick={(e) => scrollTo(e, 'about')}>About us</a>
            </nav>

            <div className="flex items-center gap-3 text-white/80">
              <a
                className="h-9 w-9 inline-flex items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 backdrop-blur hover:bg-white/15 hover:text-white transition-colors"
                href="#"
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram text-[18px]"></i>
              </a>
              <a
                className="h-9 w-9 inline-flex items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 backdrop-blur hover:bg-white/15 hover:text-white transition-colors"
                href="#"
                aria-label="Facebook"
              >
                <i className="fa-brands fa-facebook-f text-[18px]"></i>
              </a>
              <a
                className="h-9 w-9 inline-flex items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 backdrop-blur hover:bg-white/15 hover:text-white transition-colors"
                href="#"
                aria-label="Twitter"
              >
                <i className="fa-brands fa-x-twitter text-[18px]"></i>
              </a>
              <a
                className="h-9 w-9 inline-flex items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 backdrop-blur hover:bg-white/15 hover:text-white transition-colors"
                href="#"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default CTA;
