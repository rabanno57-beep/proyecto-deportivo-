import logoSonic from '../images/logo-sonic.jpeg';

export const municipalities = [
  "Centro", "Cárdenas", "Comalcalco", "Macuspana", "Huimanguillo",
  "Cunduacán", "Centla", "Teapa", "Paraíso", "Nacajuca", "Jalpa de Méndez"
];

export const sports = [
  "Fútbol", "Béisbol", "Taekwondo", "Natación", "Básquetbol", "Voleibol", "Atletismo"
];

export const clubsData = [
  {
    id: 1,
    name: "Escuela de basquetbol Sonics ",
    sport: "Básquetbol",
    municipality: "Centro",
    rating: 4.8,
    monthlyCost: 500,
    coverImage: logoSonic,
    coaches: [" Erick López Contreras", "Jhoany Rubi López Valerio", "Erick Jesús López Valerio"],
    palmares: [
      "Campeones liga municipal B 2025",
      "2do lugar luga municipal A 2026"
    ],
    reviews: [
      { user: "María G.", comment: "Excelente ambiente para los niños, entrenadores muy profesionales.", stars: 5 },
      { user: "Juan P.", comment: "Las instalaciones están en buen estado.", stars: 4 }
    ],
    socialLinks: {
      facebook: "https://www.facebook.com/share/1C1TXFcJgW/?mibextid=wwXIfr",
      instagram: "https://www.instagram.com/sonics_tabasco/",

    },
    locationMap: "https://share.google/UqOLKcjkI8UzenxVo",
    description: "Escuela de basquetbol para niños y jóvenes, enfocada en el desarrollo de talentos infantiles y juveniles con entrenamiento de alto rendimiento."
  },
  {
    id: 2,
    name: "Tigres de Cárdenas",
    sport: "Fútbol",
    municipality: "Cárdenas",
    rating: 4.5,
    monthlyCost: 450,
    coverImage: "https://images.unsplash.com/photo-1510566337590-2fc1f21d0faa?q=80&w=1000&auto=format&fit=crop",
    coaches: ["Antonio López"],
    palmares: [
      "Campeón de Copa Cárdenas 2023"
    ],
    reviews: [
      { user: "Luis F.", comment: "Buen nivel competitivo.", stars: 4 },
      { user: "Ana M.", comment: "Me gustaría que tuvieran más balones, pero el trato es bueno.", stars: 5 }
    ],
    socialLinks: {
      facebook: "https://facebook.com",
      whatsapp: "https://wa.me/521234567891"
    },
    locationMap: "https://maps.google.com/?q=Cárdenas,Tabasco",
    description: "Club de fútbol con tradición en el municipio de Cárdenas. Formamos jugadores desde los 6 hasta los 18 años."
  },
  {
    id: 3,
    name: "Dojo Jaguar",
    sport: "Taekwondo",
    municipality: "Comalcalco",
    rating: 5.0,
    monthlyCost: 550,
    coverImage: "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=1000&auto=format&fit=crop",
    coaches: ["Sabonim Roberto Sánchez (Cinta Negra 4to Dan)"],
    palmares: [
      "1er Lugar Medallero Estatal 2023",
      "Múltiples campeones nacionales"
    ],
    reviews: [
      { user: "Elena R.", comment: "La mejor disciplina y respeto. Mi hijo ha cambiado mucho para bien.", stars: 5 }
    ],
    socialLinks: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com"
    },
    locationMap: "https://maps.google.com/?q=Comalcalco,Tabasco",
    description: "Dojo especializado en la disciplina del Taekwondo WTF. Fomentamos el respeto, la disciplina y el autocontrol."
  },
  {
    id: 4,
    name: "Club Mantarrayas",
    sport: "Natación",
    municipality: "Centro",
    rating: 4.7,
    monthlyCost: 800,
    coverImage: "https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=1000&auto=format&fit=crop",
    coaches: ["Diana Ruiz", "Jorge Castro"],
    palmares: [
      "Mejor Club de Natación Tabasco 2022"
    ],
    reviews: [
      { user: "Pedro H.", comment: "Alberca siempre limpia y climatizada.", stars: 5 },
      { user: "Sofía T.", comment: "Las clases son muy completas.", stars: 4 }
    ],
    socialLinks: {
      facebook: "https://facebook.com",
      whatsapp: "https://wa.me/521234567893"
    },
    locationMap: "https://maps.google.com/?q=Ciudad+Deportiva,Villahermosa",
    description: "Clases de natación para todas las edades. Desde estimulación temprana hasta nivel competitivo."
  },
  {
    id: 5,
    name: "Potros Macuspana",
    sport: "Básquetbol",
    municipality: "Macuspana",
    rating: 4.3,
    monthlyCost: 400,
    coverImage: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1000&auto=format&fit=crop",
    coaches: ["Arturo 'El Poste' Mendoza"],
    palmares: [
      "Campeón Liga Municipal 2021"
    ],
    reviews: [
      { user: "Karla J.", comment: "Buen ambiente familiar en los partidos.", stars: 4 }
    ],
    socialLinks: {
      facebook: "https://facebook.com"
    },
    locationMap: "CANCHAS DE LA DEPO",
    description: "Club de baloncesto para niños y jóvenes, enfocado en el trabajo en equipo."
  },
  {
    id: 6,
    name: "Academia Santos Tabasco",
    sport: "Fútbol",
    municipality: "Centro",
    rating: 4.9,
    monthlyCost: 750,
    coverImage: "https://images.unsplash.com/photo-1518605368461-1e1296cb32f4?q=80&w=1000&auto=format&fit=crop",
    coaches: ["Mario García", "Hugo Fernández"],
    palmares: [
      "Bicampeón Liga Nacional Juvenil 2022-2023",
      "Torneo Internacional Copa Santos 2023"
    ],
    reviews: [
      { user: "Daniel M.", comment: "Instalaciones de primera y gran metodología de entrenamiento.", stars: 5 }
    ],
    socialLinks: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      whatsapp: "https://wa.me/521234567894"
    },
    locationMap: "https://maps.google.com/?q=Villahermosa,Tabasco",
    description: "Escuela oficial del Club Santos Laguna. Entrenamiento con metodología profesional para desarrollar a los futuros talentos del fútbol."
  }
];
