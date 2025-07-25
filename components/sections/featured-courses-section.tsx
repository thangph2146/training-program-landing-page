"use client";

import React, { useRef, useState, useCallback, useMemo, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { Badge } from "@/components/ui/badge";
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerClose } from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import {
  TrendingUp,
  Calculator,
  Scale,
  Database,
  Globe,
  Star,
  Users,
  X,
  Sparkles,
  GraduationCap,
  ChevronRight,
  Play,
  ChevronLeft,
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
    color: 'bg-red-500/10 text-red-600 border-red-200',
    level: 'Cơ bản đến Nâng cao',
    modalContent: (
      <div className="p-6">
        {/* Header */}
        <div className="p-6 rounded-t-2xl mb-6 -m-8 -mt-10 bg-gradient-to-r from-red-50 to-red-100">
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
              <div className="w-2 h-6 bg-gradient-to-b from-red-500 to-red-600 rounded-full"></div>
              Mục tiêu học tập
            </h3>
            <div className="bg-red-50 p-4 rounded-xl border border-red-100">
              <p className="text-slate-700 leading-relaxed">
                Sinh viên sẽ nắm vững kiến thức chuyên sâu về hệ thống tài chính, ngân hàng hiện đại và các công cụ tài chính phức tạp. Phát triển khả năng phân tích, đánh giá rủi ro và đưa ra quyết định đầu tư thông minh trong môi trường kinh doanh toàn cầu.
              </p>
            </div>
          </div>

          {/* Nội dung khóa học */}
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <div className="w-2 h-6 bg-gradient-to-b from-red-500 to-red-600 rounded-full"></div>
              Nội dung khóa học
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white border border-red-100 p-4 rounded-xl hover:shadow-lg transition-all duration-300">
                <h4 className="font-semibold text-slate-800 mb-2">Tài chính doanh nghiệp</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Phân tích báo cáo tài chính</li>
                  <li>• Quản lý vốn lưu động</li>
                  <li>• Đầu tư và tài trợ dự án</li>
                </ul>
              </div>
              <div className="bg-white border border-red-100 p-4 rounded-xl hover:shadow-lg transition-all duration-300">
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
              <div className="w-2 h-6 bg-gradient-to-b from-red-500 to-red-600 rounded-full"></div>
              Triển vọng nghề nghiệp
            </h3>
            <div className="bg-gradient-to-r from-red-50 to-red-100 p-4 rounded-xl border border-red-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">85%</div>
                  <div className="text-sm text-slate-600">Tỷ lệ có việc làm</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">15-25M</div>
                  <div className="text-sm text-slate-600">Mức lương khởi điểm</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">500+</div>
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
    color: 'bg-red-500/10 text-red-600 border-red-200',
    level: 'Trung cấp đến Nâng cao',
    modalContent: (
      <div className="p-6">
        {/* Header */}
        <div className="p-6 rounded-t-2xl mb-6 -m-8 -mt-10 bg-gradient-to-r from-red-50 to-red-100">
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
              <div className="w-2 h-6 bg-gradient-to-b from-red-500 to-red-600 rounded-full"></div>
              Mục tiêu học tập
            </h3>
            <div className="bg-red-50 p-4 rounded-xl border border-red-100">
              <p className="text-slate-700 leading-relaxed">
                Phát triển kỹ năng lãnh đạo và quản lý toàn diện, nắm vững các chiến lược kinh doanh hiện đại và khả năng điều hành doanh nghiệp hiệu quả trong môi trường cạnh tranh toàn cầu.
              </p>
            </div>
          </div>

          {/* Nội dung khóa học */}
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <div className="w-2 h-6 bg-gradient-to-b from-red-500 to-red-600 rounded-full"></div>
              Nội dung khóa học
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white border border-red-100 p-4 rounded-xl hover:shadow-lg transition-all duration-300">
                <h4 className="font-semibold text-slate-800 mb-2">Quản lý chiến lược</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Lập kế hoạch chiến lược</li>
                  <li>• Phân tích thị trường</li>
                  <li>• Quản lý thay đổi</li>
                </ul>
              </div>
              <div className="bg-white border border-red-100 p-4 rounded-xl hover:shadow-lg transition-all duration-300">
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
              <div className="w-2 h-6 bg-gradient-to-b from-red-500 to-red-600 rounded-full"></div>
              Cơ hội nghề nghiệp
            </h3>
            <div className="bg-gradient-to-r from-red-50 to-red-100 p-4 rounded-xl border border-red-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">90%</div>
                  <div className="text-sm text-slate-600">Tỷ lệ có việc làm</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">20-35M</div>
                  <div className="text-sm text-slate-600">Mức lương khởi điểm</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">300+</div>
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
    color: 'bg-red-500/10 text-red-600 border-red-200',
    level: 'Cơ bản đến Chuyên gia',
    modalContent: (
      <div className="p-6">
        {/* Header */}
        <div className="p-6 rounded-t-2xl mb-6 -m-8 -mt-10 bg-gradient-to-r from-red-50 to-red-100">
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
              <div className="w-2 h-6 bg-gradient-to-b from-red-500 to-red-600 rounded-full"></div>
              Mục tiêu học tập
            </h3>
            <div className="bg-red-50 p-4 rounded-xl border border-red-100">
              <p className="text-slate-700 leading-relaxed">
                Đào tạo kế toán viên và kiểm toán viên chuyên nghiệp, thành thạo các chuẩn mực kế toán quốc tế (IFRS), có khả năng phân tích tài chính sâu sắc và đảm bảo tính minh bạch, chính xác trong báo cáo tài chính doanh nghiệp.
              </p>
            </div>
          </div>

          {/* Nội dung khóa học */}
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <div className="w-2 h-6 bg-gradient-to-b from-red-500 to-red-600 rounded-full"></div>
              Nội dung khóa học
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white border border-red-100 p-4 rounded-xl hover:shadow-lg transition-all duration-300">
                <h4 className="font-semibold text-slate-800 mb-2">Kế toán chuyên nghiệp</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Kế toán tài chính nâng cao</li>
                  <li>• Kế toán quản trị chiến lược</li>
                  <li>• Chuẩn mực kế toán quốc tế IFRS</li>
                </ul>
              </div>
              <div className="bg-white border border-red-100 p-4 rounded-xl hover:shadow-lg transition-all duration-300">
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
              <div className="w-2 h-6 bg-gradient-to-b from-red-500 to-red-600 rounded-full"></div>
              Chứng chỉ nghề nghiệp
            </h3>
            <div className="bg-gradient-to-r from-red-50 to-red-100 p-4 rounded-xl border border-red-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">CPA</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">Certified Public Accountant</div>
                    <div className="text-sm text-slate-600">Kế toán viên công chứng</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center">
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
        <div className="p-6 rounded-t-2xl mb-6 -m-8 -mt-10 bg-gradient-to-r from-red-50 to-red-100">
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
              <div className="w-2 h-6 bg-gradient-to-b from-red-500 to-red-600 rounded-full"></div>
              Mục tiêu học tập
            </h3>
            <div className="bg-red-50 p-4 rounded-xl border border-red-100">
              <p className="text-slate-700 leading-relaxed">
                Trang bị kiến thức pháp lý toàn diện về môi trường kinh doanh, nắm vững các quy định về ngân hàng, tài chính và thương mại quốc tế. Phát triển khả năng tư vấn pháp lý và đảm bảo tuân thủ trong hoạt động kinh doanh.
              </p>
            </div>
          </div>

          {/* Nội dung khóa học */}
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <div className="w-2 h-6 bg-gradient-to-b from-red-500 to-red-600 rounded-full"></div>
              Nội dung khóa học
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white border border-red-100 p-4 rounded-xl hover:shadow-lg transition-all duration-300">
                <h4 className="font-semibold text-slate-800 mb-2">Luật ngân hàng & tài chính</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Quy định hoạt động ngân hàng</li>
                  <li>• Luật chứng khoán</li>
                  <li>• Pháp lý tài chính quốc tế</li>
                </ul>
              </div>
              <div className="bg-white border border-red-100 p-4 rounded-xl hover:shadow-lg transition-all duration-300">
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
              <div className="w-2 h-6 bg-gradient-to-b from-red-500 to-red-600 rounded-full"></div>
              Ứng dụng thực tế
            </h3>
            <div className="bg-gradient-to-r from-red-50 to-red-100 p-4 rounded-xl border border-red-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">Tư vấn pháp lý doanh nghiệp</div>
                    <div className="text-sm text-slate-600">Hỗ trợ doanh nghiệp tuân thủ quy định</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
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
    color: 'bg-red-500/10 text-red-600 border-red-200',
    level: 'Nâng cao đến Chuyên gia',
    modalContent: (
      <div className="p-6">
        {/* Header */}
        <div className="p-6 rounded-t-2xl mb-6 -m-8 -mt-10 bg-gradient-to-r from-red-50 to-red-100">
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
              <div className="w-2 h-6 bg-gradient-to-b from-red-500 to-red-600 rounded-full"></div>
              Mục tiêu học tập
            </h3>
            <div className="bg-red-50 p-4 rounded-xl border border-red-100">
              <p className="text-slate-700 leading-relaxed">
                Trang bị kỹ năng phân tích dữ liệu lớn và ứng dụng trí tuệ nhân tạo trong lĩnh vực tài chính ngân hàng. Phát triển khả năng xây dựng mô hình dự báo và hỗ trợ ra quyết định kinh doanh dựa trên dữ liệu.
              </p>
            </div>
          </div>

          {/* Nội dung khóa học */}
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <div className="w-2 h-6 bg-gradient-to-b from-red-500 to-red-600 rounded-full"></div>
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
              <div className="w-2 h-6 bg-gradient-to-b from-red-500 to-red-600 rounded-full"></div>
              Công cụ và công nghệ
            </h3>
            <div className="bg-gradient-to-r from-red-50 to-red-100 p-4 rounded-xl border border-red-200">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold text-sm">PY</span>
                  </div>
                  <div className="text-sm font-semibold text-slate-800">Python</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold text-sm">R</span>
                  </div>
                  <div className="text-sm font-semibold text-slate-800">R Studio</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-700 rounded-xl flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold text-sm">SQL</span>
                  </div>
                  <div className="text-sm font-semibold text-slate-800">Database</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-800 rounded-xl flex items-center justify-center mx-auto mb-2">
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
    color: 'bg-red-500/10 text-red-600 border-red-200',
    level: 'Trung cấp đến Nâng cao',
    modalContent: (
      <div className="p-6">
        {/* Header */}
        <div className="p-6 rounded-t-2xl mb-6 -m-8 -mt-10 bg-gradient-to-r from-red-50 to-red-100">
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
              <div className="w-2 h-6 bg-gradient-to-b from-red-500 to-red-600 rounded-full"></div>
              Mục tiêu học tập
            </h3>
            <div className="bg-red-50 p-4 rounded-xl border border-red-100">
              <p className="text-slate-700 leading-relaxed">
                Phát triển hiểu biết sâu sắc về nền kinh tế toàn cầu, thương mại quốc tế và các chính sách kinh tế vĩ mô. Nắm vững kỹ năng phân tích thị trường quốc tế và đánh giá tác động của các yếu tố kinh tế toàn cầu.
              </p>
            </div>
          </div>

          {/* Nội dung khóa học */}
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <div className="w-2 h-6 bg-gradient-to-b from-red-500 to-red-600 rounded-full"></div>
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
              <div className="w-2 h-6 bg-gradient-to-b from-red-500 to-red-600 rounded-full"></div>
              Xu hướng toàn cầu
            </h3>
            <div className="bg-gradient-to-r from-red-50 to-red-100 p-4 rounded-xl border border-red-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-white text-2xl">🌐</span>
                  </div>
                  <div className="font-semibold text-slate-800">Toàn cầu hóa</div>
                  <div className="text-sm text-slate-600">Hội nhập kinh tế thế giới</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-white text-2xl">💱</span>
                  </div>
                  <div className="font-semibold text-slate-800">Tiền tệ số</div>
                  <div className="text-sm text-slate-600">CBDC và cryptocurrency</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-700 to-red-800 rounded-2xl flex items-center justify-center mx-auto mb-3">
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

export function FeaturedCoursesSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [focusedCard, setFocusedCard] = useState<string | null>(null);
  const [activeCourse, setActiveCourse] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const handleCardHover = useCallback((courseId: string | null) => {
    setHoveredCard(courseId);
  }, []);

  const handleCardFocus = useCallback((courseId: string | null) => {
    setFocusedCard(courseId);
  }, []);

  const handleNext = useCallback(() => {
    setActiveCourse((prev) => (prev + 1) % featuredCourses.length);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveCourse((prev) => (prev - 1 + featuredCourses.length) % featuredCourses.length);
  }, []);

  const isActive = useCallback((index: number) => {
    return index === activeCourse;
  }, [activeCourse]);

  useEffect(() => {
    if (autoplay && isInView) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, isInView, handleNext]);

  const randomRotateY = (index: number = 0) => {
    // Use index-based rotation to avoid hydration mismatch
    return (index % 3 - 1) * 7; // Returns -7, 0, or 7 based on index
  };


  // Optimized animation variants with useMemo
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
    highlight: {
      hidden: { opacity: 0, x: -20 },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          staggerChildren: 0.1
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

  return (
    <motion.section
      ref={ref}
      className="py-6 bg-gradient-to-br from-slate-50 via-slate-100/50 to-blue-50/30 relative overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={animationVariants.container}
      role="region"
      aria-labelledby="featured-courses-title"
      aria-describedby="featured-courses-description"
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
            <Sparkles className="w-4 h-4 text-red-400/40" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <motion.div className="text-center mb-6" variants={animationVariants.header}>
          <div className='w-full flex justify-center lg:justify-start'>
            <PointerHighlight>
              <h2 
                id="featured-courses-title"
                className="text-3xl font-bold bg-gradient-to-r from-slate-700 via-red-700 to-red-800 bg-clip-text text-transparent p-4 leading-tight"
              >
                Các Môn Học Nổi Bật
              </h2>
            </PointerHighlight>
          </div>
        </motion.div>

        {/* Enhanced Courses Carousel */}
        <motion.div
          className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20"
          variants={animationVariants.container}
          role="list"
          aria-label="Danh sách các môn học nổi bật"
        >
          {/* Course Cards Stack */}
          <div className="relative h-96 w-full">
            <AnimatePresence>
              {featuredCourses.map((course, index) => {
                const IconComponent = course.icon;
                const isHovered = hoveredCard === course.id;
                const isFocused = focusedCard === course.id;
                const isActiveCard = isActive(index);
              
                return (
                  <motion.div
                    key={course.id}
                    className="absolute inset-0 origin-bottom"
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                      z: -100,
                      rotate: randomRotateY(),
                    }}
                    animate={{
                      opacity: isActiveCard ? 1 : 0.7,
                      scale: isActiveCard ? 1 : 0.95,
                      z: isActiveCard ? 0 : -100,
                      rotate: isActiveCard ? 0 : randomRotateY(),
                      zIndex: isActiveCard
                        ? 40
                        : featuredCourses.length + 2 - index,
                      y: isActiveCard ? [0, -20, 0] : 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      z: 100,
                      rotate: randomRotateY(index),
                    }}
                    transition={{
                      duration: 0.6,
                      ease: "easeInOut",
                    }}
                    onMouseEnter={() => setAutoplay(false)}
                    onMouseLeave={() => setAutoplay(true)}
                  >
                    <Drawer>
                      <motion.article
                        className={cn(
                          "group cursor-pointer w-full h-full relative",
                          "transform-gpu transition-all duration-300"
                        )}
                        variants={animationVariants.card}
                        whileHover={{
                          scale: 1.05,
                          y: -8,
                          transition: { type: "spring", stiffness: 400, damping: 25 }
                        }}
                        whileTap={{ scale: 0.97 }}
                        onHoverStart={() => handleCardHover(course.id)}
                        onHoverEnd={() => handleCardHover(null)}
                        onFocus={() => handleCardFocus(course.id)}
                        onBlur={() => handleCardFocus(null)}
                        role="listitem"
                        tabIndex={0}
                        aria-label={`Môn học ${course.title} - ${course.description}`}
                      >
                        <motion.div
                          className={cn(
                            "bg-white/95 backdrop-blur-md rounded-3xl p-8 border h-full relative overflow-hidden",
                            "shadow-xl hover:shadow-2xl transition-all duration-500",
                            "border-white/80 hover:border-white/90",
                            (isHovered || isFocused || isActiveCard) && "ring-2 ring-red-500/30 ring-offset-2 ring-offset-transparent"
                          )}
                          style={{
                            boxShadow: (isHovered || isFocused || isActiveCard)
                              ? "0 32px 64px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(239, 68, 68, 0.1)" 
                              : "0 20px 40px -8px rgba(0, 0, 0, 0.1)"
                          }}
                        >
                          {/* Dynamic background gradient based on course */}
                          <motion.div
                            className={cn(
                              "absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500",
                              index % 6 === 0 && "bg-gradient-to-br from-blue-50/80 to-cyan-50/80",
                              index % 6 === 1 && "bg-gradient-to-br from-green-50/80 to-emerald-50/80",
                              index % 6 === 2 && "bg-gradient-to-br from-purple-50/80 to-violet-50/80",
                              index % 6 === 3 && "bg-gradient-to-br from-red-50/80 to-rose-50/80",
                              index % 6 === 4 && "bg-gradient-to-br from-orange-50/80 to-amber-50/80",
                              index % 6 === 5 && "bg-gradient-to-br from-teal-50/80 to-cyan-50/80"
                            )}
                            animate={{ opacity: (isHovered || isFocused || isActiveCard) ? 1 : 0 }}
                          />

                          {/* Floating decorative elements */}
                          <motion.div
                            className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ 
                              scale: (isHovered || isFocused || isActiveCard) ? 1 : 0, 
                              rotate: (isHovered || isFocused || isActiveCard) ? 0 : -180,
                              opacity: (isHovered || isFocused || isActiveCard) ? 1 : 0
                            }}
                            transition={{ type: "spring", stiffness: 200, damping: 20 }}
                          >
                            <div className="w-8 h-8 bg-gradient-to-br from-red-400/20 to-red-500/20 rounded-full flex items-center justify-center">
                              <Sparkles className="w-4 h-4 text-red-500" />
                            </div>
                          </motion.div>

                          {/* Focus indicator for accessibility */}
                          <AnimatePresence>
                            {isFocused && (
                              <motion.div
                                className="absolute inset-0 border-2 border-red-500 rounded-3xl"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                              />
                            )}
                          </AnimatePresence>

                          <div className="relative z-10">
                            {/* Enhanced Header */}
                            <div className="flex items-start gap-5 mb-8">
                              <motion.div
                                className={cn(
                                  "p-4 rounded-2xl flex-shrink-0 transition-all duration-300",
                                  "bg-gradient-to-br from-slate-100 to-slate-200",
                                  "group-hover:from-red-100 group-hover:to-red-200",
                                  "shadow-lg group-hover:shadow-xl"
                                )}
                                variants={animationVariants.icon}
                                whileHover={{
                                  rotate: [0, -8, 8, 0],
                                  scale: 1.1,
                                  transition: { duration: 0.6, ease: "easeInOut" }
                                }}
                              >
                                <IconComponent className="w-7 h-7 text-slate-700 group-hover:text-red-700 transition-colors" />
                              </motion.div>
                              
                              <div className="flex-1 min-w-0">
                                <motion.div
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.3 + index * 0.1 }}
                                >
                                  <Badge 
                                    variant="secondary" 
                                    className={cn(
                                      "mb-4 text-xs font-medium transition-all duration-300",
                                      "bg-slate-100/80 text-slate-700 border border-slate-200/50",
                                      "group-hover:bg-red-100/80 group-hover:text-red-700 group-hover:border-red-200/50"
                                    )}
                                  >
                                    {course.category}
                                  </Badge>
                                  
                                  <h3 className={cn(
                                    "text-xl font-bold mb-3 leading-tight transition-all duration-300",
                                    "text-slate-800 group-hover:text-slate-900",
                                    "group-hover:bg-gradient-to-r group-hover:from-slate-800 group-hover:to-blue-800",
                                    "group-hover:bg-clip-text group-hover:text-transparent"
                                  )}>
                                    {course.title}
                                  </h3>
                                </motion.div>
                              </div>
                            </div>

                            {/* Enhanced Description */}
                            <motion.p
                              className="text-slate-600 mb-8 leading-relaxed group-hover:text-slate-700 transition-colors duration-300"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.4 + index * 0.1 }}
                            >
                              {course.description}
                            </motion.p>

                            {/* Course Highlights */}
                            <motion.div
                              className="mb-8"
                              variants={animationVariants.highlight}
                              initial="hidden"
                              animate="visible"
                              transition={{ delay: 0.5 + index * 0.1 }}
                            >
                              <div className="flex flex-wrap gap-2">
                                {course.highlights.map((highlight, highlightIndex) => (
                                  <motion.span
                                    key={highlight}
                                    className={cn(
                                      "inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium",
                                      "bg-slate-100/80 text-slate-700 border border-slate-200/50",
                                      "group-hover:bg-blue-50/80 group-hover:text-blue-700 group-hover:border-blue-200/50",
                                      "transition-all duration-300"
                                    )}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.6 + index * 0.1 + highlightIndex * 0.1 }}
                                  >
                                    <Star className="w-3 h-3" />
                                    {highlight}
                                  </motion.span>
                                ))}
                              </div>
                            </motion.div>

                            {/* Enhanced CTA */}
                            <motion.div
                              className="pt-6 border-t border-slate-200/60"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.7 + index * 0.1 }}
                            >
                              <DrawerTrigger className="w-full p-0 bg-transparent hover:bg-transparent group/trigger">
                                <motion.div
                                  className={cn(
                                    "flex items-center justify-between p-2 rounded-2xl transition-all duration-300 cursor-pointer",
                                    "bg-gradient-to-r from-slate-50/80 to-slate-100/80",
                                    "hover:from-blue-50/80 hover:to-indigo-50/80",
                                    "border border-slate-200/50 hover:border-blue-200/50",
                                    "shadow-sm hover:shadow-md"
                                  )}
                                  whileHover={{ y: -2, scale: 1.02 }}
                                  whileTap={{ y: 0, scale: 0.98 }}
                                >
                                  <div className="flex items-center gap-3">
                                    <div className={cn(
                                      "w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300",
                                      "bg-slate-200/80 group-hover/trigger:bg-blue-200/80"
                                    )}>
                                      <Play className="w-4 h-4 text-slate-600 group-hover/trigger:text-blue-600" />
                                    </div>
                                    <span className="text-sm text-slate-700 group-hover/trigger:text-slate-900">
                                      Xem chi tiết khóa học
                                    </span>
                                  </div>
                                  
                                  <motion.div
                                    className="flex items-center gap-1 text-slate-500 group-hover/trigger:text-blue-600"
                                    whileHover={{ x: 4 }}
                                  >
                                    <ChevronRight className="h-5 w-5" />
                                  </motion.div>
                                </motion.div>
                              </DrawerTrigger>
                            </motion.div>
                          </div>
                        </motion.div>
                      </motion.article>

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
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Course Details Panel */}
          <div className="flex flex-col justify-between py-4">
            <motion.div
              key={activeCourse}
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
              <Badge 
                variant="secondary" 
                className="mb-4 text-xs font-medium bg-slate-100/80 text-slate-700 border border-slate-200/50"
              >
                {featuredCourses[activeCourse].category}
              </Badge>
              
              <h3 className="text-3xl font-bold text-slate-800 mb-4">
                {featuredCourses[activeCourse].title}
              </h3>
              
              <motion.p className="text-lg text-slate-600 mb-6 leading-relaxed">
                {featuredCourses[activeCourse].description.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{
                      filter: "blur(10px)",
                      opacity: 0,
                      y: 5,
                    }}
                    animate={{
                      filter: "blur(0px)",
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                      delay: 0.02 * index,
                    }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.p>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-slate-700 mb-3">Điểm nổi bật:</h4>
                <div className="flex flex-wrap gap-2">
                  {featuredCourses[activeCourse].highlights.map((highlight, index) => (
                    <motion.span
                      key={highlight}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-red-50/80 text-red-700 border border-red-200/50"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                    >
                      <Star className="w-3 h-3" />
                      {highlight}
                    </motion.span>
                  ))}
                </div>
              </div>
              
              <div className="text-sm text-slate-500 mb-4">
                <span className="font-medium">Cấp độ:</span> {featuredCourses[activeCourse].level}
              </div>
            </motion.div>
            
            {/* Navigation Controls */}
            <div className="flex gap-4 pt-8">
              <button
                onClick={handlePrev}
                className="group/button flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 transition-colors duration-200"
                aria-label="Khóa học trước"
              >
                <ChevronLeft className="h-6 w-6 text-slate-600 transition-transform duration-300 group-hover/button:scale-110" />
              </button>
              <button
                onClick={handleNext}
                className="group/button flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 transition-colors duration-200"
                aria-label="Khóa học tiếp theo"
              >
                <ChevronRight className="h-6 w-6 text-slate-600 transition-transform duration-300 group-hover/button:scale-110" />
              </button>
            </div>
            
            {/* Course Indicators */}
            <div className="flex gap-2 mt-4">
              {featuredCourses.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCourse(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-200",
                    isActive(index) 
                      ? "bg-red-500 w-8" 
                      : "bg-slate-300 hover:bg-slate-400"
                  )}
                  aria-label={`Chuyển đến khóa học ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}