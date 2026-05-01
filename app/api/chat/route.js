import OpenAI from "openai";

const client = new OpenAI({
  baseURL: "https://router.huggingface.co/v1",
  apiKey: process.env.HUGGINGFACE_API_KEY,
});

export async function POST(req) {
  const { message } = await req.json();

  const stream = await client.chat.completions.create({
    model: "zai-org/GLM-5:novita",
    messages: [{ role: "user", content: message }],
    stream: true,
  });

  // const chatCompetition = await client.chat.completions.create({
  //   model: "zai-org/GLM-5:novita",
  //   messages: [{ role: "user", content: message }],
  // });

  const encoder = new TextEncoder();

  const readableStream = new ReadableStream({
    async start(controller) {
      for await (const chunk of stream) {
        const content = chunk.choices?.[0]?.delta?.content || "";
        controller.enqueue(encoder.encode(content));
      }

      controller.close();
    },
  });

  return new Response(readableStream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
