import { NextResponse } from "next/server";
import { generateInterviewQuestion } from "@/lib/ai";

export async function POST(req: Request) {
  try {
    const { role } = await req.json();

    if (!role) {
      return NextResponse.json(
        { message: "Role is required" },
        { status: 400 }
      );
    }

    const question = await generateInterviewQuestion(role);

    return NextResponse.json({
      question,
    });
  } catch (error) {
    console.error("AI_QUESTION_ERROR", error);
    return NextResponse.json(
      { message: "Failed to generate question" },
      { status: 500 }
    );
  }
}
