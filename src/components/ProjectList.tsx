import { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import type { Project } from '@/types';

gsap.registerPlugin(ScrollTrigger);

interface ProjectListProps {
  projects: Project[];
  onNavigate?: () => void;
}

export function ProjectList({ projects, onNavigate }: ProjectListProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rightImagesRef = useRef<HTMLDivElement>(null);

  // We track the index based on the ORIGINAL array length to know which images to show
  const [activeRealIndex, setActiveRealIndex] = useState(0);

  // 1. Create the infinite loop data (3x original array)
  const infiniteProjects = [...projects, ...projects, ...projects];
  const setLength = projects.length;

  // Responsive staircase widths (using vw so it scales down perfectly on mobile)
  const staircaseWidths = ['35vw', '25vw', '15vw', '8vw'];

  // Handle the invisible scroll jumps for the infinite loop
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollWrapperRef.current) return;
      
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      
      // Calculate the exact height of one "set" of projects
      const oneSetHeight = scrollHeight / 3;

      // If user scrolls up into the 1st set, jump down to the 2nd set
      if (scrollTop < oneSetHeight * 0.5) {
        window.scrollTo({ top: scrollTop + oneSetHeight, behavior: 'instant' });
      }
      // If user scrolls down into the 3rd set, jump up to the 2nd set
      else if (scrollTop > oneSetHeight * 2.5) {
        window.scrollTo({ top: scrollTop - oneSetHeight, behavior: 'instant' });
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Set initial scroll position to the middle set
    setTimeout(() => {
      const initialScroll = document.documentElement.scrollHeight / 3;
      window.scrollTo({ top: initialScroll, behavior: 'instant' });
    }, 100); // Small timeout to ensure DOM is fully painted

    return () => window.removeEventListener('scroll', handleScroll);
  }, [projects]);

  // Setup ScrollTriggers for the text highlighting
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      projectRefs.current.forEach((projectEl, index) => {
        if (!projectEl) return;

        ScrollTrigger.create({
          trigger: projectEl,
          start: 'top 50%',
          end: 'bottom 50%',
          onEnter: () => setActiveRealIndex(index % setLength),
          onEnterBack: () => setActiveRealIndex(index % setLength),
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [infiniteProjects]);

  // Animate the images whenever the active project changes
  useEffect(() => {
    if (!rightImagesRef.current) return;
    const images = rightImagesRef.current.querySelectorAll('.project-image');

    gsap.fromTo(
      images,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out',
        stagger: 0.1,
        overwrite: true,
      }
    );
  }, [activeRealIndex]);

  const activeProject = projects[activeRealIndex];

  return (
    <div ref={containerRef} className="relative w-full bg-white text-black overflow-hidden">
      
      {/* RIGHT SIDE: Fixed Images Layer (Visible on Mobile & Desktop) */}
      {/* z-0 puts it behind the text, fixed keeps it locked to the screen */}
      <div className="fixed top-0 right-0 h-screen w-1/2 lg:w-1/3 flex flex-col items-end justify-center pr-0 lg:pr-8 pointer-events-none z-0">
        <div ref={rightImagesRef} className="flex flex-col-reverse items-end">
          {activeProject &&
            (activeProject.previewImages || [activeProject.previewImage])
              .slice(0, 4)
              .map((img, imgIndex) => (
                <div
                  key={`${activeProject.id}-${imgIndex}`}
                  className="project-image overflow-hidden"
                  style={{
                    width: staircaseWidths[imgIndex],
                    height: '22vh', // Slightly taller for better mobile stacking
                    margin: 0,
                    padding: 0,
                  }}
                >
                  <img
                    src={img}
                    alt={`${activeProject.name} preview ${imgIndex + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              ))}
        </div>
      </div>

      {/* LEFT SIDE: Scrollable Text Layer */}
      {/* z-10 puts it above the images. pointer-events-none allows touching the background, but auto on links allows clicking */}
      <div ref={scrollWrapperRef} className="relative z-10 w-full flex flex-col py-[50vh] pointer-events-none">
        {infiniteProjects.map((project, index) => {
          // Determine if this exact index corresponds to the currently viewed project
          const isCurrentlyActive = (index % setLength) === activeRealIndex;

          return (
            <div
              key={`${project.id}-${index}`}
              ref={(el) => {
                projectRefs.current[index] = el;
              }}
              className="relative w-full"
            >
              <Link
                to={`/projects/${project.slug}`}
                onClick={onNavigate}
                className="block group pointer-events-auto"
              >
                <div className="flex items-baseline gap-2 lg:gap-4 px-2 lg:px-8">
                  <h2
                    // Huge text for mobile (18vw) to match screenshot, scales down to 10vw on desktop
                    className={`font-display text-[18vw] lg:text-[10vw] uppercase leading-[0.75] tracking-tighter transition-colors duration-500 ${
                      isCurrentlyActive ? 'text-black' : 'text-gray-200 hover:text-gray-400'
                    }`}
                  >
                    {project.name}
                  </h2>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      
    </div>
  );
}