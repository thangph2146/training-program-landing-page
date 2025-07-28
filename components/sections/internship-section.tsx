'use client'

import React, { useRef, useState, useCallback, useMemo, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';
import { PointerHighlight } from '@/components/ui/pointer-highlight';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerClose
} from '@/components/ui/drawer';
import {
  Briefcase,
  Building2,
  Award,
  TrendingUp,
  CheckCircle,
  Target,
  X,
  Users,
  Calendar,
  MapPin,
  ArrowRight,
  Clock,
  Star,
  ExternalLink,
  Sparkles,
  GraduationCap,
  Zap,
  UserPlus,
  Phone,
} from 'lucide-react';

interface InternshipProgram {
  title: string;
  type: string;
  description: string;
  partners: string[];
  icon: React.ReactNode;
  badge: string;
  src: string;
}

const InternshipSection: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [focusedCard, setFocusedCard] = useState<number | null>(null);
  const [isClient, setIsClient] = useState(false);
  // Optimized animation variants
  const customColors = {
    primary: "red",
    secondary: "slate",
    accent: "red"
  }

  const animationVariants = useMemo(() => ({
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.2
        }
      }
    },
    header: {
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
    },
    card: {
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
    },
    icon: {
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
    },
    sparkle: {
      hidden: { scale: 0, opacity: 0 },
      visible: {
        scale: [0, 1.2, 1],
        opacity: [0, 1, 0.8],
        transition: {
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse" as const
        }
      }
    }
  }), []);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleCardHover = useCallback((index: number | null) => {
    setHoveredCard(index);
  }, []);

  const handleCardFocus = useCallback((index: number | null) => {
    setFocusedCard(index);
  }, []);


  const getColorClasses = (colorName: string, type: 'bg' | 'text' | 'border' | 'ring') => {
    const colorMap: Record<string, Record<string, string>> = {
      red: {
        bg: 'bg-red-500',
        text: 'text-red-600',
        border: 'border-red-200',
        ring: 'ring-red-500'
      },
      blue: {
        bg: 'bg-blue-500',
        text: 'text-blue-600',
        border: 'border-blue-200',
        ring: 'ring-blue-500'
      },
      green: {
        bg: 'bg-green-500',
        text: 'text-green-600',
        border: 'border-green-200',
        ring: 'ring-green-500'
      },
      purple: {
        bg: 'bg-purple-500',
        text: 'text-purple-600',
        border: 'border-purple-200',
        ring: 'ring-purple-500'
      },
      slate: {
        bg: 'bg-slate-500',
        text: 'text-slate-600',
        border: 'border-slate-200',
        ring: 'ring-slate-500'
      }
    };

    return colorMap[colorName]?.[type] || colorMap.red[type];
  };
  const internshipPrograms: InternshipProgram[] = [
    {
      title: "Thực tập Tài chính - Ngân hàng",
      type: "Thực tập có lương",
      description: "Trải nghiệm thực tế tại các ngân hàng, công ty tài chính hàng đầu, học hỏi quy trình nghiệp vụ và phát triển kỹ năng chuyên môn.",
      partners: ["Vietcombank", "BIDV", "Techcombank", "MB Bank"],
      icon: <Briefcase className="w-6 h-6" />,
      badge: "Phổ biến",
      src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Kiến tập Quản trị Kinh doanh",
      type: "Kiến tập học tập",
      description: "Tham quan, học hỏi mô hình quản trị tại các doanh nghiệp lớn, hiểu rõ quy trình vận hành và chiến lược kinh doanh.",
      partners: ["Vingroup", "FPT", "Saigon Co.op", "Masan Group"],
      icon: <Building2 className="w-6 h-6" />,
      badge: "Mới",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Thực tập Khoa học Dữ liệu",
      type: "Thực tập dự án",
      description: "Tham gia các dự án phân tích dữ liệu thực tế, ứng dụng AI/ML trong giải quyết bài toán kinh doanh của doanh nghiệp.",
      partners: ["VNG", "Tiki", "Shopee", "Grab"],
      icon: <TrendingUp className="w-6 h-6" />,
      badge: "Hot",
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Thực tập Marketing Digital",
      type: "Thực tập sáng tạo",
      description: "Thực hiện các chiến dịch marketing online, quản lý social media, phân tích hiệu quả quảng cáo cho các thương hiệu.",
      partners: ["Unilever", "P&G", "Coca-Cola", "Nestle"],
      icon: <Target className="w-6 h-6" />,
      badge: "Sáng tạo",
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Kiến tập Luật Kinh tế",
      type: "Kiến tập chuyên môn",
      description: "Tham quan tòa án, văn phòng luật sư, học hỏi quy trình xử lý các vụ việc pháp lý trong lĩnh vực kinh tế.",
      partners: ["Tòa án TP.HCM", "Công ty Luật ANVI", "Công ty Luật Bình Minh"],
      icon: <Award className="w-6 h-6" />,
      badge: "Chuyên môn",
      src: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Thực tập Kế toán - Kiểm toán",
      type: "Thực tập nghiệp vụ",
      description: "Thực hành công việc kế toán, kiểm toán tại các công ty kiểm toán độc lập và doanh nghiệp lớn.",
      partners: ["PwC", "Deloitte", "EY", "KPMG"],
      icon: <CheckCircle className="w-6 h-6" />,
      badge: "Uy tín",
      src: "https://images.unsplash.com/photo-1554224154-26032fced8bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <motion.section
      ref={ref}
      className="py-8 lg:py-12 relative overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={animationVariants.container}
      role="region"
      aria-labelledby="internship-section-title"
    >
      {/* Professional Academic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-900/8 to-slate-800/8 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-slate-900/8 to-blue-800/8 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-slate-100/15 to-blue-100/15 rounded-full blur-3xl" />

        {/* Academic Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.015]">
          <div className="h-full w-full" style={{
            backgroundImage: `linear-gradient(rgba(30, 41, 59, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 41, 59, 0.1) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }} />
        </div>

        {/* Floating animated elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-slate-400/30 rounded-full"
            style={{
              top: `${20 + (i * 15)}%`,
              left: `${10 + (i * 12)}%`,
            }}
            variants={animationVariants.sparkle}
            initial="hidden"
            animate="visible"
            transition={{ delay: i * 0.2 }}
          />
        ))}

        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute"
            style={{
              top: `${30 + (i * 20)}%`,
              right: `${15 + (i * 10)}%`,
            }}
            variants={animationVariants.sparkle}
            initial="hidden"
            animate="visible"
            transition={{ delay: i * 0.3 }}
          >
            <Sparkles className={cn("w-4 h-4", getColorClasses(customColors.accent || 'red', 'text'), "opacity-40")} />
          </motion.div>
        ))}
      </div>

      {/* Floating Background Elements */}
      {isClient && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Fixed positioned floating elements */}
          {[
            { size: 120, left: 10, top: 15, color: "red", duration: 4, delay: 0 },
            { size: 80, left: 85, top: 25, color: "gray", duration: 5, delay: 1 },
            { size: 100, left: 20, top: 70, color: "red", duration: 3.5, delay: 0.5 },
            { size: 90, left: 75, top: 80, color: "red", duration: 4.5, delay: 1.5 }
          ].map((circle, i) => (
            <motion.div
              key={i}
              className={cn(
                "absolute rounded-full blur-3xl opacity-20",
                circle.color === "red" && "bg-red-400",
                circle.color === "gray" && "bg-gray-400"
              )}
              style={{
                width: `${circle.size}px`,
                height: `${circle.size}px`,
                left: `${circle.left}%`,
                top: `${circle.top}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
                y: [0, -20, 0]
              }}
              transition={{
                duration: circle.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: circle.delay
              }}
            />
          ))}

          {/* Animated Sparkles */}
          {[
            { left: 15, top: 20 },
            { left: 80, top: 30 },
            { left: 30, top: 60 },
            { left: 70, top: 75 },
            { left: 90, top: 50 },
            { left: 25, top: 85 }
          ].map((position, i) => (
            <motion.div
              key={`sparkle-${i}`}
              className="absolute"
              style={{
                left: `${position.left}%`,
                top: `${position.top}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop" as const,
                delay: i * 0.5
              }}
            >
              <Sparkles className="w-4 h-4 text-yellow-400" />
            </motion.div>
          ))}
        </div>
      )}

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          variants={animationVariants.header}
        >
          {/* Badge */}
          <motion.div
            className="flex justify-center mb-6"
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.3 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500/10 to-gray-500/10 backdrop-blur-sm border border-red-200/30 rounded-full">
              <GraduationCap className="w-4 h-4 text-red-600" />
              <span className="text-sm font-semibold text-red-700 dark:text-red-400">
                Chương trình Thực tập Chuyên nghiệp
              </span>
              <Zap className="w-4 h-4 text-gray-600" />
            </div>
          </motion.div>

          <div className="w-full flex justify-center mb-6">
            <PointerHighlight>
              <h2
                id="internship-section-title"
                className="text-3xl font-bold bg-gradient-to-r from-red-600 via-gray-600 to-red-800 bg-clip-text text-transparent p-4 leading-tight"
              >
                Cơ hội Thực tập Nghề nghiệp
              </h2>
            </PointerHighlight>
          </div>

        </motion.div>

        {/* Enhanced Programs Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20"
          variants={animationVariants.container}
        >
          {internshipPrograms.map((program, index) => (
            <motion.div
              key={index}
              variants={animationVariants.card}
              whileHover={{
                scale: 1.03,
                y: -8,
                transition: { type: "spring", stiffness: 400, damping: 25 }
              }}
              whileTap={{ scale: 0.98 }}
              onHoverStart={() => handleCardHover(index)}
              onHoverEnd={() => handleCardHover(null)}
              onFocus={() => handleCardFocus(index)}
              onBlur={() => handleCardFocus(null)}
              className="group perspective-1000"
              role="article"
              tabIndex={0}
              aria-label={`Chương trình thực tập: ${program.title}`}
            >
              <Card className="h-full relative overflow-hidden cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/90 backdrop-blur-sm">
                {/* Enhanced background overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-red-50/60 via-white/40 to-gray-50/60"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: hoveredCard === index || focusedCard === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Highlight border */}
                <motion.div
                  className="absolute inset-0 rounded-lg border-2 border-red-200"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{
                    opacity: hoveredCard === index || focusedCard === index ? 1 : 0,
                    scale: hoveredCard === index || focusedCard === index ? 1 : 0.95
                  }}
                  transition={{ duration: 0.2 }}
                />

                <CardHeader className="relative z-10 pb-4">
                  <motion.div
                    className="flex items-center gap-3 mb-4"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.2,
                          delayChildren: 0.3 + index * 0.1
                        }
                      }
                    }}
                  >
                    <motion.div
                      className="p-3 bg-gradient-to-br from-red-500 to-gray-600 rounded-xl text-white shadow-lg"
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                        boxShadow: "0 10px 25px rgba(239, 68, 68, 0.3)"
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    >
                      {program.icon}
                    </motion.div>
                    <motion.span
                      className="text-xs bg-gradient-to-r from-red-100 to-gray-100 text-red-800 px-3 py-1 rounded-full border border-red-200 font-medium"
                      whileHover={{ scale: 1.05 }}
                    >
                      {program.badge}
                    </motion.span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <CardTitle className="text-xl font-bold group-hover:text-red-600 transition-colors duration-300 mb-3">
                      {program.title}
                    </CardTitle>
                  </motion.div>
                </CardHeader>
                <CardContent className="relative z-10 pt-0">
                  <motion.p
                    className="text-gray-600 mb-4 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    {program.description}
                  </motion.p>

                  <motion.div
                    className="space-y-4"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.1,
                          delayChildren: 0.6 + index * 0.1
                        }
                      }
                    }}
                  >
                    {/* CTA Button */}
                    <Drawer>
                      <DrawerTrigger asChild>
                        <motion.button
                          className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-red-600 to-gray-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
                          whileHover={{
                            scale: 1.02,
                            y: -2,
                            boxShadow: "0 10px 25px rgba(239, 68, 68, 0.3)"
                          }}
                          whileTap={{ scale: 0.98 }}
                          aria-label={`Xem chi tiết chương trình ${program.title}`}
                        >
                          <span>Xem chi tiết</span>
                          <motion.div
                            className="group-hover:translate-x-1 transition-transform duration-200"
                          >
                            <ArrowRight className="w-4 h-4" />
                          </motion.div>
                        </motion.button>
                      </DrawerTrigger>
                      <DrawerContent className="max-h-[90vh] bg-white">
                        <DrawerHeader className="border-b border-gray-100 bg-gradient-to-r from-red-50 to-gray-50">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <motion.div
                                className="p-3 bg-gradient-to-br from-red-500 to-gray-600 rounded-xl text-white shadow-lg"
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                              >
                                {program.icon}
                              </motion.div>
                              <div>
                                <DrawerTitle className="text-2xl font-bold bg-gradient-to-r from-red-600 to-gray-600 bg-clip-text text-transparent">
                                  {program.title}
                                </DrawerTitle>
                                <div className="flex items-center gap-2 mt-2">
                                  <div className="px-3 py-1 bg-gradient-to-r from-red-100 to-gray-100 text-red-800 rounded-full text-sm font-medium border border-red-200">
                                    {program.badge}
                                  </div>
                                  <div className="flex items-center gap-1 text-yellow-500">
                                    <Star className="w-4 h-4 fill-current" />
                                    <span className="text-sm font-medium text-gray-700">4.8</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <DrawerClose asChild>
                              <motion.button
                                className="p-2 hover:bg-white/80 rounded-full transition-all duration-200 border border-gray-200"
                                whileHover={{ scale: 1.1, rotate: 90 }}
                                whileTap={{ scale: 0.9 }}
                                aria-label="Đóng"
                              >
                                <X className="w-5 h-5 text-gray-600" />
                              </motion.button>
                            </DrawerClose>
                          </div>
                          <DrawerDescription className="text-gray-600 mt-4 text-base leading-relaxed">
                            {program.description}
                          </DrawerDescription>
                        </DrawerHeader>

                        <div className="p-6 overflow-y-auto space-y-8">
                          {/* Enhanced Basic Information */}
                          <motion.div
                            className="grid grid-cols-1 md:grid-cols-3 gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, staggerChildren: 0.1 }}
                          >
                            <motion.div
                              className="flex items-center gap-3 p-4 bg-gradient-to-br from-red-50 to-red-100 rounded-xl border border-red-200 hover:shadow-md transition-all duration-200"
                              whileHover={{ scale: 1.02, y: -2 }}
                            >
                              <div className="p-2 bg-red-500 rounded-lg">
                                <MapPin className="w-5 h-5 text-white" />
                              </div>
                              <div>
                                <p className="text-sm font-semibold text-gray-900">Hình thức</p>
                                <p className="text-sm text-red-700 font-medium">{program.type}</p>
                              </div>
                            </motion.div>
                            <motion.div
                              className="flex items-center gap-3 p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-200"
                              whileHover={{ scale: 1.02, y: -2 }}
                            >
                              <div className="p-2 bg-gray-500 rounded-lg">
                                <Clock className="w-5 h-5 text-white" />
                              </div>
                              <div>
                                <p className="text-sm font-semibold text-gray-900">Thời gian</p>
                                <p className="text-sm text-gray-700 font-medium">3-6 tháng</p>
                              </div>
                            </motion.div>
                            <motion.div
                              className="flex items-center gap-3 p-4 bg-gradient-to-br from-red-50 to-gray-50 rounded-xl border border-red-200 hover:shadow-md transition-all duration-200"
                              whileHover={{ scale: 1.02, y: -2 }}
                            >
                              <div className="p-2 bg-gradient-to-r from-red-500 to-gray-500 rounded-lg">
                                <Users className="w-5 h-5 text-white" />
                              </div>
                              <div>
                                <p className="text-sm font-semibold text-gray-900">Số lượng</p>
                                <p className="text-sm text-red-700 font-medium">20-50 sinh viên</p>
                              </div>
                            </motion.div>
                          </motion.div>

                          {/* Enhanced Partners Section */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                          >
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                              <div className="p-2 bg-gradient-to-r from-red-500 to-gray-500 rounded-lg">
                                <Building2 className="w-5 h-5 text-white" />
                              </div>
                              Đối tác tuyển dụng
                              <span className="text-sm bg-red-100 text-red-700 px-2 py-1 rounded-full font-medium">
                                {program.partners.length}+ công ty
                              </span>
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                              {program.partners.map((partner, partnerIndex) => (
                                <motion.div
                                  key={partnerIndex}
                                  className="px-4 py-3 bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 rounded-xl text-gray-700 text-sm font-medium text-center hover:shadow-md transition-all duration-200"
                                  whileHover={{ scale: 1.02, y: -1 }}
                                  initial={{ opacity: 0, scale: 0.9 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: partnerIndex * 0.05 }}
                                >
                                  {partner}
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>

                          {/* Enhanced Call to Action */}
                          <motion.div
                            className="pt-6 border-t border-gray-200"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                          >
                            <div className="space-y-4">
                              <div className="flex gap-3">
                                <motion.button
                                  className="flex-1 px-6 py-3 bg-gradient-to-r from-red-600 to-gray-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                                  whileHover={{
                                    scale: 1.02,
                                    boxShadow: "0 10px 25px rgba(239, 68, 68, 0.3)"
                                  }}
                                  whileTap={{ scale: 0.98 }}
                                >
                                  <UserPlus className="w-5 h-5" />
                                  Đăng ký tham gia ngay
                                </motion.button>
                                <motion.button
                                  className="flex-1 px-6 py-3 bg-white border-2 border-red-600 text-red-600 rounded-xl font-semibold hover:bg-red-50 transition-all duration-300 flex items-center justify-center gap-2"
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                >
                                  <Phone className="w-5 h-5" />
                                  Liên hệ tư vấn
                                </motion.button>
                              </div>

                              <p className="text-center text-sm text-gray-500">
                                Hoặc liên hệ hotline: <span className="font-semibold text-red-600">1900 1234</span> để được tư vấn
                              </p>
                            </div>
                          </motion.div>
                        </div>
                      </DrawerContent>
                    </Drawer>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export { InternshipSection };