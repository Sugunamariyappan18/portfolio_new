
import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          <span>Available for new </span>
        </div>
        
        <h1 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight">
          Hi, I'm <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">{PERSONAL_INFO.name}</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-4 font-medium">
          {PERSONAL_INFO.role}
        </p>
        
        <p className="max-w-2xl text-lg text-slate-500 dark:text-slate-500 mb-10">
          {PERSONAL_INFO.tagline}
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 dark:shadow-none"
          >
            View Projects
            <ArrowRight size={18} className="ml-2" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 font-semibold rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all"
          >
            Contact Me
          </a>
        </div>

        <div className="mt-16 flex items-center space-x-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
           <span className="text-sm font-bold uppercase tracking-widest text-slate-400">Tech Expertise</span>
           <div className="flex gap-6 flex-wrap justify-center">
             <span className="font-semibold text-slate-600 dark:text-slate-300">PHP</span>
             <span className="font-semibold text-slate-600 dark:text-slate-300">MySQL</span>
             <span className="font-semibold text-slate-600 dark:text-slate-300">JavaScript</span>
             <span className="font-semibold text-slate-600 dark:text-slate-300">Bootstrap</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
