/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primeleg: {
          dark: '#0e1b23',    // Azul marino/oscuro casi negro para headers/footers
          primary: '#1a2b4c', // Azul principal elegante
          accent: '#c59d5f',  // Dorado/Cobre para botones, íconos y acentos
          light: '#f8f9fa',   // Gris muy claro para fondos de secciones
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'], // Ideal para títulos de abogados
      }
    },
  },
  plugins: [],
}