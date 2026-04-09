export const chatbotData = {
  welcomeMessage: "¡Hola! Soy el asistente virtual de Portillo Kus & Asociados. ¿En qué área legal podemos ayudarle hoy?",
  whatsappUrl: "https://wa.me/5491127111987",
  firmPitch: "Como líderes a nivel nacional con más de 900 expedientes resueltos, somos su mejor opción para garantizar un resultado exitoso."
};

export const aiSystemContext = `
Eres el asistente legal virtual de "Portillo Kus & Asociados", un estudio jurídico boutique y de élite en Buenos Aires, Argentina.
Tu objetivo es responder consultas legales de forma muy breve, profesional, empática y persuasiva. 

INSTRUCCIONES DE FORMATO (MARKDOWN):
- Usa **negritas** para resaltar términos legales importantes.
- Si debes enumerar algo, usa listas con viñetas (-).
- Mantén párrafos cortos y fáciles de leer.

NUNCA des asesoramiento legal definitivo. Siempre invita al usuario a contactar por WhatsApp.

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
5. Laboral: Despidos, trabajo en negro, accidentes laborales.
6. Civil y Comercial: Daños, Veraz, alquileres, registro de pymes y marcas, trámites de escribanía.
7. Trámites Internacionales: Poderes para Venezuela, convalidación de títulos, homologación de sentencias.
`;

export const faqs = [
  {
    keywords: ["ubicación", "ubicacion", "dónde", "donde", "oficina", "dirección", "direccion", "horario", "abierto", "cierran", "abren", "sede", "lugar", "capital", "caba"],
    answer: "Nuestra sede principal se encuentra en **Av. Pte. R. Sáenz Peña 616, Piso 4, Oficina 403 (C1035), CABA**.\n\nAtendemos de **Lunes a Viernes de 09:00 a 18:00 hs**."
  },
  {
    keywords: ["contacto", "telefono", "teléfono", "llamar", "celular", "email", "correo", "redes", "instagram", "facebook", "telegram", "uvenar"],
    answer: "Puede contactarnos por WhatsApp al **(+54-9) 11-2711-1987** o al correo **portillokusyasociados@gmail.com**.\n\nSíganos en Instagram o Telegram como **@abogadoenargentina**."
  },
  {
    keywords: ["precio", "costo", "honorarios", "pagar", "consulta", "valor", "cuanto sale", "cuánto sale", "cobran", "medios de pago", "transferencia", "zelle", "paypal"],
    answer: "Cada caso es único y requiere un análisis profesional detallado para presupuestarlo.\n\nAceptamos múltiples métodos de pago internacionales y locales:\n- Efectivo\n- Transferencia\n- PayPal\n- Mercado Pago\n- Zelle."
  },
  {
    keywords: ["ciudadanía", "ciudadania", "italiana", "española", "nacionalidad", "argentina", "pasaporte", "dni", "naturalización", "naturalizacion", "carta de ciudadania"],
    answer: "Somos líderes a nivel nacional en trámites de **Ciudadanía Argentina**, con más de 900 expedientes resueltos. También brindamos asesoramiento integral para tramitar la **Ciudadanía Italiana** y **Española**."
  },
  {
    keywords: ["migración", "migraciones", "visa", "expulsión", "expulsion", "residencia", "radicación", "radicacion", "precaria", "deportación", "eeuu", "americana", "mexico", "méxico"],
    answer: "Somos expertos en Derecho Migratorio. Gestionamos residencias (Mercosur y Extra-Mercosur), revertimos órdenes de expulsión y asesoramos para la obtención de **Visas Americanas y Mexicanas**."
  },
  {
    keywords: ["penal", "preso", "comisaría", "comisaria", "cárcel", "carcel", "delito", "defensa", "urgencia", "emergencia", "madrugada", "detenido", "allanamiento"],
    answer: "Contamos con un equipo experto en **Defensa Penal**. Logramos resultados extraordinarios en casos complejos. \n\nAtendemos **urgencias las 24 horas**, asistiendo en comisarías e instancias críticas."
  },
  {
    keywords: ["divorcio", "familia", "alimentos", "cuota", "hijos", "visitas", "adopción", "menores", "viaje", "autorización", "separación", "separacion", "curatela"],
    answer: "Nuestro equipo de Familia maneja casos de **divorcios, cuota alimentaria, régimen de visitas, tutelas** y autorizaciones de viaje de menores al exterior, garantizando absoluta confidencialidad y contención."
  },
  {
    keywords: ["laboral", "trabajo", "despido", "negro", "renuncia", "indemnización", "indemnizacion", "accidente", "art", "delivery", "rappi", "pedidosya", "repartidor"],
    answer: "Dignificamos a los trabajadores. Asesoramos en **despidos, trabajo no registrado (en negro)** y accidentes laborales, con atención especial a reclamos de trabajadores de aplicaciones de delivery (Rappi, PedidosYa)."
  },
  {
    keywords: ["alquiler", "inquilino", "propietario", "desalojo", "contrato", "daños", "perjuicios", "veraz", "deuda", "estafa", "consumidor", "civil"],
    answer: "Intervenimos en **conflictos de alquileres** (revisión de contratos y desalojos), demandas por daños y perjuicios, defensa del consumidor y limpieza de antecedentes financieros (salir del Veraz)."
  },
  {
    keywords: ["empresa", "pyme", "marca", "registro", "sociedad", "comercial", "escribano", "escribanía", "escribania", "firma", "habilitación", "local"],
    answer: "Impulsamos su negocio: gestionamos el **registro de marcas, habilitaciones comerciales y constitución de pymes**. Además, ofrecemos servicios notariales (Escribanía) para certificaciones y escrituras."
  },
  {
    keywords: ["venezuela", "venezolano", "venezolanos", "poder", "poderes", "título", "titulo", "convalidación", "convalidacion", "apostilla", "homologación", "extranjero"],
    answer: "Asistimos activamente a la comunidad extranjera: redactamos **poderes con validez en Venezuela**, gestionamos la convalidación de títulos universitarios y homologación de sentencias extranjeras en Argentina."
  }
];