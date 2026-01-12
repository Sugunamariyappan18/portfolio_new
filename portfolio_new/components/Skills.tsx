
import React from 'react';
import { Code2 } from 'lucide-react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
            <Code2 className="mr-2 text-indigo-600" />
            My Skills
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            My technical repertoire spans the entire web development stack, focused on building robust and scalable applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILLS.map((category) => (
            <div
              key={category.title}
              className="p-8 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium border border-slate-200 dark:border-slate-700 hover:border-indigo-500 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
