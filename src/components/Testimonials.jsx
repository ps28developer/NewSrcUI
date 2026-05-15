import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Anna K.',
      location: 'Berlin',
      desc: 'Planned 14 trips with the beta',
      text: '“Finally, an app that doesn’t just show places, but actually helps me plan my entire trip without stress.”',
      img: 'https://i.pravatar.cc/150?img=32'
    },
    {
      name: 'Mark D.',
      location: 'London',
      desc: 'Digital nomad',
      text: '“I can’t wait to have one place where my itinerary, map, and ideas are all connected.”',
      img: 'https://i.pravatar.cc/150?img=12'
    },
    {
      name: 'Sophie L.',
      location: 'Paris',
      desc: 'Weekend explorer',
      text: '“If this really works the way it looks, it’s going to replace every travel app I currently use.”',
      img: 'https://i.pravatar.cc/150?img=47'
    }
  ];

  return (
    <section className="bg-white text-slate-900 pt-10 sm:pt-12 pb-16 sm:pb-20" id="about">
      <div className="page-container">
        <div className="text-center" data-reveal>
          <div className="inline text-xs font-semibold tracking-widest text-indigo-600">
            EARLY FEEDBACK
          </div>
          <h2 className="mt-3 font-display font-bold text-4xl sm:text-5xl mx-auto">A smarter way to plan every trip</h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3" data-reveal>
          {testimonials.map((t, idx) => (
            <article
              key={idx}
              className="rounded-[2rem] bg-white border border-slate-200 shadow-[0_14px_50px_rgba(2,6,23,.08)] p-7 hover:-translate-y-1 hover:shadow-[0_18px_70px_rgba(2,6,23,.12)] transition-all"
            >
              <div className="flex items-start gap-4">
                <img className="h-10 w-10 rounded-full" src={t.img} alt={`${t.name} avatar`} loading="lazy" />
                <div className="text-sm text-slate-700 leading-relaxed">
                  {t.text}
                  <div className="mt-4 font-semibold text-slate-900">{t.name}, {t.location}</div>
                  <div className="text-xs text-slate-500">{t.desc}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
