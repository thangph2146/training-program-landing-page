import HeroSection from "@/components/sections/hero-section";
import TargetSection from "@/components/sections/target-section";
import { TrainingProgramStructure } from "@/components/sections/training-program-structure";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TargetSection />
      <TrainingProgramStructure />
    </>
  );
}
