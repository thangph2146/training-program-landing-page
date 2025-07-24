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
      className="py-16 lg:py-24 h-screen relative overflow-hidden"
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

        {/* Statistics */}
        <motion.div 
          className="absolute bottom-8 left-8 right-8"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1, type: "spring", stiffness: 100 }}
        >
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 1.2
                }
              }
            }}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="bg-white/80 backdrop-blur-sm rounded-lg p-6 text-center"
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.8 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 120,
                    damping: 15
                  }
                }
              }}
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)",
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="text-3xl font-bold text-blue-600 mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
              >
                85%
              </motion.div>
              <div className="text-sm text-slate-600">Tỷ lệ có việc làm sau tốt nghiệp</div>
            </motion.div>
            <motion.div 
              className="bg-white/80 backdrop-blur-sm rounded-lg p-6 text-center"
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.8 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 120,
                    damping: 15
                  }
                }
              }}
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: "0 20px 40px rgba(34, 197, 94, 0.15)",
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="text-3xl font-bold text-green-600 mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.7, type: "spring", stiffness: 200 }}
              >
                15-25M
              </motion.div>
              <div className="text-sm text-slate-600">Mức lương khởi điểm (VNĐ/tháng)</div>
            </motion.div>
            <motion.div 
              className="bg-white/80 backdrop-blur-sm rounded-lg p-6 text-center"
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.8 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 120,
                    damping: 15
                  }
                }
              }}
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: "0 20px 40px rgba(147, 51, 234, 0.15)",
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="text-3xl font-bold text-purple-600 mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.9, type: "spring", stiffness: 200 }}
              >
                500+
              </motion.div>
              <div className="text-sm text-slate-600">Đối tác tuyển dụng</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CareerOpportunitiesSection;