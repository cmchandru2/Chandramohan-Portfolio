
import { GoogleGenAI, Type } from "@google/genai";
import { AICaseStudy } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function generateCaseStudy(title: string, category: string, description: string): Promise<AICaseStudy> {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Generate a professional and creative case study for a project titled "${title}" in the category of "${category}". The current brief is: "${description}". Use a tone that would impress potential high-end clients.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          challenge: { type: Type.STRING, description: 'The creative challenge faced during the project.' },
          solution: { type: Type.STRING, description: 'The innovative solution or technique used.' },
          outcome: { type: Type.STRING, description: 'The successful result or impact of the work.' }
        },
        required: ['challenge', 'solution', 'outcome']
      }
    }
  });

  const text = response.text.trim();
  try {
    return JSON.parse(text) as AICaseStudy;
  } catch (e) {
    console.error("Failed to parse AI response", e);
    return {
      challenge: "Developing a unique visual language that stands out in a crowded digital landscape.",
      solution: "Implemented cutting-edge techniques tailored specifically to the project's core goals.",
      outcome: "A high-impact final deliverable that exceeded client expectations and elevated brand value."
    };
  }
}
