"use client";
import React, { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { motion, useInView } from "framer-motion";

export function CareerTimelineSection() {
  const [activePhase, setActivePhase] = useState<number>(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Animation variants
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
    hidden: { opacity: 0, y: -60, scale: 0.9 },
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

  const timelineVariants = {
              hidden: { scaleY: 0, opacity: 0 },
              visible: { 
                scaleY: 1, 
                opacity: 1, 
                transition: {
                  duration: 2,
                  ease: ["easeIn", "easeOut"],
                  delay: 0.5
                }
              }
            };

  const itemVariants = {
    hidden: { opacity: 0, x: 0, y: 50, scale: 0.8 },
    visible: (custom: { position: string; index: number }) => ({
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 120,
        damping: 15,
        delay: custom.index * 0.3 + 0.8
      }
    })
  };

  const dotVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: (index: number) => ({
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 15,
        delay: index * 0.3 + 1.2
      }
    })
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (index: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        delay: index * 0.3 + 1
      }
    })
  };

  const careerTimeline = [
    {
      id: 0,
      phase: "Năm 1-2",
      title: "Xây dựng nền tảng",
      subtitle: "Kiến thức cơ bản và định hướng",
      description: "Học các môn cơ sở, làm quen với lĩnh vực tài chính ngân hàng, tham gia các hoạt động ngoại khóa và câu lạc bộ chuyên ngành.",
      skills: ["Kiến thức nền tảng", "Tư duy phân tích", "Kỹ năng mềm", "Tiếng Anh chuyên ngành"],
      opportunities: ["Học bổng", "Tham gia CLB", "Hoạt động tình nguyện", "Kỹ năng thuyết trình"],
      icon: "🌱",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      position: "left"
    },
    {
      id: 1,
      phase: "Năm 3",
      title: "Chuyên sâu và ứng dụng",
      subtitle: "FinTech và công nghệ tài chính",
      description: "Học các môn chuyên sâu về FinTech, AI, Blockchain. Tham gia dự án thực tế với doanh nghiệp và thực tập ngắn hạn.",
      skills: ["AI trong tài chính", "Blockchain", "Phân tích dữ liệu", "Quản trị rủi ro"],
      opportunities: ["Dự án thực tế", "Thực tập ngắn hạn", "Chứng chỉ quốc tế", "Nghiên cứu khoa học"],
      icon: "🚀",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      position: "right"
    },
    {
      id: 2,
      phase: "Năm 4",
      title: "Chuẩn bị nghề nghiệp",
      subtitle: "Thực tập và luận văn",
      description: "Thực tập tốt nghiệp tại các ngân hàng, công ty tài chính hoặc FinTech. Hoàn thành luận văn và chuẩn bị cho sự nghiệp.",
      skills: ["Kinh nghiệm thực tế", "Quản lý dự án", "Kỹ năng lãnh đạo", "Mạng lưới nghề nghiệp"],
      opportunities: ["Thực tập có lương", "Cơ hội việc làm", "Luận văn xuất sắc", "Khởi nghiệp"],
      icon: "🎯",
      color: "from-purple-500 to-violet-500",
      bgColor: "from-purple-50 to-violet-50",
      position: "left"
    },
    {
      id: 3,
      phase: "Sau tốt nghiệp",
      title: "Phát triển sự nghiệp",
      subtitle: "Chuyên gia tài chính tương lai",
      description: "Làm việc tại các vị trí chuyên môn cao, tiếp tục học tập và phát triển, trở thành chuyên gia hàng đầu trong lĩnh vực.",
      skills: ["Chuyên môn cao", "Tư duy chiến lược", "Quản lý nhóm", "Đổi mới sáng tạo"],
      opportunities: ["Vị trí quản lý", "Chuyên gia tư vấn", "Khởi nghiệp FinTech", "Nghiên cứu cao học"],
      icon: "👑",
      color: "from-amber-500 to-orange-500",
      bgColor: "from-amber-50 to-orange-50",
      position: "right"
    }
  ];

  return (
    <motion.section 
      ref={ref}
      className="py-16 lg:py-24 bg-gradient-to-b from-zinc-50 via-gray-100 to-zinc-50 relative overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-orange-50/50"
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ 
          opacity: isInView ? 1 : 0, 
          scale: isInView ? 1 : 1.2,
          transition: { duration: 2, ease: "easeOut" }
        }}
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
              initial={{ opacity: 0, x: -100 }}
              animate={{ 
                opacity: isInView ? 1 : 0, 
                x: isInView ? 0 : -100,
                transition: { delay: 0.3, duration: 0.8, type: "spring", stiffness: 100 }
              }}
            >
              Lộ trình phát triển sự nghiệp
            </motion.h2>
          </PointerHighlight>
          </div>
          <motion.div 
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: isInView ? 1 : 0, 
              y: isInView ? 0 : 30,
              transition: { delay: 0.6, duration: 0.8 }
            }}
          >
            <TextGenerateEffect 
              words="4 năm đầy thú vị và cơ hội phát triển không giới hạn."
              className="text-lg text-slate-600"
            />
          </motion.div>
        </motion.div>

        {/* Timeline */}
        <motion.div 
          className="relative mb-16"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: isInView ? 1 : 0,
            transition: { delay: 1, duration: 1 }
          }}
        >
          {/* Central line - Hidden on mobile */}
          <motion.div 
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-400 via-blue-400 via-purple-400 to-orange-400 rounded-full origin-top"
            variants={{
              hidden: { scaleY: 0, opacity: 0 },
              visible: { 
                scaleY: 1, 
                opacity: 1, 
                transition: {
                  duration: 2,
                  ease: [0.43, 0.13, 0.23, 0.96], // Custom easing curve
                  delay: 0.5
                }
              }
            }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          />
          
          {/* Timeline items */}
           <div className="space-y-8 md:space-y-16">
             {careerTimeline.map((item) => (
               <motion.div
                 key={item.id}
                 className={cn(
                   "relative flex items-center",
                   // Mobile: center everything, Desktop: alternate left/right
                   "justify-center md:justify-start",
                   item.position === "right" && "md:justify-end"
                 )}
                 variants={itemVariants}
                 initial="hidden"
                 animate={isInView ? "visible" : "hidden"}
                 custom={{ position: item.position, index: item.id }}
                 whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
               >
                 {/* Timeline dot */}
                 <div className={cn(
                   "z-20",
                   // Mobile: relative positioning, Desktop: absolute center
                   "relative md:absolute md:left-1/2 md:transform md:-translate-x-1/2",
                   // Mobile: show above content
                   "mb-4 md:mb-0"
                 )}>
                   <motion.div 
                     className={cn(
                       "w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-lg md:text-2xl cursor-pointer transition-all duration-300 border-4 border-white shadow-lg mx-auto",
                       `bg-gradient-to-b ${item.color}`,
                       activePhase === item.id ? "scale-125 shadow-2xl" : "hover:scale-110"
                     )}
                     variants={dotVariants}
                     initial="hidden"
                     animate={isInView ? "visible" : "hidden"}
                     custom={item.id}
                     onClick={() => setActivePhase(activePhase === item.id ? -1 : item.id)}
                     whileHover={{ 
                       scale: 1.2, 
                       rotate: 10,
                       boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                       transition: { duration: 0.3 }
                     }}
                     whileTap={{ scale: 0.95 }}
                   >
                     {item.icon}
                   </motion.div>
                 </div>

                {/* Content card */}
                 <motion.div 
                   className={cn(
                     "w-full transition-all duration-500 cursor-pointer",
                     // Mobile: full width with padding, Desktop: max-width with side padding
                     "px-4 md:max-w-lg",
                     // Desktop positioning
                     item.position === "left" ? "md:mr-auto md:pr-16" : "md:ml-auto md:pl-16",
                     activePhase === item.id ? "scale-105" : "hover:scale-102"
                   )}
                   variants={cardVariants}
                   initial="hidden"
                   animate={isInView ? "visible" : "hidden"}
                   custom={item.id}
                   onClick={() => setActivePhase(activePhase === item.id ? -1 : item.id)}
                   whileHover={{ 
                     scale: 1.05, 
                     y: -5,
                     transition: { duration: 0.3 }
                   }}
                   whileTap={{ scale: 0.98 }}
                 >
                   <motion.div 
                     className={cn(
                       "bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-8 border border-white/50 shadow-xl transition-all duration-300",
                       activePhase === item.id ? "shadow-2xl ring-4 ring-blue-500/20" : ""
                     )}
                     whileHover={{
                       boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
                       transition: { duration: 0.3 }
                     }}
                   >
                    {/* Header */}
                     <div className="mb-4 md:mb-6">
                       <motion.div 
                         className={cn(
                           "inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-xl md:rounded-2xl text-white font-bold text-xs md:text-sm mb-2 md:mb-3 shadow-lg",
                           `bg-gradient-to-r ${item.color}`
                         )}
                         initial={{ opacity: 0, scale: 0.8, x: item.position === "left" ? -50 : 50 }}
                         animate={{
                           opacity: isInView ? 1 : 0,
                           scale: isInView ? 1 : 0.8,
                           x: isInView ? 0 : (item.position === "left" ? -50 : 50),
                           transition: { delay: item.id * 0.3 + 1.5, duration: 0.6 }
                         }}
                         whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                       >
                         {item.phase}
                       </motion.div>
                       <motion.h3 
                         className="text-lg md:text-xl font-bold text-slate-800 mb-1 md:mb-2"
                         initial={{ opacity: 0, y: 20 }}
                         animate={{
                           opacity: isInView ? 1 : 0,
                           y: isInView ? 0 : 20,
                           transition: { delay: item.id * 0.3 + 1.7, duration: 0.6 }
                         }}
                       >
                         {item.title}
                       </motion.h3>
                       <motion.p 
                         className="text-xs md:text-sm font-medium text-slate-600"
                         initial={{ opacity: 0, y: 20 }}
                         animate={{
                           opacity: isInView ? 1 : 0,
                           y: isInView ? 0 : 20,
                           transition: { delay: item.id * 0.3 + 1.9, duration: 0.6 }
                         }}
                       >
                         {item.subtitle}
                       </motion.p>
                     </div>

                    {/* Description */}
                     <motion.p 
                       className="text-sm md:text-base text-slate-700 mb-4 md:mb-6 leading-relaxed"
                       initial={{ opacity: 0, y: 20 }}
                       animate={{
                         opacity: isInView ? 1 : 0,
                         y: isInView ? 0 : 20,
                         transition: { delay: item.id * 0.3 + 2.1, duration: 0.6 }
                       }}
                     >
                       {item.description}
                     </motion.p>

                    {/* Skills and Opportunities */}
                     <motion.div 
                       className={cn(
                         "transition-all duration-500 overflow-hidden",
                         activePhase === item.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                       )}
                       initial={{ opacity: 0, height: 0 }}
                       animate={{
                         opacity: activePhase === item.id ? 1 : 0,
                         height: activePhase === item.id ? "auto" : 0,
                         transition: { duration: 0.5, ease: "easeInOut" }
                       }}
                     >
                       <motion.div 
                         className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4 pt-3 md:pt-4 border-t border-slate-200"
                         initial={{ opacity: 0, y: 20 }}
                         animate={{
                           opacity: activePhase === item.id ? 1 : 0,
                           y: activePhase === item.id ? 0 : 20,
                           transition: { delay: 0.2, duration: 0.4 }
                         }}
                       >
                         <motion.div
                           initial={{ opacity: 0, x: -30 }}
                           animate={{
                             opacity: activePhase === item.id ? 1 : 0,
                             x: activePhase === item.id ? 0 : -30,
                             transition: { delay: 0.3, duration: 0.5 }
                           }}
                         >
                           <h4 className="font-semibold text-slate-800 mb-2 md:mb-3 text-sm md:text-base">Kỹ năng phát triển</h4>
                           <div className="space-y-1.5 md:space-y-2">
                             {item.skills.map((skill, skillIndex) => (
                               <motion.div 
                                 key={skillIndex} 
                                 className="flex items-center gap-2"
                                 initial={{ opacity: 0, x: -20 }}
                                 animate={{
                                   opacity: activePhase === item.id ? 1 : 0,
                                   x: activePhase === item.id ? 0 : -20,
                                   transition: { 
                                     delay: 0.4 + skillIndex * 0.1, 
                                     duration: 0.4 
                                   }
                                 }}
                                 whileHover={{ x: 5, transition: { duration: 0.2 } }}
                               >
                                 <motion.div 
                                   className={cn(
                                     "w-1.5 h-1.5 md:w-2 md:h-2 rounded-full flex-shrink-0",
                                     `bg-gradient-to-r ${item.color}`
                                   )}
                                   initial={{ scale: 0 }}
                                   animate={{
                                     scale: activePhase === item.id ? 1 : 0,
                                     transition: { 
                                       delay: 0.5 + skillIndex * 0.1, 
                                       duration: 0.3,
                                       type: "spring",
                                       stiffness: 200
                                     }
                                   }}
                                 />
                                 <span className="text-xs md:text-sm text-slate-700">{skill}</span>
                               </motion.div>
                             ))}
                           </div>
                         </motion.div>
                         <motion.div
                           initial={{ opacity: 0, x: 30 }}
                           animate={{
                             opacity: activePhase === item.id ? 1 : 0,
                             x: activePhase === item.id ? 0 : 30,
                             transition: { delay: 0.4, duration: 0.5 }
                           }}
                         >
                           <h4 className="font-semibold text-slate-800 mb-2 md:mb-3 text-sm md:text-base">Cơ hội</h4>
                           <div className="space-y-1.5 md:space-y-2">
                             {item.opportunities.map((opportunity, oppIndex) => (
                               <motion.div 
                                 key={oppIndex} 
                                 className="flex items-center gap-2"
                                 initial={{ opacity: 0, x: 20 }}
                                 animate={{
                                   opacity: activePhase === item.id ? 1 : 0,
                                   x: activePhase === item.id ? 0 : 20,
                                   transition: { 
                                     delay: 0.5 + oppIndex * 0.1, 
                                     duration: 0.4 
                                   }
                                 }}
                                 whileHover={{ x: -5, transition: { duration: 0.2 } }}
                               >
                                 <motion.div 
                                   className={cn(
                                     "w-1.5 h-1.5 md:w-2 md:h-2 rounded-full flex-shrink-0",
                                     `bg-gradient-to-r ${item.color}`
                                   )}
                                   initial={{ scale: 0 }}
                                   animate={{
                                     scale: activePhase === item.id ? 1 : 0,
                                     transition: { 
                                       delay: 0.6 + oppIndex * 0.1, 
                                       duration: 0.3,
                                       type: "spring",
                                       stiffness: 200
                                     }
                                   }}
                                 />
                                 <span className="text-xs md:text-sm text-slate-700">{opportunity}</span>
                               </motion.div>
                             ))}
                           </div>
                         </motion.div>
                       </motion.div>
                     </motion.div>
                   </motion.div>
                 </motion.div>
               </motion.div>
             ))}
           </div>
         </motion.div>
       </div>
     </motion.section>
  );
}