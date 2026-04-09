export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
  socials: SocialLink[];
}

// Iconos SVG formales para las redes de los abogados
const LINKEDIN_ICON = `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>`;
const INSTAGRAM_ICON = `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`;
const EMAIL_ICON = `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>`;

export const equipoData: TeamMember[] = [
  {
    name: "Dr. Denis Portillo",
    role: "Socio Fundador",
    description: "Especialista en Derecho Migratorio, Ciudadanías y Defensa Penal. Lidera la estrategia legal del estudio y dirige las intervenciones más complejas de nuestros clientes garantizando resultados extraordinarios y transparentes.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80", // Puedes cambiar esta URL por la foto real
    socials: [
      { name: "LinkedIn", url: "#", icon: LINKEDIN_ICON },
      { name: "Instagram", url: "https://instagram.com/abogadoenargentina", icon: INSTAGRAM_ICON },
      { name: "Email", url: "mailto:portillokusyasociados@gmail.com", icon: EMAIL_ICON }
    ]
  },
  {
    name: "Dra. Marina Coler",
    role: "Abogada Asociada",
    description: "Experta en Derecho de Familia y procesos civiles. Se destaca por su enfoque empático y estratégico en curatelas, divorcios, cuotas alimentarias y el cuidado personal de menores.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80", // Puedes cambiar esta URL por la foto real
    socials: [
      { name: "LinkedIn", url: "#", icon: LINKEDIN_ICON },
      { name: "Email", url: "mailto:portillokusyasociados@gmail.com", icon: EMAIL_ICON }
    ]
  }
  // Puedes agregar más abogados aquí...
];