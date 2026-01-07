"use client";

import { useState } from "react";

type Feedback = {
  score: number;
  strengths: string[];
  weaknesses: string[];
  improvements: string[];
};

export default function InterviewPage() {
  const [role, setRole] = useState("frontend");
  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState<string | null>(null);
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [evaluating, setEvaluating] = useState(false);

  async function startInterview() {
    setLoading(true);
    setQuestion(null);
    setAnswer("");
    setFeedback(null);

    try {
      const res = await fetch("/api/interview/question", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      setQuestion(data.question);
    } catch (err) {
      console.error(err);
      alert("Failed to generate question");
    } finally {
      setLoading(false);
    }
  }

  async function submitAnswer() {
    if (!question || !answer.trim()) return;

    setEvaluating(true);
    setFeedback(null);

    try {
      const res = await fetch("/api/interview/evaluate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question, answer, role }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error();

      setFeedback(data);
    } catch (err) {
      console.error(err);
      alert("Failed to evaluate answer");
    } finally {
      setEvaluating(false);
    }
  }

  return (
    <section className="max-w-3xl">
      <h2 className="text-2xl font-bold mb-4">AI Mock Interview</h2>

      {/* ROLE SELECTION */}
      {!question && (
        <div className="space-y-4">
          <label className="block text-sm text-slate-400">
            Select role
          </label>

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10"
          >
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="fullstack">Full Stack</option>
          </select>

          <button
            onClick={startInterview}
            disabled={loading}
            className="mt-4 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-indigo-500 text-black font-semibold disabled:opacity-60"
          >
            {loading ? "Starting..." : "Start Interview"}
          </button>
        </div>
      )}

      {/* QUESTION + ANSWER */}
      {question && (
        <div className="mt-8 space-y-4">
          <p className="font-semibold">Question</p>

          <div className="rounded-lg border border-white/10 bg-white/5 p-4">
            {question}
          </div>

          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Type your answer here..."
            rows={5}
            className="w-full mt-4 px-4 py-3 rounded-lg bg-white/5 border border-white/10"
          />

          <button
            onClick={submitAnswer}
            disabled={evaluating || !answer.trim()}
            className="mt-4 px-6 py-3 rounded-lg bg-indigo-500 text-black font-semibold disabled:opacity-60"
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
        </div>
      )}
    </section>
  );
}

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
