
export const schoolInfo = {
  name: 'Instituto Básico por Cooperativa Emanuel',
  shortName: 'Instituto Emanuel',
  mineducCodes: '01-14-7534-45 (básico) y 01-14-0164-46 (diversificado)',
  location: '5a Avenida Final, Cantón Ingenio, Amatitlán, Guatemala',
  address: '5a Avenida Final, Cantón Ingenio, Amatitlán, Guatemala',
  phone: '6633-7693',
  schedule: 'Jornada Vespertina',
  levels: 'Básico y Diversificado',
  sector: 'Cooperativa, área urbana',
  activities: [
    'Deportes',
    'Arte y Cultura',
    'Tecnología',
    'Laboratorio de Ciencias',
    'Biblioteca',
    'Música'
  ],
  services: ['Cafetería', 'Transporte Escolar', 'Enfermería'],
  events: [
    'Día del Niño',
    'Independencia de Guatemala',
    'Antorcha Escolar',
    'Ferias de Ciencia',
    'Eventos Deportivos',
  ],
  fullInfoForAI: `
    Nombre oficial: Instituto Básico por Cooperativa Emanuel
    Código en MINEDUC: 01-14-7534-45 (básico) y 01-14-0164-46 (diversificado) en diferentes registros.
    Ubicación: 5a Avenida Final, Cantón Ingenio, Amatitlán, Guatemala.
    Teléfono de contacto: 6633‑7693.
    Jornada y niveles: Educación básica vespertina y diversificada.
    Sector: Cooperativa, área urbana.
    Actividades y servicios: Deportes, arte, tecnología, laboratorio de ciencias, biblioteca, cafetería, transporte escolar y enfermería.
    Cultura y eventos: El instituto celebra eventos como el Día del Niño, independencia de Guatemala, antorcha escolar, ferias de ciencia, y eventos deportivos.
    Misión: Forjar futuros brillantes a través de una educación de excelencia, fomentando el desarrollo integral de los estudiantes en un ambiente de cooperación, respeto y participación comunitaria.
    Visión: Ser una institución líder en educación por cooperativa, reconocida por su calidad académica, su compromiso con la innovación y la formación de ciudadanos responsables y proactivos.
  `,
};

export const placeholderImages = [
  {
    id: 'hero-1',
    description: 'Students collaborating in a modern classroom',
    imageUrl: '/images/hero-1.jpg',
    imageHint: 'students classroom',
  },
  {
    id: 'hero-2',
    description: 'School building exterior on a sunny day',
    imageUrl: '/images/hero-2.jpg',
    imageHint: 'school building',
  },
  {
    id: 'hero-3',
    description: 'Students engaged in a science experiment',
    imageUrl: '/images/hero-3.jpg',
    imageHint: 'students science',
  },
  {
    id: 'about-us',
    description: 'A group of smiling, diverse students',
    imageUrl: '/images/about-us.jpg',
    imageHint: 'diverse students',
  },
    {
    id: 'philosophy',
    description: 'A student reading a book in a library',
    imageUrl: '/images/philosophy.jpg',
    imageHint: 'student reading',
  },
  {
    id: 'activity-sports',
    description: 'Students playing basketball',
    imageUrl: '/images/activity-sports.jpg',
    imageHint: 'students basketball',
  },
  {
    id: 'activity-art',
    description: 'Student painting on a canvas',
    imageUrl: '/images/activity-art.jpg',
    imageHint: 'student painting',
  },
  {
    id: 'activity-tech',
    description: 'Students working with computers in a lab',
    imageUrl: '/images/activity-tech.jpg',
    imageHint: 'students computers',
  },
  {
    id: 'activity-science',
    description: 'Close-up of science lab equipment',
    imageUrl: '/images/activity-science.jpg',
    imageHint: 'science lab',
  },
  {
    id: 'activity-library',
    description: 'A quiet and modern school library',
    imageUrl: '/images/activity-library.jpg',
    imageHint: 'school library',
  },
  {
    id: 'activity-music',
    description: 'Students playing musical instruments',
    imageUrl: '/images/activity-music.jpg',
    imageHint: 'students music',
  },
  {
    id: 'contact-map',
    description: 'A map showing the location of the school',
    imageUrl: '/images/contact-map.jpg',
    imageHint: 'map location',
  },
  {
    id: 'blog-1',
    description: 'Students celebrating a cultural event',
    imageUrl: '/images/blog-1.jpg',
    imageHint: 'students celebration',
  },
  {
    id: 'blog-2',
    description: 'A science fair project on display',
    imageUrl: '/images/blog-2.jpg',
    imageHint: 'science fair',
  },
  {
    id: 'blog-3',
    description: 'School sports team posing with a trophy',
    imageUrl: '/images/blog-3.jpg',
    imageHint: 'sports team',
  },
   {
    id: 'blog-4',
    description: 'Students participating in a community service project',
    imageUrl: '/images/blog-4.jpg',
    imageHint: 'community service',
  },
];

export const blogPosts = [
  {
    slug: 'celebracion-dia-independencia',
    title: 'Celebramos con Orgullo el Día de la Independencia',
    excerpt: 'Nuestros estudiantes participaron en un emotivo acto cívico, desfiles y actividades culturales para conmemorar la independencia de Guatemala.',
    date: '15 de Sep, 2023',
    author: 'Dirección',
    category: 'Eventos',
    imageUrl: placeholderImages.find(p => p.id === 'blog-1')?.imageUrl || '',
    imageHint: placeholderImages.find(p => p.id === 'blog-1')?.imageHint || '',
    content: `
<p>El Instituto Emanuel se vistió de azul y blanco para celebrar el Día de la Independencia de Guatemala. La jornada comenzó con un solemne acto cívico en el patio principal, donde estudiantes y docentes rindieron homenaje a nuestros símbolos patrios.</p>
<p>Posteriormente, las calles aledañas se llenaron de color y alegría con el tradicional desfile, en el que participaron nuestras bandas escolares y grupos de estudiantes con trajes típicos. La celebración culminó con una feria cultural en las instalaciones del instituto, donde se pudo disfrutar de comida típica, música y danzas folclóricas. Fue un día para recordar y fortalecer nuestro amor por Guatemala.</p>
    `,
  },
  {
    slug: 'feria-de-ciencias-2023',
    title: 'Jóvenes Científicos Brillan en Nuestra Feria de Ciencias Anual',
    excerpt: 'Proyectos innovadores y experimentos fascinantes fueron los protagonistas de nuestra exitosa Feria de Ciencias 2023. ¡Felicitaciones a todos los participantes!',
    date: '28 de Oct, 2023',
    author: 'Depto. de Ciencias',
    category: 'Académico',
    imageUrl: placeholderImages.find(p => p.id === 'blog-2')?.imageUrl || '',
    imageHint: placeholderImages.find(p => p.id === 'blog-2')?.imageHint || '',
    content: `
<p>La creatividad y el ingenio de nuestros estudiantes de nivel básico y diversificado se hicieron presentes en la Feria de Ciencias 2023. Desde volcanes en erupción hasta robots programables, los proyectos presentados demostraron un profundo entendimiento de los principios científicos y una gran pasión por la investigación.</p>
<p>Un panel de jueces, compuesto por docentes y profesionales invitados, tuvo la difícil tarea de evaluar los trabajos y premiar a los más destacados en categorías como Biología, Química, Física y Tecnología. Agradecemos el esfuerzo de todos los estudiantes y el apoyo de los padres de familia que hicieron de este evento un rotundo éxito.</p>
    `,
  },
  {
    slug: 'victoria-equipo-baloncesto',
    title: '¡Campeones! Nuestro Equipo de Baloncesto Gana el Torneo Intercolegial',
    excerpt: 'Con garra y trabajo en equipo, los "Halcones de Emanuel" se coronaron campeones del torneo de baloncesto, trayendo la copa a casa.',
    date: '12 de Nov, 2023',
    author: 'Depto. de Deportes',
    category: 'Deportes',
    imageUrl: placeholderImages.find(p => p.id === 'blog-3')?.imageUrl || '',
    imageHint: placeholderImages.find(p => p.id === 'blog-3')?.imageHint || '',
    content: `
<p>Una final de infarto se vivió en el gimnasio municipal, donde nuestro equipo de baloncesto, los "Halcones de Emanuel", se enfrentó al Instituto San Miguel en la gran final del Torneo Intercolegial. El marcador se mantuvo reñido durante todo el partido, pero en los últimos segundos, una canasta decisiva nos dio la victoria.</p>
<p>Este triunfo es el resultado de meses de entrenamiento, disciplina y la excelente dirección de su entrenador. Toda la comunidad educativa celebra este gran logro y felicita a nuestros campeones por su entrega y espíritu deportivo. ¡Arriba, Halcones!</p>
    `,
  },
  {
    slug: 'jornada-reforestacion-comunitaria',
    title: 'Sembrando Futuro: Jornada de Reforestación Comunitaria',
    excerpt: 'Estudiantes y docentes se unieron a la comunidad local en una jornada de reforestación para cuidar nuestro medio ambiente y embellecer nuestro entorno.',
    date: '22 de Abr, 2024',
    author: 'Comité Ecológico',
    category: 'Comunidad',
    imageUrl: placeholderImages.find(p => p.id === 'blog-4')?.imageUrl || '',
    imageHint: placeholderImages.find(p => p.id === 'blog-4')?.imageHint || '',
    content: `
<p>En el marco del Día de la Tierra, el Instituto Emanuel organizó una jornada de reforestación en el parque ecológico cercano. Con palas, guantes y mucho entusiasmo, nuestros estudiantes de todos los niveles, junto a sus maestros y padres de familia, plantaron más de 200 árboles de especies nativas.</p>
<p>Esta actividad no solo contribuye a la recuperación de nuestros ecosistemas, sino que también fomenta en nuestros jóvenes la conciencia ambiental y el valor del trabajo comunitario. Agradecemos a todos los voluntarios que se sumaron a esta noble causa. ¡Juntos, estamos sembrando un futuro más verde!</p>
    `,
  },
];
