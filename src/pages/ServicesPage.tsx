import { motion } from 'framer-motion';
import { FloatingImages } from '@/components/FloatingImages';
import { TeamDiagram } from '@/components/TeamDiagram';
import { servicesFloatingImages } from '@/data/projects';

export function ServicesPage() {
  return (
    <div className="min-h-screen bg-white pt-24">
     
      
      {/* Section 1 - Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-6 lg:px-10 py-16">
        <FloatingImages images={servicesFloatingImages} />
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center relative z-10"
        >
          <h1 className="font-display text-hero uppercase leading-[0.9] tracking-tight text-black max-w-5xl mx-auto">
          Designing 
            <br />
            Products
            <br />
            FOR everyday  BRANDS
          </h1>
        </motion.div>
      </section>

      {/* Section 2 - Mass Production */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-6 lg:px-10 py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center"
        >
          <h2 className="font-display text-section uppercase leading-[0.95] tracking-tight text-black mb-8">
            MASS PRODUCTION WITH
            <br />
            ARTISANAL-LEVEL QUALITY.
          </h2>
          
          <h2 className="font-display text-section uppercase leading-[0.95] tracking-tight text-black">
            STUDIO CREATIVITY.
            <br />
            ATELIER PRECISION.
            <br />
           
          </h2>
        </motion.div>
      </section>

      {/* Section 3 - Team Diagram */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 lg:px-10 py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-section uppercase leading-[0.95] tracking-tight text-black mb-4">
            OUR EDGED TEAM,
            <br />
            A UNITED CULTURE
          </h2>
          <p className="text-xs font-medium uppercase tracking-widest text-gray-400">
            BETWEEN TECH & SENSITIVITY
          </p>
        </motion.div>

        <TeamDiagram />
      </section>
    </div>
  );
}
