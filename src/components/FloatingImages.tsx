import { motion } from 'framer-motion';
import type { FloatingImage } from '@/types';

interface FloatingImagesProps {
  images: FloatingImage[];
}

export function FloatingImages({ images }: FloatingImagesProps) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {images.map((image) => (
        <motion.div
          key={image.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: image.delay * 0.3,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="absolute"
          style={{
            left: image.position.x,
            top: image.position.y,
            width: image.size.width,
            height: image.size.height,
          }}
        >
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 4 + image.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-full h-full"
          >
            <img
              src={image.src}
              alt=""
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
