"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import WorldMap from "@/components/ui/world-map";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { PointerHighlight } from "@/components/ui/pointer-highlight";

const CareerOpportunitiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const headerVariants = {
            hidden: { opacity: 0, y: -80, scale: 0.8 },
            visible: {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                type: "spring" as const,
                stiffness: 100,
                damping: 15,
                duration: 1
              }
            }
          };

  const mapVariants = {
            hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
            visible: {
              opacity: 1,
              scale: 1,
              rotateY: 0,
              transition: {
                type: "spring" as const,
                stiffness: 80,
                damping: 20,
                duration: 1.5
              }
            }
          };

  return (
    <motion.section 
      ref={ref}
      className="py-6 h-screen relative overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30"
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          variants={headerVariants}
        >
          <div className='w-full flex justify-start'>
            <PointerHighlight>
              <motion.h2 
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 p-4"
                whileHover={{ 
                  scale: 1.05,
                  color: "#3b82f6",
                  transition: { duration: 0.3 }
                }}
              >
                Triển vọng Nghề nghiệp Rộng mở
              </motion.h2>
            </PointerHighlight>
          </div>
          <motion.div 
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <TextGenerateEffect
              words="Cơ hội việc làm đa dạng với mức lương hấp dẫn trong bối cảnh chuyển đổi số và hội nhập quốc tế."
              className="text-lg text-slate-600"
            />
          </motion.div>
        </motion.div>
        <motion.div
          variants={mapVariants}
        >
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
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CareerOpportunitiesSection;