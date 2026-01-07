import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});



export async function generateInterviewQuestion(role: string) {
  const response = await client.chat.completions.create({
    model: "gpt-4o-mini", // stable + cheap + fast
    messages: [
      {
        role: "system",
        content:
          "You are a senior technical interviewer. Ask one medium-difficulty interview question.",
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
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: `
You are a senior technical interviewer.
Evaluate answers strictly and fairly.
You MUST return valid JSON only.
Do NOT include explanations outside JSON.
        `.trim(),
      },
      {
        role: "user",
        content: `
Question:
${question}

Candidate Answer:
${answer}

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
    temperature: 0.2, // 🔒 consistent scoring
    max_tokens: 300,
  });

  const content = response.choices[0]?.message?.content;

  if (!content) {
    throw new Error("AI evaluation returned empty response");
  }

  return JSON.parse(content);
}



