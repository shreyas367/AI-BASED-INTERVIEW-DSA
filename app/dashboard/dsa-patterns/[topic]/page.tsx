"use client";

import { useState } from "react";
import { dsaProblems } from "@/lib/dsaPatterns";
import { getLeetCodeUrl } from "@/lib/leetcode";
import { useParams } from "next/navigation";

type Difficulty = "Easy" | "Medium" | "Hard";

export default function DSAPatternPage() {
  const params = useParams();

  const rawTopic = params?.topic;
  const topic =
    typeof rawTopic === "string"
      ? rawTopic
      : Array.isArray(rawTopic)
      ? rawTopic[0]
      : null;

  if (!topic) {
    return <p className="text-red-400">Invalid topic</p>;
  }

  const problems = dsaProblems[topic];
  const [progress, setProgress] = useState<Record<string, boolean>>({});

  if (!problems) {
    return <p className="text-red-400">Topic not found</p>;
  }

  function toggle(problemName: string) {
    const key = `${topic}:${problemName}`;
    setProgress((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  }

  const completedCount = Object.values(progress).filter(Boolean).length;

  return (
    <section className="max-w-5xl">
      <h2 className="text-2xl font-bold mb-2 capitalize">
        {topic.replace(/-/g, " ")} Problems
      </h2>

      <p className="text-slate-400 mb-4">
        Completed {completedCount} / {problems.length}
      </p>

      <div className="space-y-3">
        {problems.map((problem) => {
          const key = `${topic}:${problem.name}`;
          const checked = progress[key] || false;

          return (
            <div
              key={problem.name}
              className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-4 py-3"
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggle(problem.name)}
                  className="w-4 h-4 accent-indigo-500"
                />

                <span
                  className={`font-medium ${
                    checked ? "line-through text-slate-400" : ""
                  }`}
                >
                  {problem.name}
                </span>
              </div>

              {/* RIGHT SIDE: Difficulty + LeetCode link */}
              <div className="flex items-center gap-3">
                <DifficultyBadge difficulty={problem.difficulty} />

                <a
                  href={getLeetCodeUrl(problem.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-indigo-400 hover:text-indigo-300 underline"
                >
                  LeetCode →
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function DifficultyBadge({ difficulty }: { difficulty: Difficulty }) {
  const colors: Record<Difficulty, string> = {
    Easy: "bg-green-500/20 text-green-400",
    Medium: "bg-yellow-500/20 text-yellow-400",
    Hard: "bg-red-500/20 text-red-400",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold ${colors[difficulty]}`}
    >
      {difficulty}
    </span>
  );
}
