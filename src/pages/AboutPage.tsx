import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function AboutPage() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphsRef = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading reveal
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headingRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Paragraphs reveal with stagger
      paragraphsRef.current.forEach((p, index) => {
        if (!p) return;
        gsap.fromTo(
          p,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out',
            delay: index * 0.1,
            scrollTrigger: {
              trigger: p,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-white pt-20 lg:pt-24">
      {/* Hero Image Section */}
      <section className="relative w-full h-[50vh] lg:h-screen overflow-hidden">
        <img
          src="/images/about/about.png"
          alt="About House Solique"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/20" />
      </section>

      {/* Content Section - Mobile Focus on Paragraphs */}
      <section className="px-6 lg:px-10 py-12 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <h1
            ref={headingRef}
            className="font-display text-4xl lg:text-6xl uppercase leading-none tracking-tight text-black mb-8 lg:mb-12"
          >
            About Us
          </h1>

          <div className="space-y-6 lg:space-y-8">
            <p
              ref={(el) => { paragraphsRef.current[0] = el; }}
              className="text-base lg:text-lg leading-relaxed text-gray-800"
            >
              House Solique is a creative production house dedicated to crafting unique solutions 
              and bringing ideas to life. We blend innovative storytelling with cutting-edge 
              design to create memorable experiences for brands and audiences alike.
            </p>

            <p
              ref={(el) => { paragraphsRef.current[1] = el; }}
              className="text-base lg:text-lg leading-relaxed text-gray-800"
            >
              Our team of visionary creatives, strategists, and technologists work collaboratively 
              to transform concepts into compelling visual narratives. From brand identity to 
              immersive digital experiences, we approach every project with fresh perspective 
              and meticulous attention to detail.
            </p>

            <p
              ref={(el) => { paragraphsRef.current[2] = el; }}
              className="text-base lg:text-lg leading-relaxed text-gray-800"
            >
              Based in joburg, I serve clients globally, bringing a distinctive European 
              sensibility to our work while embracing diverse cultural influences. Our mission 
              is simple: to help brands stand out in an increasingly crowded marketplace 
              through authentic, purpose-driven creative.
            </p>

            <p
              ref={(el) => { paragraphsRef.current[3] = el; }}
              className="text-base lg:text-lg leading-relaxed text-gray-800"
            >
              I  believe in the power of collaboration, the importance of craft, and the 
              impact of bold ideas. Every project is an opportunity to push boundaries 
              and create something extraordinary.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
