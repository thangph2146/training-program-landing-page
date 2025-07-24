"use client";

import React from 'react';
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
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-zinc-50 via-slate-100 to-zinc-50 relative overflow-hidden">
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
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCourses.map((course, index) => {
            const IconComponent = course.icon;
            return (
              <div key={course.id} className="group cursor-pointer">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-white/50 shadow-xl transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105 h-full">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl group-hover:from-blue-200 group-hover:to-indigo-200 transition-colors flex-shrink-0">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <Badge variant="secondary" className="mb-2 text-xs">
                        {course.category}
                      </Badge>
                      <h3 className="text-xl font-bold text-slate-800 mb-2 leading-tight">
                        {course.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {course.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">
                      <Star className="h-4 w-4 text-yellow-500" />
                      Điểm nổi bật
                    </h4>
                    <div className="space-y-2">
                      {course.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                          <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Level */}
                  <div className="pt-4 border-t border-slate-200">
                    <p className="text-sm text-slate-500">Trình độ</p>
                    <p className="font-semibold text-slate-700">{course.level}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}