
import { Project, ProjectCategory } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Neon Pulse Brand Identity',
    category: ProjectCategory.BRANDING,
    thumbnail: 'https://picsum.photos/seed/pulse/1200/800',
    description: 'A futuristic brand identity for a high-performance energy drink, focusing on high-contrast neon aesthetics and bold typography.',
    client: 'Pulse Labs',
    year: '2024'
  },
  {
    id: '2',
    title: 'Urban Rhythm Music Video',
    category: ProjectCategory.VIDEO,
    thumbnail: 'https://picsum.photos/seed/rhythm/1200/800',
    description: 'Cinematic music video edit featuring dynamic speed ramping and color grading that emphasizes the grit of urban nightlife.',
    client: 'Echo Records',
    year: '2023',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    id: '3',
    title: 'Abstract Motion Shorts',
    category: ProjectCategory.MOTION,
    thumbnail: 'https://picsum.photos/seed/motion/1200/800',
    description: 'A series of short-form social media assets exploring the fluidity of liquid textures in 3D space.',
    client: 'Symmetry Studios',
    year: '2024'
  },
  {
    id: '4',
    title: 'Vanguard Magazine Layout',
    category: ProjectCategory.GRAPHIC,
    thumbnail: 'https://picsum.photos/seed/mag/1200/800',
    description: 'Minimalist editorial design for an avant-garde architecture magazine, utilizing brutalist layout principles.',
    client: 'Vanguard Press',
    year: '2023'
  },
  {
    id: '5',
    title: 'Midnight Gloom Film Trailer',
    category: ProjectCategory.VIDEO,
    thumbnail: 'https://picsum.photos/seed/film/1200/800',
    description: 'A high-tension horror trailer edit with custom sound design and suspenseful pacing.',
    client: 'Darkside Cinema',
    year: '2024'
  },
  {
    id: '6',
    title: 'Hyperlink Logo Suite',
    category: ProjectCategory.BRANDING,
    thumbnail: 'https://picsum.photos/seed/logo/1200/800',
    description: 'Dynamic logo system for a tech consultancy, designed for modularity across digital platforms.',
    client: 'Hyperlink Global',
    year: '2022'
  }
];
