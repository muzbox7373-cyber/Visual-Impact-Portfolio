import React, { useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <div className="animate-fade-in max-w-2xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Let's Work Together</h1>
        <p className="text-xl text-gray-600">
          Have a project in mind or just want to say hi? <br />
          I'm always open to new opportunities.
        </p>
      </div>

      {formStatus === 'success' ? (
        <div className="bg-green-50 border border-green-100 rounded-2xl p-12 text-center animate-scale-in">
          <div className="flex justify-center mb-4">
            <CheckCircle className="text-green-500 w-16 h-16" />
          </div>
          <h2 className="text-2xl font-bold text-green-800 mb-2">Message Sent!</h2>
          <p className="text-green-700 mb-6">Thanks for reaching out. I'll get back to you as soon as possible.</p>
          <button 
            onClick={() => setFormStatus('idle')}
            className="text-sm text-green-600 font-semibold hover:text-green-800 hover:underline"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border-transparent focus:border-secondary focus:bg-white focus:ring-0 transition duration-200"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border-transparent focus:border-secondary focus:bg-white focus:ring-0 transition duration-200"
                placeholder="john@example.com"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
             <select 
                id="subject"
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border-transparent focus:border-secondary focus:bg-white focus:ring-0 transition duration-200"
             >
                <option>General Inquiry</option>
                <option>Project Proposal</option>
                <option>Freelance Opportunity</option>
             </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              id="message"
              required
              rows={6}
              className="w-full px-4 py-3 rounded-lg bg-gray-50 border-transparent focus:border-secondary focus:bg-white focus:ring-0 transition duration-200"
              placeholder="Tell me about your project..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={formStatus === 'submitting'}
            className="w-full flex items-center justify-center px-8 py-4 bg-primary text-white text-lg font-bold rounded-lg hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-200 transform hover:-translate-y-1"
          >
             {formStatus === 'submitting' ? (
                 'Sending...'
             ) : (
                 <>
                    Send Message <Send size={18} className="ml-2" />
                 </>
             )}
          </button>
        </form>
      )}

      <div className="mt-16 pt-8 border-t border-gray-100 text-center">
         <p className="text-gray-500 mb-4">Or email me directly</p>
         <a href="mailto:hello@example.com" className="inline-flex items-center text-xl font-bold text-primary hover:text-secondary transition-colors">
            <Mail className="mr-2" /> hello@example.com
         </a>
      </div>
    </div>
  );
};

export default Contact;