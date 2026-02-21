import OpenAI from "openai";

const client = new OpenAI({
  baseURL: "https://router.huggingface.co/v1",
  apiKey: process.env.HUGGINGFACE_API_KEY,
});

export async function POST(req) {
  const { message } = await req.json();
  const chatCompetition = await client.chat.completions.create({
    model: "zai-org/GLM-5:novita",
    messages: [{ role: "user", content: message }],
  });
  return Response.json({
    reply: chatCompetition.choices[0].message.content,
  });
}
