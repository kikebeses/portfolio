import bemadentLogo from '../assets/projects/bemadent-logo.svg'
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
]
