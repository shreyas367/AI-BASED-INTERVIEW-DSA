import Link from "next/link";
import { PlusCircle, Target, TrendingUp, AlertTriangle } from "lucide-react"; // Nice icons

export default function DashboardPage() {
  return (
    <section className="max-w-6xl mx-auto p-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Welcome back </h2>
          <p className="text-slate-400 mt-1">
            You've completed 0 interviews this week. Keep the momentum going!
          </p>
        </div>
        
        <Link 
          href="/dashboard/interview" 
          className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-lg font-medium transition-all"
        >
          <PlusCircle size={18} />
          New Mock Interview
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          title="Total Interviews"
          value="0" 
          icon={<Target className="text-indigo-400" size={20} />}
        />
        <DashboardCard
          title="Average Score"
          value="7.8/10"
          icon={<TrendingUp className="text-emerald-400" size={20} />}
        />
        <DashboardCard
          title="Weak Topics"
          value="Dynamic Programming"
          icon={<AlertTriangle className="text-amber-400" size={20} />}
        />
        <DashboardCard
          title="Pattern Mastery"
          value="45%"
          icon={<TrendingUp className="text-blue-400" size={20} />}
        />
      </div>

      {/* Placeholder for Recent Activity Table */}
      <div className="mt-10 rounded-xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-lg font-semibold mb-4">Recent Interviews</h3>
        <p className="text-sm text-slate-500 italic">No interviews found. Start your first session to see results here.</p>
      </div>
    </section>
  );
}

function DashboardCard({
  title,
  value,
  icon
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.07] transition-colors">
      <div className="flex items-center justify-between mb-3">
        <p className="text-sm font-medium text-slate-400">{title}</p>
        {icon}
      </div>
      <p className="text-2xl font-bold text-white">{value}</p>
    </div>
  );
}