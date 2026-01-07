"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// --- 1. The Animation Engine (Internal Helper) ---
function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: `rgba(15,23,42,${0.1 + i * 0.03})`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full text-slate-950 dark:text-white"
        viewBox="0 0 696 316"
        fill="none"
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.03}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

// --- 2. The Hero Component (Your Content + New Design) ---
export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-950">
      
      {/* A. Animated Background Layers */}
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      {/* B. Your Original Glow Effect (Preserved) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.15),transparent_60%)] pointer-events-none" />

      {/* C. Your Content Container */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* 1. Badge */}
          <span className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-1.5 rounded-full bg-white/5 border border-black/10 dark:border-white/10 text-cyan-600 dark:text-cyan-400 mb-6 backdrop-blur-sm shadow-sm">
             <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
             AI-Powered Interview Prep
          </span>

          {/* 2. Heading */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-8 tracking-tighter text-slate-900 dark:text-white">
            Ace Your Next{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-indigo-600 bg-clip-text text-transparent">
              Technical Interview
            </span>
          </h1>

          {/* 3. Description */}
          <p className="mt-6 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            AI evaluates your answers in real time, identifies weak topics, and
            creates a personalized path to interview success.
          </p>

          {/* 4. Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            
            {/* Primary Button (With Glass/Gradient Border Wrapper) */}
            <div className="inline-block group relative bg-gradient-to-b from-black/10 to-white/10 dark:from-white/10 dark:to-black/10 p-px rounded-2xl backdrop-blur-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Link
                href="/register"
                className="rounded-[1.15rem] px-8 py-4 text-lg font-semibold backdrop-blur-md bg-cyan-500 text-white hover:bg-cyan-400 transition-all duration-300 group-hover:-translate-y-0.5 border border-white/10 flex items-center gap-2"
              >
                Start Practicing
                <ArrowRight className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </Link>
            </div>

            {/* Secondary Button */}
            <Link
              href="#how"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-slate-600 dark:text-slate-200 hover:bg-black/5 dark:hover:bg-white/5 transition border border-transparent hover:border-black/10 dark:hover:border-white/10 font-medium"
            >
              See How It Works
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}