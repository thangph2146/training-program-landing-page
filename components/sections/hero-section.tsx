'use client';

import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Grid } from '@radix-ui/themes';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import Image from "next/image";

function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
                hidden: { opacity: 0, y: 50, scale: 0.9 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring" as const,
                    stiffness: 100,
                    damping: 15,
                    duration: 0.8
                  }
                }
              };

  const logoVariants = {
                hidden: { opacity: 0, scale: 0.5, rotate: -180 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                  transition: {
                    type: "spring" as const,
                    stiffness: 80,
                    damping: 20,
                    duration: 1.2,
                    delay: 0.5
                  }
                }
              };

  const textVariants = {
                  hidden: { opacity: 0, x: -100 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      type: "spring" as const,
                      stiffness: 100,
                      damping: 15,
                      staggerChildren: 0.1
                    }
                  }
                };

  const lineVariants = {
                    hidden: { opacity: 0, x: -50 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        type: "spring" as const,
                        stiffness: 120,
                        damping: 20
                      }
                    }
                  };

  return (
    <motion.div 
      ref={ref}
      className="relative w-full min-h-screen bg-gradient-to-b from-zinc-50 via-gray-100 to-zinc-50 overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <HeroHighlight containerClassName="w-full min-h-screen relative z-10">
        <div className="w-full mx-auto px-4 py-8 lg:py-16">
          <Grid columns={{xs: '1', lg: '2'}} gap={{xs: '6', lg: '8'}} width="auto" className="items-center min-h-[80vh] lg:min-h-[70vh]">
            <motion.div 
              className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left order-2 lg:order-1"
              variants={itemVariants}
            >
              <motion.h1
                className="w-full max-w-4xl leading-tight"
                variants={textVariants}
              >
                <motion.span 
                  className="block mb-2 text-xs sm:text-sm md:text-base font-semibold text-red-600 dark:text-red-400 uppercase tracking-wide"
                  variants={lineVariants}
                >
                  Chất lượng cao Tiếng Anh Bán Phần
                </motion.span>
                <motion.span 
                  className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-neutral-800 dark:text-white mb-1"
                  variants={lineVariants}
                >
                  Giảng dạy bằng tiếng Anh
                </motion.span>
                <motion.span 
                  className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-neutral-800 dark:text-white mb-1"
                  variants={lineVariants}
                >
                  Công nghệ <Highlight className="text-red-700 dark:text-red-300">FinTech</Highlight>
                </motion.span>
                <motion.span 
                  className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-neutral-800 dark:text-white mb-2"
                  variants={lineVariants}
                >
                  Khởi tạo tương lai với
                </motion.span>
                <motion.span 
                  className="block text-red-700 dark:text-red-300 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold"
                  variants={lineVariants}
                >
                  Tài chính - Ngân hàng Tiếng Anh Bán Phần
                </motion.span>
              </motion.h1>
            </motion.div>
            <motion.div
              variants={logoVariants}
              whileHover={{ 
                scale: 1.05, 
                rotate: 5,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
            >
              <AspectRatio ratio={1} className="w-full relative">
                <Image
                  src="/logo truong/HUB logo-01.png"
                  alt="HUB Logo"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </AspectRatio>
            </motion.div>
          </Grid>
        </div>
      </HeroHighlight>
    </motion.div>
  );
}

export default HeroSection