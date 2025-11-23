import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-sm text-gray-500">© 2024 John Doe. All rights reserved.</p>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
            <span className="sr-only">GitHub</span>
            <Github size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
            <span className="sr-only">LinkedIn</span>
            <Linkedin size={20} />
          </a>
          <a href="mailto:hello@example.com" className="text-gray-400 hover:text-secondary transition-colors">
            <span className="sr-only">Email</span>
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;