'use client'

import React, { useRef } from 'react';
import { Badge } from '@/components/ui/badge';
import { PointerHighlight } from '@/components/ui/pointer-highlight';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { GraduationCap, Award, BookOpen, Users, Star, User } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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

  return (
    <motion.section 
      ref={ref}
      className="py-6 bg-gradient-to-b from-zinc-50 via-gray-100 to-zinc-50 relative overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-indigo-50/50"
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ 
          opacity: isInView ? 1 : 0, 
          scale: isInView ? 1 : 1.2,
          transition: { duration: 2, ease: "easeOut" }
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-12 md:mb-16"
          variants={headerVariants}
        >
          <div>
            <PointerHighlight>
              <motion.h2 
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white p-4"
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

        {/* Faculty Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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
          {facultyMembers.map((faculty, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <motion.div 
                      className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center"
                      variants={avatarVariants}
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: 5,
                        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                        transition: { duration: 0.3 }
                      }}
                    >
                      <User className="w-8 h-8 text-white" />
                    </motion.div>
                    <div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                          opacity: isInView ? 1 : 0,
                          y: isInView ? 0 : 20,
                          transition: { delay: index * 0.2 + 1.2, duration: 0.6 }
                        }}
                      >
                        <CardTitle className="text-lg">{faculty.name}</CardTitle>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                          opacity: isInView ? 1 : 0,
                          y: isInView ? 0 : 20,
                          transition: { delay: index * 0.2 + 1.4, duration: 0.6 }
                        }}
                      >
                        <CardDescription className="text-sm">{faculty.title}</CardDescription>
                      </motion.div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{
                        opacity: isInView ? 1 : 0,
                        x: isInView ? 0 : -20,
                        transition: { delay: index * 0.2 + 1.6, duration: 0.6 }
                      }}
                    >
                      <p className="text-sm text-gray-600">
                        <strong>Khoa/Phòng:</strong> {faculty.department}
                      </p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{
                        opacity: isInView ? 1 : 0,
                        x: isInView ? 0 : -20,
                        transition: { delay: index * 0.2 + 1.8, duration: 0.6 }
                      }}
                    >
                      <p className="text-sm text-gray-600">
                        <strong>Chuyên môn:</strong> {faculty.specialization.slice(0, 2).join(', ')}
                      </p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{
                        opacity: isInView ? 1 : 0,
                        x: isInView ? 0 : -20,
                        transition: { delay: index * 0.2 + 2.0, duration: 0.6 }
                      }}
                    >
                      <p className="text-sm text-gray-600">
                        <strong>Học vấn:</strong> {faculty.education}
                      </p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: isInView ? 1 : 0,
                        y: isInView ? 0 : 20,
                        transition: { delay: index * 0.2 + 2.2, duration: 0.6 }
                      }}
                    >
                      <motion.h4 
                        className="font-semibold text-sm mb-2"
                        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                      >
                        Thành tựu nổi bật:
                      </motion.h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {faculty.achievements.slice(0, 2).map((achievement, idx) => (
                          <motion.li 
                            key={idx} 
                            className="flex items-start gap-2"
                            variants={listItemVariants}
                            custom={idx}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            whileHover={{ x: 5, transition: { duration: 0.2 } }}
                          >
                            <motion.div
                              whileHover={{ rotate: 360, scale: 1.2 }}
                              transition={{ duration: 0.3 }}
                            >
                              <Star className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                            </motion.div>
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FeaturedFacultySection;