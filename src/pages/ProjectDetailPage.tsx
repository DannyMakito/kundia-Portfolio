import { motion } from 'framer-motion';
import { BookPopup } from '@/components/BookPopup';

export function ProjectDetailPage() {
  return (
    <div className="min-h-screen bg-white pt-24">
      
      
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        {/* Title */}
        <div className="px-6 lg:px-10 py-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-4 mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-black"></span>
            <span className="text-xs font-medium uppercase tracking-widest text-black">Solique QUEST</span>
            <span className="w-2 h-2 rounded-full bg-gray-300"></span>
            <span className="text-xs font-medium uppercase tracking-widest text-gray-400">DETROIT SERVICE</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-section uppercase leading-[0.95] tracking-tight text-black"
          >
            LOUIS VUITTON ASNIERES
          </motion.h1>
        </div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full h-[50vh] lg:h-[60vh] overflow-hidden"
        >
          <img
            src="/images/projects/gun.png"
            alt="Louis Vuitton Trunks"
            className="w-full h-full object-fit"
          />
        </motion.div>

        {/* Content Section */}
        <div className="px-6 lg:px-10 py-12 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="max-w-2xl mx-auto text-center mb-16"
          >
            <h2 className="font-display text-section uppercase leading-[0.95] tracking-tight text-black mb-8">
              CRAFTING A COLLECTIVE
              <br />
              DIGITAL QUEST
            </h2>
            
            <p className="text-xs font-medium uppercase tracking-widest text-gray-500 mb-6">
              Through AI-Driven Narrative Production
            </p>
            
            <p className="text-sm leading-relaxed text-gray-700 mb-4">
              Detroit collaborated with <strong>Louis Vuitton</strong> to design <em>Enigma</em>, a refined digital game created to 
              celebrate the first anniversary of the House's Discord platform and strengthen its community 
              culture.
            </p>
            
            <p className="text-sm leading-relaxed text-gray-700 mb-4">
              Conceived as a multi-day immersive quest, <em>Enigma</em> invited players to join two symbolic 
              teams, Crafters and Makers, and collaborate to solve a series of riddles in search of Vivienne, 
              Louis Vuitton's iconic mascot.
            </p>
            
            <p className="text-sm leading-relaxed text-gray-700 mb-4">
              A hybrid production combining AI-driven content creation, narrative design, visual effects, 
              and post-production enabled the creation of a playful yet elegant universe, fully aligned with 
              Louis Vuitton's codes.
            </p>
            
            <p className="text-sm leading-relaxed text-gray-700">
              A crafted digital experience designed to foster engagement, reinforce brand belonging, and 
              explore new forms of luxury storytelling through community-driven interaction.
            </p>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src="/images/project-detail/surreal-building.jpg"
                alt="Surreal Building"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/images/project-detail/lv-trunk-closeup.jpg"
                alt="LV Trunk Closeup"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
