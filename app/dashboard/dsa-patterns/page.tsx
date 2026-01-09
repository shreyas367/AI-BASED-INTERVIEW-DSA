// dashboard/dsa-patterns/page.tsx
import Link from "next/link";
import { dsaProblems } from "@/lib/dsaPatterns";

const topics = [
  { key: "array", name: "Arrays", icon: "📊" },
  { key: "string", name: "Strings", icon: "🔤" },
  { key: "linked-list", name: "Linked List", icon: "🔗" },
  { key: "stack", name: "Stack", icon: "📚" },
  { key: "queue", name: "Queue", icon: "🚶" },
  { key: "heap", name: "Heap / Priority Queue", icon: "⛰️" },
  { key: "binary-search", name: "Binary Search", icon: "🔍" },
  { key: "binary-tree", name: "Binary Tree", icon: "🌳" },
  { key: "bst", name: "Binary Search Tree", icon: "🌲" },
  { key: "graph", name: "Graphs", icon: "🕸️" },
  { key: "dp", name: "Dynamic Programming", icon: "🧩" },
  { key: "hashing", name: "Hashing", icon: "#️⃣" },
  { key: "sliding-window", name: "Sliding Window", icon: "🪟" },
];

export default function DSAPatternTopicsPage() {
  return (
    <section className="max-w-6xl">
      <h2 className="text-2xl font-bold mb-2">DSA Patterns</h2>
      <p className="text-slate-400 mb-6">
        Select a topic to view its most important patterns.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {topics.map((topic) => {
          const problemCount = dsaProblems[topic.key]?.length || 0;

          return (
            <Link
              key={topic.key}
              href={`/dashboard/dsa-patterns/${topic.key}`}
              className="rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 hover:border-indigo-500/50 transition group"
            >
              <span className="text-2xl">{topic.icon}</span>
              <p className="font-semibold mt-2 group-hover:text-indigo-400 transition">
                {topic.name}
              </p>
              <p className="text-sm text-slate-500 mt-1">
                {problemCount} problems →
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
