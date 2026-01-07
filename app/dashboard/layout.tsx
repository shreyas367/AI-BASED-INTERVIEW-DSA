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
      <aside className="w-64 border-r border-white/10 bg-[#0E1324] p-6">
        <div className="font-bold text-lg mb-8">
          <span className="text-cyan-400">&lt;/&gt;</span> InterviewAI
        </div>

        <nav className="space-y-4 text-sm">
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
