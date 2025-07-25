'use client';

import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Grid } from '@radix-ui/themes';
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useMemo, useCallback } from "react";
import { ArrowDown, Sparkles, Star } from "lucide-react";
import Image from "next/image";

function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Optimized animation variants with useMemo for performance
  const animationVariants = useMemo(() => ({
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15,
          delayChildren: 0.1,
          duration: 0.6
        }
      }
    },
    item: {
      hidden: { opacity: 0, y: 60, scale: 0.8 },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          type: "spring" as const,
          stiffness: 120,
          damping: 20,
          duration: 0.8
        }
      }
    },
    logo: {
      hidden: { opacity: 0, scale: 0.3, rotate: -90 },
      visible: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: {
          type: "spring" as const,
          stiffness: 100,
          damping: 25,
          duration: 1.0,
          delay: 0.3
        }
      }
    },
    text: {
      hidden: { opacity: 0, x: -80 },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          type: "spring" as const,
          stiffness: 120,
          damping: 20,
          staggerChildren: 0.08
        }
      }
    },
    line: {
      hidden: { opacity: 0, x: -40, filter: "blur(4px)" },
      visible: {
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        transition: {
          type: "spring" as const,
          stiffness: 140,
          damping: 25,
          duration: 0.6
        }
      }
    },
    badge: {
      hidden: { opacity: 0, scale: 0.8, y: -20 },
      visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
          type: "spring" as const,
          stiffness: 200,
          damping: 20
        }
      }
    },
    sparkle: {
      hidden: { opacity: 0, scale: 0, rotate: -180 },
      visible: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: {
          type: "spring" as const,
          stiffness: 300,
          damping: 20,
          delay: 0.8
        }
      }
    }
  }), []);

  const handleScrollDown = useCallback(() => {
    const nextSection = document.querySelector('#next-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <motion.section 
      ref={ref}
      className="relative w-full min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-red-50/20 overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={animationVariants.container}
      role="banner"
      aria-label="Hero section"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-red-600/5" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      {/* Floating Sparkles */}
      <AnimatePresence>
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 12}%`,
            }}
            variants={animationVariants.sparkle}
            animate={{
              y: [-10, 10, -10],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Sparkles className="w-4 h-4 text-blue-400/40" />
          </motion.div>
        ))}
      </AnimatePresence>

      <HeroHighlight containerClassName="w-full min-h-screen relative z-10">
        <div className="container mx-auto px-4 py-8 lg:py-16 max-w-7xl">
          {/* Quality Badge */}
          <motion.div 
            className="flex justify-center mb-8"
            variants={animationVariants.badge}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500/10 to-blue-500/10 backdrop-blur-sm border border-red-200/30 rounded-full">
              <Star className="w-4 h-4 text-red-600" />
              <span className="text-sm font-semibold text-red-700 dark:text-red-400">
                Chương trình đào tạo chất lượng cao
              </span>
              <Star className="w-4 h-4 text-red-600" />
            </div>
          </motion.div>

          <Grid columns={{xs: '1', lg: '2'}} gap={{xs: '8', lg: '12'}} width="auto" className="items-center min-h-[75vh]">
            {/* Enhanced Text Content */}
            <motion.div 
              className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left order-2 lg:order-1 space-y-6"
              variants={animationVariants.item}
            >
              <motion.div
                className="w-full max-w-4xl"
                variants={animationVariants.text}
              >
                <motion.div 
                  className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-red-100/80 dark:bg-red-900/20 rounded-full"
                  variants={animationVariants.line}
                >
                  <span className="text-xs sm:text-sm font-bold text-red-600 dark:text-red-400 uppercase tracking-wider">
                    🎓 Tiếng Anh Bán Phần
                  </span>
                </motion.div>
                
                <motion.h1 
                  className="space-y-2 leading-tight"
                  variants={animationVariants.text}
                >
                  <motion.span 
                    className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-neutral-800 dark:text-white"
                    variants={animationVariants.line}
                  >
                    Giảng dạy bằng tiếng Anh
                  </motion.span>
                  <motion.span 
                    className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-neutral-800 dark:text-white"
                    variants={animationVariants.line}
                  >
                    Công nghệ{" "}
                    <Highlight className="text-red-700 dark:text-red-300 px-2 py-1 rounded-lg">
                      FinTech
                    </Highlight>
                  </motion.span>
                  <motion.span 
                    className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-neutral-800 dark:text-white mb-3"
                    variants={animationVariants.line}
                  >
                    Khởi tạo tương lai với
                  </motion.span>
                  <motion.span 
                    className="block bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight"
                    variants={animationVariants.line}
                  >
                    Tài chính - Ngân hàng
                  </motion.span>
                </motion.h1>
                
                <motion.p 
                  className="mt-6 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl leading-relaxed"
                  variants={animationVariants.line}
                >
                  Chương trình đào tạo tiên tiến với giảng dạy hoàn toàn bằng tiếng Anh, 
                  trang bị kiến thức chuyên sâu về công nghệ tài chính và ngân hàng hiện đại.
                </motion.p>
              </motion.div>
              
              {/* CTA Button */}
              <motion.button
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                variants={animationVariants.line}
                onClick={handleScrollDown}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Khám phá chương trình"
              >
                <span>Khám phá chương trình</span>
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </motion.button>
            </motion.div>
            
            {/* Enhanced Logo Section */}
            <motion.div
              className="order-1 lg:order-2 relative"
              variants={animationVariants.logo}
              whileHover={{ 
                scale: 1.05, 
                rotate: 2,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
            >
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-400/20 to-blue-400/20 rounded-full blur-2xl scale-110" />
                
                <AspectRatio ratio={1} className="w-full relative z-10">
                  <Image
                    src="/logo truong/HUB logo-01.png"
                    alt="HUB University Logo - Trường Đại học HUB"
                    fill
                    sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 40vw"
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
                </AspectRatio>
                
                {/* Floating Elements around Logo */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-red-500/20 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500/20 rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
              </div>
            </motion.div>
          </Grid>
        </div>
      </HeroHighlight>
    </motion.section>
  );
}

export default HeroSection