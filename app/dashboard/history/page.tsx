export default function HistoryPage() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-2">
        Interview History
      </h2>

      <p className="text-slate-400 mb-6">
        Your past interview attempts will appear here once you start practicing.
      </p>

      <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center">
        <p className="text-slate-400">
          No interview history yet.
        </p>
        <p className="text-sm text-slate-500 mt-2">
          Complete a few AI interviews to see analytics here.
        </p>
      </div>
    </section>
  );
}
