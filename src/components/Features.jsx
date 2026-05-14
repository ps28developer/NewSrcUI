import React from 'react';
import { Briefcase, MessagesSquare, Star, Users, Heart } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: 'Smart Trip Planner',
      desc: 'Plan multi-city trips in minutes. We handle the routing.',
      color: 'bg-blue-500/15 text-blue-600'
    },
    {
      icon: <MessagesSquare className="h-6 w-6" />,
      title: 'Live Travel Assistant',
      desc: 'Get nudges when traffic shifts, when a stop runs late, or when something better opens up nearby.',
      color: 'bg-emerald-500/15 text-emerald-600'
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: 'Local Insider AI',
      desc: "Find the bakery your hotel won't tell you about.",
      color: 'bg-amber-500/15 text-amber-600'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Group Travel',
      desc: 'Share plans, manage expenses and stay in sync with your group.',
      color: 'bg-violet-500/15 text-violet-600'
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: 'Trip Memories',
      desc: 'Look back on past trips. Get suggestions for your next one.',
      color: 'bg-pink-500/15 text-pink-600'
    }
  ];

  return (
    <section id="how-it-works" className="bg-white text-slate-900 pt-8 sm:pt-10 pb-6 sm:pb-8">
      <div className="mx-auto max-w-7xl w-full px-5 sm:px-8 lg:px-12">
        <div className="text-center" data-reveal>
          <div className="text-xs font-semibold tracking-widest text-indigo-600">THE SOLUTION</div>
          <h2 className="mt-3 font-display font-bold text-4xl sm:text-5xl mx-auto">Everything for your trip, in one place.</h2>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-5" data-reveal>
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-white shadow-[0_10px_40px_rgba(2,6,23,0.08)] ring-1 ring-slate-200 p-6 text-center hover:-translate-y-1 transition"
            >
              <div className={`mx-auto h-12 w-12 rounded-full ${feature.color} flex items-center justify-center`}>
                {feature.icon}
              </div>
              <div className="mt-4 font-semibold text-sm">{feature.title}</div>
              <div className="mt-2 text-xs text-slate-600">{feature.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
