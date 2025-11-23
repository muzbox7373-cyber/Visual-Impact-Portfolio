import React from 'react';
import { Download, Briefcase } from 'lucide-react';
import { EXPERIENCES, SKILLS } from '../constants';

const About: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          About Me
        </h1>
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-2/3">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Hello! I'm John Doe, a creative problem solver who bridges the gap between design and engineering. 
              With over 4 years of experience, I focus on building accessible, performant, and delightful web applications.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              I believe that good design is invisible, and good code is maintainable. 
              Currently, I'm looking for new opportunities where I can contribute to meaningful products.
            </p>
            
            <div className="flex gap-4">
              <div className="px-4 py-2 bg-gray-100 rounded-lg font-medium text-sm">#CleanCode</div>
              <div className="px-4 py-2 bg-gray-100 rounded-lg font-medium text-sm">#UserCentric</div>
              <div className="px-4 py-2 bg-gray-100 rounded-lg font-medium text-sm">#FastLearner</div>
            </div>
          </div>
          
          <div className="md:w-1/3 flex justify-start md:justify-end w-full">
             <button className="flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-gray-800 transition-colors w-full md:w-auto">
                <Download size={18} className="mr-2" />
                Download Resume
             </button>
          </div>
        </div>
      </section>

      <hr className="border-gray-100 my-12" />

      {/* Experience Timeline */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 flex items-center">
            <Briefcase className="mr-2" size={24}/> Experience
        </h2>
        <div className="space-y-12 border-l-2 border-gray-100 ml-3 pl-8 relative">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="relative">
              <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-white bg-secondary shadow-sm"></span>
              <div className="mb-1 text-sm text-secondary font-semibold">{exp.period}</div>
              <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
              <div className="text-lg text-gray-600 mb-2">{exp.company}</div>
              <p className="text-gray-500 max-w-2xl">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-2xl font-bold mb-8">Skills & Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILLS.map((skillGroup) => (
            <div key={skillGroup.category} className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-bold mb-4 border-b border-gray-200 pb-2">{skillGroup.category}</h3>
              <ul className="space-y-2">
                {skillGroup.items.map((item) => (
                  <li key={item} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;