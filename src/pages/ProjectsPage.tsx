import { motion } from 'framer-motion';
import { ProjectList } from '@/components/ProjectList';
import { projects } from '@/data/projects';

interface ProjectsPageProps {
  onNavigate?: () => void;
}

export function ProjectsPage({ onNavigate }: ProjectsPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <div className="pt-20 lg:pt-24 px-6 lg:px-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-display text-4xl lg:text-6xl uppercase leading-none tracking-tight text-black mb-8"
        >
          our work
        </motion.h1>
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
