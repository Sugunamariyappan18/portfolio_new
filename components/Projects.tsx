
import React from 'react';
import { ExternalLink, Github, Layout } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
            <Layout className="mr-2 text-indigo-600" />
            Selected Projects
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A showcase of my recent work, highlighting full-stack development and integrated web solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-indigo-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.githubUrl}
                    className="p-3 bg-white text-indigo-600 rounded-full hover:scale-110 transition-transform"
                    title="View Source"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.liveUrl}
                    className="p-3 bg-white text-indigo-600 rounded-full hover:scale-110 transition-transform"
                    title="Live Demo"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-xs font-semibold rounded-full text-slate-500 dark:text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                   <a 
                     href={project.liveUrl} 
                     className="text-sm font-bold text-indigo-600 hover:text-indigo-700 flex items-center"
                   >
                     Preview Demo <ArrowRight size={14} className="ml-1" />
                   </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ArrowRight = ({ size, className }: { size: number, className: string }) => (
  <svg 
    width={size} 
    height={size} 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

export default Projects;
