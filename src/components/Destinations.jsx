import React from 'react';
import { Ship, Star } from 'lucide-react';

const Destinations = () => {
  return (
    <section id="destinations" className="bg-white text-slate-900 pt-16 sm:pt-20 pb-6 sm:pb-8">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="text-center" data-reveal>
          <div className="text-xs font-semibold tracking-widest text-indigo-600">SEE IT IN ACTION</div>
          <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl">What 3 days in Venice looks like with Travellingo</h2>
        </div>

        <div className="mt-10 grid lg:grid-cols-12 gap-10 items-center" data-reveal>
          {/* Left: vertical checklist */}
          <div className="lg:col-span-4 pl-3 sm:pl-4 lg:pl-6">
            <div className="relative pl-2">
              {/* connector line */}
              <div className="absolute left-6 top-2 bottom-2 w-px bg-slate-200"></div>

              <div className="space-y-7">
                <div className="relative flex gap-5">
                  <div className="relative z-10 h-10 w-10 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold shadow-sm">
                    P
                  </div>
                  <div>
                    <div className="font-semibold">Parking Suggestion</div>
                    <div className="text-sm text-slate-600">Best option: Tronchetto Parking</div>
                    <div className="text-sm text-slate-600">Reserve for €35/day</div>
                  </div>
                </div>

                <div className="relative flex gap-5">
                  <div className="relative z-10 h-10 w-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold shadow-sm">
                    W
                  </div>
                  <div>
                    <div className="font-semibold">Water Taxi to Apartment</div>
                    <div className="text-sm text-slate-600">Line 2 • 15 min • €9.50</div>
                    <div className="text-sm text-slate-600">Get off at San Marco</div>
                  </div>
                </div>

                <div className="relative flex gap-5">
                  <div className="relative z-10 h-10 w-10 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold shadow-sm">
                    H
                  </div>
                  <div>
                    <div className="font-semibold">Hidden Breakfast Spot</div>
                    <div className="text-sm text-slate-600">Rosa Salva Bakery</div>
                    <div className="text-sm text-slate-600">2 min walk • Local favorite</div>
                  </div>
                </div>

                <div className="relative flex gap-5">
                  <div className="relative z-10 h-10 w-10 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold shadow-sm">
                    AI
                  </div>
                  <div>
                    <div className="font-semibold">AI Reminder</div>
                    <div className="text-sm text-slate-600">Leave in 10 min</div>
                    <div className="text-sm text-slate-600">To arrive on time for your tour</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: map card with floating preview */}
          <div className="lg:col-span-8">
            <div className="relative rounded-[28px] bg-white border border-slate-200 shadow-[0_18px_70px_rgba(2,6,23,0.10)] overflow-hidden">
              {/* map image */}
              <img 
                src="/src/assets/map_mockup.png"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://images.unsplash.com/photo-1526481280695-3c687fd5432c?auto=format&fit=crop&w=2200&q=80'; }}
                alt="Venice map mock" 
                className="h-[320px] sm:h-[380px] w-full object-cover" 
                loading="lazy" 
              />

              {/* overlays: route + pins */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-white/25 via-transparent to-transparent"></div>

                {/* route (simple dashed line) */}
                <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1000 600" preserveAspectRatio="none">
                  <path 
                    d="M230,260 C330,220 390,330 470,310 C560,285 585,350 670,335" 
                    fill="none"
                    stroke="rgba(99,102,241,0.65)" 
                    strokeWidth="6" 
                    strokeLinecap="round" 
                    strokeDasharray="10 12" 
                  />
                </svg>

                {/* pins */}
                <div className="absolute left-[22%] top-[44%]">
                  <div className="h-12 w-12 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold shadow-lg">
                    P
                  </div>
                </div>
                <div className="absolute left-[48%] top-[48%]">
                  <div className="h-12 w-12 rounded-full bg-sky-500 text-white flex items-center justify-center shadow-lg">
                    <Ship className="h-6 w-6" />
                  </div>
                </div>
                <div className="absolute left-[70%] top-[55%]">
                  <div className="h-12 w-12 rounded-full bg-amber-500 text-white flex items-center justify-center shadow-lg">
                    <Star className="h-6 w-6" />
                  </div>
                </div>

                {/* floating preview card */}
                <div className="absolute right-8 top-1/2 -translate-y-1/2 w-64 bg-white/90 backdrop-blur border border-slate-200 rounded-2xl shadow-[0_16px_50px_rgba(2,6,23,0.20)] overflow-hidden">
                  <div className="p-3">
                    <img
                      src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1200&q=80"
                      alt="Evening in Venice" 
                      className="h-28 w-full rounded-xl object-cover" 
                      loading="lazy" 
                    />
                  </div>
                  <div className="px-4 pb-4">
                    <div className="font-semibold">Evening in Venice</div>
                    <div className="mt-1 text-sm text-slate-600">Sunset gondola ride</div>
                    <div className="mt-1 text-sm text-slate-600">18:30 • €80</div>
                    <button className="mt-4 w-full rounded-xl bg-indigo-500 py-2.5 text-sm font-semibold text-white hover:brightness-110 transition">
                      Add to Plan
                    </button>
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

export default Destinations;
