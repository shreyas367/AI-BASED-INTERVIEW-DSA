import { NextResponse } from "next/server";
import { evaluateAnswer } from "@/lib/ai";

export async function POST(req: Request) {
  try {
    const { question, answer, role } = await req.json();

    if (!question || !answer || !role) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const evaluation = await evaluateAnswer(
      question,
      answer,
      role
    );

    return NextResponse.json(evaluation);
  } catch (error) {
    console.error("AI_EVALUATION_ERROR", error);
    return NextResponse.json(
      { message: "Failed to evaluate answer" },
      { status: 500 }
    );
  }
}
