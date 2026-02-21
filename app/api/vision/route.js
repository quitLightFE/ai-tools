import OpenAI from "openai";

const client = new OpenAI({
  baseURL: "https://router.huggingface.co/v1",
  apiKey: process.env.HUGGINGFACE_API_KEY,
});

export async function POST(req) {
  const { imageUrl, prompt } = await req.json();

  try {
    const completion = await client.chat.completions.create({
      model: "moonshotai/Kimi-K2.5:novita",
      messages: [
        {
          role: "user",
          content: [
            { type: "text", text: prompt },
            {
              type: "image_url",
              image_url: { url: imageUrl },
            },
          ],
        },
      ],
    });

    return Response.json({
      reply: completion.choices[0].message.content,
    });
  } catch (err) {
    return Response.json(
      { reply: "Ошибка обработки изображения" },
      { status: 500 },
    );
  }
}
