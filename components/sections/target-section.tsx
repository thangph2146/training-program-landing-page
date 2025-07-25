"use client";
import React, { useRef, useMemo, useState, useCallback } from "react";
import { motion, useInView, AnimatePresence, easeOut } from "framer-motion";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { Target, TrendingUp, Zap, ChevronRight, Star, Sparkles } from "lucide-react";

export default function TargetSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  // Optimized animation variants with useMemo
  const animationVariants = useMemo(() => ({
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2,
          delayChildren: 0.1,
          duration: 0.6
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
          type: "spring" as const,
          stiffness: 120,
          damping: 20,
          duration: 0.8
        }
      }
    },
    beam: {
      hidden: { opacity: 0, scale: 0.9 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          type: "spring" as const,
          stiffness: 100,
          damping: 25,
          duration: 1.0
        }
      }
    },
    card: {
      hidden: { opacity: 0, y: 80, scale: 0.8 },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          type: "spring" as "spring",
          stiffness: 100,
          damping: 20,
          duration: 0.8
        }
      }
    },
    badge: {
      hidden: { opacity: 0, scale: 0, rotate: -90 },
      visible: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: {
          type: "spring" as const,
          stiffness: 200,
          damping: 20
        }
      }
    },
    title: {
      hidden: { opacity: 0, x: -30 },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          type: "spring" as const,
          stiffness: 120,
          damping: 20
        }
      }
    },
    content: {
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          ease: easeOut
        }
      }
    },
    image: {
      hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
      visible: {
        opacity: 1,
        scale: 1,
        rotateY: 0,
        transition: {
          type: "spring" as const,
          stiffness: 100,
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
          damping: 20
        }
      }
    }
  }), []);

  const handleCardHover = useCallback((index: number | null) => {
    setHoveredIndex(index);
  }, []);

  const handleCardFocus = useCallback((index: number | null) => {
    setFocusedIndex(index);
  }, []);

  const getIconForIndex = useCallback((index: number) => {
    const icons = [Target, TrendingUp, Zap];
    const IconComponent = icons[index] || Target;
    return IconComponent;
  }, []);

  return (
    <motion.section 
      ref={ref}
      id="target-section" 
      className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 relative overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={animationVariants.container}
      role="region"
      aria-label="Mục tiêu chương trình đào tạo"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-indigo-600/5" />
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      {/* Floating Sparkles */}
      <AnimatePresence>
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: `${15 + i * 12}%`,
              left: `${5 + i * 11}%`,
            }}
            variants={animationVariants.sparkle}
            animate={{
              y: [-8, 8, -8],
              rotate: [0, 180, 360],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Sparkles className="w-3 h-3 text-blue-400/30" />
          </motion.div>
        ))}
      </AnimatePresence>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        {/* Enhanced Header */}
        <motion.div 
          className="text-center mb-12 lg:mb-16"
          variants={animationVariants.header}
        >
          <motion.div 
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 backdrop-blur-sm border border-blue-200/30 rounded-full"
            variants={animationVariants.badge}
          >
            <Target className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700 dark:text-blue-400">
              Mục tiêu đào tạo
            </span>
          </motion.div>
          
          <PointerHighlight>
            <motion.h2 
              className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent px-4 py-2 leading-tight"
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              Mục tiêu của chương trình đào tạo
            </motion.h2>
          </PointerHighlight>
        </motion.div>
      </div>
      <motion.div variants={animationVariants.beam}>
        <TracingBeam className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl lg:max-w-7xl mx-auto antialiased pt-8 relative">
            {targetContent.map((item, index) => {
              const IconComponent = getIconForIndex(index);
              const isHovered = hoveredIndex === index;
              const isFocused = focusedIndex === index;
              const isActive = isHovered || isFocused;
              
              return (
                <motion.article 
                  key={`content-${index}`} 
                  className={cn(
                    "mb-12 sm:mb-16 lg:mb-20 p-6 lg:p-8 rounded-2xl transition-all duration-500",
                    "bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border border-white/20",
                    "hover:bg-white/80 dark:hover:bg-gray-900/80 hover:shadow-xl hover:shadow-blue-500/10",
                    isActive && "ring-2 ring-blue-500/20 shadow-lg shadow-blue-500/10"
                  )}
                  variants={animationVariants.card}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={{
                    scale: 1.02,
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                  onHoverStart={() => handleCardHover(index)}
                  onHoverEnd={() => handleCardHover(null)}
                  onFocus={() => handleCardFocus(index)}
                  onBlur={() => handleCardFocus(null)}
                  tabIndex={0}
                  role="article"
                  aria-label={`Mục tiêu ${index + 1}: ${item.title}`}
                >
                  {/* Enhanced Badge with Icon */}
                  <motion.div 
                    className="flex items-center gap-3 mb-6"
                    variants={animationVariants.badge}
                  >
                    <motion.div
                      className={cn(
                        "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300",
                        index === 0 && "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-700 dark:text-blue-300",
                        index === 1 && "bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-700 dark:text-green-300",
                        index === 2 && "bg-gradient-to-r from-purple-500/20 to-violet-500/20 text-purple-700 dark:text-purple-300"
                      )}
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <IconComponent className="w-4 h-4" />
                      <span>{item.badge}</span>
                    </motion.div>
                    
                    {/* Progress Indicator */}
                    <motion.div 
                      className="flex items-center gap-1"
                      variants={animationVariants.sparkle}
                    >
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className={cn(
                            "w-2 h-2 rounded-full transition-all duration-300",
                            i <= index ? "bg-blue-500" : "bg-gray-300 dark:bg-gray-600"
                          )}
                          animate={isActive ? {
                            scale: [1, 1.2, 1],
                            opacity: [0.7, 1, 0.7]
                          } : {}}
                          transition={{
                            duration: 1,
                            repeat: isActive ? Infinity : 0,
                            delay: i * 0.1
                          }}
                        />
                      ))}
                    </motion.div>
                  </motion.div>

                  {/* Enhanced Title */}
                  <motion.h3 
                    className={cn(
                      "text-xl mb-6 font-bold leading-tight",
                      "bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent",
                      "dark:from-white dark:via-blue-100 dark:to-white"
                    )}
                    variants={animationVariants.title}
                  >
                    {item.title}
                    <motion.span
                      className="inline-block ml-2"
                      animate={isActive ? {
                        x: [0, 5, 0],
                        transition: { duration: 1, repeat: Infinity }
                      } : {}}
                    >
                      <ChevronRight className="w-6 h-6 inline text-blue-500" />
                    </motion.span>
                  </motion.h3>

                  {/* Enhanced Content Layout */}
                  <motion.div 
                    className="flex flex-col lg:flex-row gap-8 lg:gap-12"
                    variants={animationVariants.content}
                  >
                    {/* Enhanced Image Section */}
                    <motion.div
                      className="lg:w-2/5 relative"
                      variants={animationVariants.image}
                      whileHover={{
                        scale: 1.03,
                        rotateY: 2,
                        transition: { duration: 0.3 }
                      }}
                    >
                      {item?.image && (
                        <div className="relative group">
                          {/* Glow Effect */}
                          <div className={cn(
                            "absolute inset-0 rounded-xl blur-xl transition-all duration-500 opacity-0 group-hover:opacity-30",
                            index === 0 && "bg-blue-400",
                            index === 1 && "bg-green-400",
                            index === 2 && "bg-purple-400"
                          )} />
                          
                          <AspectRatio ratio={4 / 3} className="relative z-10">
                            <Image
                              src={item.image}
                              alt={`Hình minh họa cho ${item.title}`}
                              fill
                              className="rounded-xl object-cover shadow-lg transition-all duration-300 group-hover:shadow-xl"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                            />
                          </AspectRatio>
                          
                          {/* Overlay Icon */}
                          <motion.div
                            className={cn(
                              "absolute top-4 right-4 p-2 rounded-full backdrop-blur-sm transition-all duration-300",
                              index === 0 && "bg-blue-500/20 text-blue-600",
                              index === 1 && "bg-green-500/20 text-green-600",
                              index === 2 && "bg-purple-500/20 text-purple-600"
                            )}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                          >
                            <IconComponent className="w-5 h-5" />
                          </motion.div>
                        </div>
                      )}
                    </motion.div>
                    
                    {/* Enhanced Description */}
                    <div className="lg:w-3/5 space-y-4">
                      <motion.div 
                        className="prose prose-lg dark:prose-invert max-w-none"
                        variants={animationVariants.content}
                      >
                        <div className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                          {item.description}
                        </div>
                      </motion.div>
                      
                      {/* Key Points */}
                      <motion.div 
                        className="mt-6 flex flex-wrap gap-2"
                        variants={animationVariants.content}
                      >
                        {item.keyPoints?.map((point, pointIndex) => (
                          <motion.span
                            key={pointIndex}
                            className={cn(
                              "inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium",
                              index === 0 && "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
                              index === 1 && "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
                              index === 2 && "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
                            )}
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ 
                              opacity: 1, 
                              scale: 1,
                              transition: { delay: pointIndex * 0.1 }
                            }}
                          >
                            <Star className="w-3 h-3" />
                            {point}
                          </motion.span>
                        ))}
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.article>
              );
            })}
          </div>
        </TracingBeam>
      </motion.div>
    </motion.section>
  );
}

const targetContent = [
  {
    badge: "Kiến thức toàn diện",
    title: "Kiến thức toàn diện về Tài chính - Ngân hàng và Công nghệ",
    description: (
      <>
        <p className="text-sm">
          Chương trình cung cấp hệ thống kiến thức toàn diện về các lĩnh vực tài chính – ngân hàng cốt lõi như tài chính doanh nghiệp, ngân hàng thương mại, thị trường tài chính, quản trị rủi ro, đầu tư và thanh toán quốc tế. Cùng với đó, sinh viên được trang bị những kiến thức mới nhất về công nghệ tài chính, giúp họ hiểu rõ cách thức ứng dụng trí tuệ nhân tạo (AI), học máy (Machine Learning), dữ liệu lớn (Big Data), chuỗi khối (Blockchain), và hợp đồng thông minh (Smart Contracts) vào các hoạt động tài chính. Đây là những yếu tố cốt lõi trong việc đổi mới mô hình kinh doanh ngân hàng và tạo ra các sản phẩm tài chính số hiện đại.
        </p>
      </>
    ),
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    keyPoints: ["Tài chính doanh nghiệp", "Ngân hàng thương mại", "AI & Machine Learning", "Blockchain"]
  },
  {
    badge: "Công nghệ tài chính",
    title: "Ứng dụng Công nghệ Tài chính (FinTech)",
    description: (
      <>
        <p className="text-sm">
          Chương trình cung cấp hệ thống kiến thức toàn diện về các lĩnh vực tài chính – ngân hàng cốt lõi như tài chính doanh nghiệp, ngân hàng thương mại, thị trường tài chính, quản trị rủi ro, đầu tư và thanh toán quốc tế. Cùng với đó, sinh viên được trang bị những kiến thức mới nhất về công nghệ tài chính, giúp họ hiểu rõ cách thức ứng dụng trí tuệ nhân tạo (AI), học máy (Machine Learning), dữ liệu lớn (Big Data), chuỗi khối (Blockchain), và hợp đồng thông minh (Smart Contracts) vào các hoạt động tài chính. Đây là những yếu tố cốt lõi trong việc đổi mới mô hình kinh doanh ngân hàng và tạo ra các sản phẩm tài chính số hiện đại.
        </p>
      </>
    ),
    image:
      "https://images.unsplash.com/photo-1665686306574-1ace09918530?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    keyPoints: ["FinTech Innovation", "Digital Banking", "Smart Contracts", "Big Data Analytics"]
  },
  {
    badge: "Thực hành và ứng dụng",
    title: "Thực hành và Ứng dụng thực tế",
    description: (
      <>
        <p className="text-sm">
          Không dừng lại ở lý thuyết, chương trình CLC còn tập trung vào thực hành, giúp sinh viên phát triển kỹ năng ứng dụng công nghệ vào tài chính – ngân hàng. Sinh viên có cơ hội tiếp cận các phòng thí nghiệm chuỗi khối, phòng học máy và trang thiết bị hiện đại, từ đó rèn luyện tư duy sáng tạo, khả năng phân tích dữ liệu và quản lý tài chính cá nhân bằng các công cụ số hóa. Chương trình cũng mang đến các môn học chuyên sâu như Nguyên lý và kỹ thuật học máy trong FinTech, Chuỗi khối và tiền mã hóa, Trí tuệ nhân tạo trong tài chính ngân hàng, Trí tuệ nhân tạo trong giao dịch định lượng, Phân tích dữ liệu lớn trong tài chính ngân hàng, giúp sinh viên nhanh chóng bắt nhịp với các xu hướng đổi mới trong ngành
        </p>
      </>
    ),
    image:
      "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    keyPoints: ["Phòng thí nghiệm", "Tư duy sáng tạo", "Phân tích dữ liệu", "Giao dịch định lượng"]
  },
];
