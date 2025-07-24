import HeroSection from "@/components/sections/hero-section";
import TargetSection from "@/components/sections/target-section";
import { CareerTimelineSection } from "@/components/sections/career-timeline-section";
import { ProgramTimelineSection } from "@/components/sections/program-timeline-section";
import CareerOpportunitiesSection from "@/components/sections/career-opportunities-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TargetSection />
      <ProgramTimelineSection />
      <CareerTimelineSection />
      <CareerOpportunitiesSection />
    </>
  );
}
