import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon; // Accepting a component reference instead of a string
}

export default function FeatureCard({
  title,
  description,
  icon: Icon, // Rename prop to capitalize it for usage as JSX
}: FeatureCardProps) {
  return (
    <div className="group relative bg-gradient-to-b from-black/5 to-white/5 dark:from-white/5 dark:to-transparent p-px rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="relative h-full bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm rounded-[15px] p-6 hover:bg-white/80 dark:hover:bg-neutral-900/80 transition-colors duration-300">
        
        {/* Icon */}
        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-500 mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6" />
        </div>

        {/* Content */}
        <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          {description}
        </p>

        {/* Subtle Gradient Overlay on Hover */}
        <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 rounded-[15px] transition-colors duration-300 pointer-events-none" />
      </div>
    </div>
  );
}