
import React, { useState } from 'react';
import { Project, AICaseStudy } from '../types';
import { generateCaseStudy } from '../services/geminiService';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [caseStudy, setCaseStudy] = useState<AICaseStudy | null>(null);
  const [loading, setLoading] = useState(false);

  if (!project) return null;

  const handleGenerateAI = async () => {
    setLoading(true);
    try {
      const data = await generateCaseStudy(project.title, project.category, project.description);
      setCaseStudy(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8 bg-black/95 overflow-y-auto">
      <button 
        onClick={onClose}
        className="fixed top-8 right-8 text-zinc-400 hover:text-white transition-colors z-[70]"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="w-full max-w-6xl bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl my-auto">
        <div className="grid md:grid-cols-2">
          {/* Media Section */}
          <div className="bg-black flex items-center justify-center overflow-hidden h-[400px] md:h-auto">
            {project.videoUrl ? (
              <video 
                src={project.videoUrl} 
                controls 
                autoPlay 
                muted 
                loop 
                className="w-full h-full object-cover"
              />
            ) : (
              <img 
                src={project.thumbnail} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
            )}
          </div>

          {/* Content Section */}
          <div className="p-8 md:p-12 flex flex-col">
            <div className="mb-8">
              <p className="text-zinc-500 uppercase tracking-widest text-xs font-bold mb-4">{project.category}</p>
              <h2 className="text-4xl md:text-5xl font-display mb-6">{project.title}</h2>
              <p className="text-zinc-300 text-lg leading-relaxed mb-8">{project.description}</p>
              
              <div className="flex flex-wrap gap-8 py-6 border-y border-zinc-800">
                <div>
                  <p className="text-zinc-500 text-xs uppercase tracking-widest mb-1">Client</p>
                  <p className="font-semibold">{project.client}</p>
                </div>
                <div>
                  <p className="text-zinc-500 text-xs uppercase tracking-widest mb-1">Year</p>
                  <p className="font-semibold">{project.year}</p>
                </div>
              </div>
            </div>

            {/* AI Case Study Button */}
            {!caseStudy && !loading && (
              <button 
                onClick={handleGenerateAI}
                className="flex items-center gap-3 bg-white text-black px-6 py-4 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-zinc-200 transition-colors w-fit group"
              >
                <span>Generate AI Case Study</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </button>
            )}

            {loading && (
              <div className="flex items-center gap-4 text-zinc-400 py-4 italic">
                <div className="w-5 h-5 border-2 border-zinc-400 border-t-transparent rounded-full animate-spin"></div>
                Analyzing project dynamics...
              </div>
            )}

            {caseStudy && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div>
                  <h4 className="text-white font-bold uppercase text-[10px] tracking-widest mb-2 text-indigo-400">The Challenge</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">{caseStudy.challenge}</p>
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase text-[10px] tracking-widest mb-2 text-indigo-400">The Solution</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">{caseStudy.solution}</p>
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase text-[10px] tracking-widest mb-2 text-indigo-400">The Outcome</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">{caseStudy.outcome}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
