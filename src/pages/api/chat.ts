export const prerender = false;

import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const userMessage = body.message;

    const apiKey = import.meta.env.GROQ_API_KEY;
    if (!apiKey) {
      console.error("❌ ERROR: No se encontró GROQ_API_KEY en el archivo .env");
      return new Response(JSON.stringify({ error: "Falta la clave de API" }), { status: 500 });
    }

    const systemPrompt = `
Eres el asistente legal virtual de "Portillo Kus & Asociados", un estudio jurídico boutique y de élite en Buenos Aires, Argentina.
Tu objetivo es responder consultas legales de forma muy breve, profesional, empática y persuasiva. 
Nunca des asesoramiento legal definitivo. Siempre invita al usuario a contactar por WhatsApp.

DATOS DEL ESTUDIO JURÍDICO:
- Nombre: Portillo Kus & Asociados
- Eslogan: "El Derecho es nuestra Pasión"
- Casos de éxito: Más de 900 expedientes resueltos desde 2020.
- Calificación: 5.0 estrellas en Google Maps.
- Dirección: Avenida Presidente Roque Saenz Peña 616, Piso 4, Oficina 403, C1035 CABA, San Nicolás, Buenos Aires, Argentina.
- Teléfonos / WhatsApp: (+54-9) 11-2711-1987 y (+54-9) 11-3511-1987.
- Correo: portillokusyasociados@gmail.com
- Horario de Atención: Lunes a Viernes de 09:00 a 18:00 hs.
- Redes Sociales: Instagram y Telegram (@abogadoenargentina). 
- Métodos de pago aceptados: Efectivo, Transferencia, PayPal, Mercado Pago, Zelle.

ÁREAS DE PRÁCTICA DESTACADAS:
1. Ciudadanías: Argentina (Líderes nacionales), Italiana y Española.
2. Migratorio: Residencias Mercosur/Extra-Mercosur, revocación de expulsiones, visas (EEUU y México).
3. Penal: Asistencia en comisarías, cárcel, casos complejos. Urgencias 24/7.
4. Familia: Divorcios, alimentos, régimen de visitas, autorizaciones de viaje para menores.
5. Laboral: Despidos, trabajo en negro, accidentes laborales (incluido repartidores/delivery).
6. Civil y Comercial: Daños, Veraz, alquileres, registro de pymes y marcas, trámites de escribanía.
7. Trámites Internacionales: Poderes para Venezuela, convalidación de títulos universitarios extranjeros, homologación de sentencias.
`;

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        // 👇 AQUÍ ESTÁ EL CAMBIO. USAMOS EL NUEVO MODELO DE GROQ 👇
        model: "llama-3.1-8b-instant", 
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userMessage }
        ],
        max_tokens: 150,
        temperature: 0.3
      })
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error("❌ ERROR DE GROQ:", errorData);
      return new Response(JSON.stringify({ error: "Error conectando con Groq" }), { status: 500 });
    }

    const data = await response.json();
    return new Response(JSON.stringify({ reply: data.choices[0].message.content }), { status: 200 });

  } catch (error) {
    console.error("❌ ERROR INTERNO DEL SERVIDOR:", error);
    return new Response(JSON.stringify({ error: "Error en el servidor." }), { status: 500 });
  }
};