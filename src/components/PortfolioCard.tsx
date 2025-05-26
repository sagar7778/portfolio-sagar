import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { ProjectType } from '../types';

interface PortfolioCardProps {
  project: ProjectType;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ project }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
      <div className="h-48 overflow-hidden relative">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {project.featured && (
          <div className="absolute top-3 right-3 bg-violet-600 text-white text-xs font-bold px-3 py-1 rounded-full">
            Featured
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-slate-600 text-sm mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="text-xs bg-violet-100 text-violet-700 px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center">
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-600 hover:text-violet-800 font-medium flex items-center gap-1 transition-colors"
          >
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </a>
          <a
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-700 hover:text-slate-900 font-medium flex items-center gap-1 transition-colors"
          >
            <Github className="h-4 w-4" />
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;