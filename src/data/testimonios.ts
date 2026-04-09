export interface Testimonio {
  name: string;
  info: string;
  date: string;
  text: string;
  rating: number;
  reply?: string;
}

export const testimoniosData: Testimonio[] = [
  {
    name: "Yocselys Bermudez",
    info: "Local Guide · 170 reseñas",
    date: "Hace 6 meses",
    text: "Inicié mi trámite de naturalización con el Dr. Portillo y desde el primer momento me inspiró total confianza. Fue siempre muy atento, claro en cada explicación y me acompañó paso a paso durante todo el proceso. Su profesionalismo y cercanía son excepcionales.",
    rating: 5
  },
  {
    name: "Jorge Requena",
    info: "7 reseñas",
    date: "Hace un mes",
    text: "Muy recomendable el Dr. Portillo para temas migratorios. Me asesoró hace unos meses cuando tenía dudas sobre mi reingreso a Argentina y recientemente volví a consultarlo por mi trámite de actualización de residencia. Fue claro y directo.",
    rating: 5
  },
  {
    name: "Daniela Villegas",
    info: "Local Guide · 26 reseñas",
    date: "Hace 4 semanas",
    text: "Quiero agradecer profundamente al Dr. Denis Portillo por su excelente trabajo y acompañamiento durante todo mi proceso de ciudadanía argentina. Desde el inicio fue muy claro al explicar cada etapa del trámite, siempre estuvo pendiente de los avances.",
    rating: 5
  },
  {
    name: "Gladys Centeno",
    info: "Local Guide · 28 reseñas",
    date: "Hace 3 meses",
    text: "Estoy profundamente agradecida al estudio jurídico Portillo Kus & Asociados por su ayuda en el trámite de mi ciudadanía Argentina. Me acompañaron con paciencia, profesionalismo y mucha dedicación, haciendo que un proceso tan importante fuera claro y llevadero.",
    rating: 5,
    reply: "Ha sido un verdadero placer asesorarla y haber cumplido con sus expectativas en cuanto a nuestro patrocinio con respecto a su solicitud de Ciudadanía Argentina, la cual en menos de un año logramos resolver."
  },
  {
    name: "Yania Medrano",
    info: "1 reseña",
    date: "Hace un mes",
    text: "Excelente profesional. Me acompañó en todo el proceso para obtener la ciudadanía argentina con total responsabilidad y claridad. Siempre atento a los turnos, papeles y firmas. Súper recomendable.",
    rating: 5
  },
  {
    name: "Eugenia Estades",
    info: "4 reseñas",
    date: "Hace 2 meses",
    text: "Excelente abogado de inmigración. Respondió todas nuestras dudas con claridad y se tomó el tiempo de explicarnos paso a paso el proceso para realizar el trámite, lo que nos dio mucha tranquilidad. Demostró un alto nivel de profesionalismo y paciencia.",
    rating: 5,
    reply: "Ha sido un verdadero placer asesorarla. La decisión de emigrar tiene que hacerse con las mejores herramientas para evitar pérdidas tanto de dinero como de tiempo."
  },
  {
    name: "Lil Bartoli",
    info: "Local Guide · 23 reseñas",
    date: "Hace un mes",
    text: "Portillo es un abogado atento, cordial y con todos los conocimientos y herramientas necesarios para ayudar a solventar los diversos pasos que hay que transitar para obtener los resultados deseados. Gracias por su soporte e invaluable profesionalidad.",
    rating: 5
  },
  {
    name: "Marienela Buendia",
    info: "Local Guide · 23 reseñas",
    date: "Hace 3 meses",
    text: "Agendé una consulta con el Dr. Denis Portillo para tratar las dudas que tenía sobre la residencia permanente para mi caso específico. Fue una reunión donde el Dr. Denis revisó todo de mi caso y sinceramente ya estoy aliviada con las orientaciones recibidas.",
    rating: 5,
    reply: "Ha sido un verdadero placer asesorarla. Trabajamos con la mayor dedicación y esmero posible y somos ante todo muy realistas y francos."
  },
  {
    name: "Pamela Perez",
    info: "Local Guide · 19 reseñas",
    date: "Hace un mes",
    text: "Conocí sobre el estudio jurídico en redes sociales, donde mostraban información muy interesante sobre el tema migratorio. Los contacté para una cita y me atendieron pronto; toda la información fue muy clara, resolví todas mis dudas y quedé muy satisfecha.",
    rating: 5
  },
  {
    name: "Karelis Conde",
    info: "6 reseñas",
    date: "Hace un mes",
    text: "Mi más sincero agradecimiento al Dr. Portillo por la atención y profesionalismo brindados durante mi consulta, me sentí muy cómoda y segura. Agradezco la dedicación y tiempo que me dedicó para escuchar y resolver mis inquietudes.",
    rating: 5,
    reply: "Ha sido un verdadero placer asesorarla durante su consulta de Homologación de Sentencia Extranjera en Argentina, específicamente de designación de ejercicio de responsabilidad parental."
  },
  {
    name: "Carlos Garcia",
    info: "2 reseñas",
    date: "Hace 2 meses",
    text: "Tuve la consulta por videollamada desde la comodidad de mi hogar. Denis Portillo me asesoró en materia migratoria y me explicó cómo se podía proceder con mi caso. Fue amable y atento con mi situación. Lo recomiendo con mucho gusto.",
    rating: 5,
    reply: "Ha sido un verdadero placer cumplir con sus expectativas. Trabajamos con la mayor dedicación y esmero posible siendo realistas y francos."
  },
  {
    name: "Maria Fernanda Carruyo",
    info: "2 reseñas",
    date: "Hace 2 meses",
    text: "Una experiencia muy positiva. Me explicó todo con mucha paciencia y claridad, logró aclararme todas las dudas que tenía. Se nota la dedicación ya que se toma el tiempo por orientar bien, muy recomendado.",
    rating: 5,
    reply: "Ha sido un verdadero placer asesorarla durante su consulta de cambio de categoría a Residencia Permanente."
  },
  {
    name: "Yrcel Chaudary",
    info: "8 reseñas",
    date: "Hace 3 meses",
    text: "Llegamos al bufete a través de la recomendación de un amigo. Nos atendieron los abogados Denis Portillo y Marina Coler acerca de una curatela para una persona con discapacidad. Nos hablaron súper claro desde el inicio respecto a las complejidades.",
    rating: 5,
    reply: "Ha sido un verdadero placer asesorarlo durante su proceso de Curatela que se obtuvo de manera satisfactoria pese a las dificultades del caso."
  },
  {
    name: "David Victor",
    info: "Local Guide · 87 reseñas",
    date: "Hace 5 meses",
    text: "Mi experiencia con el Estudio Kus Portillo fue excelente. Mi expediente de ciudadanía argentina estaba detenido hacía varios meses y lograron resolverlo rápido y con muy buena comunicación durante todo el proceso. Muy recomendados.",
    rating: 5
  },
  {
    name: "TiniGoo TTV",
    info: "9 reseñas",
    date: "Hace 3 meses",
    text: "Excelente servicio, pedimos el turno y en el mismo día nos atendió el doctor. La cita fue de manera online a través de un Meet. Nos aconsejó de manera correcta y salió todo bien. Saludos.",
    rating: 5,
    reply: "Ha sido un verdadero placer asesorarles. Trabajamos con la mayor dedicación y esmero posible."
  },
  {
    name: "Brenda Rondon",
    info: "Local Guide · 31 reseñas",
    date: "Hace 2 meses",
    text: "Excelente atención del Dr. Portillo, clara y concisa. Nos supo guiar para realizar la culminación del trámite de Ciudadanía. Valoro mucho su honestidad a la hora de cobrar servicios. 100% recomendable.",
    rating: 5,
    reply: "Es un gusto haber cumplido con sus expectativas con respecto a su expediente de Ciudadanía."
  },
  {
    name: "Juan Miguel Avendaño",
    info: "Local Guide · 6 reseñas",
    date: "Hace un año",
    text: "Excelente servicio. Muy profesionales y eficientes. Mi proceso de nacionalidad se había quedado estancado y no avanzaba; empecé con el Dr. Denis Portillo y en menos de un año se resolvió favorablemente.",
    rating: 5
  },
  {
    name: "Gabriela Betancourt",
    info: "6 reseñas",
    date: "Hace 6 meses",
    text: "Increíbles profesionales. Tuve el privilegio de tener una consulta con el abogado Denis y no solo respondió a nuestras preguntas con todos los detalles necesarios, sino que nos brindó seguridad en el proceso.",
    rating: 5
  },
  {
    name: "Marillelys Rojas",
    info: "1 reseña",
    date: "Hace un mes",
    text: "Gracias al Dr. Portillo por su asesoría responsable, totalmente confiable y muy eficiente. Realmente agradecida. 100% recomendado.",
    rating: 5
  },
  {
    name: "Daniel Romero",
    info: "Local Guide · 119 reseñas",
    date: "Hace 3 meses",
    text: "Excelente atención y resolución de problemas. En mi caso particular tenía el expediente frenado por un error en la documentación y el Dr. Denis lo resolvió rápidamente. Sin dudas los recomiendo.",
    rating: 5,
    reply: "Su expediente estaba muy trabado y en 5 meses logramos resolver su sentencia favorablemente y obtener su turno de juramentación."
  },
  {
    name: "Gabriela Abastoflor",
    info: "1 reseña",
    date: "Hace 6 meses",
    text: "El Dr. Portillo se tomó el tiempo necesario para asesorarme, guiarme en mi proceso migratorio y darme la tranquilidad que necesitaba. Su vocación de servicio es excepcional, me dio varias alternativas y posibles soluciones.",
    rating: 5
  },
  {
    name: "Alexandra Hernández",
    info: "3 reseñas",
    date: "Hace 4 meses",
    text: "Gracias a la asesoría del Dr. Portillo pudo avanzar en tiempo y forma mi trámite de Carta de Ciudadanía. El acompañamiento fue constante y profesional, siempre predispuesto a atender mis consultas.",
    rating: 5
  },
  {
    name: "Luis Da Silva",
    info: "2 reseñas",
    date: "Hace 4 meses",
    text: "Excelente servicio. Fue muy atento y eficaz para resolver todas mis dudas el Dr. Portillo. Siempre con una gran disposición para ayudar hasta en lo más mínimo.",
    rating: 5
  },
  {
    name: "María Terán",
    info: "Local Guide · 13 reseñas",
    date: "Hace 5 meses",
    text: "El Dr. Portillo me ayudó a gestionar mi ciudadanía; fue muy atento, siempre al pendiente de cada seguimiento y sobre todo muy paciente con todas las dudas que me surgían. Lo recomiendo plenamente.",
    rating: 5
  },
  {
    name: "Yolimar Correa",
    info: "7 reseñas",
    date: "Hace un mes",
    text: "Estoy muy feliz y agradecida con el Dr. Denis y su equipo de trabajo. Ya tengo mi carta de ciudadanía argentina en mano y fue un proceso muy fácil para mí gracias a su asesoría legal. Transparencia y profesionalismo total.",
    rating: 5,
    reply: "Muchísimas gracias por su valoración Sra. Correa, es un gusto patrocinarla en su proceso de Ciudadanía Argentina."
  },
  {
    name: "Maureen Ochoa",
    info: "9 reseñas",
    date: "Hace 6 meses",
    text: "Excelentes profesionales, con mucha ética y se valora mucho la predisposición para ayudar y asesorar en cualquier momento del día. Transparencia y humanidad. El Dr. Portillo es un abogado excepcional.",
    rating: 5
  },
  {
    name: "Juan de Dios Barrios",
    info: "Local Guide · 19 reseñas",
    date: "Hace un año",
    text: "En 2015 inicié el proceso para obtener la carta de ciudadanía y no avanzaba el expediente hasta que contacté con el Dr. Portillo, quien hizo un diagnóstico y comenzó a agilizar el trámite con éxito.",
    rating: 5
  },
  {
    name: "Florencia Varela",
    info: "Local Guide · 22 reseñas",
    date: "Hace 2 meses",
    text: "Muy atentos a mis inquietudes sobre la ciudadanía. Aprecio mucho la honestidad y el profesionalismo. Gracias.",
    rating: 5,
    reply: "No podemos prometer resultados de imposible materialización. Trabajamos con la mayor dedicación y esmero posible."
  },
  {
    name: "Gustavo Gonzalez",
    info: "3 reseñas",
    date: "Hace 9 meses",
    text: "La asesoría fue muy detallada. Excelentes sus recomendaciones para todo el viaje en las diferentes escalas y conexiones, así como para la documentación y requisitos de migraciones.",
    rating: 5
  },
  {
    name: "Liliana Diaz",
    info: "2 reseñas",
    date: "Hace 5 meses",
    text: "El Dr. Portillo, aparte de ser muy profesional, es una persona muy empática. Atención desde el primer momento que ayudó a resolver mi problema migratorio. Mucho que agradecer.",
    rating: 5
  },
  {
    name: "Marianni Lopez",
    info: "Local Guide · 15 reseñas",
    date: "Hace 4 meses",
    text: "La asesoría fue muy detallada y sobre todo sincera. Fue por temas de ciudadanía; recibí diferentes alternativas de solución y pude resolver mi duda. Muy agradecida.",
    rating: 5
  }
];