import bemadentLogo from '../assets/projects/bemadent-logo.svg'
import temotivaLogo from '../assets/projects/temotiva-logo.webp'
import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    id: 'bemadent',
    title: { es: 'Bemadent', en: 'Bemadent' },
    description: {
      es: 'Aplicación web full-stack para la gestión de un laboratorio de prótesis dental. Interfaz en React y API REST con Node.js y Express, con persistencia de datos en PostgreSQL.',
      en: 'Full-stack web application for managing a dental prosthesis lab. React front end and a REST API built with Node.js and Express, with data stored in PostgreSQL.',
    },
    url: 'https://bemadent.es',
    technologies: ['React', 'Node.js', 'Express', 'PostgreSQL'],
    image: {
      kind: 'logo',
      src: bemadentLogo,
      alt: { es: 'Logo de Bemadent', en: 'Bemadent logo' },
    },
  },
  {
    id: 'temotiva',
    title: { es: 'Temotiva', en: 'Temotiva' },
    description: {
      es: 'App de bienestar emocional con microprácticas y talleres de psicología aplicada, para personas y empresas. Durante 9 meses desarrollé más de 10 vistas y componentes interactivos con React y Expo Router, trabajando con Scrum.',
      en: 'Emotional wellbeing app with micro-practices and applied psychology workshops, for individuals and companies. Over 9 months I built 10+ views and interactive components with React and Expo Router, working in Scrum.',
    },
    url: 'https://temotiva.com',
    technologies: ['JavaScript', 'React', 'Expo Router'],
    image: {
      kind: 'logo',
      src: temotivaLogo,
      alt: { es: 'Logo de Temotiva', en: 'Temotiva logo' },
    },
  },
]
