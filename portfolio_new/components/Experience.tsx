
import React from 'react';
import { History, Calendar, CheckCircle2 } from 'lucide-react';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
            <History className="mr-2 text-indigo-600" />
            Experience & Achievements
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            My professional journey and key milestones in web development.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {EXPERIENCE.map((item, index) => (
            <div key={item.id} className="relative pl-8 pb-12 last:pb-0 group">
              {/* Timeline Line */}
              {index !== EXPERIENCE.length - 1 && (
                <div className="absolute left-3 top-3 bottom-0 w-px bg-slate-200 dark:bg-slate-800 group-hover:bg-indigo-300 transition-colors"></div>
              )}
              
              {/* Timeline Dot */}
              <div className="absolute left-0 top-1 w-6 h-6 bg-white dark:bg-slate-900 rounded-full border-2 border-indigo-600 z-10 flex items-center justify-center shadow-sm">
                 <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
              </div>

              <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:border-indigo-200 dark:hover:border-indigo-900 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                    {item.role}
                  </h3>
                  <div className="inline-flex items-center text-sm font-medium text-slate-500 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                    <Calendar size={14} className="mr-2" />
                    {item.period}
                  </div>
                </div>
                
                <p className="text-indigo-600 font-semibold mb-4">{item.company}</p>
                
                <ul className="space-y-3">
                  {item.description.map((bullet, idx) => (
                    <li key={idx} className="flex items-start text-slate-600 dark:text-slate-400">
                      <CheckCircle2 size={18} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-6">
           <div className="bg-indigo-600 p-6 rounded-2xl text-center text-white">
              <div className="text-3xl font-bold mb-2">10+</div>
              <p className="text-indigo-100 text-sm">SEO Blog Articles</p>
           </div>
           <div className="bg-blue-600 p-6 rounded-2xl text-center text-white">
              <div className="text-3xl font-bold mb-2">5+</div>
              <p className="text-blue-100 text-sm">API Integrations</p>
           </div>
           <div className="bg-slate-800 p-6 rounded-2xl text-center text-white">
              <div className="text-3xl font-bold mb-2">100%</div>
              <p className="text-slate-400 text-sm">Responsive Design</p>
           </div>
           <div className="bg-emerald-600 p-6 rounded-2xl text-center text-white">
              <div className="text-3xl font-bold mb-2">Live</div>
              <p className="text-emerald-100 text-sm">Project Deployments</p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
