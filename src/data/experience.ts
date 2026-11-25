import type { TimelineEntry } from '../types/timeline'

export const experience: TimelineEntry[] = [
  {
    id: 'temotiva',
    period: { es: 'Feb 2026 — Sep 2026', en: 'Feb 2026 — Sep 2026' },
    title: {
      es: 'Desarrollador Web (Prácticas y Colaboración)',
      en: 'Web Developer (Internship & Collaboration)',
    },
    organization: 'Temotiva',
    location: 'Valencia',
    description: {
      es: 'Más de 10 vistas y componentes interactivos para la aplicación web principal con JavaScript, React y Expo Router. Depuración y resolución de bugs visuales y funcionales, trabajando con Scrum.',
      en: 'Built 10+ views and interactive components for the main web app with JavaScript, React and Expo Router. Debugged and fixed visual and functional bugs, working in Scrum.',
    },
  },
  {
    id: 'bemadent',
    period: { es: 'Proyecto propio', en: 'Own project' },
    title: { es: 'Desarrollador Full-Stack', en: 'Full-Stack Developer' },
    organization: 'Bemadent',
    link: { label: 'bemadent.es', url: 'https://bemadent.es' },
    description: {
      es: 'Aplicación web completa para la gestión de un laboratorio de prótesis dental, de principio a fin: interfaz en React y API REST con Node.js, Express y PostgreSQL.',
      en: 'Complete web application for managing a dental prosthesis lab, built end to end: React interface and a REST API with Node.js, Express and PostgreSQL.',
    },
  },
]
