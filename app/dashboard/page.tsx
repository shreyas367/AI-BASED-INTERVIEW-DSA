export default function DashboardPage() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-2">
        Welcome to your Dashboard
      </h2>
      <p className="text-slate-400">
        Track your interview practice and improve with AI feedback.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <DashboardCard
          title="AI Interviews"
          value="Start practicing"
        />
        <DashboardCard
          title="Average Score"
          value="—"
        />
        <DashboardCard
          title="Weak Topics"
          value="—"
        />
      </div>
    </section>
  );
}

function DashboardCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-6">
      <p className="text-sm text-slate-400">{title}</p>
      <p className="mt-2 text-lg font-semibold">{value}</p>
    </div>
  );
}
