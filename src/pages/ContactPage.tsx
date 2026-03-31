import { motion } from 'framer-motion';
import { jobListings } from '@/data/projects';

export function ContactPage() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="px-6 lg:px-10 py-8 lg:py-16 min-h-[calc(100vh-96px)] flex flex-col">
        {/* Main Content */}
        <div className="flex-1 flex flex-col lg:flex-row justify-between">
          {/* Left Side - JOIN */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:w-1/2"
          >
            <h1 className="font-display text-hero uppercase leading-[0.9] tracking-tight text-black mb-12">
              JOIN
            </h1>
            
            {/* Job Listings */}
            <div className="space-y-6 mb-12">
              {jobListings.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <p className="text-xs font-medium uppercase tracking-widest text-black mb-1">
                    {job.title}
                  </p>
                  <a
                    href={job.link}
                    className="text-xs font-medium uppercase tracking-widest text-gray-400 hover:text-black transition-colors underline"
                  >
                    APPLY
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - THE CULTURE CRAFTERS */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:w-1/2 lg:text-right mt-12 lg:mt-0"
          >
            <h1 className="font-display text-hero uppercase leading-[0.9] tracking-tight text-black">
              THE
              <br />
              CULTURE
              <br />
              CRAFTERS
            </h1>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-auto pt-12 border-t border-gray-100"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Contact */}
            <div>
              <p className="text-[10px] font-medium uppercase tracking-widest text-gray-400 mb-2">
                CONTACT@DETROIT-TALENTS.COM
              </p>
              <p className="text-[10px] font-medium uppercase tracking-widest text-gray-400">
                JOBS@DETROIT-TALENTS.COM
              </p>
            </div>

            {/* Social */}
            <div>
              <p className="text-[10px] font-medium uppercase tracking-widest text-gray-400 mb-2">
                <a href="#" className="hover:text-black transition-colors">INSTAGRAM</a>
              </p>
              <p className="text-[10px] font-medium uppercase tracking-widest text-gray-400">
                <a href="#" className="hover:text-black transition-colors">LINKEDIN</a>
              </p>
            </div>

            {/* Legal */}
            <div>
              <p className="text-[10px] font-medium uppercase tracking-widest text-gray-400 mb-2">
                <a href="#" className="hover:text-black transition-colors">LEGALS</a>
              </p>
              <p className="text-[10px] font-medium uppercase tracking-widest text-gray-400">
                <a href="#" className="hover:text-black transition-colors">NEWSLETTER</a>
              </p>
            </div>

            {/* Description */}
            <div className="col-span-2 lg:col-span-1">
              <p className="text-[10px] leading-relaxed text-gray-400">
                Europe's leading AI production house, technological craftsmanship drives 
                images, films, and experiences with cultural, business, and sustainable impact. We help 
                luxury brands enter a new era of augmented creation, where innovation fuels desirability.
              </p>
            </div>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}
