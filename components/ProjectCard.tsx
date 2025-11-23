import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link to={`/project/${project.id}`} className="group block break-inside-avoid mb-6">
      <div className="relative overflow-hidden rounded-xl bg-gray-100">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        
        {/* Overlay Icon */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <div className="bg-white p-2 rounded-full shadow-lg">
            <ArrowUpRight size={20} className="text-primary" />
          </div>
        </div>
      </div>
      
      <div className="mt-3">
        <h3 className="text-lg font-bold leading-tight group-hover:text-secondary transition-colors">
          {project.title}
        </h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-md">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;