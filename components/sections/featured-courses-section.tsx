"use client";

import React, { useRef, useState, useCallback } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Badge } from "@/components/ui/badge";
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerClose } from "@/components/ui/drawer";
import {
  TrendingUp,
  Calculator,
  Scale,
  Database,
  Globe,
  Star,
  CheckCircle,
  Users,
  ArrowRight,
  Clock,
  BookOpen,
  Award,
  X
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
  modalContent: React.ReactNode;
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
    level: 'Cơ bản đến Nâng cao',
    modalContent: (
      <div className="p-6">
        {/* Header */}
        <div className="p-6 rounded-t-2xl mb-6 -m-8 -mt-10">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/20 rounded-xl">
              <TrendingUp className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Tài chính - Ngân hàng</h2>
              <p>Chuyên ngành cốt lõi</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          {/* Mục tiêu học tập */}
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <div className="w-2 h-6 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full"></div>
              Mục tiêu học tập
            </h3>
            <div className="bg-blue-50 p-4 rounded-xl">
              <p className="text-slate-700 leading-relaxed">
                Sinh viên sẽ nắm vững kiến thức chuyên sâu về hệ thống tài chính, ngân hàng hiện đại và các công cụ tài chính phức tạp. Phát triển khả năng phân tích, đánh giá rủi ro và đưa ra quyết định đầu tư thông minh trong môi trường kinh doanh toàn cầu.
              </p>
            </div>
          </div>

          {/* Nội dung khóa học */}
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <div className="w-2 h-6 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full"></div>
              Nội dung khóa học
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white border border-slate-200 p-4 rounded-xl">
                <h4 className="font-semibold text-slate-800 mb-2">Tài chính doanh nghiệp</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Phân tích báo cáo tài chính</li>
                  <li>• Quản lý vốn lưu động</li>
                  <li>• Đầu tư và tài trợ dự án</li>
                </ul>
              </div>
              <div className="bg-white border border-slate-200 p-4 rounded-xl">
                <h4 className="font-semibold text-slate-800 mb-2">Ngân hàng hiện đại</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Sản phẩm dịch vụ ngân hàng</li>
                  <li>• Ngân hàng số và FinTech</li>
                  <li>• Quản lý rủi ro tín dụng</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Triển vọng nghề nghiệp */}
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <div className="w-2 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
              Triển vọng nghề nghiệp
            </h3>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">85%</div>
                  <div className="text-sm text-slate-600">Tỷ lệ có việc làm</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">15-25M</div>
                  <div className="text-sm text-slate-600">Mức lương khởi điểm</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">500+</div>
                  <div className="text-sm text-slate-600">Đối tác tuyển dụng</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
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
    level: 'Trung cấp đến Nâng cao',
    modalContent: (
      <div className="p-6">
        {/* Header */}
        <div className="p-6 rounded-t-2xl mb-6 -m-8 -mt-10">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/20 rounded-xl">
              <Users className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Quản trị kinh doanh</h2>
              <p>Kỹ năng quản lý</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          {/* Mục tiêu học tập */}
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <div className="w-2 h-6 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full"></div>
              Mục tiêu học tập
            </h3>
            <div className="bg-green-50 p-4 rounded-xl">
              <p className="text-slate-700 leading-relaxed">
                Phát triển kỹ năng lãnh đạo và quản lý toàn diện, nắm vững các chiến lược kinh doanh hiện đại và khả năng điều hành doanh nghiệp hiệu quả trong môi trường cạnh tranh toàn cầu.
              </p>
            </div>
          </div>

          {/* Nội dung khóa học */}
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <div className="w-2 h-6 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>
              Nội dung khóa học
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white border border-slate-200 p-4 rounded-xl">
                <h4 className="font-semibold text-slate-800 mb-2">Quản lý chiến lược</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Lập kế hoạch chiến lược</li>
                  <li>• Phân tích thị trường</li>
                  <li>• Quản lý thay đổi</li>
                </ul>
              </div>
              <div className="bg-white border border-slate-200 p-4 rounded-xl">
                <h4 className="font-semibold text-slate-800 mb-2">Lãnh đạo và nhân sự</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Kỹ năng lãnh đạo</li>
                  <li>• Quản lý nhân sự</li>
                  <li>• Xây dựng văn hóa doanh nghiệp</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Cơ hội nghề nghiệp */}
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <div className="w-2 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
              Cơ hội nghề nghiệp
            </h3>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">90%</div>
                  <div className="text-sm text-slate-600">Tỷ lệ có việc làm</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">20-35M</div>
                  <div className="text-sm text-slate-600">Mức lương khởi điểm</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">300+</div>
                  <div className="text-sm text-slate-600">Vị trí quản lý</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
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
    level: 'Cơ bản đến Chuyên gia',
    modalContent: (
      <div className="p-6">
        {/* Header */}
        <div className="p-6 rounded-t-2xl mb-6 -m-8 -mt-10">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/20 rounded-xl">
              <Calculator className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Kế toán - Kiểm toán</h2>
              <p>Chuyên môn cao</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          {/* Mục tiêu học tập */}
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <div className="w-2 h-6 bg-gradient-to-b from-purple-500 to-violet-500 rounded-full"></div>
              Mục tiêu học tập
            </h3>
            <div className="bg-purple-50 p-4 rounded-xl">
              <p className="text-slate-700 leading-relaxed">
                Đào tạo kế toán viên và kiểm toán viên chuyên nghiệp, thành thạo các chuẩn mực kế toán quốc tế (IFRS), có khả năng phân tích tài chính sâu sắc và đảm bảo tính minh bạch, chính xác trong báo cáo tài chính doanh nghiệp.
              </p>
            </div>
          </div>

          {/* Nội dung khóa học */}
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <div className="w-2 h-6 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>
              Nội dung khóa học
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white border border-slate-200 p-4 rounded-xl">
                <h4 className="font-semibold text-slate-800 mb-2">Kế toán chuyên nghiệp</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Kế toán tài chính nâng cao</li>
                  <li>• Kế toán quản trị chiến lược</li>
                  <li>• Chuẩn mực kế toán quốc tế IFRS</li>
                </ul>
              </div>
              <div className="bg-white border border-slate-200 p-4 rounded-xl">
                <h4 className="font-semibold text-slate-800 mb-2">Kiểm toán độc lập</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Kiểm toán báo cáo tài chính</li>
                  <li>• Kiểm toán nội bộ</li>
                  <li>• Đánh giá rủi ro và kiểm soát</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Chứng chỉ nghề nghiệp */}
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <div className="w-2 h-6 bg-gradient-to-b from-yellow-500 to-orange-500 rounded-full"></div>
              Chứng chỉ nghề nghiệp
            </h3>
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">CPA</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">Certified Public Accountant</div>
                    <div className="text-sm text-slate-600">Kế toán viên công chứng</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">CIA</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">Certified Internal Auditor</div>
                    <div className="text-sm text-slate-600">Kiểm toán viên nội bộ</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
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
    level: 'Trung cấp đến Nâng cao',
    modalContent: (
      <div className="p-6">
        {/* Header */}
        <div className="p-6 rounded-t-2xl mb-6 -m-8 -mt-10">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/20 rounded-xl">
              <Scale className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Luật kinh tế</h2>
              <p>Pháp lý chuyên sâu</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          {/* Mục tiêu học tập */}
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <div className="w-2 h-6 bg-gradient-to-b from-red-500 to-rose-500 rounded-full"></div>
              Mục tiêu học tập
            </h3>
            <div className="bg-red-50 p-4 rounded-xl">
              <p className="text-slate-700 leading-relaxed">
                Trang bị kiến thức pháp lý toàn diện về môi trường kinh doanh, nắm vững các quy định về ngân hàng, tài chính và thương mại quốc tế. Phát triển khả năng tư vấn pháp lý và đảm bảo tuân thủ trong hoạt động kinh doanh.
              </p>
            </div>
          </div>

          {/* Nội dung khóa học */}
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <div className="w-2 h-6 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>
              Nội dung khóa học
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white border border-slate-200 p-4 rounded-xl">
                <h4 className="font-semibold text-slate-800 mb-2">Luật ngân hàng & tài chính</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Quy định hoạt động ngân hàng</li>
                  <li>• Luật chứng khoán</li>
                  <li>• Pháp lý tài chính quốc tế</li>
                </ul>
              </div>
              <div className="bg-white border border-slate-200 p-4 rounded-xl">
                <h4 className="font-semibold text-slate-800 mb-2">Tuân thủ & quản lý rủi ro</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Compliance trong ngân hàng</li>
                  <li>• Chống rửa tiền (AML)</li>
                  <li>• Quản lý rủi ro pháp lý</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Ứng dụng thực tế */}
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <div className="w-2 h-6 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full"></div>
              Ứng dụng thực tế
            </h3>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">Tư vấn pháp lý doanh nghiệp</div>
                    <div className="text-sm text-slate-600">Hỗ trợ doanh nghiệp tuân thủ quy định</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">Chuyên viên tuân thủ</div>
                    <div className="text-sm text-slate-600">Đảm bảo hoạt động theo quy định</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
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
    level: 'Nâng cao đến Chuyên gia',
    modalContent: (
      <div className="p-6">
        {/* Header */}
        <div className="p-6 rounded-t-2xl mb-6 -m-8 -mt-10">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/20 rounded-xl">
              <Database className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Khoa học dữ liệu trong kinh doanh</h2>
              <p>Công nghệ tiên tiến</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          {/* Mục tiêu học tập */}
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <div className="w-2 h-6 bg-gradient-to-b from-orange-500 to-amber-500 rounded-full"></div>
              Mục tiêu học tập
            </h3>
            <div className="bg-orange-50 p-4 rounded-xl">
              <p className="text-slate-700 leading-relaxed">
                Trang bị kỹ năng phân tích dữ liệu lớn và ứng dụng trí tuệ nhân tạo trong lĩnh vực tài chính ngân hàng. Phát triển khả năng xây dựng mô hình dự báo và hỗ trợ ra quyết định kinh doanh dựa trên dữ liệu.
              </p>
            </div>
          </div>

          {/* Nội dung khóa học */}
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <div className="w-2 h-6 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>
              Nội dung khóa học
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white border border-slate-200 p-4 rounded-xl">
                <h4 className="font-semibold text-slate-800 mb-2">Phân tích dữ liệu tài chính</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Big Data trong ngân hàng</li>
                  <li>• Phân tích rủi ro tín dụng</li>
                  <li>• Dự báo thị trường tài chính</li>
                </ul>
              </div>
              <div className="bg-white border border-slate-200 p-4 rounded-xl">
                <h4 className="font-semibold text-slate-800 mb-2">Machine Learning & AI</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Thuật toán học máy</li>
                  <li>• Xử lý ngôn ngữ tự nhiên</li>
                  <li>• Chatbot và AI trong FinTech</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Công cụ và công nghệ */}
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <div className="w-2 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
              Công cụ và công nghệ
            </h3>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold text-sm">PY</span>
                  </div>
                  <div className="text-sm font-semibold text-slate-800">Python</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold text-sm">R</span>
                  </div>
                  <div className="text-sm font-semibold text-slate-800">R Studio</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold text-sm">SQL</span>
                  </div>
                  <div className="text-sm font-semibold text-slate-800">Database</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold text-sm">TF</span>
                  </div>
                  <div className="text-sm font-semibold text-slate-800">TensorFlow</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
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
    level: 'Trung cấp đến Nâng cao',
    modalContent: (
      <div className="p-6">
        {/* Header */}
        <div className="p-6 rounded-t-2xl mb-6 -m-8 -mt-10">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/20 rounded-xl">
              <Globe className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Kinh tế quốc tế</h2>
              <p>Tầm nhìn toàn cầu</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          {/* Mục tiêu học tập */}
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <div className="w-2 h-6 bg-gradient-to-b from-teal-500 to-cyan-500 rounded-full"></div>
              Mục tiêu học tập
            </h3>
            <div className="bg-teal-50 p-4 rounded-xl">
              <p className="text-slate-700 leading-relaxed">
                Phát triển hiểu biết sâu sắc về nền kinh tế toàn cầu, thương mại quốc tế và các chính sách kinh tế vĩ mô. Nắm vững kỹ năng phân tích thị trường quốc tế và đánh giá tác động của các yếu tố kinh tế toàn cầu.
              </p>
            </div>
          </div>

          {/* Nội dung khóa học */}
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <div className="w-2 h-6 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>
              Nội dung khóa học
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white border border-slate-200 p-4 rounded-xl">
                <h4 className="font-semibold text-slate-800 mb-2">Thương mại quốc tế</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Lý thuyết thương mại quốc tế</li>
                  <li>• Chính sách thương mại</li>
                  <li>• Tổ chức thương mại thế giới (WTO)</li>
                </ul>
              </div>
              <div className="bg-white border border-slate-200 p-4 rounded-xl">
                <h4 className="font-semibold text-slate-800 mb-2">Tài chính quốc tế</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Thị trường ngoại hối</li>
                  <li>• Cán cân thanh toán</li>
                  <li>• Đầu tư trực tiếp nước ngoài (FDI)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Xu hướng toàn cầu */}
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <div className="w-2 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
              Xu hướng toàn cầu
            </h3>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-white text-2xl">🌐</span>
                  </div>
                  <div className="font-semibold text-slate-800">Toàn cầu hóa</div>
                  <div className="text-sm text-slate-600">Hội nhập kinh tế thế giới</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-white text-2xl">💱</span>
                  </div>
                  <div className="font-semibold text-slate-800">Tiền tệ số</div>
                  <div className="text-sm text-slate-600">CBDC và cryptocurrency</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-white text-2xl">🤝</span>
                  </div>
                  <div className="font-semibold text-slate-800">Hợp tác khu vực</div>
                  <div className="text-sm text-slate-600">ASEAN, RCEP, CPTPP</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
];

export default function FeaturedCoursesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [focusedCard, setFocusedCard] = useState<string | null>(null);

  const handleCardHover = useCallback((courseId: string | null) => {
    setHoveredCard(courseId);
  }, []);

  const handleCardFocus = useCallback((courseId: string | null) => {
    setFocusedCard(courseId);
  }, []);

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
      className="py-6 bg-gradient-to-b from-zinc-50 via-slate-100 to-zinc-50 relative overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      aria-labelledby="featured-courses-title"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div className="text-center mb-12 lg:mb-16" variants={headerVariants}>
          <div className='w-full flex justify-center lg:justify-end'>
            <PointerHighlight>
              <h2 
                id="featured-courses-title"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 p-4 leading-tight"
              >
                Các Môn Học Nổi Bật
              </h2>
            </PointerHighlight>
          </div>
          <div className="max-w-3xl mx-auto mt-4">
            <TextGenerateEffect
              words="Chương trình đào tạo toàn diện với các môn học hiện đại, kết hợp lý thuyết và thực hành để phát triển năng lực chuyên môn cao."
              className="text-lg lg:text-xl text-slate-600 leading-relaxed"
            />
          </div>
        </motion.div>

        {/* Courses Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          role="list"
          aria-label="Danh sách các môn học nổi bật"
        >
          <AnimatePresence>
            {featuredCourses.map((course, index) => {
              const IconComponent = course.icon;
              const isHovered = hoveredCard === course.id;
              const isFocused = focusedCard === course.id;
              
              return (
                <Drawer key={course.id}>
                  <motion.div
                    className="group cursor-pointer w-full h-full"
                    variants={cardVariants}
                    whileHover={{
                      scale: 1.02,
                      y: -8,
                      transition: { type: "spring", stiffness: 400, damping: 25 }
                    }}
                    whileTap={{ scale: 0.98 }}
                    onHoverStart={() => handleCardHover(course.id)}
                    onHoverEnd={() => handleCardHover(null)}
                    onFocus={() => handleCardFocus(course.id)}
                    onBlur={() => handleCardFocus(null)}
                    role="listitem"
                    tabIndex={0}
                    aria-label={`Môn học ${course.title} - ${course.description}`}
                  >
                    <motion.div
                      className="bg-white/90 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-white/60 shadow-lg hover:shadow-2xl h-full relative overflow-hidden transition-all duration-300"
                      style={{
                        boxShadow: isHovered || isFocused 
                          ? "0 25px 50px -12px rgba(0, 0, 0, 0.25)" 
                          : "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                      }}
                    >
                      {/* Animated background gradient */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-blue-50/60 to-purple-50/60 rounded-2xl lg:rounded-3xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovered || isFocused ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                      />

                      {/* Focus indicator for accessibility */}
                      {isFocused && (
                        <motion.div
                          className="absolute inset-0 border-2 border-blue-500 rounded-2xl lg:rounded-3xl"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}

                      <div className="relative z-10">
                        {/* Header */}
                        <div className="flex items-start gap-4 mb-6">
                          <motion.div
                            className="p-3 bg-gradient-to-b from-blue-100 to-indigo-100 rounded-xl lg:rounded-2xl group-hover:from-blue-200 group-hover:to-indigo-200 transition-all duration-300 flex-shrink-0"
                            variants={iconVariants}
                            whileHover={{
                              rotate: [0, -10, 10, 0],
                              scale: 1.1,
                              transition: { duration: 0.6, ease: "easeInOut" }
                            }}
                          >
                            <IconComponent className="w-6 h-6 lg:w-7 lg:h-7 text-slate-700" />
                          </motion.div>
                          <div className="flex-1 min-w-0">
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.3 + index * 0.1 }}
                            >
                              <Badge 
                                variant="secondary" 
                                className="mb-3 text-xs font-medium bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
                              >
                                {course.category}
                              </Badge>
                              <h3 className="text-xl lg:text-2xl font-bold text-slate-800 mb-2 leading-tight group-hover:text-slate-900 transition-colors">
                                {course.title}
                              </h3>
                            </motion.div>
                          </div>
                        </div>

                        {/* Description */}
                        <motion.p
                          className="text-slate-600 mb-6 leading-relaxed text-sm lg:text-base group-hover:text-slate-700 transition-colors"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                        >
                          {course.description}
                        </motion.p>

                        {/* Level and CTA */}
                        <motion.div
                          className="pt-4 border-t border-slate-200/60"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.7 + index * 0.1 }}
                        >
                          <DrawerTrigger className="w-full h-full p-0 bg-transparent hover:bg-transparent group/trigger">
                            {/* Enhanced CTA */}
                            <motion.div
                              className="flex items-center justify-between p-3 bg-slate-50/80 hover:bg-slate-100/80 rounded-xl transition-all duration-300 group-hover/trigger:shadow-md cursor-pointer"
                              whileHover={{ y: -2 }}
                              whileTap={{ y: 0 }}
                            >
                              <span className="text-sm font-medium text-slate-700 group-hover/trigger:text-slate-900">
                                Xem chi tiết khóa học
                              </span>
                              <motion.div
                                className="flex items-center gap-1 text-slate-500 group-hover/trigger:text-slate-700"
                                whileHover={{ x: 4 }}
                              >
                                <ArrowRight className="h-4 w-4" />
                              </motion.div>
                            </motion.div>
                          </DrawerTrigger>
                        </motion.div>

                      </div>
                    </motion.div>
                  </motion.div>

                  <DrawerContent className="w-full mx-auto">
                    <DrawerHeader className="flex flex-row items-center justify-between">
                      <div>
                        <DrawerTitle className="text-2xl font-bold">{course.title}</DrawerTitle>
                      </div>
                      <DrawerClose className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                        <X className="w-5 h-5" />
                      </DrawerClose>
                    </DrawerHeader>
                    <div className="px-4 pb-4 max-h-[70vh] overflow-y-auto">
                      {course.modalContent}
                    </div>
                  </DrawerContent>
                </Drawer>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Additional CTA Section */}
        <motion.div
          className="text-center mt-12 lg:mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Award className="h-5 w-5" />
            <span>Khám phá toàn bộ chương trình đào tạo</span>
            <ArrowRight className="h-4 w-4" />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}