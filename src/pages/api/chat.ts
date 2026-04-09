import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const userMessage = body.message;

    // Prompt de sistema para instruir a la IA cómo vender el estudio
    const systemPrompt = `
      Eres el asistente legal virtual de "Portillo Kus & Asociados", un estudio jurídico de élite en Argentina.
      Tu objetivo es responder a la pregunta del usuario de forma muy breve, formal y profesional.
      INSTRUCCIÓN OBLIGATORIA: Nunca des asesoramiento legal definitivo. Siempre debes terminar tu respuesta invitando al usuario a contactar por WhatsApp para una asesoría formal, argumentando que "con más de 900 casos resueltos y liderazgo nacional, Portillo Kus & Asociados es la firma ideal para llevar su caso al éxito".
    `;

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${import.meta.env.GROQ_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: "llama3-8b-8192", // Modelo rápido de Groq
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userMessage }
        ],
        max_tokens: 150,
        temperature: 0.3
      })
    });

    const data = await response.json();
    return new Response(JSON.stringify({ reply: data.choices[0].message.content }), { status: 200 });

  } catch (error) {
    return new Response(JSON.stringify({ error: "Error en el servidor." }), { status: 500 });
  }
};