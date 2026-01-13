
import React from 'react';
import { Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
              {PERSONAL_INFO.name.split(' ')[0]}.
            </span>
          </div>

          <p className="text-slate-500 dark:text-slate-400 text-sm text-center">
            © {currentYear} {PERSONAL_INFO.name}. All rights reserved. 
            <span className="block mt-1">
              Made with <Heart size={14} className="inline-block text-red-500 mx-1" /> for the modern web.
            </span>
          </p>

          <div className="flex items-center space-x-6">
             <a href="#about" className="text-sm text-slate-500 hover:text-indigo-600">Aboutttttttt</a>
             <a href="#projects" className="text-sm text-slate-500 hover:text-indigo-600">Work</a>
             <a href="#contact" className="text-sm text-slate-500 hover:text-indigo-600">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
