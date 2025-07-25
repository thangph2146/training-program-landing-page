'use client'

import React, { useRef, useState, useCallback, useMemo, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { PointerHighlight } from '@/components/ui/pointer-highlight';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
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
  Badge
} from 'lucide-react';

interface InternshipProgram {
  title: string;
  duration: string;
  type: string;
  description: string;
  requirements: string[];
  benefits: string[];
  partners: string[];
  icon: React.ReactNode;
  badge: string;
  level: string;
  src: string;
}

const InternshipSection: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [focusedCard, setFocusedCard] = useState<number | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleCardHover = useCallback((index: number | null) => {
    setHoveredCard(index);
  }, []);

  const handleCardFocus = useCallback((index: number | null) => {
    setFocusedCard(index);
  }, []);

  const animationVariants = useMemo(() => ({
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.12,
          delayChildren: 0.15
        }
      }
    },
    header: {
      hidden: { opacity: 0, y: -40, scale: 0.9 },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          type: "spring" as const,
          stiffness: 120,
          damping: 18,
          duration: 0.6
        }
      }
    },
    card: {
      hidden: { opacity: 0, y: 60, scale: 0.9 },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          type: "spring" as const,
          stiffness: 120,
          damping: 20,
          duration: 0.5
        }
      }
    },
    icon: {
      hidden: { scale: 0, rotate: -90 },
      visible: {
        scale: 1,
        rotate: 0,
        transition: {
          type: "spring" as const,
          stiffness: 180,
          damping: 15,
          delay: 0.2
        }
      }
    },
    listItem: {
      hidden: { opacity: 0, x: -20 },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          type: "spring" as const,
          stiffness: 140,
          damping: 20
        }
      }
    },
    highlight: {
      hidden: { scaleX: 0 },
      visible: {
        scaleX: 1,
        transition: {
          duration: 0.6,
          ease: "easeInOut"
        }
      }
    }
  }), []);

  const internshipPrograms: InternshipProgram[] = [
    {
      title: "Thực tập Tài chính - Ngân hàng",
      duration: "3-6 tháng",
      type: "Thực tập có lương",
      description: "Trải nghiệm thực tế tại các ngân hàng, công ty tài chính hàng đầu, học hỏi quy trình nghiệp vụ và phát triển kỹ năng chuyên môn.",
      requirements: [
        "Sinh viên năm 3, 4 ngành Tài chính - Ngân hàng",
        "GPA từ 2.5 trở lên",
        "Kỹ năng giao tiếp tốt"
      ],
      benefits: [
        "Lương thực tập 3-5 triệu/tháng",
        "Cơ hội được tuyển dụng chính thức",
        "Chứng chỉ hoàn thành từ doanh nghiệp"
      ],
      partners: ["Vietcombank", "BIDV", "Techcombank", "MB Bank"],
      icon: <Briefcase className="w-6 h-6" />,
      badge: "Phổ biến",
      level: "Trung cấp",
      src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Kiến tập Quản trị Kinh doanh",
      duration: "2-4 tháng",
      type: "Kiến tập học tập",
      description: "Tham quan, học hỏi mô hình quản trị tại các doanh nghiệp lớn, hiểu rõ quy trình vận hành và chiến lược kinh doanh.",
      requirements: [
        "Sinh viên năm 2, 3 ngành Quản trị",
        "Có tinh thần học hỏi cao",
        "Kỹ năng làm việc nhóm"
      ],
      benefits: [
        "Hiểu rõ môi trường doanh nghiệp",
        "Xây dựng mạng lưới quan hệ",
        "Báo cáo kiến tập được công nhận"
      ],
      partners: ["Vingroup", "FPT", "Saigon Co.op", "Masan Group"],
      icon: <Building2 className="w-6 h-6" />,
      badge: "Mới",
      level: "Cơ bản",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Thực tập Khoa học Dữ liệu",
      duration: "4-6 tháng",
      type: "Thực tập dự án",
      description: "Tham gia các dự án phân tích dữ liệu thực tế, ứng dụng AI/ML trong giải quyết bài toán kinh doanh của doanh nghiệp.",
      requirements: [
        "Sinh viên năm 3, 4 ngành Data Science",
        "Thành thạo Python, SQL",
        "Hiểu biết về Machine Learning"
      ],
      benefits: [
        "Làm việc với dữ liệu thực tế",
        "Mentor 1-1 từ chuyên gia",
        "Portfolio dự án chuyên nghiệp"
      ],
      partners: ["VNG", "Tiki", "Shopee", "Grab"],
      icon: <TrendingUp className="w-6 h-6" />,
      badge: "Hot",
      level: "Nâng cao",
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Thực tập Marketing Digital",
      duration: "3-5 tháng",
      type: "Thực tập sáng tạo",
      description: "Thực hiện các chiến dịch marketing online, quản lý social media, phân tích hiệu quả quảng cáo cho các thương hiệu.",
      requirements: [
        "Sinh viên ngành Marketing, Truyền thông",
        "Sáng tạo, am hiểu social media",
        "Kỹ năng thiết kế cơ bản"
      ],
      benefits: [
        "Thực hiện chiến dịch thực tế",
        "Học công cụ marketing chuyên nghiệp",
        "Cơ hội phát triển personal brand"
      ],
      partners: ["Unilever", "P&G", "Coca-Cola", "Nestle"],
      icon: <Target className="w-6 h-6" />,
      badge: "Sáng tạo",
      level: "Trung cấp",
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Kiến tập Luật Kinh tế",
      duration: "2-3 tháng",
      type: "Kiến tập chuyên môn",
      description: "Tham quan tòa án, văn phòng luật sư, học hỏi quy trình xử lý các vụ việc pháp lý trong lĩnh vực kinh tế.",
      requirements: [
        "Sinh viên ngành Luật Kinh tế",
        "Hiểu biết pháp luật cơ bản",
        "Kỹ năng nghiên cứu, phân tích"
      ],
      benefits: [
        "Tiếp xúc môi trường pháp lý thực tế",
        "Học hỏi từ luật sư kinh nghiệm",
        "Hiểu rõ quy trình tố tụng"
      ],
      partners: ["Tòa án TP.HCM", "Công ty Luật ANVI", "Công ty Luật Bình Minh"],
      icon: <Award className="w-6 h-6" />,
      badge: "Chuyên môn",
      level: "Trung cấp",
      src: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Thực tập Kế toán - Kiểm toán",
      duration: "3-4 tháng",
      type: "Thực tập nghiệp vụ",
      description: "Thực hành công việc kế toán, kiểm toán tại các công ty kiểm toán độc lập và doanh nghiệp lớn.",
      requirements: [
        "Sinh viên năm 3, 4 ngành Kế toán",
        "Thành thạo Excel, phần mềm kế toán",
        "Tỉ mỉ, chính xác cao"
      ],
      benefits: [
        "Thực hành nghiệp vụ kế toán thực tế",
        "Chuẩn bị cho các kỳ thi chứng chỉ",
        "Cơ hội làm việc tại Big 4"
      ],
      partners: ["PwC", "Deloitte", "EY", "KPMG"],
      icon: <CheckCircle className="w-6 h-6" />,
      badge: "Uy tín",
      level: "Chuyên nghiệp",
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
      {/* Enhanced Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-purple-50/30 to-cyan-50/40 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-cyan-950/20"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      />
      
      {/* Floating Background Elements */}
      {isClient && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Fixed positioned floating elements */}
          {[
            { size: 120, left: 10, top: 15, color: "blue", duration: 4, delay: 0 },
            { size: 80, left: 85, top: 25, color: "purple", duration: 5, delay: 1 },
            { size: 100, left: 20, top: 70, color: "cyan", duration: 3.5, delay: 0.5 },
            { size: 90, left: 75, top: 80, color: "blue", duration: 4.5, delay: 1.5 }
          ].map((circle, i) => (
            <motion.div
              key={i}
              className={cn(
                "absolute rounded-full blur-3xl opacity-20",
                circle.color === "blue" && "bg-blue-400",
                circle.color === "purple" && "bg-purple-400",
                circle.color === "cyan" && "bg-cyan-400"
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-200/30 rounded-full">
              <GraduationCap className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-400">
                Chương trình Thực tập Chuyên nghiệp
              </span>
              <Zap className="w-4 h-4 text-purple-600" />
            </div>
          </motion.div>

          <div className="w-full flex justify-center mb-6">
            <PointerHighlight>
              <h2 
                id="internship-section-title"
                className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent p-4 leading-tight"
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
                    className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-white/40 to-purple-50/60"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: hoveredCard === index || focusedCard === index ? 1 : 0 
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Highlight border */}
                  <motion.div
                    className="absolute inset-0 rounded-lg border-2 border-blue-200"
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
                      className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl text-white shadow-lg"
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                        boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)"
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    >
                      {program.icon}
                    </motion.div>
                    <motion.span
                      className="text-xs bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-3 py-1 rounded-full border border-blue-200 font-medium"
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
                    <CardTitle className="text-xl font-bold group-hover:text-blue-600 transition-colors duration-300 mb-3">
                      {program.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-500 leading-relaxed">
                      {program.duration} • {program.type}
                    </CardDescription>
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
                  
                  {/* Quick Info */}
                  <motion.div 
                    className="grid grid-cols-2 gap-3 mb-4"
                    initial="hidden"
                    animate="visible"
                    variants={animationVariants.container}
                  >
                    <motion.div 
                      className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg"
                      variants={animationVariants.listItem}
                    >
                      <Clock className="w-4 h-4 text-blue-600" />
                      <span className="text-xs font-medium text-gray-700">{program.duration}</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg"
                      variants={animationVariants.listItem}
                    >
                      <MapPin className="w-4 h-4 text-green-600" />
                      <span className="text-xs font-medium text-gray-700">{program.level}</span>
                    </motion.div>
                  </motion.div>

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
                    {/* Requirements Preview */}
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <Target className="w-4 h-4 text-blue-600" />
                        Yêu cầu chính:
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {program.requirements.slice(0, 2).map((req, idx) => (
                          <motion.li
                            key={idx}
                            className="flex items-start gap-2"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              delay: 0.7 + index * 0.1 + idx * 0.1,
                              type: "spring",
                              stiffness: 120
                            }}
                            whileHover={{ x: 4 }}
                          >
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            {req}
                          </motion.li>
                        ))}
                        {program.requirements.length > 2 && (
                          <motion.li 
                            className="text-sm text-blue-600 font-medium ml-6"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                          >
                            +{program.requirements.length - 2} yêu cầu khác...
                          </motion.li>
                        )}
                      </ul>
                    </div>
                    
                    {/* CTA Button */}
                    <Drawer>
                      <DrawerTrigger asChild>
                        <motion.button
                          className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
                          whileHover={{ 
                            scale: 1.02, 
                            y: -2,
                            boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)"
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
                          <DrawerHeader className="border-b border-gray-100 bg-gradient-to-r from-blue-50 to-purple-50">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4">
                                <motion.div 
                                  className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl text-white shadow-lg"
                                  initial={{ scale: 0, rotate: -180 }}
                                  animate={{ scale: 1, rotate: 0 }}
                                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                >
                                  {program.icon}
                                </motion.div>
                                <div>
                                  <DrawerTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    {program.title}
                                  </DrawerTitle>
                                  <div className="flex items-center gap-2 mt-2">
                                    <div className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium border border-blue-200">
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
                                className="flex items-center gap-3 p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 hover:shadow-md transition-all duration-200"
                                whileHover={{ scale: 1.02, y: -2 }}
                              >
                                <div className="p-2 bg-blue-500 rounded-lg">
                                  <Calendar className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                  <p className="text-sm font-semibold text-gray-900">Thời gian</p>
                                  <p className="text-sm text-blue-700 font-medium">{program.duration}</p>
                                </div>
                              </motion.div>
                              <motion.div 
                                className="flex items-center gap-3 p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200 hover:shadow-md transition-all duration-200"
                                whileHover={{ scale: 1.02, y: -2 }}
                              >
                                <div className="p-2 bg-green-500 rounded-lg">
                                  <MapPin className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                  <p className="text-sm font-semibold text-gray-900">Hình thức</p>
                                  <p className="text-sm text-green-700 font-medium">{program.type}</p>
                                </div>
                              </motion.div>
                              <motion.div 
                                className="flex items-center gap-3 p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200 hover:shadow-md transition-all duration-200"
                                whileHover={{ scale: 1.02, y: -2 }}
                              >
                                <div className="p-2 bg-purple-500 rounded-lg">
                                  <Users className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                  <p className="text-sm font-semibold text-gray-900">Trình độ</p>
                                  <p className="text-sm text-purple-700 font-medium">{program.level}</p>
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
                                <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                                  <Building2 className="w-5 h-5 text-white" />
                                </div>
                                Đối tác tuyển dụng
                                <span className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">
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
                            
                            {/* Enhanced Requirements */}
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.3 }}
                            >
                              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <div className="p-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg">
                                  <Target className="w-5 h-5 text-white" />
                                </div>
                                Yêu cầu tham gia
                              </h3>
                              <div className="grid gap-3">
                                {program.requirements.map((req, reqIndex) => (
                                  <motion.div
                                    key={reqIndex}
                                    className="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-xl hover:shadow-md transition-all duration-200"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: reqIndex * 0.1 }}
                                    whileHover={{ scale: 1.01, x: 4 }}
                                  >
                                    <div className="p-1 bg-green-500 rounded-full">
                                      <CheckCircle className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="text-gray-700 font-medium">{req}</span>
                                  </motion.div>
                                ))}
                              </div>
                            </motion.div>
                            
                            {/* Enhanced Benefits */}
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.4 }}
                            >
                              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                                  <Award className="w-5 h-5 text-white" />
                                </div>
                                Lợi ích nhận được
                              </h3>
                              <div className="grid gap-3">
                                {program.benefits.map((benefit, benefitIndex) => (
                                  <motion.div
                                    key={benefitIndex}
                                    className="flex items-start gap-3 p-4 bg-purple-50 border border-purple-200 rounded-xl hover:shadow-md transition-all duration-200"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: benefitIndex * 0.1 }}
                                    whileHover={{ scale: 1.01, x: 4 }}
                                  >
                                    <div className="p-1 bg-purple-500 rounded-full">
                                      <TrendingUp className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="text-gray-700 font-medium">{benefit}</span>
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
                                <motion.button 
                                  className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group"
                                  whileHover={{ 
                                    scale: 1.02, 
                                    y: -2,
                                    boxShadow: "0 15px 30px rgba(59, 130, 246, 0.4)"
                                  }}
                                  whileTap={{ scale: 0.98 }}
                                >
                                  <span>Đăng ký tham gia ngay</span>
                                  <motion.div
                                    className="group-hover:translate-x-1 transition-transform duration-200"
                                  >
                                    <ExternalLink className="w-5 h-5" />
                                  </motion.div>
                                </motion.button>
                                
                                <p className="text-center text-sm text-gray-500">
                                  Hoặc liên hệ hotline: <span className="font-semibold text-blue-600">1900 1234</span> để được tư vấn
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