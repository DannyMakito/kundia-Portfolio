import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HorizontalGallery } from '@/components/HorizontalGallery';
import { homepageGallery } from '@/data/projects';

gsap.registerPlugin(ScrollTrigger);

export function HomePage() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!headingRef.current) return;

    const heading = headingRef.current;
    const text = heading.innerHTML;
    
    // Split text into lines and wrap each line in a div with overflow hidden
    const lines = text.split('<br>');
    heading.innerHTML = lines.map(line => 
      `<div class="overflow-hidden"><span class="inline-block">${line.trim()}</span></div>`
    ).join('');

    const spans = heading.querySelectorAll('span');

    // Set initial state based on device
    const isMobile = window.innerWidth < 768;
    
    gsap.set(spans, { 
      y: isMobile ? '100%' : '0%',
      opacity: isMobile ? 1 : 0 
    });

    // Mobile: reveal on page load / Desktop: reveal on scroll
    if (isMobile) {
      gsap.to(spans, {
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.15,
        delay: 0.3,
      });
    } else {
      gsap.fromTo(
        spans,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: heading,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
    

         <section className="relative w-full h-screen overflow-hidden bg-black">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/images/homepage/video-poster.jpg"
        >
          <source src="/images/homepage/HOS.mp4" type="video/mp4" />
        </video>{/* Section 1: Video Hero - Full Screen */}
   

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-white drop-shadow-md">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 border-2 border-white rounded-full flex justify-center drop-shadow-md"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-2 bg-white rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Section 2: Content with Heading and Gallery */}
      <section className="min-h-screen pt-24">
        <div className="flex flex-col lg:flex-row min-h-[calc(100vh-96px)]">
          {/* Left Side - Text Content */}
          <div className="lg:w-[40%] px-6 lg:px-10 py-8 lg:py-16 flex flex-col justify-center">
            <h1
              ref={headingRef}
              className="font-display text-hero uppercase leading-[0.9] tracking-tight text-black mb-8"
            >
              CRAFTING
              <br />
              Solutions
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="max-w-md"
            >
              <p className="text-sm font-medium uppercase tracking-wide text-black mb-2">
                Solique - HOUSE of Unique solutions,
                <br />
                Ideas made real 
              </p>
              
            </motion.div>
          </div>

          {/* Right Side - Horizontal Gallery */}
          <div className="lg:w-[60%] flex items-end pb-8 lg:pb-16 overflow-hidden">
            <HorizontalGallery images={homepageGallery} />
          </div>
        </div>
      </section>
    </div>
  );
}
