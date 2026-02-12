
export enum ProjectCategory {
  ALL = 'All',
  GRAPHIC = 'Graphic Design',
  VIDEO = 'Video Editing',
  MOTION = 'Motion Graphics',
  BRANDING = 'Branding'
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  thumbnail: string;
  description: string;
  client: string;
  year: string;
  videoUrl?: string;
}

export interface AICaseStudy {
  challenge: string;
  solution: string;
  outcome: string;
}
