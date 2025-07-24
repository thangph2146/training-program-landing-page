"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Target, Users, Globe, Award, GraduationCap, Clock, Building } from "lucide-react";

export function ProgramTimelineSection() {
  const [activeSection, setActiveSection] = useState<number>(0);

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
      position: "left"
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
      position: "right"
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
      position: "left"
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
      position: "right"
    }
  ];

  const ploMatrix = [
    {
      category: "Môn cơ bản",
      level: "PLO 2-3",
      description: "Kiến thức nền tảng",
      icon: BookOpen,
      color: "bg-blue-100 text-blue-800"
    },
    {
      category: "Môn chuyên ngành",
      level: "PLO 3+",
      description: "Kiến thức chuyên sâu",
      icon: Target,
      color: "bg-green-100 text-green-800"
    },
    {
      category: "Tổng PLO",
      level: "PLO1-PLO11",
      description: "Phân bổ đều các học phần",
      icon: Award,
      color: "bg-purple-100 text-purple-800"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-zinc-50 via-gray-100 to-zinc-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-br from-emerald-400/10 to-cyan-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className='w-full flex justify-end'>
          <PointerHighlight>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 p-4">
              Cấu trúc Chương trình Đào tạo
            </h2>
          </PointerHighlight>
          </div>
          <div className="max-w-3xl mx-auto">
            <TextGenerateEffect 
              words="Với cấu trúc khoa học, tích hợp yếu tố quốc tế và định hướng thực tiễn mạnh mẽ."
              className="text-lg text-slate-600"
            />
          </div>
        </div>

        {/* Timeline */}
        <div className="relative mb-16">
          {/* Central line - Hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 via-green-400 via-purple-400 to-orange-400 rounded-full"></div>
          
          {/* Timeline items */}
          <div className="space-y-8 md:space-y-16">
            {programSections.map((section, index) => (
              <div
                key={section.id}
                className={cn(
                  "relative flex items-center",
                  // Mobile: center everything, Desktop: alternate left/right
                  "justify-center md:justify-start",
                  section.position === "right" && "md:justify-end"
                )}
              >
                {/* Timeline dot */}
                <div className={cn(
                  "z-20",
                  // Mobile: relative positioning, Desktop: absolute center
                  "relative md:absolute md:left-1/2 md:transform md:-translate-x-1/2",
                  // Mobile: show above content
                  "mb-4 md:mb-0"
                )}>
                  <div 
                    className={cn(
                      "w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-lg md:text-2xl cursor-pointer transition-all duration-300 border-4 border-white shadow-lg mx-auto",
                      `bg-gradient-to-br ${section.color}`,
                      activeSection === section.id ? "scale-125 shadow-2xl" : "hover:scale-110"
                    )}
                    onClick={() => setActiveSection(activeSection === section.id ? -1 : section.id)}
                  >
                    {section.icon}
                  </div>
                </div>

                {/* Content card */}
                <div 
                  className={cn(
                    "w-full transition-all duration-500 cursor-pointer",
                    // Mobile: full width with padding, Desktop: max-width with side padding
                    "px-4 md:max-w-lg",
                    // Desktop positioning
                    section.position === "left" ? "md:mr-auto md:pr-16" : "md:ml-auto md:pl-16",
                    activeSection === section.id ? "scale-105" : "hover:scale-102"
                  )}
                  onClick={() => setActiveSection(activeSection === section.id ? -1 : section.id)}
                >
                  <div className={cn(
                    "bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-8 border border-white/50 shadow-xl transition-all duration-300",
                    activeSection === section.id ? "shadow-2xl ring-4 ring-blue-500/20" : ""
                  )}>
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

                    {/* Detailed Content */}
                    <div className={cn(
                      "transition-all duration-500 overflow-hidden",
                      activeSection === section.id ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
                    )}>
                      <div className="pt-3 md:pt-4 border-t border-slate-200">
                        {/* Program Details */}
                        {section.details && (
                          <div className="space-y-3 md:space-y-4">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4">
                              <div>
                                <h4 className="font-semibold text-slate-800 mb-1.5 md:mb-2 text-sm md:text-base">Tên chương trình</h4>
                                <p className="text-xs md:text-sm text-slate-700 mb-1">{section.details.vietnamese}</p>
                                <p className="text-xs text-slate-500 italic">{section.details.english}</p>
                              </div>
                              <div>
                                <h4 className="font-semibold text-slate-800 mb-1.5 md:mb-2 text-sm md:text-base">Thông tin cơ bản</h4>
                                <div className="space-y-1">
                                  <Badge variant="outline" className="text-xs">Mã ngành: {section.details.code}</Badge>
                                  <p className="text-xs md:text-sm text-slate-700">Trình độ: {section.details.level}</p>
                                  <p className="text-xs md:text-sm text-slate-700">Thời gian: {section.details.duration}</p>
                                  <p className="text-xs md:text-sm text-slate-700">Hình thức: {section.details.format}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Objectives */}
                        {section.objectives && (
                          <div className="space-y-3 md:space-y-4">
                            {section.objectives.map((objective, objIndex) => (
                              <div key={objIndex} className="bg-slate-50 rounded-lg p-3 md:p-4">
                                <h4 className="font-semibold text-slate-800 mb-1.5 md:mb-2 text-sm md:text-base">{objective.type}</h4>
                                <p className="text-xs md:text-sm text-slate-700 leading-relaxed">{objective.content}</p>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Knowledge Blocks */}
                        {section.knowledgeBlocks && (
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4">
                            {section.knowledgeBlocks.map((block, blockIndex) => (
                              <div key={blockIndex} className="bg-slate-50 rounded-lg p-3 md:p-4">
                                <h4 className="font-semibold text-slate-800 mb-2 md:mb-3 text-sm md:text-base">{block.title}</h4>
                                <div className="space-y-1.5 md:space-y-2">
                                  {block.subjects.map((subject, subIndex) => (
                                    <div key={subIndex} className="flex items-center gap-2">
                                      <div className={cn(
                                        "w-1.5 h-1.5 md:w-2 md:h-2 rounded-full flex-shrink-0",
                                        `bg-gradient-to-r ${section.color}`
                                      )}></div>
                                      <span className="text-xs text-slate-700">{subject}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Features */}
                        {section.features && (
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4">
                            {section.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="bg-slate-50 rounded-lg p-3 md:p-4">
                                <h4 className="font-semibold text-slate-800 mb-2 md:mb-3 text-sm md:text-base">{feature.title}</h4>
                                <div className="space-y-1.5 md:space-y-2">
                                  {feature.points.map((point, pointIndex) => (
                                    <div key={pointIndex} className="flex items-center gap-2">
                                      <div className={cn(
                                        "w-1.5 h-1.5 md:w-2 md:h-2 rounded-full flex-shrink-0",
                                        `bg-gradient-to-r ${section.color}`
                                      )}></div>
                                      <span className="text-xs md:text-sm text-slate-700">{point}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PLO Matrix */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-8 border border-white/50 shadow-xl mb-16">
          <h3 className="text-xl md:text-2xl font-bold text-slate-800 text-center mb-6 md:mb-8">
            Ma trận Kết quả Học tập (PLO)
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {ploMatrix.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="text-center group cursor-pointer">
                  <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <IconComponent className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-3 md:mb-4 text-slate-600" />
                    <h4 className="font-bold text-slate-800 mb-1.5 md:mb-2 text-sm md:text-base">{item.category}</h4>
                    <div className={cn(
                      "px-2.5 py-1 md:px-3 md:py-1 rounded-lg text-xs md:text-sm font-medium mb-1.5 md:mb-2",
                      item.color
                    )}>
                      {item.level}
                    </div>
                    <p className="text-xs md:text-sm text-slate-600">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}