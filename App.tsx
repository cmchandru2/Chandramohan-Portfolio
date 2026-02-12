
import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import { Project, ProjectCategory } from './types';
import { PROJECTS } from './constants';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>(ProjectCategory.ALL);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === ProjectCategory.ALL) return PROJECTS;
    return PROJECTS.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050505]"></div>
          <img 
            src="https://picsum.photos/seed/visionary/1920/1080?grayscale" 
            className="w-full h-full object-cover opacity-20"
            alt="Hero Background"
          />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl">
          <h1 className="text-6xl md:text-9xl font-display leading-tight mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Design <span className="italic">&</span> Motion
          </h1>
          <p className="text-lg md:text-2xl text-zinc-400 font-light tracking-wide max-w-2xl mx-auto mb-12">
            Crafting high-end visual experiences through expert graphic design and cinematic video editing.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a href="#work" className="px-8 py-4 bg-white text-black font-bold uppercase text-xs tracking-widest rounded-full hover:bg-zinc-200 transition-all">
              Explore Projects
            </a>
            <a href="#contact" className="px-8 py-4 border border-zinc-700 font-bold uppercase text-xs tracking-widest rounded-full hover:bg-white/5 transition-all">
              Start a Project
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-display mb-4">Selected Work</h2>
            <p className="text-zinc-500 text-lg">A curated collection of my best visual storytelling.</p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            {Object.values(ProjectCategory).map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  activeCategory === cat 
                  ? 'bg-white text-black shadow-lg shadow-white/10' 
                  : 'text-zinc-500 hover:text-white border border-zinc-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={setSelectedProject} 
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-zinc-950 py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-indigo-500/10 rounded-2xl blur-2xl group-hover:bg-indigo-500/20 transition-all"></div>
            <img 
              src="https://picsum.photos/seed/editor/800/1000?grayscale" 
              alt="The Creator" 
              className="relative rounded-2xl w-full h-[600px] object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-6xl font-display mb-8">The Creative Behind the Frame.</h2>
            <div className="space-y-6 text-lg text-zinc-400 leading-relaxed font-light">
              <p>
                I am a multidisciplinary visual creator specializing in high-impact video editing and minimalist graphic design. With over 8 years of experience, I bridge the gap between static branding and dynamic motion.
              </p>
              <p>
                My process is rooted in storytelling. Whether I'm building a brand identity from scratch or stitching together a cinematic narrative, my goal is always to evoke emotion and clarity.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 py-10 border-t border-zinc-800">
              <div>
                <h4 className="text-white font-bold mb-2">Video Production</h4>
                <p className="text-sm text-zinc-500">Color Grading, Sound Design, Rhythm Editing.</p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-2">Graphic Design</h4>
                <p className="text-sm text-zinc-500">Brand Identity, Editorial Layout, UI/UX.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-[#050505]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-display mb-12">Let's create something iconic.</h2>
          <p className="text-xl text-zinc-400 mb-16">Available for freelance projects and high-level collaborations.</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <a href="mailto:hello@visionaryedit.com" className="p-8 glass-effect rounded-2xl group transition-all hover:border-zinc-500">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white group-hover:text-black transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-sm font-bold uppercase tracking-widest mb-1">Email Me</p>
              <p className="text-zinc-500">hello@visionary.com</p>
            </a>
            
            <a href="#" className="p-8 glass-effect rounded-2xl group transition-all hover:border-zinc-500">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white group-hover:text-black transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.1s.493-1.1 1.1-1.1 1.1.496 1.1 1.1-.493 1.1-1.1 1.1zm9 6.891h-2v-3.111c0-.747-.013-1.708-1.042-1.708-1.041 0-1.201.813-1.201 1.654v3.165h-2v-6h1.92v.821h.027c.267-.506.92-.1.039-.1.039 2.083 0 1.94 1.127 1.94 2.508v3.131h.001z"/>
                </svg>
              </div>
              <p className="text-sm font-bold uppercase tracking-widest mb-1">LinkedIn</p>
              <p className="text-zinc-500">visionary-edit</p>
            </a>

            <a href="#" className="p-8 glass-effect rounded-2xl group transition-all hover:border-zinc-500">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white group-hover:text-black transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.412.56.216.96.475 1.382.897.422.422.681.822.897 1.382.164.422.359 1.057.412 2.227.059 1.266.071 1.646.071 4.85s-.012 3.584-.071 4.85c-.054 1.17-.249 1.805-.412 2.227-.216.56-.475.96-.897 1.382-.422.422-.822.681-1.382.897-.422.164-1.057.359-2.227.412-1.266.059-1.646.071-4.85.071s-3.584-.012-4.85-.071c-1.17-.054-1.805-.249-2.227-.412-.56-.216-.96-.475-1.382-.897-.422-.422-.681-.822-.897-1.382-.164-.422-.359-1.057-.412-2.227-.059-1.266-.071-1.646-.071-4.85s.012-3.584.071-4.85c.054-1.17.249-1.805.412-2.227.216-.56.475-.96.897-1.382.422-.422.822-.681 1.382-.897.422-.164 1.057-.359 2.227-.412 1.266-.059 1.646-.071 4.85-.071zm0-2.163c-3.259 0-3.667.014-4.947.072-1.277.058-2.148.261-2.911.558-.788.306-1.457.715-2.123 1.382-.667.666-1.076 1.335-1.382 2.123-.297.763-.5 1.634-.558 2.911-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.058 1.277.261 2.148.558 2.911.306.788.715 1.457 1.382 2.123.666.667 1.335 1.076 2.123 1.382.763.297 1.634.5 2.911.558 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.277-.058 2.148-.261 2.911-.558.788-.306 1.457-.715 2.123-1.382.667-.666 1.076-1.335 1.382-2.123.297-.763.5-1.634.558-2.911.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.058-1.277-.261-2.148-.558-2.911-.306-.788-.715-1.457-1.382-2.123-.666-.667-1.335-1.076-2.123-1.382-.763-.297-1.634-.5-2.911-.558-1.28-.058-1.688-.072-4.947-.072z"/>
                </svg>
              </div>
              <p className="text-sm font-bold uppercase tracking-widest mb-1">Instagram</p>
              <p className="text-zinc-500">@visionary.edit</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-zinc-900 text-center text-zinc-600 text-xs uppercase tracking-[0.3em]">
        &copy; {new Date().getFullYear()} Visionary Edit. All Rights Reserved.
      </footer>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
};

export default App;
