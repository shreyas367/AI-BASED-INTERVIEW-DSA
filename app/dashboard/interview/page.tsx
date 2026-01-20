"use client";

import { useEffect, useState } from "react";

type Feedback = {
  score: number;
  strengths: string[];
  weaknesses: string[];
  improvements: string[];
};

type Role =
  | "frontend"
  | "backend"
  | "fullstack"
  | "mobile"
  | "devops"
  | "data"
  | "ml"
  | "system"
  | "sre"
  | "cloud"
  | "security";

type Difficulty = "easy" | "medium" | "hard";

const ROLES: { value: Role; label: string }[] = [
  { value: "frontend", label: "Frontend Engineer" },
  { value: "backend", label: "Backend Engineer" },
  { value: "fullstack", label: "Full Stack Engineer" },
  { value: "mobile", label: "Mobile Engineer (React Native)" },
  { value: "devops", label: "DevOps Engineer" },
  { value: "data", label: "Data Engineer" },
  { value: "ml", label: "Machine Learning Engineer" },
  { value: "system", label: "System Design" },
  { value: "sre", label: "Site Reliability Engineer" },
  { value: "cloud", label: "Cloud Engineer" },
  { value: "security", label: "Security Engineer" },
];

export default function InterviewPage() {
  const [role, setRole] = useState<Role>("frontend");
  const [difficulty, setDifficulty] = useState<Difficulty>("medium");
  const [question, setQuestion] = useState<string | null>(null);
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [loading, setLoading] = useState(false);
  const [evaluating, setEvaluating] = useState(false);
  const [questionNo, setQuestionNo] = useState(0);
  const [timeLeft, setTimeLeft] = useState(120); // seconds

  /* ---------------- TIMER ---------------- */
  useEffect(() => {
    if (!question) return;

    setTimeLeft(200);
    const timer = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timer);
          return 0;
        }
        return t - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [question]);

  /* ---------------- API HELPERS ---------------- */
  async function postJSON(url: string, body: unknown) {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Request failed");
    return data;
  }

  /* ---------------- START / NEXT QUESTION ---------------- */
  async function startInterview() {
    setLoading(true);
    setAnswer("");
    setFeedback(null);

    try {
      const data = await postJSON("/api/interview/question", {
        role,
        difficulty,
      });
      setQuestion(data.question);
      setQuestionNo((n) => n + 1);
    } catch {
      alert("Failed to load question");
    } finally {
      setLoading(false);
    }
  }

  /* ---------------- SUBMIT ANSWER ---------------- */
  async function submitAnswer() {
    if (!question || !answer.trim()) return;

    setEvaluating(true);

    try {
      const data = await postJSON("/api/interview/evaluate", {
        role,
        difficulty,
        question,
        answer,
      });
      setFeedback(data);
    } catch {
      alert("Failed to evaluate answer");
    } finally {
      setEvaluating(false);
    }
  }

  return (
    <section className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">AI Mock Interview</h2>

      {/* ROLE + DIFFICULTY */}
      {!question && (
        <div className="space-y-4">
          <label className="text-sm text-slate-400">Select role</label>

          <select
            value={role}
            onChange={(e) => setRole(e.target.value as Role)}
            className="w-full px-4 py-3 rounded-lg bg-white/5 text-white border border-white/10"
          >
            {ROLES.map((r) => (
              <option
                key={r.value}
                value={r.value}
                className="bg-slate-900 text-white"
              >
                {r.label}
              </option>
            ))}
          </select>

          <label className="text-sm text-slate-400">Difficulty</label>
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value as Difficulty)}
            className="w-full px-4 py-3 rounded-lg bg-white/5 text-white border border-white/10"
          >
            <option className="bg-slate-900" value="easy">
              Easy
            </option>
            <option className="bg-slate-900" value="medium">
              Medium
            </option>
            <option className="bg-slate-900" value="hard">
              Hard
            </option>
          </select>

          <button
            onClick={startInterview}
            disabled={loading}
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-indigo-500 text-black font-semibold"
          >
            {loading ? "Starting..." : "Start Interview"}
          </button>
        </div>
      )}

      {/* QUESTION */}
      {question && (
        <div className="mt-8 space-y-4">
          <div className="flex justify-between text-sm text-slate-400">
            <span>Question {questionNo}</span>
            <span>⏱ {timeLeft}s</span>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/5 p-4">
            {question}
          </div>

          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            rows={6}
            placeholder="Type your answer here..."
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10"
          />

          <button
            onClick={submitAnswer}
            disabled={evaluating || !answer.trim()}
            className="px-6 py-3 rounded-lg bg-indigo-500 text-black font-semibold"
          >
            {evaluating ? "Evaluating..." : "Submit Answer"}
          </button>
        </div>
      )}

      {/* FEEDBACK */}
      {feedback && (
        <div className="mt-8 space-y-4">
          <h3 className="text-xl font-bold">
            Score: {feedback.score}/10
          </h3>

          <FeedbackSection title="Strengths" items={feedback.strengths} />
          <FeedbackSection title="Weaknesses" items={feedback.weaknesses} />
          <FeedbackSection
            title="Improvements"
            items={feedback.improvements}
          />

          <button
            onClick={startInterview}
            disabled={loading}
            className="mt-6 px-6 py-3 rounded-lg bg-cyan-500 text-black font-semibold"
          >
            {loading ? "Loading..." : "Next Question"}
          </button>
        </div>
      )}
    </section>
  );
}

/* ---------------- FEEDBACK UI ---------------- */
function FeedbackSection({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div>
      <h4 className="font-semibold mb-1">{title}</h4>
      <ul className="list-disc list-inside text-slate-400">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
