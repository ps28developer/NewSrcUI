import React from 'react';
import { Ticket, Map, NotebookPen, MessagesSquare, Newspaper } from 'lucide-react';

const Problem = () => {
  const problems = [
    { icon: <Ticket className="h-6 w-6" />, text: 'Booking here', bg: 'bg-indigo-50', textCol: 'text-indigo-600' },
    { icon: <Map className="h-6 w-6" />, text: 'Maps there', bg: 'bg-emerald-50', textCol: 'text-emerald-600' },
    { icon: <NotebookPen className="h-6 w-6" />, text: 'Notes everywhere', bg: 'bg-amber-50', textCol: 'text-amber-600' },
    { icon: <MessagesSquare className="h-6 w-6" />, text: 'WhatsApp for group trips', bg: 'bg-violet-50', textCol: 'text-violet-600' },
    { icon: <Newspaper className="h-6 w-6" />, text: 'Random blogs for tips', bg: 'bg-pink-50', textCol: 'text-pink-600' },
  ];

  return (
    <section id="problem" className="bg-white text-slate-900 pt-14 sm:pt-16 pb-6 sm:pb-8">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="text-center" data-reveal>
          <div className="text-xs font-semibold tracking-widest text-indigo-600">THE PROBLEM</div>
          <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl">Most trips start with twelve open browser tabs.</h2>
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-7 md:gap-0 md:divide-x md:divide-slate-200 items-start" data-reveal>
          {problems.map((item, idx) => (
            <div key={idx} className="text-center md:px-8">
              <div className={`mx-auto h-14 w-14 rounded-2xl ${item.bg} ${item.textCol} ring-1 ring-slate-200 flex items-center justify-center`}>
                {item.icon}
              </div>
              <div className="mt-3 text-xs text-slate-600" dangerouslySetInnerHTML={{ __html: item.text.replace('for ', 'for<br />') }}></div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center text-sm text-slate-600" data-reveal>It shouldn't be this hard.</div>
      </div>
    </section>
  );
};

export default Problem;
