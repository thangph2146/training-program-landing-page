"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  Calculator,
  Scale,
  Database,
  Globe,
  Star,
  CheckCircle,
  Users
} from "lucide-react";

interface Course {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  category: string;
  highlights: string[];
  color: string;
  level: string;
}

const featuredCourses: Course[] = [
  {
    id: 'finance-banking',
    title: 'Tài chính - Ngân hàng',
    description: 'Nắm vững kiến thức cốt lõi về tài chính, ngân hàng và các sản phẩm dịch vụ tài chính hiện đại trong bối cảnh hội nhập quốc tế.',
    icon: TrendingUp,
    category: 'Chuyên ngành chính',
    highlights: [
      'Phân tích tài chính',
      'Quản lý rủi ro',
      'Ngân hàng số'
    ],
    color: 'bg-blue-500/10 text-blue-600 border-blue-200',
    level: 'Cơ bản đến Nâng cao'
  },
  {
    id: 'business-management',
    title: 'Quản trị kinh doanh',
    description: 'Phát triển kỹ năng lãnh đạo và quản lý doanh nghiệp trong môi trường kinh doanh toàn cầu với công nghệ hiện đại.',
    icon: Users,
    category: 'Kỹ năng quản lý',
    highlights: [
      'Chiến lược kinh doanh',
      'Lãnh đạo',
      'Quản lý dự án'
    ],
    color: 'bg-green-500/10 text-green-600 border-green-200',
    level: 'Trung cấp đến Nâng cao'
  },
  {
    id: 'accounting-auditing',
    title: 'Kế toán - Kiểm toán',
    description: 'Thành thạo các nguyên tắc kế toán quốc tế và kỹ năng kiểm toán chuyên nghiệp theo chuẩn mực quốc tế.',
    icon: Calculator,
    category: 'Chuyên môn cao',
    highlights: [
      'IFRS',
      'Kiểm toán nội bộ',
      'Phân tích báo cáo'
    ],
    color: 'bg-purple-500/10 text-purple-600 border-purple-200',
    level: 'Cơ bản đến Chuyên gia'
  },
  {
    id: 'economic-law',
    title: 'Luật kinh tế',
    description: 'Hiểu biết sâu sắc về khung pháp lý kinh tế, luật ngân hàng và các quy định tài chính trong bối cảnh hội nhập.',
    icon: Scale,
    category: 'Pháp lý chuyên sâu',
    highlights: [
      'Luật ngân hàng',
      'Tuân thủ',
      'Quy định quốc tế'
    ],
    color: 'bg-red-500/10 text-red-600 border-red-200',
    level: 'Trung cấp đến Nâng cao'
  },
  {
    id: 'data-science',
    title: 'Khoa học dữ liệu trong kinh doanh',
    description: 'Ứng dụng công nghệ dữ liệu và trí tuệ nhân tạo trong phân tích tài chính và ra quyết định kinh doanh.',
    icon: Database,
    category: 'Công nghệ tiên tiến',
    highlights: [
      'Big Data',
      'Machine Learning',
      'FinTech Analytics'
    ],
    color: 'bg-orange-500/10 text-orange-600 border-orange-200',
    level: 'Nâng cao đến Chuyên gia'
  },
  {
    id: 'international-economics',
    title: 'Kinh tế quốc tế',
    description: 'Nắm bắt xu hướng kinh tế toàn cầu và kỹ năng phân tích thị trường quốc tế trong thời đại số hóa.',
    icon: Globe,
    category: 'Tầm nhìn toàn cầu',
    highlights: [
      'Thương mại quốc tế',
      'Tỷ giá',
      'Hội nhập kinh tế'
    ],
    color: 'bg-teal-500/10 text-teal-600 border-teal-200',
    level: 'Trung cấp đến Nâng cao'
  }
];

export default function FeaturedCoursesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 20,
        delay: 0.2
      }
    }
  };

  const highlightVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.section
      ref={ref}
      className="py-16 lg:py-24 bg-gradient-to-b from-zinc-50 via-slate-100 to-zinc-50 relative overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div className="text-center mb-16" variants={headerVariants}>
          <div className='w-full flex justify-end'>
            <PointerHighlight>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 p-4">
                Các Môn Học Nổi Bật
              </h2>
            </PointerHighlight>
          </div>
          <div className="max-w-3xl mx-auto">
            <TextGenerateEffect
              words="Chương trình đào tạo toàn diện với các môn học hiện đại, kết hợp lý thuyết và thực hành để phát triển năng lực chuyên môn cao."
              className="text-lg text-slate-600"
            />
          </div>
        </motion.div>

        {/* Courses Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {featuredCourses.map((course, index) => {
            const IconComponent = course.icon;
            return (
              <motion.div
                key={course.id}
                className="group cursor-pointer"
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-white/50 shadow-xl h-full relative overflow-hidden"
                  whileHover={{
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Animated background gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-3xl"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <motion.div
                        className="p-3 bg-gradient-to-b from-blue-100 to-indigo-100 rounded-2xl group-hover:from-blue-200 group-hover:to-indigo-200 transition-colors flex-shrink-0"
                        variants={iconVariants}
                        whileHover={{
                          rotate: 360,
                          scale: 1.1,
                          transition: { duration: 0.5 }
                        }}
                      >
                        <IconComponent className="w-6 h-6" />
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                        >
                          <Badge variant="secondary" className="mb-2 text-xs">
                            {course.category}
                          </Badge>
                          <h3 className="text-xl font-bold text-slate-800 mb-2 leading-tight">
                            {course.title}
                          </h3>
                        </motion.div>
                      </div>
                    </div>

                    {/* Description */}
                    <motion.p
                      className="text-slate-600 mb-6 leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      {course.description}
                    </motion.p>

                    {/* Highlights */}
                    <motion.div
                      className="mb-6"
                      variants={highlightVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <h4 className="text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">
                        <motion.div
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        >
                          <Star className="h-4 w-4 text-yellow-500" />
                        </motion.div>
                        Điểm nổi bật
                      </h4>
                      <div className="space-y-2">
                        {course.highlights.map((highlight, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-center gap-2 text-sm text-slate-600"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + index * 0.1 + idx * 0.1 }}
                          >
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{
                                delay: 0.6 + index * 0.1 + idx * 0.1,
                                type: "spring",
                                stiffness: 200
                              }}
                            >
                              <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                            </motion.div>
                            <span>{highlight}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Level */}
                    <motion.div
                      className="pt-4 border-t border-slate-200"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                    >
                      <p className="text-sm text-slate-500">Trình độ</p>
                      <p className="font-semibold text-slate-700">{course.level}</p>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}