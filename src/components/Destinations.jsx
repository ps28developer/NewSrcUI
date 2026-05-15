import React from 'react';
import veniceFallback from '../assets/images/venice-fallback.jpg';
import mapImage from '../assets/map.jpg';

const Destinations = () => {
  return (
    <section id="see-it-in-action" className="bg-white text-slate-900 pt-16 sm:pt-20 pb-12 sm:pb-16">
      <div className="page-container">
        <div className="text-center" data-reveal>
          <div className="text-sm font-semibold tracking-widest text-indigo-600">SEE IT IN ACTION</div>
          <h2 className="mt-3 font-display font-bold text-4xl sm:text-5xl">What 3 days in Venice looks like with Travellingo</h2>
        </div>

        <div
          className="mt-12 grid grid-cols-1 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] gap-8 items-start"
          data-reveal
        >
          <div className="min-w-0">
            <div className="relative">
              <div className="absolute left-5 top-2 bottom-2 w-px bg-slate-200" aria-hidden />

              <div className="space-y-8">
                <div className="relative flex gap-5">
                  <div className="relative z-10 h-10 w-10 shrink-0 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold shadow-sm">
                    P
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-lg">Parking Suggestion</div>
                    <div className="text-sm text-slate-600">Best option: Tronchetto Parking</div>
                    <div className="text-sm text-slate-600">Reserve for €35/day</div>
                  </div>
                </div>

                <div className="relative flex gap-5">
                  <div className="relative z-10 h-10 w-10 shrink-0 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold shadow-sm">
                    W
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-lg">Water Taxi to Apartment</div>
                    <div className="text-sm text-slate-600">Line 2 • 15 min • €9.50</div>
                    <div className="text-sm text-slate-600">Get off at San Marco</div>
                  </div>
                </div>

                <div className="relative flex gap-5">
                  <div className="relative z-10 h-10 w-10 shrink-0 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold shadow-sm">
                    H
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-lg">Hidden Breakfast Spot</div>
                    <div className="text-sm text-slate-600">Rosa Salva Bakery</div>
                    <div className="text-sm text-slate-600">2 min walk • Local favorite</div>
                  </div>
                </div>

                <div className="relative flex gap-5">
                  <div className="relative z-10 h-10 w-10 shrink-0 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold shadow-sm">
                    AI
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-lg">AI Reminder</div>
                    <div className="text-sm text-slate-600">Leave in 10 min</div>
                    <div className="text-sm text-slate-600">To arrive on time for your tour</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="min-w-0">
            <div className="relative rounded-[2rem] overflow-hidden border border-slate-100">
              <img
                src={mapImage}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = veniceFallback;
                }}
                alt="destination view"
                className="w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
