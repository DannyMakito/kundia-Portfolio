import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export function BookPopup() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.4, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="fixed top-24 right-6 lg:right-10 z-40 bg-white border border-gray-200 p-3 max-w-[200px] shadow-sm"
      >
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-gray-400 hover:text-black transition-colors"
        >
          <X size={14} />
        </button>
        
        <div className="flex gap-3">
          <div className="w-12 h-16 bg-gray-100 flex-shrink-0 overflow-hidden">
            <img
              src="/images/homepage/wine-bottle.jpg"
              alt="Book cover"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex flex-col">
            <span className="text-[10px] font-medium uppercase tracking-wider text-black mb-1">
              Our recent book
            </span>
            <p className="text-[9px] text-gray-500 leading-tight">
              A Comparative Analysis of Carbon Impact in Production
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
