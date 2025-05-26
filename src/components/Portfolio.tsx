import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import PortfolioCard from './PortfolioCard';
import { ProjectType } from '../types';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  
  const projects: ProjectType[] = [
    {
      id: 1,
      title: 'Jewelry E-commerce Website',
      description: 'A full-featured e-commerce platform for a jewelry brand with product catalog, cart functionality, and admin panel.',
      image: 'https://images.pexels.com/photos/7679863/pexels-photo-7679863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'e-commerce',
      technologies: ['React.js', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
      demoLink: 'https://e-commerce-frontend-pied.vercel.app/',
      codeLink: 'https://github.com/sagar7778/e-commerce-frontend',
      featured: true
    },
    {
      id: 2,
      title: 'File Drop & Sharing Application',
      description: 'Secure file upload and sharing platform with user authentication, file management, and shareable links.',
      image: 'https://images.pexels.com/photos/4068314/pexels-photo-4068314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'web-app',
      technologies: ['React.js', 'Supabase', 'Express.js', 'Tailwind CSS'],
      demoLink: 'https://file-drop-magic.vercel.app/',
      codeLink: 'https://github.com/sagar7778/file-drop-magic',
      featured: true
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Portfolio</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project represents a unique challenge and solution.
          </p>
          <div className="h-1 w-20 bg-violet-600 mx-auto mt-4"></div>
        </div>

        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
            {['all', 'e-commerce', 'web-app', 'landing-page'].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  filter === category
                    ? 'bg-violet-600 text-white'
                    : 'bg-white text-slate-700 hover:bg-slate-100'
                }`}
              >
                {category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600 mb-6">
            Interested in seeing more of my work? Check out my GitHub repositories.
          </p>
          <a
            href="https://github.com/sagar7778"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-900 text-white rounded-lg transition-colors"
          >
            <Github className="h-5 w-5" />
            Visit My GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;