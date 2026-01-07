import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button"; // Using shadcn button for consistency

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-black/5 dark:border-white/10 bg-white/70 dark:bg-[#0B0F1A]/70 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-lg text-slate-900 dark:text-white">
          <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 text-white dark:text-black px-2 py-1 rounded-md shadow-sm">
            &lt;/&gt;
          </span>
          InterviewAI
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
          <Link href="#features" className="hover:text-cyan-500 dark:hover:text-white transition-colors">
            Features
          </Link>
          <Link href="#how" className="hover:text-cyan-500 dark:hover:text-white transition-colors">
            How it Works
          </Link>
          <Link href="#pricing" className="hover:text-cyan-500 dark:hover:text-white transition-colors">
            Pricing
          </Link>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <ModeToggle />
          
          <div className="hidden sm:flex items-center gap-4">
            <Link
              href="/login"
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-white transition-colors"
            >
              Log in
            </Link>
            <Link href="/register">
              <Button className="bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white border-0">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}