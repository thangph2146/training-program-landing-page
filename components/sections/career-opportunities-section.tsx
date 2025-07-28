"use client";

import React, { useRef, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import WorldMap from "@/components/ui/world-map";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { cn } from "@/lib/utils";
import { 
  Briefcase, 
  Sparkles, 
} from "lucide-react";

const CareerOpportunitiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const animationVariants = useMemo(() => ({
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2,
          delayChildren: 0.1
        }
      }
    },
    header: {
      hidden: { opacity: 0, y: -50, scale: 0.9 },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          type: "spring" as "spring",
          stiffness: 120,
          damping: 15,
          duration: 0.8
        }
      }
    },
    badge: {
      hidden: { opacity: 0, scale: 0, rotate: -180 },
      visible: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: {
          type: "spring" as const,
          stiffness: 200,
          damping: 15,
          delay: 0.3
        }
      }
    },
    title: {
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          delay: 0.5
        }
      }
    },
    description: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          delay: 0.7
        }
      }
    },
    stats: {
      hidden: { opacity: 0, y: 40 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          delay: 0.9
        }
      }
    },
    statCard: {
      hidden: { opacity: 0, scale: 0.8, y: 30 },
      visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
          type: "spring" as "spring",
          stiffness: 100,
          damping: 15
        }
      }
    },
    map: {
      hidden: { opacity: 0, scale: 0.8, rotateY: -10 },
      visible: {
        opacity: 1,
        scale: 1,
        rotateY: 0,
        transition: {
          type: "spring" as "spring",
          stiffness: 80,
          damping: 20,
          duration: 1.2,
          delay: 1.1
        }
      }
    },
    sparkle: {
      hidden: { opacity: 0, scale: 0 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          type: "spring" as "spring",
          duration: 0.8
        }
      }
    }
  }), []);

  return (
    <motion.section 
      ref={ref}
      className="py-6 min-h-screen relative overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={animationVariants.container}
      role="region"
      aria-label="Triển vọng nghề nghiệp"
    >
      {/* Enhanced Background */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
      />
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Sparkles */}
        {[...Array(8)].map((_, i) => {
          // Use deterministic positioning based on index to avoid hydration mismatch
          const positions = [
            { left: 15, top: 20 },
            { left: 85, top: 35 },
            { left: 25, top: 70 },
            { left: 75, top: 15 },
            { left: 45, top: 85 },
            { left: 65, top: 50 },
            { left: 10, top: 60 },
            { left: 90, top: 80 }
          ];
          const position = positions[i] || { left: 50, top: 50 };
          
          return (
            <motion.div
              key={`sparkle-${i}`}
              className="absolute"
              style={{
                left: `${position.left}%`,
                top: `${position.top}%`,
              }}
              variants={animationVariants.sparkle}
              initial="hidden"
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop" as const,
                  delay: i * 0.25 // Use index-based delay instead of Math.random()
                }
              }}
            >
              <Sparkles className="w-4 h-4 text-red-400" />
            </motion.div>
          );
        })}
      </div>
      
      <div className="mx-auto">
          {/* Enhanced Header */}
          <motion.div 
            className="text-center mb-20"
            variants={animationVariants.header}
          >
            {/* Title */}
            <div className='w-full flex justify-center mb-8'>
              <PointerHighlight>
                <motion.h2 
                  className={cn(
                    "text-3xl font-bold p-4 leading-tight",
                    "bg-gradient-to-r from-gray-900 via-red-900 to-gray-900 bg-clip-text text-transparent",
                    "dark:from-white dark:via-red-100 dark:to-white"
                  )}
                  variants={animationVariants.title}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                >
                  Triển vọng Nghề nghiệp
                  <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent ml-2">
                    Rộng mở
                  </span>
                </motion.h2>
              </PointerHighlight>
            </div>

          </motion.div>
        <motion.div
          variants={animationVariants.map}
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

export { CareerOpportunitiesSection };