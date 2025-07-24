"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { PointerHighlight } from "@/components/ui/pointer-highlight";

export function CareerTimelineSection() {
  const [activePhase, setActivePhase] = useState<number>(0);

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

  const careerPaths = [
    {
      title: "Ngân hàng truyền thống",
      roles: ["Chuyên viên tín dụng", "Chuyên viên đầu tư", "Quản lý rủi ro", "Giám đốc chi nhánh"],
      icon: "🏦",
      color: "bg-blue-100 text-blue-800"
    },
    {
      title: "FinTech & Startup",
      roles: ["Product Manager", "Data Analyst", "Blockchain Developer", "Founder/Co-founder"],
      icon: "💡",
      color: "bg-purple-100 text-purple-800"
    },
    {
      title: "Tư vấn tài chính",
      roles: ["Tư vấn đầu tư", "Phân tích tài chính", "Quản lý tài sản", "Chuyên gia M&A"],
      icon: "📊",
      color: "bg-green-100 text-green-800"
    },
    {
      title: "Nghiên cứu & Giảng dạy",
      roles: ["Nghiên cứu viên", "Giảng viên", "Chuyên gia chính sách", "Tác giả/Blogger"],
      icon: "🎓",
      color: "bg-amber-100 text-amber-800"
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
          <div className='w-full flex justify-start'>
          <PointerHighlight>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 p-4">
              Lộ trình phát triển sự nghiệp
            </h2>
          </PointerHighlight>
          </div>
          <div className="max-w-3xl mx-auto">
            <TextGenerateEffect 
              words="4 năm đầy thú vị và cơ hội phát triển không giới hạn."
              className="text-lg text-slate-600"
            />
          </div>
        </div>

        {/* Timeline */}
        <div className="relative mb-16">
          {/* Central line - Hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-400 via-blue-400 via-purple-400 to-orange-400 rounded-full"></div>
          
          {/* Timeline items */}
          <div className="space-y-8 md:space-y-16">
            {careerTimeline.map((item, index) => (
              <div
                key={item.id}
                className={cn(
                  "relative flex items-center",
                  // Mobile: center everything, Desktop: alternate left/right
                  "justify-center md:justify-start",
                  item.position === "right" && "md:justify-end"
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
                      `bg-gradient-to-br ${item.color}`,
                      activePhase === item.id ? "scale-125 shadow-2xl" : "hover:scale-110"
                    )}
                    onClick={() => setActivePhase(activePhase === item.id ? -1 : item.id)}
                  >
                    {item.icon}
                  </div>
                </div>

                {/* Content card */}
                <div 
                  className={cn(
                    "w-full transition-all duration-500 cursor-pointer",
                    // Mobile: full width with padding, Desktop: max-width with side padding
                    "px-4 md:max-w-lg",
                    // Desktop positioning
                    item.position === "left" ? "md:mr-auto md:pr-16" : "md:ml-auto md:pl-16",
                    activePhase === item.id ? "scale-105" : "hover:scale-102"
                  )}
                  onClick={() => setActivePhase(activePhase === item.id ? -1 : item.id)}
                >
                  <div className={cn(
                    "bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-8 border border-white/50 shadow-xl transition-all duration-300",
                    activePhase === item.id ? "shadow-2xl ring-4 ring-blue-500/20" : ""
                  )}>
                    {/* Header */}
                    <div className="mb-4 md:mb-6">
                      <div className={cn(
                        "inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-xl md:rounded-2xl text-white font-bold text-xs md:text-sm mb-2 md:mb-3 shadow-lg",
                        `bg-gradient-to-r ${item.color}`
                      )}>
                        {item.phase}
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-1 md:mb-2">{item.title}</h3>
                      <p className="text-xs md:text-sm font-medium text-slate-600">{item.subtitle}</p>
                    </div>

                    {/* Description */}
                    <p className="text-sm md:text-base text-slate-700 mb-4 md:mb-6 leading-relaxed">{item.description}</p>

                    {/* Skills and Opportunities */}
                    <div className={cn(
                      "transition-all duration-500 overflow-hidden",
                      activePhase === item.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    )}>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4 pt-3 md:pt-4 border-t border-slate-200">
                        <div>
                          <h4 className="font-semibold text-slate-800 mb-2 md:mb-3 text-sm md:text-base">Kỹ năng phát triển</h4>
                          <div className="space-y-1.5 md:space-y-2">
                            {item.skills.map((skill, skillIndex) => (
                              <div key={skillIndex} className="flex items-center gap-2">
                                <div className={cn(
                                  "w-1.5 h-1.5 md:w-2 md:h-2 rounded-full flex-shrink-0",
                                  `bg-gradient-to-r ${item.color}`
                                )}></div>
                                <span className="text-xs md:text-sm text-slate-700">{skill}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-800 mb-2 md:mb-3 text-sm md:text-base">Cơ hội</h4>
                          <div className="space-y-1.5 md:space-y-2">
                            {item.opportunities.map((opportunity, oppIndex) => (
                              <div key={oppIndex} className="flex items-center gap-2">
                                <div className={cn(
                                  "w-1.5 h-1.5 md:w-2 md:h-2 rounded-full flex-shrink-0",
                                  `bg-gradient-to-r ${item.color}`
                                )}></div>
                                <span className="text-xs md:text-sm text-slate-700">{opportunity}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}