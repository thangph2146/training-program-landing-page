"use client";

import { useEffect, useCallback, useRef } from 'react';

interface UseScreenScrollOptions {
  sections?: string[]; // Array of section IDs
  enableKeyboard?: boolean; // Enable arrow key navigation
  enableWheel?: boolean; // Enable wheel navigation
  scrollDuration?: number; // Scroll animation duration in ms
  threshold?: number; // Wheel threshold for triggering scroll
}

const defaultSections = [
  'hero',
  'target',
  'program-timeline',
  'featured-courses',
  'career-timeline',
  'featured-faculty',
  'internship',
  'career-opportunities'
];

export const useScreenScroll = ({
  sections = defaultSections,
  enableKeyboard = true,
  enableWheel = true,
  scrollDuration = 800,
  threshold = 100
}: UseScreenScrollOptions = {}) => {
  const currentSectionRef = useRef(0);
  const isScrollingRef = useRef(false);
  const wheelDeltaRef = useRef(0);

  // Get current section based on scroll position
  const getCurrentSection = useCallback(() => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    
    for (let i = sections.length - 1; i >= 0; i--) {
      const element = document.getElementById(sections[i]);
      if (element && element.offsetTop <= scrollPosition) {
        return i;
      }
    }
    return 0;
  }, [sections]);

  // Smooth scroll to section
  const scrollToSection = useCallback((sectionIndex: number) => {
    if (sectionIndex < 0 || sectionIndex >= sections.length || isScrollingRef.current) {
      return;
    }

    const targetElement = document.getElementById(sections[sectionIndex]);
    if (!targetElement) return;

    isScrollingRef.current = true;
    currentSectionRef.current = sectionIndex;

    // Calculate target position (center the section in viewport)
    const targetPosition = targetElement.offsetTop;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });

    // Reset scrolling flag after animation
    setTimeout(() => {
      isScrollingRef.current = false;
    }, scrollDuration);
  }, [sections, scrollDuration]);

  // Navigate to next section
  const scrollToNext = useCallback(() => {
    const current = getCurrentSection();
    scrollToSection(current + 1);
  }, [getCurrentSection, scrollToSection]);

  // Navigate to previous section
  const scrollToPrevious = useCallback(() => {
    const current = getCurrentSection();
    scrollToSection(current - 1);
  }, [getCurrentSection, scrollToSection]);

  // Navigate to specific section
  const scrollToSpecific = useCallback((sectionId: string) => {
    const index = sections.indexOf(sectionId);
    if (index !== -1) {
      scrollToSection(index);
    }
  }, [sections, scrollToSection]);

  // Keyboard event handler
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (!enableKeyboard || isScrollingRef.current) return;

    switch (event.key) {
      case 'ArrowDown':
      case 'PageDown':
      case ' ': // Spacebar
        event.preventDefault();
        scrollToNext();
        break;
      case 'ArrowUp':
      case 'PageUp':
        event.preventDefault();
        scrollToPrevious();
        break;
      case 'Home':
        event.preventDefault();
        scrollToSection(0);
        break;
      case 'End':
        event.preventDefault();
        scrollToSection(sections.length - 1);
        break;
    }
  }, [enableKeyboard, scrollToNext, scrollToPrevious, scrollToSection, sections.length]);

  // Wheel event handler with throttling
  const handleWheel = useCallback((event: WheelEvent) => {
    if (!enableWheel || isScrollingRef.current) return;

    event.preventDefault();
    
    wheelDeltaRef.current += event.deltaY;

    if (Math.abs(wheelDeltaRef.current) > threshold) {
      if (wheelDeltaRef.current > 0) {
        scrollToNext();
      } else {
        scrollToPrevious();
      }
      wheelDeltaRef.current = 0;
    }
  }, [enableWheel, threshold, scrollToNext, scrollToPrevious]);

  // Update current section on scroll
  const handleScroll = useCallback(() => {
    if (!isScrollingRef.current) {
      currentSectionRef.current = getCurrentSection();
    }
  }, [getCurrentSection]);

  // Setup event listeners
  useEffect(() => {
    if (enableKeyboard) {
      window.addEventListener('keydown', handleKeyDown);
    }

    if (enableWheel) {
      window.addEventListener('wheel', handleWheel, { passive: false });
    }

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [enableKeyboard, enableWheel, handleKeyDown, handleWheel, handleScroll]);

  return {
    currentSection: currentSectionRef.current,
    scrollToNext,
    scrollToPrevious,
    scrollToSection,
    scrollToSpecific,
    isScrolling: isScrollingRef.current,
    sections
  };
};