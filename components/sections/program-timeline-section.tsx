"use client";

import React, { useMemo } from 'react';
import CustomizableCarousel from "@/components/ui/customizable-carousel";
import {
  BookOpen,
  Target,
  Award,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function ProgramTimelineSection() {
  // Dữ liệu carousel với thông tin chi tiết về cấu trúc chương trình đào tạo
  const programCarouselItems = useMemo(() => [
    {
      id: "program-overview",
      title: "1. Thông tin chung về chương trình",
      description: "Tài chính – Ngân hàng; tiếng Anh bán phần (CLC). Chương trình chất lượng cao được thiết kế theo tiêu chuẩn quốc tế, tích hợp kiến thức quốc tế trong lĩnh vực tài chính ngân hàng.",
      color: "slate",
      modalContent: (
        <div className="p-6 space-y-6">
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-slate-800">Tên chương trình</h4>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
              <p className="text-slate-700 font-medium mb-2">Tiếng Việt: Tài chính – Ngân hàng; tiếng Anh bán phần (CLC)</p>
              <p className="text-slate-600">Tiếng Anh: Finance and Banking, partial English program (High-quality)</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-slate-800">Thông tin cơ bản</h4>
            <div className="grid gap-3">
              <div className="bg-slate-50 p-3 rounded-lg flex justify-between border border-slate-200">
                <span className="font-medium text-slate-700">Trình độ đào tạo:</span>
                <span className="text-slate-600">Đại học</span>
              </div>
              <div className="bg-slate-50 p-3 rounded-lg flex justify-between border border-slate-200">
                <span className="font-medium text-slate-700">Ngành đào tạo:</span>
                <span className="text-slate-600">Tài chính – Ngân hàng</span>
              </div>
              <div className="bg-slate-50 p-3 rounded-lg flex justify-between border border-slate-200">
                <span className="font-medium text-slate-700">Mã ngành:</span>
                <span className="text-slate-600">7340201</span>
              </div>
              <div className="bg-slate-50 p-3 rounded-lg flex justify-between border border-slate-200">
                <span className="font-medium text-slate-700">Hình thức đào tạo:</span>
                <span className="text-slate-600">Chính quy tập trung</span>
              </div>
              <div className="bg-slate-50 p-3 rounded-lg flex justify-between border border-slate-200">
                <span className="font-medium text-slate-700">Thời gian đào tạo:</span>
                <span className="text-slate-600">04 năm (08 học kỳ)</span>
              </div>
              <div className="bg-slate-50 p-3 rounded-lg flex justify-between border border-slate-200">
                <span className="font-medium text-slate-700">Cập nhật:</span>
                <span className="text-slate-600">Tháng 6 năm 2024</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-slate-800">Đặc điểm chương trình CLC</h4>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Chương trình chất lượng cao với tiêu chuẩn quốc tế</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Thành phần tiếng Anh bán phần (partial English program)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Tích hợp kiến thức quốc tế trong lĩnh vực tài chính ngân hàng</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Thích ứng với bối cảnh hội nhập quốc tế và kỷ nguyên số</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: "program-objectives",
      title: "2. Mục tiêu chương trình đào tạo (PO)",
      description: "Sinh viên tốt nghiệp nắm vững kiến thức nền tảng hiện đại về kinh tế, kiến thức chuyên sâu về tài chính ngân hàng; có phẩm chất đạo đức tốt; có năng lực nghiên cứu và thực hành nghề nghiệp trong bối cảnh hội nhập quốc tế và kỷ nguyên số.",
      color: "slate",
      modalContent: (
        <div className="p-6 space-y-6">
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-slate-800">Mục tiêu chung (PO)</h4>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
              <p className="text-slate-700 leading-relaxed">
                Sinh viên tốt nghiệp chương trình Tài chính – Ngân hàng; tiếng Anh bán phần (CLC) nắm vững kiến thức nền tảng hiện đại về kinh tế nói chung, kiến thức chuyên sâu về tài chính ngân hàng nói riêng; Có phẩm chất đạo đức tốt; Có năng lực nghiên cứu và thực hành nghề nghiệp thuộc lĩnh vực tài chính ngân hàng trong bối cảnh hội nhập quốc tế và kỷ nguyên số.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-slate-800">Mục tiêu cụ thể (PO1)</h4>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
              <p className="text-slate-700 leading-relaxed">
                Có khả năng vận dụng kiến thức về khoa học tự nhiên, khoa học xã hội, khoa học cơ bản và kiến thức chuyên ngành để giải quyết các vấn đề phức tạp trong lĩnh vực tài chính ngân hàng.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-slate-800">Chuẩn đầu ra (PLO)</h4>
            <div className="grid gap-4">
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <h5 className="font-medium text-slate-700 mb-2">Kiến thức chuyên môn</h5>
                <p className="text-sm text-slate-600">Nắm vững kiến thức nền tảng về kinh tế và chuyên sâu về tài chính ngân hàng</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <h5 className="font-medium text-slate-700 mb-2">Kỹ năng nghề nghiệp</h5>
                <p className="text-sm text-slate-600">Phân tích, đánh giá và giải quyết các vấn đề tài chính phức tạp</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <h5 className="font-medium text-slate-700 mb-2">Phẩm chất cá nhân</h5>
                <p className="text-sm text-slate-600">Đạo đức nghề nghiệp, tư duy phản biện và khả năng thích ứng</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-slate-800">Ma trận phân bổ PLO</h4>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
              <p className="text-sm text-slate-700 mb-2">Chương trình có ma trận phân bổ các kết quả học tập theo từng học phần với các mức độ PLO1 đến PLO11:</p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Các môn cơ bản thường có mức độ 2-3</li>
                <li>• Các môn chuyên ngành có mức độ cao hơn (3)</li>
                <li>• Phân bổ đều các PLO qua các học phần</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "knowledge-blocks",
      title: "3. Cấu trúc chương trình đào tạo",
      description: "Chương trình được tổ chức theo các khối kiến thức khoa học, cân bằng giữa nền tảng và chuyên môn. Bao gồm khối kiến thức cơ bản với các môn học nền tảng về triết học, kinh tế, toán học và pháp luật.",
      color: "slate",
      modalContent: (
        <div className="p-6 space-y-6">
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-slate-800">Khối kiến thức cơ bản</h4>
            <p className="text-slate-600 leading-relaxed mb-4">
              Bao gồm các môn học nền tảng cung cấp kiến thức cơ bản về triết học, kinh tế chính trị, toán học và pháp luật.
            </p>
            <div className="grid gap-3">
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <h6 className="font-medium text-slate-700 text-sm mb-1">Triết học Mác - Lênin</h6>
                <p className="text-xs text-slate-600">Marxist-Leninist philosophy</p>
              </div>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <h6 className="font-medium text-slate-700 text-sm mb-1">Kinh tế chính trị Mác - Lênin</h6>
                <p className="text-xs text-slate-600">Marxist Leninist political economics</p>
              </div>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <h6 className="font-medium text-slate-700 text-sm mb-1">Chủ nghĩa xã hội khoa học</h6>
                <p className="text-xs text-slate-600">Scientific socialism</p>
              </div>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <h6 className="font-medium text-slate-700 text-sm mb-1">Lịch sử Đảng Cộng sản Việt Nam</h6>
                <p className="text-xs text-slate-600">History of Vietnamese Communist Party</p>
              </div>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <h6 className="font-medium text-slate-700 text-sm mb-1">Tư tưởng Hồ Chí Minh</h6>
                <p className="text-xs text-slate-600">Ho Chi Minh Ideology</p>
              </div>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <h6 className="font-medium text-slate-700 text-sm mb-1">Toán cao cấp 1 & 2</h6>
                <p className="text-xs text-slate-600">Advanced Mathematics 1 & 2</p>
              </div>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <h6 className="font-medium text-slate-700 text-sm mb-1">Lý thuyết xác suất và thống kê toán</h6>
                <p className="text-xs text-slate-600">Theory of Probability and Statistics</p>
              </div>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <h6 className="font-medium text-slate-700 text-sm mb-1">Pháp luật đại cương</h6>
                <p className="text-xs text-slate-600">General Law</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-slate-800">Ma trận phân bổ PLO</h4>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
              <p className="text-sm text-slate-700 mb-3">Chương trình có ma trận phân bổ các kết quả học tập theo từng học phần với các mức độ PLO1 đến PLO11:</p>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white p-3 rounded border border-slate-200">
                  <h6 className="font-medium text-slate-700 text-sm mb-1">Môn cơ bản</h6>
                  <p className="text-xs text-slate-600">Mức độ PLO: 2-3</p>
                </div>
                <div className="bg-white p-3 rounded border border-slate-200">
                  <h6 className="font-medium text-slate-700 text-sm mb-1">Môn chuyên ngành</h6>
                  <p className="text-xs text-slate-600">Mức độ PLO: 3 (cao hơn)</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 mt-2">Phân bổ đều các PLO qua các học phần</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "quality-standards",
      title: "Đặc điểm của chương trình",
      description: "Chương trình CLC theo tiêu chuẩn chất lượng cao, có thành phần tiếng Anh bán phần và định hướng thực tiễn mạnh mẽ.",
      color: "slate",
      modalContent: (
        <div className="p-6 space-y-6">
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-slate-800">Chương trình chất lượng cao (CLC)</h4>
            <div className="grid gap-4">
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <h5 className="font-medium text-slate-700 mb-2">Được thiết kế theo tiêu chuẩn chất lượng cao</h5>
                <p className="text-sm text-slate-600">Áp dụng chuẩn mực quốc tế trong thiết kế chương trình đào tạo</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <h5 className="font-medium text-slate-700 mb-2">Có thành phần tiếng Anh bán phần</h5>
                <p className="text-sm text-slate-600">Partial English program - tích hợp tiếng Anh trong giảng dạy</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <h5 className="font-medium text-slate-700 mb-2">Tích hợp kiến thức quốc tế</h5>
                <p className="text-sm text-slate-600">Kiến thức quốc tế trong lĩnh vực tài chính ngân hàng</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-slate-800">Định hướng thực tiễn</h4>
            <div className="grid gap-4">
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <h5 className="font-medium text-slate-700 mb-2">Kết hợp lý thuyết và thực hành</h5>
                <p className="text-sm text-slate-600">Cân bằng giữa kiến thức lý thuyết vững chắc và kỹ năng thực hành chuyên nghiệp</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <h5 className="font-medium text-slate-700 mb-2">Phát triển năng lực nghiên cứu và thực hành nghề nghiệp</h5>
                <p className="text-sm text-slate-600">Trang bị kỹ năng nghiên cứu và ứng dụng thực tế trong lĩnh vực tài chính</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <h5 className="font-medium text-slate-700 mb-2">Thích ứng với bối cảnh hội nhập quốc tế và kỷ nguyên số</h5>
                <p className="text-sm text-slate-600">Chuẩn bị sinh viên cho môi trường làm việc toàn cầu và công nghệ hiện đại</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ], []);
  const customCardSections = {
    header: (
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 rounded-xl bg-gradient-to-br from-red-100 to-red-200 group-hover:from-red-200 group-hover:to-red-300 transition-all duration-300">
          <BookOpen className="w-6 h-6 text-red-600" />
        </div>
        <div className="flex-1">
          <Badge variant="outline" className="mb-2 text-xs font-medium bg-red-50 text-red-700 border-red-200">
            Chương trình TABP CLC
          </Badge>
          <h3 className="text-lg font-bold text-slate-800 leading-tight">
            Tài chính - Ngân hàng
          </h3>
        </div>
      </div>
    ),
    body: (
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <Target className="w-5 h-5 text-slate-500 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-slate-800 mb-1">Chất lượng cao</h4>
            <p className="text-sm text-slate-600">Tiêu chuẩn quốc tế, tiếng Anh bán phần</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Award className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-slate-800 mb-1">Thực tiễn mạnh</h4>
            <p className="text-sm text-slate-600">Kết hợp lý thuyết và ứng dụng thực tế</p>
          </div>
        </div>
      </div>
    )
  };
  return (
    <CustomizableCarousel
      items={programCarouselItems}
      customCardSections={customCardSections}
      title="Cấu trúc Chương trình Đào tạo"
      autoplayInterval={7000}
      enableAutoplay={false}
      customColors={{
        primary: "red",
        secondary: "slate",
        accent: "red"
      }}
      flipped={true}
    />
  );
}