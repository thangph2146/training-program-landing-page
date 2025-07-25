'use client'

import React, { useRef, useEffect, useState, useMemo, useCallback } from 'react';
import { PointerHighlight } from '@/components/ui/pointer-highlight';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import {  Star, User, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

interface FacultyMember {
  name: string;
  title: string;
  department: string;
  specialization: string[];
  achievements: string[];
  education: string;
  experience: string;
  image?: string;
  src: string;
}

const FeaturedFacultySection: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeFaculty, setActiveFaculty] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [rotations, setRotations] = useState<number[]>([]);

  useEffect(() => {
    setIsClient(true);
    // Initialize rotations on client side to avoid hydration mismatch
    setRotations(facultyMembers.map(() => Math.floor(Math.random() * 21) - 10));
  }, []);

  const handleNext = useCallback(() => {
    setActiveFaculty((prev) => (prev + 1) % facultyMembers.length);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveFaculty((prev) => (prev - 1 + facultyMembers.length) % facultyMembers.length);
  }, []);

  const isActive = useCallback((index: number) => {
    return index === activeFaculty;
  }, [activeFaculty]);

  useEffect(() => {
    if (autoplay && isInView) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, isInView, handleNext]);

  const getRotation = (index: number) => {
    return rotations[index] || 0;
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 120,
        damping: 15,
        duration: 0.8
      }
    }
  };

  const avatarVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 15,
        delay: 0.2
      }
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.1 + 0.3,
        duration: 0.5
      }
    })
  };

  const facultyMembers: FacultyMember[] = [
    {
      name: "PGS.TS. Nguyễn Đức Trung",
      title: "Hiệu trưởng",
      department: "Ban Giám hiệu",
      specialization: ["Tài chính Ngân hàng", "Quản trị Chiến lược", "Phát triển Đại học"],
      achievements: [
        "Lãnh đạo HUB trong quá trình chuyển đổi số",
        "Phát triển mạng lưới hợp tác quốc tế",
        "Tiên phong trong đổi mới giáo dục đại học"
      ],
      education: "Tiến sĩ Kinh tế, Phó Giáo sư",
      experience: "20+ năm kinh nghiệm trong lĩnh vực giáo dục và nghiên cứu",
      image: "https://data.hub.edu.vn/resource/Common/danguyvien/708d3521-46d2-4270-82da-10ae4b8714d1.JPG",
      src: "https://data.hub.edu.vn/resource/Common/danguyvien/708d3521-46d2-4270-82da-10ae4b8714d1.JPG"
    },
    {
      name: "PGS.TS. Hoàng Thị Thanh Hằng",
      title: "Trưởng phòng Quản lý Đào tạo",
      department: "Phòng Quản lý Đào tạo",
      specialization: ["Quản lý Giáo dục", "Phát triển Chương trình", "Đảm bảo Chất lượng"],
      achievements: [
        "Thiết kế hệ thống chương trình đào tạo đa dạng",
        "Phát triển chương trình quốc tế",
        "Cải tiến phương pháp giảng dạy hiện đại"
      ],
      education: "Tiến sĩ Quản trị Kinh doanh, Phó Giáo sư",
      experience: "15+ năm trong quản lý và phát triển chương trình đào tạo",
      image: "https://data.hub.edu.vn/resource/Common/danguyvien/dc2248f3-55fb-4a0a-b22c-6b130663f76a.jpg",
      src: "https://data.hub.edu.vn/resource/Common/danguyvien/dc2248f3-55fb-4a0a-b22c-6b130663f76a.jpg"
    },
    {
      name: "TS. Nguyễn Anh Vũ",
      title: "Trưởng Khoa Tài chính",
      department: "Khoa Tài chính",
      specialization: ["Tài chính Doanh nghiệp", "Thị trường Tài chính", "Phân tích Đầu tư"],
      achievements: [
        "Chuyên gia hàng đầu về tài chính doanh nghiệp",
        "Tư vấn cho nhiều doanh nghiệp lớn",
        "Nghiên cứu được công bố quốc tế"
      ],
      education: "Tiến sĩ Tài chính",
      experience: "12+ năm nghiên cứu và giảng dạy tài chính",
      image: "/placeholder.svg",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
      {
      name: "TS. Đinh Nguyễn Duy Hải",
      title: "Trưởng Bộ môn Khoa học Dữ liệu",
      department: "Khoa Công nghệ Thông tin",
      specialization: ["Khoa học Dữ liệu", "Trí tuệ Nhân tạo", "Machine Learning"],
      achievements: [
        "Tiên phong trong ứng dụng AI trong tài chính",
        "Phát triển các giải pháp fintech",
        "Hợp tác nghiên cứu với các trường quốc tế"
      ],
      education: "Tiến sĩ Khoa học Máy tính",
      experience: "10+ năm trong lĩnh vực AI và Data Science",
      image: "/placeholder.svg",
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "TS. Nguyễn Kim Nam",
      title: "Trưởng Bộ môn Marketing",
      department: "Khoa Quản trị Kinh doanh",
      specialization: ["Digital Marketing", "Consumer Behavior", "Brand Management"],
      achievements: [
        "Chuyên gia marketing số hàng đầu",
        "Tư vấn chiến lược thương hiệu",
        "Nghiên cứu về hành vi người tiêu dùng"
      ],
      education: "Tiến sĩ Marketing",
      experience: "8+ năm trong nghiên cứu và thực hành marketing",
      image: "/placeholder.svg",
      src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "PGS.TS. Nguyễn Văn Thụy",
      title: "Trưởng phòng Tuyển sinh & Phát triển Thương hiệu",
      department: "Phòng Tuyển sinh",
      specialization: ["Phát triển Thương hiệu", "Truyền thông Giáo dục", "Tư vấn Định hướng"],
      achievements: [
        "Xây dựng thương hiệu HUB",
        "Phát triển mạng lưới tuyển sinh",
        "Tư vấn định hướng nghề nghiệp"
      ],
      education: "Tiến sĩ Truyền thông, Phó Giáo sư",
      experience: "18+ năm trong lĩnh vực giáo dục và truyền thông",
      image: "/placeholder.svg",
      src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  // Fixed seed values for consistent rendering
  const seedValues = useMemo(() => [
    { size: 100, x: 20, y: 15, delay: 0 },
    { size: 80, x: 80, y: 25, delay: 0.5 },
    { size: 120, x: 15, y: 75, delay: 1 },
    { size: 60, x: 85, y: 85, delay: 1.5 }
  ], []);

  const sparklePositions = useMemo(() => [
    { x: 25, y: 20, delay: 0.3 },
    { x: 75, y: 30, delay: 0.9 },
    { x: 30, y: 80, delay: 1.5 },
    { x: 70, y: 70, delay: 2.1 }
  ], []);

  return (
    <motion.section 
      ref={ref}
      className="py-6 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 relative overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Enhanced Background Effects */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-purple-50/20 to-indigo-50/30"
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ 
          opacity: isInView ? 1 : 0, 
          scale: isInView ? 1 : 1.2,
          transition: { duration: 2, ease: "easeOut" }
        }}
      />

      {/* Floating Background Elements */}
      {isClient && (
        <div className="absolute inset-0">
          {seedValues.map((seed, index) => (
            <motion.div
              key={index}
              className="absolute rounded-full opacity-10"
              style={{
                width: `${seed.size}px`,
                height: `${seed.size}px`,
                left: `${seed.x}%`,
                top: `${seed.y}%`,
                background: index % 2 === 0 ? 'linear-gradient(135deg, #3b82f6, #8b5cf6)' : 
                           'linear-gradient(135deg, #8b5cf6, #06b6d4)'
              }}
              animate={{
                y: [-15, 15, -15],
                x: [-8, 8, -8],
                rotate: [0, 180, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 6 + index * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: seed.delay
              }}
            />
          ))}
        </div>
      )}

      {/* Animated Sparkles */}
      {isClient && (
        <AnimatePresence>
          {sparklePositions.map((sparkle, index) => (
            <motion.div
              key={index}
              className="absolute z-10"
              style={{
                left: `${sparkle.x}%`,
                top: `${sparkle.y}%`
              }}
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: sparkle.delay
              }}
            >
              <Sparkles className="w-5 h-5 text-purple-400" />
            </motion.div>
          ))}
        </AnimatePresence>
      )}
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-12 md:mb-16"
          variants={headerVariants}
        >
          <div className="flex justify-center">
            <PointerHighlight>
              <motion.h2 
                className="text-3xl font-bold text-gray-900 dark:text-white p-4"
                initial={{ opacity: 0, x: -100 }}
                animate={{ 
                  opacity: isInView ? 1 : 0, 
                  x: isInView ? 0 : -100,
                  transition: { delay: 0.3, duration: 0.8, type: "spring", stiffness: 100 }
                }}
              >
                Giảng viên Tiêu biểu
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
              words="Luôn tận tâm với sinh viên và tiên phong trong nghiên cứu khoa học."
              className="text-lg text-gray-600 dark:text-gray-300"
            />
          </motion.div>
        </motion.div>

        {/* Faculty Carousel */}
        <motion.div 
          className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.8
              }
            }
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Faculty Cards Stack */}
          <div className="relative h-96 w-full">
            <AnimatePresence>
              {facultyMembers.map((faculty, index) => {
                const isActiveCard = isActive(index);
                
                return (
                  <motion.div
                    key={index}
                    className="absolute inset-0 origin-bottom"
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                      z: -100,
                      rotate: getRotation(index),
                    }}
                    animate={{
                      opacity: isActiveCard ? 1 : 0.7,
                      scale: isActiveCard ? 1 : 0.95,
                      z: isActiveCard ? 0 : -100,
                      rotate: isActiveCard ? 0 : getRotation(index),
                      zIndex: isActiveCard
                        ? 40
                        : facultyMembers.length + 2 - index,
                      y: isActiveCard ? [0, -20, 0] : 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      z: 100,
                      rotate: getRotation(index),
                    }}
                    transition={{
                      duration: 0.6,
                      ease: "easeInOut",
                    }}
                    onMouseEnter={() => setAutoplay(false)}
                    onMouseLeave={() => setAutoplay(true)}
                  >
                    <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-3">
                          <motion.div 
                            className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center overflow-hidden"
                            variants={avatarVariants}
                            whileHover={{ 
                              scale: 1.1, 
                              rotate: 5,
                              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                              transition: { duration: 0.3 }
                            }}
                          >
                            {faculty.image && faculty.image !== "/placeholder.svg" ? (
                              <img 
                                src={faculty.src} 
                                alt={faculty.name}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <User className="w-8 h-8 text-white" />
                            )}
                          </motion.div>
                          <div>
                            <CardTitle className="text-lg">{faculty.name}</CardTitle>
                            <CardDescription className="text-sm">{faculty.title}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <p className="text-sm text-gray-600">
                            <strong>Khoa/Phòng:</strong> {faculty.department}
                          </p>
                          <p className="text-sm text-gray-600">
                            <strong>Chuyên môn:</strong> {faculty.specialization.slice(0, 2).join(', ')}
                          </p>
                          <p className="text-sm text-gray-600">
                            <strong>Học vấn:</strong> {faculty.education}
                          </p>
                          <div>
                            <h4 className="font-semibold text-sm mb-2">Thành tựu nổi bật:</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                              {faculty.achievements.slice(0, 2).map((achievement, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <Star className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Faculty Details Panel */}
          <div className="flex flex-col justify-between py-4">
            <motion.div
              key={activeFaculty}
              initial={{
                y: 20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -20,
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
            >
              <div className="mb-4">
                <h3 className="text-3xl font-bold text-slate-800 mb-2">
                  {facultyMembers[activeFaculty].name}
                </h3>
                <p className="text-lg text-blue-600 font-medium mb-1">
                  {facultyMembers[activeFaculty].title}
                </p>
                <p className="text-sm text-gray-600">
                  {facultyMembers[activeFaculty].department}
                </p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-slate-700 mb-3">Chuyên môn:</h4>
                <div className="flex flex-wrap gap-2">
                  {facultyMembers[activeFaculty].specialization.map((spec, index) => (
                    <motion.span
                      key={spec}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-blue-50/80 text-blue-700 border border-blue-200/50"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                    >
                      {spec}
                    </motion.span>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-slate-700 mb-3">Thành tựu nổi bật:</h4>
                <motion.div className="space-y-2">
                  {facultyMembers[activeFaculty].achievements.map((achievement, index) => (
                    <motion.div
                      key={achievement}
                      className="flex items-start gap-2 text-sm text-gray-600"
                      initial={{
                        filter: "blur(10px)",
                        opacity: 0,
                        x: -10,
                      }}
                      animate={{
                        filter: "blur(0px)",
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                        delay: 0.1 + index * 0.1,
                      }}
                    >
                      <Star className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                      {achievement}
                    </motion.div>
                  ))}
                </motion.div>
              </div>
              
              <div className="text-sm text-slate-500 mb-4">
                <span className="font-medium">Kinh nghiệm:</span> {facultyMembers[activeFaculty].experience}
              </div>
            </motion.div>
            
            {/* Navigation Controls */}
            <div className="flex gap-4 pt-8">
              <button
                onClick={handlePrev}
                className="group/button flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 transition-colors duration-200"
                aria-label="Giảng viên trước"
              >
                <ChevronLeft className="h-6 w-6 text-slate-600 transition-transform duration-300 group-hover/button:scale-110" />
              </button>
              <button
                onClick={handleNext}
                className="group/button flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 transition-colors duration-200"
                aria-label="Giảng viên tiếp theo"
              >
                <ChevronRight className="h-6 w-6 text-slate-600 transition-transform duration-300 group-hover/button:scale-110" />
              </button>
            </div>
            
            {/* Faculty Indicators */}
            <div className="flex gap-2 mt-4">
              {facultyMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveFaculty(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    isActive(index) 
                      ? "bg-blue-500 w-8" 
                      : "bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Chuyển đến giảng viên ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export { FeaturedFacultySection };