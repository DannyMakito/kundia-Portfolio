import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import type { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
  isTransitioning: boolean;
}

export function PageTransition({ children, isTransitioning }: PageTransitionProps) {
  const shadowRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!shadowRef.current || !cardRef.current || !contentRef.current) return;

    if (isTransitioning) {
      // EXIT ANIMATION: Current page is leaving
      const tl = gsap.timeline();

      // 1. Shadow fades in over the current content to create depth
      tl.to(shadowRef.current, {
        opacity: 0.6,
        duration: 0.4,
        ease: 'power2.out',
      }, 0);

      // 2. Solid white card slides up completely from the bottom
      tl.fromTo(
        cardRef.current,
        { y: '100%' }, // Start completely off-screen at bottom
        { y: '0%', duration: 0.6, ease: 'power3.inOut' },
        0
      );

      // 3. (Optional but recommended) Push the current content slightly back/down
      tl.to(contentRef.current, {
        y: 40,
        scale: 0.98,
        duration: 0.6,
        ease: 'power3.inOut'
      }, 0);

    } else {
      // ENTER ANIMATION: New page is arriving
      const tl = gsap.timeline();

      // Reset starting states for the newly mounted content
      gsap.set(contentRef.current, { y: 40, scale: 0.98 });
      gsap.set(shadowRef.current, { opacity: 0 }); 

      // 1. White card continues sliding UP and away to reveal the new page
      tl.fromTo(
        cardRef.current,
        { y: '0%' },
        { y: '-100%', duration: 0.6, ease: 'power3.inOut' },
        0
      );

      // 2. New content scales/slides up into its final resting position
      tl.to(contentRef.current, {
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: 'power3.inOut'
      }, 0);
    }
  }, [isTransitioning]);

  return (
    <>
      {/* 1. Shadow Overlay (Dims the page underneath) */}
      <div
        ref={shadowRef}
        className="fixed inset-0 z-40 bg-black pointer-events-none"
        style={{ opacity: 0 }}
      />

      {/* 2. Solid White Card Overlay (Slides over everything) */}
      <div
        ref={cardRef}
        className="fixed inset-0 z-50 bg-white pointer-events-none"
        style={{ transform: 'translateY(100%)' }}
      />

      {/* 3. Page Content */}
      {/* origin-top ensures the slight scaling feels natural */}
      <div ref={contentRef} className="relative z-0 origin-top bg-white min-h-screen">
        {children}
      </div>
    </>
  );
}