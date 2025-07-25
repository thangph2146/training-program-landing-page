"use client";
import React, { useState, useRef } from "react";
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerClose } from "@/components/ui/drawer";
import { motion, useInView } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { PointerHighlight } from "@/components/ui/pointer-highlight";

export function ProgramTimelineSection() {
  const [activeSection, setActiveSection] = useState<number>(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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
        duration: 0.8
      }
    }
  };

  const timelineVariants = {
    hidden: { opacity: 0, scaleY: 0 },
    visible: {
      opacity: 1,
      scaleY: 1,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 20,
        duration: 1.5
      }
    }
  };

  const programSections = [
    {
      id: 0,
      phase: "Thông tin chung",
      title: "Chương trình Đào tạo",
      subtitle: "Tài chính - Ngân hàng TABP CLC",
      description: "Chương trình đào tạo chất lượng cao với thành phần tiếng Anh bán phần, được thiết kế theo tiêu chuẩn quốc tế.",
      details: {
        vietnamese: "Tài chính – Ngân hàng; tiếng Anh bán phần (CLC)",
        english: "Finance and Banking, partial English program (High-quality)",
        code: "7340201",
        level: "Đại học",
        duration: "04 năm (08 học kỳ)",
        format: "Chính quy tập trung",
        updated: "Tháng 6 năm 2024"
      },
      icon: "🎓",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      position: "left",
      modalContent: (
        <div className="space-y-6">
          {/* Header với gradient background */}
          <div className="p-6 rounded-t-2xl -m-6 mb-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="text-3xl">🎓</div>
              <h3 className="text-2xl font-bold">Thông tin chung về Chương trình Đào tạo</h3>
            </div>
            <p className="leading-relaxed">Chương trình đào tạo chất lượng cao với thành phần tiếng Anh bán phần, được thiết kế theo tiêu chuẩn quốc tế.</p>
          </div>

          {/* Content với improved layout */}
          <div className="px-6 pb-6 space-y-6">
            <div className="grid grid-cols-1 gap-6">
              {/* Tên chương trình */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-5 rounded-xl border border-blue-100">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <h4 className="font-bold text-slate-800 text-lg">Tên chương trình</h4>
                </div>
                <div className="space-y-2">
                  <p className="text-slate-800 font-medium">{`Tài chính – Ngân hàng; tiếng Anh bán phần (CLC)`}</p>
                  <p className="text-slate-600 italic text-sm">{`Finance and Banking, partial English program (High-quality)`}</p>
                </div>
              </div>

              {/* Thông tin cơ bản */}
              <div className="bg-gradient-to-br from-slate-50 to-gray-50 p-5 rounded-xl border border-slate-200">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                  <h4 className="font-bold text-slate-800 text-lg">Thông tin cơ bản</h4>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">Mã ngành</span>
                    <span className="text-slate-700 font-medium">{`7340201`}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">Trình độ</span>
                    <span className="text-slate-700 font-medium">{`Đại học`}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full font-medium">Thời gian</span>
                    <span className="text-slate-700 font-medium">{`04 năm (08 học kỳ)`}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full font-medium">Hình thức</span>
                    <span className="text-slate-700 font-medium">{`Chính quy tập trung`}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 1,
      phase: "Mục tiêu chương trình",
      title: "Program Objectives (PO)",
      subtitle: "Định hướng phát triển toàn diện",
      description: "Phát triển sinh viên thành chuyên gia tài chính ngân hàng có năng lực quốc tế và thích ứng kỹ nguyên số.",
      objectives: [
        {
          type: "Mục tiêu chung (PO)",
          content: "Nắm vững kiến thức nền tảng hiện đại về kinh tế, kiến thức chuyên sâu về tài chính ngân hàng với phẩm chất đạo đức tốt và năng lực nghiên cứu trong bối cảnh hội nhập quốc tế."
        },
        {
          type: "Mục tiêu cụ thể (PO1)",
          content: "Vận dụng kiến thức khoa học tự nhiên, xã hội, cơ bản và chuyên ngành để giải quyết các vấn đề phức tạp trong lĩnh vực tài chính ngân hàng."
        }
      ],
      icon: "🎯",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      position: "right",
      modalContent: (
        <div className="space-y-6">
          {/* Header với gradient background */}
          <div className="p-6 rounded-t-2xl -m-6 mb-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="text-3xl">🎯</div>
              <h3 className="text-2xl font-bold">Mục tiêu chương trình</h3>
            </div>
            <p className="leading-relaxed">Phát triển sinh viên thành chuyên gia tài chính ngân hàng có năng lực quốc tế và thích ứng kỹ nguyên số.</p>
          </div>

          {/* Content với improved layout */}
          <div className="px-6 pb-6 space-y-6">
            <div className="grid gap-6">
              {[
                {
                  type: "Mục tiêu chung (PO)",
                  content: "Nắm vững kiến thức nền tảng hiện đại về kinh tế, kiến thức chuyên sâu về tài chính ngân hàng với phẩm chất đạo đức tốt và năng lực nghiên cứu trong bối cảnh hội nhập quốc tế.",
                  icon: "🌟",
                  color: "from-green-50 to-emerald-50",
                  borderColor: "border-green-200"
                },
                {
                  type: "Mục tiêu cụ thể (PO1)",
                  content: "Vận dụng kiến thức khoa học tự nhiên, xã hội, cơ bản và chuyên ngành để giải quyết các vấn đề phức tạp trong lĩnh vực tài chính ngân hàng.",
                  icon: "🎯",
                  color: "from-blue-50 to-cyan-50",
                  borderColor: "border-blue-200"
                }
              ].map((objective, objIndex) => (
                <div key={objIndex} className={`bg-gradient-to-br ${objective.color} p-6 rounded-xl border ${objective.borderColor} hover:shadow-lg transition-all duration-300`}>
                  <div className="flex items-start gap-4">
                    <div className="text-2xl flex-shrink-0 mt-1">{objective.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-800 text-lg mb-3 flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        {objective.type}
                      </h4>
                      <p className="text-slate-700 leading-relaxed text-base">{objective.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional info section */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-5 rounded-xl border border-amber-200">
              <div className="flex items-center gap-2 mb-3">
                <div className="text-xl">💡</div>
                <h4 className="font-bold text-slate-800">Lưu ý quan trọng</h4>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed">
                Chương trình được thiết kế để đáp ứng nhu cầu thực tế của thị trường lao động và xu hướng phát triển của ngành tài chính ngân hàng trong kỷ nguyên số.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      phase: "Cấu trúc chương trình",
      title: "Khối kiến thức",
      subtitle: "Nền tảng và chuyên sâu",
      description: "Chương trình được tổ chức theo các khối kiến thức khoa học, cân bằng giữa nền tảng và chuyên môn.",
      knowledgeBlocks: [
        {
          title: "Khối kiến thức cơ bản",
          subjects: [
            "Triết học Mác - Lênin",
            "Kinh tế chính trị Mác - Lênin",
            "Chủ nghĩa xã hội khoa học",
            "Lịch sử Đảng Cộng sản Việt Nam",
            "Tư tưởng Hồ Chí Minh",
            "Toán cao cấp 1 & 2",
            "Lý thuyết xác suất và thống kê",
            "Pháp luật đại cương"
          ]
        },
        {
          title: "Khối kiến thức chuyên ngành",
          subjects: [
            "Tài chính doanh nghiệp",
            "Ngân hàng thương mại",
            "Thị trường tài chính",
            "Đầu tư và quản lý danh mục",
            "Phân tích tài chính",
            "Quản trị rủi ro",
            "Tài chính quốc tế",
            "FinTech và Ngân hàng số"
          ]
        }
      ],
      icon: "📚",
      color: "from-purple-500 to-violet-500",
      bgColor: "from-purple-50 to-violet-50",
      position: "left",
      modalContent: (
        <div className="space-y-6">
          {/* Header với gradient background */}
          <div className="p-6 rounded-t-2xl -m-6 mb-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="text-3xl">📚</div>
              <h3 className="text-2xl font-bold">Cấu trúc chương trình: Khối kiến thức</h3>
            </div>
            <p className="leading-relaxed">Chương trình được tổ chức theo các khối kiến thức khoa học, cân bằng giữa nền tảng và chuyên môn.</p>
          </div>

          {/* Content với improved layout */}
          <div className="px-6 pb-6 space-y-6">
            <div className="grid gap-6">
              {[
                {
                  title: "Khối kiến thức cơ bản",
                  icon: "🏛️",
                  color: "from-blue-50 to-indigo-50",
                  borderColor: "border-blue-200",
                  subjects: [
                    "Triết học Mác - Lênin",
                    "Kinh tế chính trị Mác - Lênin",
                    "Chủ nghĩa xã hội khoa học",
                    "Lịch sử Đảng Cộng sản Việt Nam",
                    "Tư tưởng Hồ Chí Minh",
                    "Toán cao cấp 1 & 2",
                    "Lý thuyết xác suất và thống kê",
                    "Pháp luật đại cương"
                  ]
                },
                {
                  title: "Khối kiến thức chuyên ngành",
                  icon: "💼",
                  color: "from-emerald-50 to-teal-50",
                  borderColor: "border-emerald-200",
                  subjects: [
                    "Tài chính doanh nghiệp",
                    "Ngân hàng thương mại",
                    "Thị trường tài chính",
                    "Đầu tư và quản lý danh mục",
                    "Phân tích tài chính",
                    "Quản trị rủi ro",
                    "Tài chính quốc tế",
                    "FinTech và Ngân hàng số"
                  ]
                }
              ].map((block, blockIndex) => (
                <div key={blockIndex} className={`bg-gradient-to-br ${block.color} p-6 rounded-xl border ${block.borderColor} hover:shadow-lg transition-all duration-300`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-2xl">{block.icon}</div>
                    <h4 className="font-bold text-slate-800 text-lg flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      {block.title}
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {block.subjects.map((subject, subIndex) => (
                      <div key={subIndex} className="flex items-center gap-2 p-2 bg-white/50 rounded-lg hover:bg-white/80 transition-colors">
                        <div className="w-1.5 h-1.5 bg-slate-400 rounded-full flex-shrink-0"></div>
                        <span className="text-slate-700 text-sm font-medium">{subject}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Summary section */}
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-5 rounded-xl border border-amber-200">
              <div className="flex items-center gap-2 mb-3">
                <div className="text-xl">📊</div>
                <h4 className="font-bold text-slate-800">Tổng quan chương trình</h4>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-white/60 p-3 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">8</div>
                  <div className="text-xs text-slate-600">Môn cơ bản</div>
                </div>
                <div className="bg-white/60 p-3 rounded-lg">
                  <div className="text-2xl font-bold text-emerald-600">8</div>
                  <div className="text-xs text-slate-600">Môn chuyên ngành</div>
                </div>
                <div className="bg-white/60 p-3 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">4</div>
                  <div className="text-xs text-slate-600">Năm học</div>
                </div>
                <div className="bg-white/60 p-3 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">120</div>
                  <div className="text-xs text-slate-600">Tín chỉ</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      phase: "Đặc điểm chương trình",
      title: "Chất lượng cao & Thực tiễn",
      subtitle: "Chuẩn quốc tế và ứng dụng",
      description: "Chương trình CLC với tiêu chuẩn quốc tế, tích hợp công nghệ và định hướng thực tiễn mạnh mẽ.",
      features: [
        {
          title: "Chương trình CLC",
          points: [
            "Thiết kế theo tiêu chuẩn chất lượng cao",
            "Thành phần tiếng Anh bán phần",
            "Tích hợp kiến thức quốc tế"
          ]
        },
        {
          title: "Định hướng thực tiễn",
          points: [
            "Kết hợp lý thuyết và thực hành",
            "Phát triển năng lực nghiên cứu",
            "Thích ứng kỹ nguyên số"
          ]
        }
      ],
      icon: "⭐",
      color: "from-amber-500 to-orange-500",
      bgColor: "from-amber-50 to-orange-50",
      position: "right",
      modalContent: (
        <div className="space-y-6">
          {/* Header với gradient background */}
          <div className="p-6 rounded-t-2xl -m-6 mb-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="text-3xl">⭐</div>
              <h3 className="text-2xl font-bold">Đặc điểm chương trình: Chất lượng cao & Thực tiễn</h3>
            </div>
            <p className="leading-relaxed">Chương trình CLC với tiêu chuẩn quốc tế, tích hợp công nghệ và định hướng thực tiễn mạnh mẽ.</p>
          </div>

          {/* Content với improved layout */}
          <div className="px-6 pb-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Chương trình CLC",
                  icon: "🏆",
                  color: "from-blue-50 to-indigo-50",
                  borderColor: "border-blue-200",
                  accentColor: "bg-blue-500",
                  points: [
                    "Thiết kế theo tiêu chuẩn chất lượng cao",
                    "Thành phần tiếng Anh bán phần",
                    "Tích hợp kiến thức quốc tế"
                  ]
                },
                {
                  title: "Định hướng thực tiễn",
                  icon: "🚀",
                  color: "from-emerald-50 to-green-50",
                  borderColor: "border-emerald-200",
                  accentColor: "bg-emerald-500",
                  points: [
                    "Kết hợp lý thuyết và thực hành",
                    "Phát triển năng lực nghiên cứu",
                    "Thích ứng kỹ nguyên số"
                  ]
                }
              ].map((feature, featureIndex) => (
                <div key={featureIndex} className={`bg-gradient-to-br ${feature.color} p-6 rounded-xl border ${feature.borderColor} hover:shadow-lg transition-all duration-300`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-2xl">{feature.icon}</div>
                    <h4 className="font-bold text-slate-800 text-lg flex items-center gap-2">
                      <div className={`w-2 h-2 ${feature.accentColor} rounded-full`}></div>
                      {feature.title}
                    </h4>
                  </div>
                  <div className="space-y-3">
                    {feature.points.map((point, pointIndex) => (
                      <div key={pointIndex} className="flex items-start gap-3 p-3 bg-white/60 rounded-lg hover:bg-white/90 transition-all duration-200 group">
                        <div className="w-2 h-2 bg-amber-400 rounded-full flex-shrink-0 mt-2 group-hover:scale-125 transition-transform"></div>
                        <span className="text-slate-700 font-medium leading-relaxed">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Highlights section */}
            <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-6 rounded-xl border border-rose-200">
              <div className="flex items-center gap-2 mb-4">
                <div className="text-xl">✨</div>
                <h4 className="font-bold text-slate-800 text-lg">Điểm nổi bật của chương trình</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white/60 rounded-lg hover:bg-white/90 transition-colors">
                  <div className="text-2xl mb-2">🌍</div>
                  <div className="font-semibold text-slate-800 mb-1">Chuẩn quốc tế</div>
                  <div className="text-xs text-slate-600">Thiết kế theo tiêu chuẩn toàn cầu</div>
                </div>
                <div className="text-center p-4 bg-white/60 rounded-lg hover:bg-white/90 transition-colors">
                  <div className="text-2xl mb-2">💻</div>
                  <div className="font-semibold text-slate-800 mb-1">Công nghệ hiện đại</div>
                  <div className="text-xs text-slate-600">Tích hợp FinTech và Digital Banking</div>
                </div>
                <div className="text-center p-4 bg-white/60 rounded-lg hover:bg-white/90 transition-colors">
                  <div className="text-2xl mb-2">🎯</div>
                  <div className="font-semibold text-slate-800 mb-1">Thực tiễn cao</div>
                  <div className="text-xs text-slate-600">Kết nối doanh nghiệp và thị trường</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
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
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-purple-100/30"
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={headerVariants}
        >
          <div className='w-full flex justify-end'>
            <PointerHighlight>
              <motion.h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 p-4"
                whileHover={{
                  scale: 1.05,
                  color: "#3b82f6",
                  transition: { duration: 0.3 }
                }}
              >
                Cấu trúc Chương trình Đào tạo
              </motion.h2>
            </PointerHighlight>
          </div>
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <TextGenerateEffect
              words="Với cấu trúc khoa học, tích hợp yếu tố quốc tế và định hướng thực tiễn mạnh mẽ."
              className="text-lg text-slate-600"
            />
          </motion.div>
        </motion.div>

        {/* Timeline */}
        <motion.div className="relative mb-16" variants={timelineVariants}></motion.div>
        {/* Central line - Hidden on mobile */}
        <motion.div
          className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 via-green-400 via-purple-400 to-orange-400 rounded-full"
          initial={{ scaleY: 0, originY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        />

        {/* Timeline items */}
        <div className="space-y-8 md:space-y-16">
          {programSections.map((section, index) => (
            <motion.div
              key={section.id}
              className={cn(
                "relative flex items-center",
                // Mobile: center everything, Desktop: alternate left/right
                "justify-center md:justify-start",
                section.position === "right" && "md:justify-end"
              )}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: index * 0.2
                }
              }}
              viewport={{ once: true, amount: 0.3 }}
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
                    `bg-gradient-to-b ${section.color}`,
                    activeSection === section.id ? "scale-125 shadow-2xl" : "hover:scale-110"
                  )}
                  onClick={() => setActiveSection(activeSection === section.id ? -1 : section.id)}
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{
                    scale: 1,
                    rotate: 0,
                    transition: {
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                      delay: index * 0.2 + 0.3
                    }
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.2,
                    rotate: 10,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {section.icon}
                </motion.div>
              </div>

              {/* Content card */}
              <Drawer>
                <motion.div
                  className={cn(
                    "w-full transition-all duration-500",
                    // Mobile: full width with padding, Desktop: max-width with side padding
                    "px-4 md:max-w-lg",
                    // Desktop positioning
                    section.position === "left" ? "md:mr-auto md:pr-16" : "md:ml-auto md:pl-16",
                    activeSection === section.id ? "scale-105" : "hover:scale-102"
                  )}
                  initial={{
                    opacity: 0,
                    x: section.position === "left" ? -100 : 100,
                    y: 50
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                    transition: {
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                      delay: index * 0.2 + 0.5
                    }
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={{
                    scale: 1.02,
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div
                    className={cn(
                      "bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-8 border border-white/50 shadow-xl transition-all duration-300",
                      activeSection === section.id ? "shadow-2xl ring-4 ring-blue-500/20" : ""
                    )}
                    whileHover={{
                      boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
                      transition: { duration: 0.3 }
                    }}
                  >
                    {/* Header */}
                    <div className="mb-4 md:mb-6">
                      <div className={cn(
                        "inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-xl md:rounded-2xl text-white font-bold text-xs md:text-sm mb-2 md:mb-3 shadow-lg",
                        `bg-gradient-to-r ${section.color}`
                      )}>
                        {section.phase}
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-1 md:mb-2">{section.title}</h3>
                      <p className="text-xs md:text-sm font-medium text-slate-600">{section.subtitle}</p>
                    </div>

                    {/* Description */}
                    <p className="text-sm md:text-base text-slate-700 mb-4 md:mb-6 leading-relaxed">{section.description}</p>

                    {/* Click to view more indicator */}
                    <DrawerTrigger className="w-full p-0 bg-transparent border-0 hover:bg-transparent cursor-pointer">
                      <div className="text-center">
                        <span className="text-xs text-blue-600 font-medium">Nhấn để xem chi tiết →</span>
                      </div>
                    </DrawerTrigger>

                  </motion.div>
                </motion.div>
                <DrawerContent className="w-full mx-auto">
                  <DrawerHeader className="flex flex-row items-center justify-between">
                    <div>
                      <DrawerTitle className="text-2xl font-bold">{section.title}</DrawerTitle>
                    </div>
                    <DrawerClose className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                      <X className="w-5 h-5" />
                    </DrawerClose>
                  </DrawerHeader>
                  <div className="px-4 pb-4 max-h-[70vh] overflow-y-auto">
                    {section.modalContent}
                  </div>
                </DrawerContent>
              </Drawer>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}