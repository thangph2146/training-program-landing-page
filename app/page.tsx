"use client";

import { HeroSection } from "@/components/sections/hero-section";
import { TargetSection } from "@/components/sections/target-section";
import { ProgramTimelineSection } from "@/components/sections/program-timeline-section";
import { FeaturedCoursesSection } from "@/components/sections/featured-courses-section";
import { CareerTimelineSection } from "@/components/sections/career-timeline-section";
import { FeaturedFacultySection } from "@/components/sections/featured-faculty-section";
import { InternshipSection } from "@/components/sections/internship-section";
import { CareerOpportunitiesSection } from "@/components/sections/career-opportunities-section";
import { ScrollIndicator, ScrollControls } from "@/components/ui/scroll-indicator";
import { useScreenScroll } from "@/hooks/use-screen-scroll";

export default function Home() {
  // const {
  //   currentSection,
  //   scrollToNext,
  //   scrollToPrevious,
  //   scrollToSection,
  //   sections
  // } = useScreenScroll({
  //   enableKeyboard: true,
  //   enableWheel: true,
  //   scrollDuration: 800,
  //   threshold: 100
  // });

  // const canScrollUp = currentSection > 0;
  // const canScrollDown = currentSection < sections.length - 1;

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Target Section */}
      <TargetSection />

      {/* Program Timeline Section */}
      <ProgramTimelineSection />

      {/* Featured Courses Section */}
      <FeaturedCoursesSection />

      {/* Career Timeline Section */}
      <CareerTimelineSection />

      {/* Featured Faculty Section */}
      <FeaturedFacultySection />

      {/* Internship Section */}
      <InternshipSection />

      {/* Career Opportunities Section */}
      <CareerOpportunitiesSection />

      {/* Scroll Navigation Components */}
      {/* <ScrollIndicator
        sections={sections}
        currentSection={currentSection}
        onSectionClick={scrollToSection}
        position="right"
        showLabels={true}
      />
      
      <ScrollControls
        onScrollUp={scrollToPrevious}
        onScrollDown={scrollToNext}
        canScrollUp={canScrollUp}
        canScrollDown={canScrollDown}
      /> */}
    </main>
  );
}
