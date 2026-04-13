import OpenAI from "openai";

const client = new OpenAI({
  // Ensure you add GROQ_API_KEY to your .env or Vercel settings
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

export async function generateInterviewQuestion(role: string) {
  const response = await client.chat.completions.create({
    // Using Llama 3.3 70B for high-quality technical questions
    model: "llama-3.3-70b-versatile", 
    messages: [
      {
        role: "system",
        content: "You are a senior technical interviewer. Ask one medium-difficulty interview question.",
      },
      {
        role: "user",
        content: `Generate one interview question for a ${role} developer.`,
      },
    ],
    temperature: 0.7,
  });

  return response.choices[0].message.content?.trim() || "";
}

type EvaluationResult = {
  score: number;
  strengths: string[];
  weaknesses: string[];
  improvements: string[];
};

export async function evaluateAnswer(
  question: string,
  answer: string,
  role: string
): Promise<EvaluationResult> {
  const response = await client.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      {
        role: "system",
        content: `
You are a senior technical interviewer.
Evaluate answers strictly and fairly.
You MUST return valid JSON only.
Do NOT include explanations or markdown backticks.
        `.trim(),
      },
      {
        role: "user",
        content: `
Question: ${question}
Candidate Answer: ${answer}
Role: ${role}

Return JSON in EXACT format:
{
  "score": number (0-10),
  "strengths": string[],
  "weaknesses": string[],
  "improvements": string[]
}
        `.trim(),
      },
    ],
    temperature: 0.2,
    max_tokens: 500,
    // Groq supports JSON mode to prevent parsing errors
    response_format: { type: "json_object" },
  });

  const content = response.choices[0]?.message?.content;

  if (!content) {
    throw new Error("AI evaluation returned empty response");
  }

  return JSON.parse(content);
}