# Instituto Emanuel - Sitio Web Moderno

Sitio web profesional y moderno para el Instituto Básico por Cooperativa Emanuel, desarrollado con tecnologías de punta y mejores prácticas de desarrollo web.

## 🎯 Descripción del Proyecto

Esta es una aplicación web completa para el Instituto Emanuel que presenta la institución, sus servicios educativos, actividades y permite contacto directo. El sitio está diseñado con enfoque en la experiencia del usuario, animaciones fluidas y accesibilidad.

## 🚀 Características Implementadas

### 1. **Preloader + Landing Page Reveal Profesional**
- Animación elegante de carga en 2.5 segundos
- Líneas decorativas que se despliegan desde los bordes
- Logo animado con escala y opacidad
- Barra de progreso con gradiente suave
- Desvanecimiento hacia arriba para revelar el contenido principal
- Respeta `prefers-reduced-motion` para accesibilidad

### 2. **Hero Section Artístico**
- Fondo con gradiente multicolor personalizado
- Círculos flotantes animados con `mix-blend-multiply`
- Patrón de grilla sutil decorativo
- Título grande y tipografía elegante (Montserrat)
- Divisor decorativo con puntos y líneas
- Botón con gradiente y efecto hover scale
- Animaciones suaves con GSAP (fade + translateY)

### 3. **Hero Sections en Todas las Páginas**
Cada página del sitio tiene su propio diseño artístico con colores únicos:
- **Inicio**: Azul/Índigo/Púrpura
- **Quiénes Somos**: Verde/Esmeralda/Turquesa
- **Niveles Educativos**: Ámbar/Naranja/Amarillo
- **Actividades**: Rosa/Pink/Fucsia
- **Noticias y Eventos**: Violeta/Púrpura/Índigo
- **Contacto**: Cian/Cielo/Azul
- **Tour Virtual**: Lima/Verde/Esmeralda

### 4. **Carrusel de Imágenes**
- Carrusel automático con las imágenes del instituto
- Rotación cada 5 segundos
- Controles manuales (flechas prev/next)
- Integración con Embla Carousel y autoplay
- Parallax scroll con GSAP

### 5. **Logo Personalizado**
- Imagen del logo con tamaño responsivo
- Integración en header y preloader
- Visibilidad condicional en mobile

### 6. **Cursor Animado Personalizado**
- Círculo suave que sigue el mouse con lag (0.15 interpolación)
- Efecto hover en elementos interactivos:
  - Aumento de tamaño (30px → 40px)
  - Cambio de color y halo con sombra
  - Efecto "magnetic cursor" en elementos especiales
- Desaparece cuando el mouse sale de la ventana
- Respeta accesibilidad y no interfiere con clics
- Soporte para `prefers-reduced-motion`

### 7. **Tipografía Moderna**
- Cambio de Playfair Display (serif) a **Montserrat** (sans-serif moderno)
- Mejor legibilidad en pantalla
- Font weights: 300, 400, 500, 600, 700, 800, 900

### 8. **Navegación y Header**
- Header sticky con Logo + navegación
- Menú responsive para mobile
- Links activos destacados
- Búsqueda integrada (preparada)

### 9. **Páginas Funcionales**
- **Inicio**: Hero section con información principal
- **Quiénes Somos**: Historia, misión, visión y valores
- **Niveles Educativos**: Nivel Básico y Diversificado con objetivos
- **Actividades**: Galería de actividades extracurriculares
- **Noticias y Blog**: Publicaciones con categorías
- **Contacto**: Formulario de contacto con información
- **Tour Virtual**: Generador de tours virtuales con IA

### 10. **Componentes UI Avanzados**
- Carousels interactivos
- Accordiones para contenido expandible
- Tarjetas con efectos hover
- Badges para categorías
- Animaciones en scroll (AnimateOnScroll)
- Sistema de Toast notifications

### 11. **Optimizaciones**
- Componentes con Tailwind CSS
- Shadows y efectos visuales
- Transiciones suaves en todos los elementos
- Responsive design (mobile, tablet, desktop)
- Lazy loading de imágenes
- Optimización de fuentes

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 15.5.9
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Animaciones**: GSAP (GreenSock Animation Platform)
- **Carrusel**: Embla Carousel
- **Componentes**: Radix UI
- **Formularios**: React Hook Form + Zod
- **Base de datos**: Firebase (Firestore)
- **IA**: Google Genkit (para Tour Virtual)
- **Fuentes**: Google Fonts (Montserrat, PT Sans)

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── page.tsx                 # Página de inicio
│   ├── about/                   # Quiénes somos
│   ├── levels/                  # Niveles educativos
│   ├── activities/              # Actividades
│   ├── blog/                    # Noticias y blog
│   ├── contact/                 # Contacto
│   ├── virtual-tour/            # Tour virtual
│   └── layout.tsx               # Layout global
├── components/
│   ├── preloader.tsx            # Preloader + landing reveal
│   ├── hero-section.tsx         # Hero section principal
│   ├── custom-cursor.tsx        # Cursor animado
│   ├── animate-on-scroll.tsx    # Animaciones en scroll
│   ├── logo.tsx                 # Logo con imagen
│   └── ui/                      # Componentes base (Radix UI)
├── lib/
│   ├── data.ts                  # Datos del instituto
│   └── utils.ts                 # Utilidades
└── styles/
    └── globals.css              # Estilos globales
```

## 🎨 Paleta de Colores

- **Primario**: Deep Sky Blue (#3399FF)
- **Secundario**: Naranja (#FF9933)
- **Fondo**: Blanco (#FFFFFF)
- **Texto**: Gris Oscuro (#1a1a1a)
- **Gradientes**: Azul → Índigo → Púrpura

## 🚀 Cómo Empezar

### Instalación

```bash
# Instalar dependencias
npm install

# O con yarn/pnpm
yarn install
pnpm install
```

### Desarrollo

```bash
# Iniciar servidor de desarrollo en puerto 9002
npm run dev

# El sitio estará disponible en:
# http://localhost:9002
```

### Build

```bash
# Crear build de producción
npm run build

# Iniciar servidor de producción
npm start
```

### Verificación de tipos

```bash
npm run typecheck
```

## 🎬 Animaciones Principales

### Preloader
- Duración: 2.5 segundos
- Easing: `power4.out`
- Timeline coordinado con múltiples animaciones

### Hero Section
- Fade + translateY en título
- Fade + translateY en subtítulo (delay 0.2s)
- Fade + translateY en botón (delay 0.4s)
- Easing: `power3.out`

### Cursor
- Interpolación suave del movimiento (lag: 0.15)
- Hover scale: 30px → 40px
- Transiciones de color con boxShadow
- Easing: `power2.out`

### Scroll Animations
- Fade in de elementos al scroll
- Parallax en imágenes
- AnimateOnScroll component reutilizable

## ♿ Accesibilidad

- ✅ Respeta `prefers-reduced-motion`
- ✅ Contraste de colores adecuado
- ✅ Cursor personalizado con fallback
- ✅ Navegación por teclado
- ✅ ARIA labels en elementos interactivos
- ✅ Imágenes con alt text descriptivo

## 📱 Responsividad

- Mobile: 320px+
- Tablet: 768px+
- Desktop: 1024px+
- Breakpoints de Tailwind CSS

## 🔐 Seguridad y Optimización

- TypeScript para type safety
- Validación de formularios con Zod
- Sanitización de datos
- Lazy loading de componentes
- Image optimization con Next.js

## 📝 Variables de Entorno

Crear archivo `.env.local`:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_GENKIT_API_KEY=your_genkit_api_key
```

## 🎓 Instituto Emanuel

**Instituto Básico por Cooperativa Emanuel**
- Ubicación: 5a Avenida Final, Cantón Ingenio, Amatitlán, Guatemala
- Teléfono: 6633-7693
- Jornada: Vespertina
- Niveles: Básico y Diversificado
- Sector: Cooperativa, área urbana

### Misión
Forjar futuros brillantes a través de una educación de excelencia, fomentando el desarrollo integral de los estudiantes en un ambiente de cooperación, respeto y participación comunitaria.

### Visión
Ser una institución líder en educación por cooperativa, reconocida por su calidad académica, su compromiso con la innovación y la formación de ciudadanos responsables y proactivos.

## 📈 Próximos Pasos

- [ ] Integración completa con Firebase
- [ ] Sistema de administración de contenidos (CMS)
- [ ] Página de resultados académicos
- [ ] Galería de fotos mejorada
- [ ] Integración de Google Maps
- [ ] Newsletter por correo
- [ ] Dashboard de estudiantes

## 📄 Licencia

Este proyecto es propiedad del Instituto Emanuel.

## 👨‍💻 Desarrollo

Desarrollado con ❤️ usando Next.js, React, TypeScript y GSAP.

---

**Última actualización**: 27 de diciembre de 2025
