"use client";

import React from "react";
import WorldMap from "@/components/ui/world-map";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import {
  TrendingUp,
  Building2,
  Calculator,
  Zap,
} from "lucide-react";


interface IndustryData {
  sector: string;
  demand: number;
  avgSalary: string;
  positions: number;
  icon: React.ReactNode;
}

const industryData: IndustryData[] = [
  {
    sector: "Ngân hàng Thương mại",
    demand: 95,
    avgSalary: "25-45 triệu",
    positions: 15000,
    icon: <Building2 className="h-5 w-5" />
  },
  {
    sector: "Chứng khoán & Đầu tư",
    demand: 88,
    avgSalary: "30-60 triệu",
    positions: 8000,
    icon: <TrendingUp className="h-5 w-5" />
  },
  {
    sector: "Fintech & Công nghệ",
    demand: 92,
    avgSalary: "35-70 triệu",
    positions: 5000,
    icon: <Zap className="h-5 w-5" />
  },
  {
    sector: "Tài chính Doanh nghiệp",
    demand: 85,
    avgSalary: "20-50 triệu",
    positions: 12000,
    icon: <Calculator className="h-5 w-5" />
  }
];

const CareerOpportunitiesSection = () => {

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-zinc-50 via-gray-100 to-zinc-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-br from-emerald-400/10 to-cyan-600/10 rounded-full blur-3xl"></div>
      </div>

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