"use client";

import React from "react";
import WorldMap from "@/components/ui/world-map";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { PointerHighlight } from "@/components/ui/pointer-highlight";

const CareerOpportunitiesSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-zinc-50 via-gray-100 to-zinc-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className='w-full flex justify-start'>
            <PointerHighlight>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 p-4">
                Triển vọng Nghề nghiệp Rộng mở
              </h2>
            </PointerHighlight>
          </div>
          <div className="max-w-3xl mx-auto">
            <TextGenerateEffect
              words="Cơ hội việc làm đa dạng với mức lương hấp dẫn trong bối cảnh chuyển đổi số và hội nhập quốc tế."
              className="text-lg text-slate-600"
            />
          </div>
        </div>
        <WorldMap
        dots={[
          {
            start: {
              lat: 64.2008,
              lng: -149.4937,
            }, // Alaska (Fairbanks)
            end: {
              lat: 34.0522,
              lng: -118.2437,
            }, // Los Angeles
          },
          {
            start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
            end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
          },
          {
            start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
            end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
          },
          {
            start: { lat: 51.5074, lng: -0.1278 }, // London
            end: { lat: 28.6139, lng: 77.209 }, // New Delhi
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
          },
        ]}
      />
      </div>
    </section>
  );
};

export default CareerOpportunitiesSection;