import Link from "next/link";
import { ReactNode } from "react";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#0B0F1A]">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/10 bg-[#0E1324] p-6 flex flex-col">
        <div className="font-bold text-lg mb-8">
          <span className="text-cyan-400">&lt;/&gt;</span> InterviewAI
        </div>

        <nav className="space-y-4 text-sm flex-1">
          <SidebarLink href="/dashboard">Dashboard</SidebarLink>
          <SidebarLink href="/dashboard/interview">
            AI Interview
          </SidebarLink>
          <SidebarLink href="/dashboard/dsa-patterns">
            DSA Patterns
          </SidebarLink>
          <SidebarLink href="/dashboard/history">
            History
          </SidebarLink>
        </nav>

        {/* Logout Button */}
        <div className="mt-auto pt-6 border-t border-white/10">
          <Link
            href="/"
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-red-400 hover:bg-red-500/10 hover:text-red-300 transition w-full"
          >
            <LogoutIcon />
            Logout
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="h-16 border-b border-white/10 flex items-center px-8">
          <h1 className="text-sm text-slate-300">
            AI Interview Preparation Platform
          </h1>
        </header>

        {/* Page Content */}
        <main className="p-8">{children}</main>
      </div>
    </div>
  );
}

function SidebarLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="block px-3 py-2 rounded-lg text-slate-300 hover:bg-white/5 hover:text-white transition"
    >
      {children}
    </Link>
  );
}

function LogoutIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" y1="12" x2="9" y2="12" />
    </svg>
  );
}
