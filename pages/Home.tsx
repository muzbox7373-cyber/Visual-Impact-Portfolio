import React, { useState, useMemo } from 'react';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS } from '../constants';

const Home: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'UI/UX', 'Front-end', 'Refactoring', 'Branding'];

  const filteredProjects = useMemo(() => {
    if (filter === 'All') return PROJECTS;
    return PROJECTS.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <div className="animate-fade-in-up">
      {/* Hero Section */}
      <section className="py-12 md:py-20 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
          Turning complex problems<br className="hidden md:block" /> 
          into <span className="text-secondary">elegant solutions</span>.
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10">
          I am John, a Product Designer & Developer passionate about creating 
          impactful digital experiences through code and design.
        </p>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                filter === cat
                  ? 'bg-primary text-white border-primary'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid (Masonry) */}
      <section>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-gray-400">
                No projects found in this category.
            </div>
        )}
      </section>
    </div>
  );
};

export default Home;