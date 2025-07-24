import HeroSection from "@/components/sections/hero-section";
import TargetSection from "@/components/sections/target-section";
import { CareerTimelineSection } from "@/components/sections/career-timeline-section";
import { ProgramTimelineSection } from "@/components/sections/program-timeline-section";
import CareerOpportunitiesSection from "@/components/sections/career-opportunities-section";
import FeaturedCoursesSection from "@/components/sections/featured-courses-section";
import FeaturedFacultySection from "@/components/sections/featured-faculty-section";
import InternshipSection from "@/components/sections/internship-section";
import { Navbar } from "@/components/layouts/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div id="hero-section">
        <HeroSection />
      </div>
      <div id="target-section">
        <TargetSection />
      </div>
      <div id="program-timeline-section">
        <ProgramTimelineSection />
      </div>
      <div id="featured-courses-section">
        <FeaturedCoursesSection />
      </div>
      <div id="career-timeline-section">
        <CareerTimelineSection />
      </div>
      <div id="featured-faculty-section">
        <FeaturedFacultySection />
      </div>
      <div id="internship-section">
        <InternshipSection />
      </div>
      <div id="career-opportunities-section">
        <CareerOpportunitiesSection />
      </div>
    </>
  );
}
