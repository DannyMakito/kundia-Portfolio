import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ProjectList } from '@/components/ProjectList';
import { projects } from '@/data/projects';

interface ProjectsPageProps {
  onNavigate?: () => void;
}

export function ProjectsPage({ onNavigate }: ProjectsPageProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!headingRef.current) return;

    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      // Mobile: split text and reveal with stagger
      const heading = headingRef.current;
      const text = heading.textContent || '';
      
      heading.innerHTML = text.split('').map(char => 
        `<span class="inline-block" style="transform: translateY(100%);">${char === ' ' ? '&nbsp;' : char}</span>`
      ).join('');

      const spans = heading.querySelectorAll('span');
      
      gsap.to(spans, {
        y: 0,
        duration: 0.6,
        ease: 'power3.out',
        stagger: 0.03,
        delay: 0.2,
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="pt-20 lg:pt-24 px-6 lg:px-10">
        <h1
          ref={headingRef}
          className="font-display text-4xl lg:text-6xl uppercase leading-none tracking-tight text-black mb-8 overflow-hidden"
        >
          our work
        </h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ProjectList projects={projects} onNavigate={onNavigate} />
        </motion.div>
      </div>
    </div>
  );
}
