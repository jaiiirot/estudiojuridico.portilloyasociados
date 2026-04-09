export interface TiktokVideo {
  id: string;
  title: string;
  // Usamos una imagen genérica y elegante de fondo para las miniaturas
  thumbnail: string; 
}

export const tiktokData: TiktokVideo[] = [
  {
    id: "7623240631351020821",
    title: "Resolución de casos migratorios",
    thumbnail: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "7618389527710780693",
    title: "Defensa Penal Estratégica",
    thumbnail: "https://images.unsplash.com/photo-1505664159854-23285c5040d3?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "7613196369888677141",
    title: "Ciudadanía Argentina paso a paso",
    thumbnail: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "7612465168924085525",
    title: "Asesoramiento en Divorcios",
    thumbnail: "https://images.unsplash.com/photo-1556484606-2184bf18c227?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "7612022599836650773",
    title: "Trámites para Extranjeros",
    thumbnail: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "7609134059603741973",
    title: "Éxitos del Estudio Jurídico",
    thumbnail: "https://images.unsplash.com/photo-1505664159854-23285c5040d3?auto=format&fit=crop&w=400&q=80"
  }
];