import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Clock, User, Target, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../constants';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const project = PROJECTS.find((p) => p.id === id);
  
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Project not found</h2>
        <Link to="/" className="text-secondary hover:underline">Back to Home</Link>
      </div>
    );
  }

  const nextProject = PROJECTS.find(p => Number(p.id) === Number(id) + 1) || PROJECTS[0];

  return (
    <div className="animate-fade-in">
      {/* Back Button */}
      <div className="mb-8">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-primary transition-colors"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Gallery
        </button>
      </div>

      {/* Header */}
      <div className="max-w-4xl">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-3 py-1 bg-blue-50 text-secondary rounded-full text-xs font-bold uppercase tracking-wide">
            {project.category}
          </span>
          {project.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
        <p className="text-xl text-gray-600 leading-relaxed mb-8">
          {project.overview}
        </p>

        {/* Meta Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-y border-gray-100 py-6 mb-12">
          <div>
            <div className="flex items-center text-gray-400 mb-1 text-sm">
              <Clock size={14} className="mr-1" /> Duration
            </div>
            <div className="font-semibold">{project.duration}</div>
          </div>
          <div>
            <div className="flex items-center text-gray-400 mb-1 text-sm">
              <User size={14} className="mr-1" /> Role
            </div>
            <div className="font-semibold">{project.role}</div>
          </div>
          <div>
             <div className="flex items-center text-gray-400 mb-1 text-sm">
              <Target size={14} className="mr-1" /> Contribution
            </div>
            <div className="font-semibold">{project.contribution}%</div>
          </div>
          <div>
             <div className="flex items-center text-gray-400 mb-1 text-sm">
              Links
            </div>
            <div className="flex space-x-3">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-secondary">
                  <Github size={20} />
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-secondary">
                  <ExternalLink size={20} />
                </a>
              )}
              {!project.githubUrl && !project.liveUrl && <span className="text-gray-400 text-sm">NDA / Private</span>}
            </div>
          </div>
        </div>
      </div>

      {/* Main Image */}
      <div className="mb-16 rounded-xl overflow-hidden shadow-lg">
        <img src={project.thumbnail} alt="Main Project View" className="w-full h-auto object-cover" />
      </div>

      {/* Content Sections */}
      <div className="max-w-3xl mx-auto space-y-20">
        
        {/* Challenge */}
        <section>
          <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {project.challenge}
          </p>
        </section>

        {/* Solution */}
        <section>
          <h2 className="text-2xl font-bold mb-4">The Solution</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            {project.solution}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.images.map((img, idx) => (
              <div key={idx} className="rounded-lg overflow-hidden shadow-sm bg-gray-50">
                 <img src={img} alt={`Process ${idx + 1}`} className="w-full h-auto hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </section>

        {/* Result */}
        <section className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
          <h2 className="text-2xl font-bold mb-4">The Result</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {project.result}
          </p>
        </section>

      </div>

      {/* Next Project Navigation */}
      <div className="mt-20 pt-10 border-t border-gray-200">
        <div className="text-sm text-gray-500 mb-2">Next Project</div>
        <Link to={`/project/${nextProject.id}`} className="group block">
          <h3 className="text-2xl md:text-3xl font-bold group-hover:text-secondary transition-colors flex items-center">
            {nextProject.title}
            <ArrowUpRight className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1" />
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetail;