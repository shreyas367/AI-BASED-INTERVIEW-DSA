import Link from "next/link";

const topics = [
  { key: "array", name: "Arrays" },
  { key: "string", name: "Strings" },
  { key: "linked-list", name: "Linked List" },
  { key: "stack", name: "Stack" },
  { key: "queue", name: "Queue" },
  { key: "heap", name: "Heap / Priority Queue" },
  { key: "binary-tree", name: "Binary Tree" },
  { key: "bst", name: "Binary Search Tree" },
  { key: "graph", name: "Graphs" },
  { key: "dp", name: "Dynamic Programming" },
  { key: "hashing", name: "Hashing" },
  { key: "sliding-window", name: "Sliding Window" },
];

export default function DSAPatternTopicsPage() {
  return (
    <section className="max-w-6xl">
      <h2 className="text-2xl font-bold mb-2">
        DSA Patterns
      </h2>
      <p className="text-slate-400 mb-6">
        Select a topic to view its most important patterns.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {topics.map((topic) => (
          <Link
            key={topic.key}
            href={`/dashboard/dsa-patterns/${topic.key}`}
            className="rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
          >
            <p className="font-semibold">{topic.name}</p>
            <p className="text-sm text-slate-400 mt-1">
              View patterns →
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
