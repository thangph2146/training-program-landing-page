"use client";

import React, { useMemo } from 'react';
import CustomizableCarousel from "@/components/ui/customizable-carousel";
import {
  GraduationCap,
  BookOpen,
  Target,
  Award
} from "lucide-react";

export function ProgramTimelineSection() {
  // Dữ liệu carousel với thông tin chi tiết về cấu trúc chương trình đào tạo
  const programCarouselItems = useMemo(() => [
    {
      id: "program-overview",
      title: "Chương trình Đào tạo",
      description: "Chương trình đào tạo chất lượng cao với thành phần tiếng Anh bán phần, được thiết kế theo tiêu chuẩn quốc tế. Mã ngành: 7340201, Trình độ: Đại học, Thời gian: 04 năm (08 học kỳ).",
      icon: GraduationCap,
      category: "Tài chính - Ngân hàng TABP CLC",
      highlights: [
        "Mã ngành: 7340201",
        "Trình độ: Đại học",
        "Thời gian: 04 năm (08 học kỳ)",
        "Hình thức: Chính quy tập trung",
        "Tiếng Anh bán phần",
        "Tiêu chuẩn quốc tế"
      ],
      color: "red",
      level: "Đại học",
      modalContent: (
        <div className="p-6 space-y-6">
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-slate-800">Thông tin chương trình</h4>
            <p className="text-slate-600 leading-relaxed">
              Chương trình Tài chính - Ngân hàng chất lượng cao với thành phần tiếng Anh bán phần, 
              được thiết kế theo tiêu chuẩn quốc tế để đào tạo nhân lực chất lượng cao.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-slate-800">Chi tiết chương trình</h4>
            <div className="grid gap-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <h5 className="font-medium text-red-800 mb-2">Thông tin cơ bản</h5>
                <p className="text-sm text-red-700">Mã ngành: 7340201 | Trình độ: Đại học | Thời gian: 04 năm (08 học kỳ)</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <h5 className="font-medium text-red-800 mb-2">Hình thức đào tạo</h5>
                <p className="text-sm text-red-700">Chính quy tập trung với thành phần tiếng Anh bán phần</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <h5 className="font-medium text-red-800 mb-2">Tiêu chuẩn chất lượng</h5>
                <p className="text-sm text-red-700">Được thiết kế theo tiêu chuẩn quốc tế, đảm bảo chất lượng cao</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-slate-800">Ưu điểm nổi bật</h4>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Chương trình chất lượng cao (CLC) với tiêu chuẩn quốc tế</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Tích hợp tiếng Anh bán phần trong giảng dạy</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Cấu trúc chương trình linh hoạt và hiện đại</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: "program-objectives",
      title: "Program Objectives (PO)",
      description: "Phát triển sinh viên thành chuyên gia tài chính ngân hàng có năng lực quốc tế và thích ứng kỹ nguyên số. Nắm vững kiến thức nền tảng hiện đại về kinh tế, kiến thức chuyên sâu về tài chính ngân hàng.",
      icon: Target,
      category: "Định hướng phát triển toàn diện",
      highlights: [
        "Năng lực quốc tế",
        "Thích ứng kỹ nguyên số",
        "Kiến thức nền tảng hiện đại",
        "Chuyên sâu tài chính ngân hàng",
        "Phẩm chất đạo đức tốt",
        "Tư duy phản biện"
      ],
      color: "blue",
      level: "Chuyên nghiệp",
      modalContent: (
        <div className="p-6 space-y-6">
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-slate-800">Mục tiêu chương trình</h4>
            <p className="text-slate-600 leading-relaxed">
              Phát triển sinh viên thành chuyên gia tài chính ngân hàng có năng lực quốc tế, 
              thích ứng với kỷ nguyên số và có khả năng làm việc trong môi trường đa văn hóa.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-slate-800">Chuẩn đầu ra (PLO)</h4>
            <div className="grid gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-medium text-blue-800 mb-2">Kiến thức chuyên môn</h5>
                <p className="text-sm text-blue-700">Nắm vững kiến thức nền tảng về kinh tế và chuyên sâu về tài chính ngân hàng</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-medium text-blue-800 mb-2">Kỹ năng nghề nghiệp</h5>
                <p className="text-sm text-blue-700">Phân tích, đánh giá và giải quyết các vấn đề tài chính phức tạp</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-medium text-blue-800 mb-2">Phẩm chất cá nhân</h5>
                <p className="text-sm text-blue-700">Đạo đức nghề nghiệp, tư duy phản biện và khả năng thích ứng</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-slate-800">Năng lực cốt lõi</h4>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Năng lực quốc tế với khả năng giao tiếp tiếng Anh chuyên ngành</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Thích ứng với công nghệ số và FinTech</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Tư duy phản biện và khả năng nghiên cứu khoa học</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: "knowledge-blocks",
      title: "Khối kiến thức",
      description: "Chương trình được tổ chức theo các khối kiến thức khoa học, cân bằng giữa nền tảng và chuyên môn. Bao gồm khối kiến thức cơ bản và khối kiến thức chuyên ngành.",
      icon: BookOpen,
      category: "Nền tảng và chuyên sâu",
      highlights: [
        "Triết học, Kinh tế chính trị",
        "Toán cao cấp, Thống kê",
        "Tài chính doanh nghiệp",
        "Ngân hàng thương mại",
        "FinTech và công nghệ tài chính",
        "Quản trị rủi ro"
      ],
      color: "green",
      level: "Toàn diện",
      modalContent: (
        <div className="p-6 space-y-6">
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-slate-800">Hệ thống kiến thức toàn diện</h4>
            <p className="text-slate-600 leading-relaxed">
              Chương trình được thiết kế theo các khối kiến thức khoa học, 
              đảm bảo sự cân bằng giữa nền tảng lý thuyết và ứng dụng thực tiễn.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-slate-800">Các khối kiến thức chính</h4>
            <div className="grid gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h5 className="font-medium text-green-800 mb-2">Khối kiến thức cơ bản (30%)</h5>
                <p className="text-sm text-green-700">Triết học, Kinh tế chính trị, Toán cao cấp, Thống kê, Ngoại ngữ</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h5 className="font-medium text-green-800 mb-2">Khối kiến thức chuyên ngành (50%)</h5>
                <p className="text-sm text-green-700">Tài chính doanh nghiệp, Ngân hàng thương mại, FinTech, Quản trị rủi ro</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h5 className="font-medium text-green-800 mb-2">Khối kiến thức bổ trợ (20%)</h5>
                <p className="text-sm text-green-700">Kỹ năng mềm, Khởi nghiệp, Nghiên cứu khoa học, Thực tập</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-slate-800">Môn học tiêu biểu</h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gradient-to-r from-green-100 to-green-50 p-3 rounded-lg">
                <span className="text-sm font-medium text-green-800">Tài chính doanh nghiệp</span>
              </div>
              <div className="bg-gradient-to-r from-green-100 to-green-50 p-3 rounded-lg">
                <span className="text-sm font-medium text-green-800">Ngân hàng số</span>
              </div>
              <div className="bg-gradient-to-r from-green-100 to-green-50 p-3 rounded-lg">
                <span className="text-sm font-medium text-green-800">Blockchain & Crypto</span>
              </div>
              <div className="bg-gradient-to-r from-green-100 to-green-50 p-3 rounded-lg">
                <span className="text-sm font-medium text-green-800">AI trong tài chính</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "quality-standards",
      title: "Chất lượng cao & Thực tiễn",
      description: "Chương trình CLC với tiêu chuẩn quốc tế, tích hợp công nghệ và định hướng thực tiễn mạnh mẽ. Thiết kế theo tiêu chuẩn chất lượng cao với thành phần tiếng Anh bán phần.",
      icon: Award,
      category: "Chuẩn quốc tế và ứng dụng",
      highlights: [
        "Tiêu chuẩn quốc tế",
        "Tích hợp công nghệ",
        "Định hướng thực tiễn",
        "Kết hợp lý thuyết và thực hành",
        "Phát triển năng lực nghiên cứu",
        "Chất lượng cao CLC"
      ],
      color: "purple",
      level: "Xuất sắc",
      modalContent: (
        <div className="p-6 space-y-6">
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-slate-800">Tiêu chuẩn chất lượng cao</h4>
            <p className="text-slate-600 leading-relaxed">
              Chương trình CLC được thiết kế theo tiêu chuẩn quốc tế, 
              tích hợp công nghệ hiện đại và định hướng thực tiễn mạnh mẽ.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-slate-800">Đặc điểm nổi bật</h4>
            <div className="grid gap-4">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h5 className="font-medium text-purple-800 mb-2">Chuẩn quốc tế</h5>
                <p className="text-sm text-purple-700">Chương trình được thiết kế theo chuẩn AACSB, tương đương các trường đại học hàng đầu thế giới</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h5 className="font-medium text-purple-800 mb-2">Tích hợp công nghệ</h5>
                <p className="text-sm text-purple-700">Sử dụng các công cụ và nền tảng công nghệ tiên tiến trong giảng dạy và học tập</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h5 className="font-medium text-purple-800 mb-2">Thực tiễn mạnh mẽ</h5>
                <p className="text-sm text-purple-700">70% thời gian dành cho thực hành, dự án thực tế và hợp tác với doanh nghiệp</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-slate-800">Cam kết chất lượng</h4>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Đội ngũ giảng viên có trình độ tiến sĩ và kinh nghiệm thực tiễn</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Cơ sở vật chất hiện đại với phòng thí nghiệm công nghệ cao</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Hợp tác với các tập đoàn tài chính hàng đầu trong và ngoài nước</span>
              </li>
            </ul>
          </div>
        </div>
      )
    }
  ], []);

  return (
        <CustomizableCarousel 
          items={programCarouselItems}
          title="Cấu trúc Chương trình Đào tạo"
          autoplayInterval={7000}
          enableAutoplay={false}
          showLevelIndicator={true}
          showHighlights={true}
          levelIndicatorTitle="Trình độ"
          highlightsTitle="Đặc điểm nổi bật"
          customColors={{
            primary: "red",
            secondary: "slate",
            accent: "red"
          }}
          flipped={true}
        />
  );
}