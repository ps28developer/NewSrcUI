import React from 'react';
import {
  ArrowRight,
  Plane,
  Coffee,
  Users,
  Sunset,
  Globe2,
  Wand2,
  Zap,
  Map,
  ShieldCheck,
  Compass,
  MapPinned,
  MapPin,
  Heart,
  Play,
} from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import heroCard1 from '../assets/images/hero-card-1.jpg';
import heroCard2 from '../assets/images/hero-card-2.jpg';

const easeOut = [0.22, 1, 0.36, 1];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: easeOut },
  },
});

const floatY = (duration, delay, reduce) =>
  reduce
    ? {}
    : {
        animate: { y: [0, -8, 0] },
        transition: { duration, repeat: Infinity, ease: 'easeInOut', delay },
};

function TravelPathDefs() {
  return (
    <defs>
      <linearGradient id="heroPath" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#6366f1" stopOpacity="0.75" />
        <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.65" />
      </linearGradient>
      <linearGradient id="heroPathViolet" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#6366f1" stopOpacity="0.5" />
      </linearGradient>
      <filter id="pathGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="1.2" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <filter id="nodeGlow" x="-100%" y="-100%" width="300%" height="300%">
        <feGaussianBlur stdDeviation="1.5" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  );
}

function BottomLeftRouteMap() {
  const routePoints = [
    [72, 118],
    [168, 108],
    [248, 82],
    [328, 52],
    [396, 38],
  ];

  return (
    <motion.div
      className="pointer-events-none absolute -left-6 -right-4 top-[-8px] bottom-[-28px] z-0 sm:-left-4 sm:-right-8 lg:-right-16"
      aria-hidden
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9, delay: 0.4 }}
    >
      <motion.div
        className="absolute bottom-0 left-0 h-[150px] w-[min(520px,115%)] sm:h-[165px]"
        style={{ transform: 'perspective(1100px) rotateX(22deg) rotateZ(-3deg)', transformOrigin: 'bottom left' }}
      >
        <svg viewBox="0 0 440 150" className="h-full w-full overflow-visible" fill="none">
          <defs>
            <pattern id="heroMapGrid" width="28" height="28" patternUnits="userSpaceOnUse">
              <path d="M 28 0 L 0 0 0 28" fill="none" stroke="rgba(99,102,241,0.14)" strokeWidth="0.5" />
            </pattern>
            <linearGradient id="routeNeon" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.75" />
            </linearGradient>
            <linearGradient id="routeNeonSoft" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.35" />
            </linearGradient>
            <filter id="routeNeonGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <rect x="0" y="0" width="440" height="150" fill="url(#heroMapGrid)" opacity="0.45" />

          <path
            d="M 40 95 Q 120 70 200 75 T 360 42"
            fill="none"
            stroke="url(#routeNeonSoft)"
            strokeWidth="1.2"
            strokeDasharray="4 6"
            strokeLinecap="round"
            opacity="0.55"
          />

          <path
            d="M 72 118 Q 120 112 168 108 T 248 82 T 328 52 T 396 38"
            fill="none"
            stroke="url(#routeNeon)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#routeNeonGlow)"
          />

          {routePoints.map(([cx, cy], i) => (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r={i === 0 || i === routePoints.length - 1 ? 2.5 : 2}
              fill="#e0e7ff"
              opacity={0.85}
            />
          ))}

          {/* Start Pin - High Fidelity refined style */}
          <g transform="translate(72, 118)" opacity="1">
            <circle r="12" fill="#6366f1" opacity="0.15" filter="blur(2px)" />
            <path
              d="M 0 -14 C 6 -14 10 -8 10 0 C 10 8 0 16 0 16 C 0 16 -10 8 -10 0 C -10 -8 -6 -14 0 -14 Z"
              fill="#818cf8"
              filter="url(#routeNeonGlow)"
            />
            <circle cy="-6" r="3.5" fill="white" shadow="0 0 8px rgba(255,255,255,0.8)" />
          </g>

          {/* End Pin - High Fidelity refined style */}
          <g transform="translate(396, 38)" opacity="1">
            <circle r="12" fill="#a78bfa" opacity="0.15" filter="blur(2px)" />
            <path
              d="M 0 -14 C 6 -14 10 -8 10 0 C 10 8 0 16 0 16 C 0 16 -10 8 -10 0 C -10 -8 -6 -14 0 -14 Z"
              fill="#c084fc"
              filter="url(#routeNeonGlow)"
            />
            <circle cy="-6" r="3.5" fill="white" shadow="0 0 8px rgba(255,255,255,0.8)" />
          </g>
        </svg>
      </motion.div>
    </motion.div>
  );
}

function ShowcaseTravelPaths({ reduce }) {
  return (
    <>
      <svg
        className="pointer-events-none absolute inset-0 z-[15] h-full w-full overflow-visible"
        viewBox="0 0 720 540"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden
      >
        <TravelPathDefs />
        <path
          d="M 100 420 L 650 40"
          stroke="#7dd3fc"
          strokeWidth="1.2"
          strokeDasharray="2 5"
          opacity="0.35"
          filter="url(#pathGlow)"
        />
        <path
          d="M 360 40 Q 520 -10 680 50"
          stroke="#7dd3fc"
          strokeWidth="2.0"
          strokeDasharray="3 9"
          strokeLinecap="round"
          filter="url(#pathGlow)"
          opacity="0.88"
        />
        <path
          d="M 268 38 Q 210 52 155 88 T 70 165 Q 40 215 55 285"
          stroke="#7dd3fc"
          strokeWidth="1.6"
          strokeDasharray="3 8"
          strokeLinecap="round"
          filter="url(#pathGlow)"
          opacity="0.78"
        />
        <path
          d="M 268 38 Q 330 65 395 115 T 500 195"
          stroke="url(#heroPathViolet)"
          strokeWidth="1"
          strokeDasharray="2 7"
          strokeLinecap="round"
          filter="url(#pathGlow)"
          opacity="0.38"
        />
        {[
          [268, 38],
          [155, 88],
          [70, 165],
          [650, 45]
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="2" fill="#a5b4fc" filter="url(#nodeGlow)" opacity="0.75" />
        ))}
      </svg>
      <motion.div
        className="pointer-events-none absolute left-[11%] top-[20%] z-[16] sm:left-[13%]"
        {...(reduce
          ? {}
          : { animate: { y: [0, -5, 0] }, transition: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' } })}
        aria-hidden
      >
        <Plane className="h-4 w-4 -rotate-[32deg] text-sky-200/90 drop-shadow-[0_0_12px_rgba(56,189,248,0.85)]" />
      </motion.div>
    </>
  );
}

function FrontPhonePathAccent() {
  return (
    <svg
      className="pointer-events-none absolute -right-3 top-6 z-[25] h-[7.5rem] w-14 overflow-visible sm:-right-4 sm:top-5 sm:h-32 sm:w-16"
      viewBox="0 0 64 128"
      fill="none"
      aria-hidden
    >
      <path
        d="M 6 118 Q 28 42 52 14"
        stroke="#7dd3fc"
        strokeWidth="1.8"
        strokeDasharray="3 7"
        strokeLinecap="round"
        opacity="0.88"
      />
      <path
        d="M 6 118 Q 28 42 52 14"
        stroke="#38bdf8"
        strokeWidth="5"
        strokeDasharray="3 7"
        strokeLinecap="round"
        opacity="0.12"
        filter="blur(4px)"
      />
      <circle cx="52" cy="14" r="2.5" fill="#7dd3fc" opacity="0.9" />
    </svg>
  );
}


function HeroBackground({ reduce }) {
  return (
    <motion.div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {/* Base */}
      <div className="absolute inset-0 bg-[#020617]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-[#020617] to-[#010409]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_15%_0%,rgba(99,102,241,0.28),transparent_55%)]" />
      <motion.div
        className="absolute right-[5%] top-[18%] h-[min(620px,65vw)] w-[min(620px,65vw)] rounded-full bg-indigo-600/28 blur-[140px]"
        {...(reduce
          ? {}
          : { animate: { opacity: [0.35, 0.55, 0.35] }, transition: { duration: 8, repeat: Infinity } })}
      />
      <motion.div
        className="absolute right-[12%] top-[28%] h-[min(500px,50vw)] w-[min(500px,50vw)] rounded-full bg-violet-600/22 blur-[110px]"
        {...(reduce
          ? {}
          : { animate: { opacity: [0.25, 0.45, 0.25] }, transition: { duration: 10, repeat: Infinity, delay: 1.5 } })}
      />
      <div className="absolute left-[-8%] bottom-[8%] h-[min(480px,48vw)] w-[min(480px,48vw)] rounded-full bg-sky-600/12 blur-[120px]" />
      <motion.div className="absolute right-[35%] top-[42%] h-[280px] w-[280px] rounded-full bg-fuchsia-600/10 blur-[90px]" />
      <motion.div className="absolute left-[18%] top-[32%] h-32 w-32 rounded-full bg-indigo-500/8 blur-3xl" />
      <div className="absolute right-[30%] bottom-[32%] h-32 w-32 rounded-full bg-sky-500/8 blur-3xl" aria-hidden />


      <motion.div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_32%,rgba(2,6,23,0.92)_100%)]" />
      <motion.div className="absolute inset-0 bg-gradient-to-r from-[#020617]/80 via-transparent to-[#020617]/50" />

      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(56,189,248,0.35) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139,92,246,0.25) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 70% 55% at 75% 55%, black 10%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 55% at 75% 55%, black 10%, transparent 75%)',
        }}
      />

      <svg
        className="absolute inset-0 h-full w-full opacity-45"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <TravelPathDefs />

        <path
          d="M 98 15 Q 85 5 70 25 T 45 60 T 10 85"
          fill="none"
          stroke="url(#heroPath)"
          strokeWidth="0.12"
          strokeDasharray="0.8 1.5"
          strokeLinecap="round"
          filter="url(#pathGlow)"
          opacity="0.4"
        />
        <path
          d="M 5 20 Q 30 10 55 35 T 85 70"
          fill="none"
          stroke="url(#heroPathViolet)"
          strokeWidth="0.1"
          strokeDasharray="0.6 1.4"
          strokeLinecap="round"
          filter="url(#pathGlow)"
          opacity="0.3"
        />
        <path
          d="M 95 40 Q 80 60 65 85"
          fill="none"
          stroke="url(#heroPath)"
          strokeWidth="0.14"
          strokeDasharray="1 2"
          strokeLinecap="round"
          filter="url(#pathGlow)"
          opacity="0.35"
        />
        {/* Path nodes along routes */}
        {[
          [98, 15], [70, 25], [45, 60],
          [5, 20], [85, 70]
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="0.25" fill="#818cf8" filter="url(#nodeGlow)" opacity={0.5} />
        ))}
      </svg>


      <div className="absolute bottom-[14%] left-[8%] h-28 w-36 rounded-full bg-violet-600/20 blur-3xl" aria-hidden />

      {/* Particles */}
      {[
        { t: '18%', l: '10%', d: 0, s: 2 },
        { t: '28%', l: '24%', d: 0.5, s: 3 },
        { t: '14%', l: '48%', d: 1, s: 2 },
        { t: '42%', l: '78%', d: 0.3, s: 2 },
        { t: '55%', l: '65%', d: 0.8, s: 3 },
        { t: '72%', l: '88%', d: 1.2, s: 2 },
        { t: '38%', l: '38%', d: 0.6, s: 1.5 },
        { t: '65%', l: '42%', d: 1.5, s: 2 },
        { t: '22%', l: '72%', d: 0.2, s: 2.5 },
        { t: '80%', l: '18%', d: 0.9, s: 2 },
      ].map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-sky-200/80 shadow-[0_0_12px_rgba(56,189,248,0.9)]"
          style={{ top: p.t, left: p.l, width: p.s, height: p.s }}
          {...(reduce
            ? {}
            : {
                animate: { opacity: [0.1, 0.85, 0.1], scale: [1, 1.2, 1] },
                transition: { duration: 3.5 + (i % 3), repeat: Infinity, delay: p.d },
              })}
        />
      ))}
    </motion.div>
  );
}


function GlassCard({ className, children, delay = 0, floatDuration = 5.5, floatDelay = 0, reduce }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay, ease: easeOut }}
    >
      <motion.div
        className="rounded-2xl border border-white/[0.12] bg-[rgba(8,12,28,0.55)] p-3 shadow-[0_16px_48px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-2xl"
        whileHover={reduce ? {} : { scale: 1.02, borderColor: 'rgba(255,255,255,0.2)' }}
        {...floatY(floatDuration, floatDelay, reduce)}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

function ProgressBar({ percent, color }) {
  const gradients = {
    green: 'from-emerald-400 to-teal-400',
    violet: 'from-violet-400 to-fuchsia-400',
    orange: 'from-orange-400 to-amber-400',
  };
  return (
    <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/[0.08]">
      <div
        className={`h-full rounded-full bg-gradient-to-r ${gradients[color]} shadow-[0_0_10px_rgba(99,102,241,0.4)]`}
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}


function Phone({ image, alt, size, overlay, bottomBar, mapRoute, className }) {
  const sizes = {
    back: 'w-[208px] sm:w-[228px] md:w-[238px] h-[420px] sm:h-[460px] md:h-[480px]',
    front: 'w-[232px] sm:w-[258px] md:w-[268px] h-[450px] sm:h-[500px] md:h-[520px]',
  };

  return (
    <div
      className={`relative shrink-0 rounded-[2.75rem] bg-gradient-to-b from-white/30 via-white/10 to-white/[0.03] p-[3px] shadow-[0_50px_120px_rgba(0,0,0,0.85),0_24px_60px_rgba(0,0,0,0.5),0_0_90px_rgba(99,102,241,0.3)] ring-1 ring-white/20 ${sizes[size]} ${className}`}
    >
      <div className="relative h-full overflow-hidden rounded-[2.6rem] bg-black">
        <div className="absolute -left-[2px] top-[24%] z-20 h-7 w-[3px] rounded-l bg-white/15" />
        <div className="absolute -left-[2px] top-[34%] z-20 h-10 w-[3px] rounded-l bg-white/15" />
        <div className="absolute -right-[2px] top-[30%] z-20 h-12 w-[3px] rounded-r bg-white/15" />
        <div className="absolute left-1/2 top-3.5 z-30 h-[28px] w-[100px] -translate-x-1/2 rounded-full bg-black ring-1 ring-white/10" />
        <img src={image} alt={alt} className="h-full w-full object-cover" loading="eager" />
        {/* Gloss reflection */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-transparent opacity-50" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white/10 to-transparent" />
        {mapRoute}
        {overlay}
        {bottomBar}
      </div>
    </div>
  );
}

function MapRoute() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[5]">
      <svg className="h-full w-full" viewBox="0 0 288 560" preserveAspectRatio="none" aria-hidden>
        <defs>
          <filter id="mapPathGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          d="M 60 420 Q 120 340 144 280 T 210 120"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          filter="url(#mapPathGlow)"
          opacity="0.85"
        />
        {/* Plane icon on the path */}
        <g transform="translate(144, 280) rotate(-23.5)">
          <Plane width="20" height="20" x="-10" y="-10" className="fill-sky-400 text-white" strokeWidth={1.5} />
        </g>
        <circle cx="210" cy="120" r="10" fill="white" opacity="0.2" />
        <circle cx="210" cy="120" r="4" fill="white" />
      </svg>
    </div>
  );
}


function HeroShowcase({ reduce }) {
  return (
    <motion.div
      className="relative mx-auto w-full max-w-[720px] overflow-visible lg:ml-auto lg:mr-0 xl:max-w-[760px]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: easeOut, delay: 0.1 }}
    >
      {/* Phone cluster glow */}
      <div className="pointer-events-none absolute left-1/2 top-[46%] h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/35 blur-[110px]" aria-hidden />
      <div className="pointer-events-none absolute left-1/2 top-[50%] h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/20 blur-[80px]" aria-hidden />

      <div className="relative mx-auto h-[min(540px,78vw)] w-full max-w-[720px] overflow-visible">
        <ShowcaseTravelPaths reduce={reduce} />

        <div className="absolute left-1/2 top-0 h-full w-[min(300px,54vw)] -translate-x-1/2 sm:w-[320px] md:w-[350px]">
          <div className="absolute bottom-[6%] left-1/2 z-0 h-16 w-[85%] -translate-x-1/2 rounded-[50%] bg-black/50 blur-2xl" />
        {/* Back phone — Paris, lower & behind */}
        <motion.div
          className="absolute left-[-14%] top-[10%] z-10"
          style={{ transformOrigin: 'center center' }}
          initial={reduce ? false : { opacity: 0, x: -16 }}
          animate={{ opacity: 1, rotate: 0, x: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 18, delay: 0.15 }}
        >
          <motion.div {...floatY(7, 0.1, reduce)}>
            <Phone
              size="back"
              image={heroCard1}
              alt="Paris destination"
              overlay={
                <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/95 via-black/50 to-transparent px-4 pb-5 pt-24">
                  <p className="text-[11px] text-white/70">Paris, France · 24°C</p>
                  <p className="mt-1 font-display text-sm font-semibold text-white">
                    Your next adventure is calling.
                  </p>
                  <div className="mt-3 h-[3px] w-[46%] overflow-hidden rounded-full bg-white/[0.06]" aria-hidden>
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.65)]"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 1.1, delay: 0.5, ease: easeOut }}
                    />
                  </div>
                </div>
              }
            />
          </motion.div>
        </motion.div>

        {/* Front phone — map, forward & on top */}
        <motion.div
          className="absolute left-[30%] top-[-3%] z-20 sm:left-[32%]"
          style={{ transformOrigin: 'center center' }}
          initial={reduce ? false : { opacity: 0, rotate: 12, x: 20 }}
          animate={{ opacity: 1, rotate: 6, x: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 18, delay: 0.22 }}
        >
          <FrontPhonePathAccent />
          <motion.div {...floatY(6, 0.4, reduce)}>
            <Phone
              size="front"
              image={heroCard2}
              alt="Travellingo map"
              mapRoute={<MapRoute />}
              bottomBar={
                <div className="absolute inset-x-0 bottom-0 z-10 border-t border-white/10 bg-black/65 px-2 py-2.5 backdrop-blur-xl">
                  <div className="flex justify-between text-[9px] font-medium text-white/60 sm:text-[10px]">
                    {[
                      { Icon: Compass, label: 'Explore', active: true },
                      { Icon: MapPinned, label: 'Itinerary' },
                      { Icon: Map, label: 'Map' },
                      { Icon: Heart, label: 'Saved' },
                      { Icon: Users, label: 'Profile' },
                    ].map(({ Icon, label, active }) => (
                      <span
                        key={label}
                        className={`flex flex-col items-center gap-0.5 ${active ? 'text-sky-300' : ''}`}
                      >
                        <Icon className="h-3.5 w-3.5" />
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
              }
            />
          </motion.div>
        </motion.div>
        </div>
        
        <GlassCard className="absolute left-[-22%] top-[3%] z-30 w-[min(186px,40vw)] sm:w-[186px]" delay={0.3} reduce={reduce}>
          <div className="flex gap-2.5">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-500/20 text-sky-300 ring-1 ring-sky-400/25">
              <Plane className="h-3.5 w-3.5" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold text-white">AI-Powered Planning</p>
              <p className="text-[10px] text-slate-400">Smart itineraries in seconds</p>
              <ProgressBar percent={75} color="green" />
            </div>
</div>
        </GlassCard>

        <GlassCard
          className="absolute left-[-25%] top-[36%] z-30 w-[min(186px,40vw)] sm:w-[186px]"
          delay={0.36}
          floatDuration={6}
          floatDelay={0.15}
          reduce={reduce}
        >
          <div className="flex gap-2.5">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-500/20 text-violet-200 ring-1 ring-violet-400/25">
              <MapPin className="h-3.5 w-3.5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-white">Live Trip Assistant</p>
              <p className="text-[10px] text-slate-400">Real-time travel guidance</p>
              <ProgressBar percent={60} color="violet" />
            </div>
</div>
        </GlassCard>

        <GlassCard
          className="absolute bottom-[20%] left-[-23%] z-30 w-[min(186px,40vw)] sm:w-[186px]"
          delay={0.42}
          floatDuration={6.5}
          floatDelay={0.3}
          reduce={reduce}
        >
          <div className="flex gap-2.5">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-400/25">
              <Coffee className="h-3.5 w-3.5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-white">87% Less Planning Time</p>
              <p className="text-[10px] text-slate-400">Spend more time exploring</p>
              <ProgressBar percent={85} color="green" />
            </div>
</div>
        </GlassCard>

        <GlassCard className="absolute right-0 top-[14%] z-30 w-[min(186px,40vw)] sm:w-[186px]" delay={0.48} reduce={reduce}>
          <div className="flex gap-2.5">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-500/20 text-violet-200 ring-1 ring-violet-400/25">
              <Users className="h-3.5 w-3.5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-white">Offline Maps</p>
              <p className="text-[10px] text-slate-400">Works anywhere</p>
              <ProgressBar percent={45} color="violet" />
            </div>
</div>
        </GlassCard>

        <GlassCard
          className="absolute bottom-[18%] right-0 z-30 w-[min(186px,40vw)] sm:w-[186px]"
          delay={0.54}
          floatDuration={5.8}
          floatDelay={0.45}
          reduce={reduce}
        >
          <div className="flex gap-2.5">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-500/20 text-orange-200 ring-1 ring-orange-400/25">
              <Sunset className="h-3.5 w-3.5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-white">Your Data</p>
              <p className="text-[10px] text-slate-400">Private & Secure</p>
              <ProgressBar percent={55} color="orange" />
            </div>
</div>
        </GlassCard>
      </div>
    </motion.div>
  );
}

const STATS = [
  { icon: Globe2, value: '34+', label: 'Countries', accent: 'text-violet-400' },
  { icon: Wand2, value: '12K+', label: 'AI Itineraries Created', accent: 'text-indigo-400' },
  { icon: Zap, value: '87%', label: 'Less Planning Time', accent: 'text-sky-400' },
  { icon: Map, value: 'Offline Maps', label: 'Works Anywhere', accent: 'text-teal-400' },
  { icon: ShieldCheck, value: 'Your Data', label: 'Private & Secure', accent: 'text-green-500' },
];

const Hero = () => {
  const reduce = useReducedMotion();

  const scrollTo = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative isolate overflow-x-hidden pt-[5.5rem] md:pt-24">
      <HeroBackground reduce={reduce} />

      <motion.div className="page-container relative z-10 flex flex-col gap-4 pb-8 pt-2 md:gap-6 md:pb-10 md:pt-3">
        {/* Main grid */}
        <motion.div className="grid flex-1 grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-6 xl:gap-8">
          {/* Left column */}
          <motion.div
            className="relative flex max-w-xl flex-col lg:max-w-none lg:pr-6 xl:pr-10"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } } }}
          >
            <motion.div variants={fadeUp(0)}>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-500/30 bg-violet-500/[0.08] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-violet-200/90 shadow-[0_0_20px_rgba(139,92,246,0.25)] sm:text-[10px]">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,1)]" />
                AI Powered Travel Planner
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp(0.04)}
              className="mt-5 font-display text-[2.5rem] font-extrabold leading-[0.95] tracking-[-0.02em] sm:text-5xl md:text-[3.5rem] lg:text-[3.75rem] xl:text-[4rem]"
            >
              <span className="block text-white">Plan Less.</span>
              <span className="mt-1 block bg-gradient-to-r from-sky-300 via-indigo-300 to-violet-400 bg-clip-text text-transparent">
                Explore More.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp(0.08)}
              className="mt-4 max-w-sm text-lg font-medium text-slate-300/90 sm:text-xl"
            >
              Your{' '}
              <span className="bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text font-semibold text-transparent">
                live
              </span>{' '}
              AI travel companion.
            </motion.p>

            <motion.p
              variants={fadeUp(0.11)}
              className="mt-3 max-w-md text-[15px] leading-relaxed text-slate-400/90"
            >
              Travellingo is your AI travel companion that creates perfect trips, local experiences and stress-free
              journeys from start to finish.
            </motion.p>

            <motion.div variants={fadeUp(0.15)} className="relative z-10 mt-7 flex flex-wrap items-center gap-3">
              <motion.a
                href="#problem"
                onClick={(e) => scrollTo(e, 'problem')}
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-indigo-600 px-7 py-3 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_8px_32px_rgba(99,102,241,0.45),0_16px_48px_rgba(79,70,229,0.25)] transition-all hover:shadow-[0_0_0_1px_rgba(255,255,255,0.15),0_8px_40px_rgba(99,102,241,0.55)]"
                whileHover={reduce ? {} : { y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Planning
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </motion.a>
              <motion.a
                href="#see-it-in-action"
                onClick={(e) => scrollTo(e, 'see-it-in-action')}
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-6 py-3 text-sm font-semibold text-white/85 backdrop-blur-md transition-colors hover:border-white/20 hover:bg-white/[0.08]"
                whileHover={reduce ? {} : { y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Play className="h-4 w-4 fill-white/80" />
                Watch Demo
              </motion.a>
            </motion.div>

            <motion.div variants={fadeUp(0.2)} className="relative mt-5 min-h-[108px] w-full pb-1 sm:min-h-[118px]">
              {/* Jagged City-Grid Map Route */}
              <div className="absolute inset-0 z-0 pointer-events-none overflow-visible">
                <svg className="absolute inset-0 h-full w-full overflow-visible" fill="none">
                  <motion.path
                    d="M 40 125 L 70 145 L 160 155 L 210 185 L 245 155 L 280 155 L 280 75"
                    stroke="#818cf8"
                    strokeWidth="2"
                    strokeDasharray="0.1 10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.35"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2.2, ease: "easeInOut", delay: 1 }}
                  />
                  {/* Map nodes at turns */}
                  {[ [70, 145], [160, 155], [210, 185], [245, 155], [280, 155], [280, 115] ].map(([x, y], i) => (
                    <circle key={i} cx={x} cy={y} r="1.5" fill="#e0e7ff" opacity="0.6" />
                  ))}
                  {/* Pins integrated into SVG for perfect zoom alignment */}
                  <g transform="translate(40, 125)">
                    <foreignObject x="-10" y="-18" width="20" height="20" className="overflow-visible">
                      <motion.div 
                        className="text-indigo-400 drop-shadow-[0_0_12px_rgba(99,102,241,0.5)]"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 0.8, scale: 1 }}
                        transition={{ delay: 0.6 }}
                      >
                        <MapPin className="h-5 w-5 fill-indigo-500/20" />
                      </motion.div>
                    </foreignObject>
                  </g>

                  <g transform="translate(280, 75)">
                    <foreignObject x="-10" y="-18" width="20" height="20" className="overflow-visible">
                      <motion.div 
                        className="text-violet-400 drop-shadow-[0_0_12px_rgba(167,139,250,0.5)]"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 0.8, scale: 1 }}
                        transition={{ delay: 0.7 }}
                      >
                        <MapPin className="h-5 w-5 fill-violet-500/20" />
                      </motion.div>
                    </foreignObject>
                  </g>
                </svg>
              </div>

              <div className="relative z-10 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[12, 32, 47, 18].map((id) => (
                    <img
                      key={id}
                      src={`https://i.pravatar.cc/72?img=${id}`}
                      alt=""
                      className="h-9 w-9 rounded-full ring-2 ring-[#020617]"
                      loading="lazy"
                    />
                  ))}
                </div>
                <motion.div className="flex flex-col gap-0.5">
                  <span className="text-sm tracking-wide text-amber-400">★★★★★</span>
                  <span className="text-xs text-slate-400">Already trusted by 2,000+ early adopters</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right column */}
          <motion.div className="relative flex items-center justify-center overflow-visible lg:justify-end">
            <HeroShowcase reduce={reduce} />
          </motion.div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          className="relative z-10 mt-4 shrink-0 md:mt-6"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: easeOut }}
        >
          <div className="rounded-[2rem] border border-white/[0.08] bg-[rgba(6,10,24,0.6)] px-4 py-4 shadow-[0_24px_80px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-2xl sm:px-6 md:rounded-[2.25rem] md:px-8 md:py-5">
            <div className="flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between lg:flex-nowrap lg:gap-0">
              {STATS.map(({ icon: Icon, value, label, accent }, i) => (
                <React.Fragment key={label}>
                  <motion.div
                    className="group flex min-w-[120px] flex-1 items-center gap-3.5 px-2 py-1 sm:px-4"
                    whileHover={reduce ? {} : { y: -2 }}
                  >
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center ${accent}`}>
                      <Icon className="h-6 w-6" strokeWidth={1.5} />
                    </div>
                    <div className="flex flex-col">
                      <p className="font-display text-base font-bold leading-tight text-white md:text-[1.05rem]">{value}</p>
                      <p className="mt-0.5 text-[10px] leading-snug text-slate-400/90 sm:text-[11px]">{label}</p>
                    </div>
                  </motion.div>
                  {i < STATS.length - 1 && (
                    <div className="hidden h-8 w-px shrink-0 bg-white/[0.06] lg:block" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
