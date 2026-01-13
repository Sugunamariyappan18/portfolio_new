
import React from 'react';
import { User, MapPin, Mail, Briefcase } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <img
                src="https://picsum.photos/seed/developer-suguna/600/700"
                alt="Suguna M"
                className="relative rounded-2xl w-full object-cover shadow-2xl"
              />
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <User className="mr-2 text-indigo-600" />
              About Me
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              I am a dedicated Full Stack PHP Developer based in India with a passion for crafting efficient, secure, and user-centric web solutions. With a strong foundation in backend development using PHP and MySQL, I complement my skills with modern frontend technologies like JavaScript and Bootstrap.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              I specialize in bridging the gap between design and functionality, ensuring that every line of code contributes to a seamless user experience. My real-world project experience includes e-commerce systems, inventory management, and automated subscription platforms.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3 text-slate-600 dark:text-slate-300">
                <MapPin className="text-indigo-500" size={20} />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-600 dark:text-slate-300">
                <Mail className="text-indigo-500" size={20} />
                <span>{PERSONAL_INFO.email}</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-600 dark:text-slate-300">
                <Briefcase className="text-indigo-500" size={20} />
                <span>Available for Full-time / Projects</span>
              </div>
            </div>

            <div className="flex gap-4">
               <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700 text-center flex-1">
                  <div className="text-2xl font-bold text-indigo-600">1+</div>
                  <div className="text-sm text-slate-500">Years Experience</div>
               </div>
               <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700 text-center flex-1">
                  <div className="text-2xl font-bold text-indigo-600">3+</div>
                  <div className="text-sm text-slate-500">Projects Done</div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
