
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div 
      className="group relative cursor-pointer overflow-hidden rounded-lg aspect-[4/3] bg-zinc-900"
      onClick={() => onClick(project)}
    >
      <img 
        src={project.thumbnail} 
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
        <p className="text-xs uppercase tracking-widest text-zinc-400 mb-2">{project.category}</p>
        <h3 className="text-2xl font-bold leading-tight">{project.title}</h3>
      </div>
      <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        View Project
      </div>
    </div>
  );
};

export default ProjectCard;
