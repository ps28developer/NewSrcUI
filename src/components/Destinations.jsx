import React from 'react';
import veniceFallback from '../assets/images/venice-fallback.jpg';
import veniceMain from '../assets/images/venice-main.jpg';
import mapImage from '../assets/map.jpg';

const Destinations = () => {
  return (
    <section id="destinations" className="bg-white text-slate-900 pt-16 sm:pt-20 pb-12 sm:pb-16">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="text-center" data-reveal>
          <div className="text-sm font-semibold tracking-widest text-indigo-600">SEE IT IN ACTION</div>
          <h2 className="mt-3 font-display font-bold text-4xl sm:text-5xl">What 3 days in Venice looks like with Travellingo</h2>
        </div>

        <div className="mt-12 grid lg:grid-cols-12 gap-12 items-center" data-reveal>
          <div className="lg:col-span-4 pl-2">
            <div className="relative pl-2">
              {/* connector line */}
              <div className="absolute left-6 top-2 bottom-2 w-px bg-slate-200"></div>

              <div className="space-y-8">
                <div className="relative flex gap-5">
                  <div className="relative z-10 h-10 w-10 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold shadow-sm">
                    P
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Parking Suggestion</div>
                    <div className="text-sm text-slate-600">Best option: Tronchetto Parking</div>
                    <div className="text-sm text-slate-600">Reserve for €35/day</div>
                  </div>
                </div>

                <div className="relative flex gap-5">
                  <div className="relative z-10 h-10 w-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold shadow-sm">
                    W
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Water Taxi to Apartment</div>
                    <div className="text-sm text-slate-600">Line 2 • 15 min • €9.50</div>
                    <div className="text-sm text-slate-600">Get off at San Marco</div>
                  </div>
                </div>

                <div className="relative flex gap-5">
                  <div className="relative z-10 h-10 w-10 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold shadow-sm">
                    H
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Hidden Breakfast Spot</div>
                    <div className="text-sm text-slate-600">Rosa Salva Bakery</div>
                    <div className="text-sm text-slate-600">2 min walk • Local favorite</div>
                  </div>
                </div>

                <div className="relative flex gap-5">
                  <div className="relative z-10 h-10 w-10 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold shadow-sm">
                    AI
                  </div>
                  <div>
                    <div className="font-semibold text-lg">AI Reminder</div>
                    <div className="text-sm text-slate-600">Leave in 10 min</div>
                    <div className="text-sm text-slate-600">To arrive on time for your tour</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="relative rounded-[32px] overflow-hidden border border-slate-100">
              <img 
                src={mapImage}
                onError={(e) => { e.target.onerror = null; e.target.src = veniceFallback; }}
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
