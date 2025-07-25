"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import CustomizableCarousel from "@/components/ui/customizable-carousel";
import {
  TrendingUp,
  Calculator,
  Scale,
  Database,
  Globe,
  Star,
  Users,
  Award,
  GraduationCap,
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

  // Custom card sections với thiết kế tối giản và dễ nhìn
  const customCardSections = {
    header: (
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
          <GraduationCap className="w-6 h-6 text-blue-600" />
        </div>
        <div className="flex-1">
          <Badge variant="outline" className="mb-2 text-xs font-medium bg-blue-50 text-blue-700 border-blue-200">
            Khóa học nổi bật
          </Badge>
          <h3 className="text-lg font-bold text-slate-800 leading-tight">
            Chương trình đào tạo chuyên sâu
          </h3>
        </div>
      </div>
    ),
    body: (
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <Star className="w-5 h-5 text-slate-500 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-slate-800 mb-1">Kiến thức chuyên môn</h4>
            <p className="text-sm text-slate-600">Nội dung cập nhật theo chuẩn quốc tế</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Award className="w-5 h-5 text-slate-500 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-slate-800 mb-1">Thực hành ứng dụng</h4>
            <p className="text-sm text-slate-600">Kết hợp lý thuyết và thực tiễn</p>
          </div>
        </div>
      </div>
    )
  };

  // Chuyển đổi dữ liệu courses thành format phù hợp với CustomizableCarousel
  const carouselItems = featuredCourses.map(course => ({
    id: course.id,
    title: course.title,
    description: course.description,
    color: course.color.includes('red') ? 'blue' : course.color, // Thay đổi màu đỏ thành xanh dương
    modalContent: course.modalContent
  }));

  return (
   <CustomizableCarousel
      items={carouselItems}
      customCardSections={customCardSections}
      title="Môn học nổi bật"
      autoplayInterval={6000}
      enableAutoplay={false}
      customColors={{
        primary: "red",
        secondary: "slate",
        accent: "red"
      }}
    />
  );
}