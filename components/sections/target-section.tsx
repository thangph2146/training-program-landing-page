"use client";
import React from "react";
import { Target, TrendingUp, Zap, Star, Award, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import CustomizableCarousel from "@/components/ui/customizable-carousel";

export default function TargetSection() {
  // Custom card sections với header-body-footer structure
  const customCardSections = {
    header: (
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 rounded-xl bg-gradient-to-br from-red-100 to-red-200 group-hover:from-red-200 group-hover:to-red-300 transition-all duration-300">
          <Target className="w-6 h-6 text-red-600" />
        </div>
        <div className="flex-1">
          <Badge variant="outline" className="mb-2 text-xs font-medium bg-red-50 text-red-700 border-red-200">
            Mục tiêu đào tạo
          </Badge>
          <h3 className="text-lg font-bold text-slate-800 leading-tight">
            Định hướng nghề nghiệp
          </h3>
        </div>
      </div>
    ),
    body: (
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <Star className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-slate-800 mb-1">Kiến thức chuyên sâu</h4>
            <p className="text-sm text-slate-600">Nắm vững lý thuyết và thực hành tài chính hiện đại</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Award className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-slate-800 mb-1">Kỹ năng thực tế</h4>
            <p className="text-sm text-slate-600">Ứng dụng công nghệ vào giải quyết bài toán tài chính</p>
          </div>
        </div>
      </div>
    )
  };

  // Sử dụng default info panel sections của carousel để đảm bảo tất cả chức năng hoạt động đúng

  return (
    <CustomizableCarousel 
      items={targetCarouselItems}
      title="Mục tiêu của chương trình đào tạo"
      autoplayInterval={6000}
      enableAutoplay={false}
      showLevelIndicator={true}
      showHighlights={true}
      levelIndicatorTitle="Cấp độ"
      highlightsTitle="Điểm nổi bật"
      customColors={{
        primary: "red",
        secondary: "slate",
        accent: "red"
      }}
      customCardSections={customCardSections}
    />
  );
}

const targetCarouselItems = [
  {
    id: "comprehensive-knowledge",
    title: "Kiến thức toàn diện về Tài chính - Ngân hàng và Công nghệ",
    description: "Chương trình cung cấp hệ thống kiến thức toàn diện về các lĩnh vực tài chính – ngân hàng cốt lõi như tài chính doanh nghiệp, ngân hàng thương mại, thị trường tài chính, quản trị rủi ro, đầu tư và thanh toán quốc tế.",
    icon: Target,
    category: "Kiến thức toàn diện",
    highlights: [
      "Tài chính doanh nghiệp và ngân hàng thương mại",
      "Thị trường tài chính và quản trị rủi ro",
      "Đầu tư và thanh toán quốc tế",
      "Ứng dụng AI, Machine Learning, Big Data",
      "Công nghệ Blockchain trong tài chính"
    ],
    color: "red",
    level: "Nâng cao",
    modalContent: (
      <div className="p-6 space-y-6">
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-slate-800">Mục tiêu học tập</h4>
          <p className="text-slate-600 leading-relaxed">
            Trang bị cho sinh viên nền tảng kiến thức vững chắc về tài chính - ngân hàng, 
            từ các lý thuyết cơ bản đến ứng dụng thực tế trong môi trường kinh doanh số hóa.
          </p>
        </div>
        
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-slate-800">Nội dung chi tiết</h4>
          <div className="grid gap-4">
            <div className="bg-purple-50 p-4 rounded-lg">
              <h5 className="font-medium text-purple-800 mb-2">Lý thuyết tài chính hiện đại</h5>
              <p className="text-sm text-purple-700">Các mô hình định giá tài sản, lý thuyết danh mục đầu tư, và quản lý rủi ro</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h5 className="font-medium text-purple-800 mb-2">Ngân hàng số và thanh toán điện tử</h5>
              <p className="text-sm text-purple-700">Hệ thống thanh toán hiện đại, mobile banking, và các giải pháp fintech</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h5 className="font-medium text-purple-800 mb-2">Quản lý danh mục đầu tư</h5>
              <p className="text-sm text-purple-700">Chiến lược đầu tư, phân tích kỹ thuật và cơ bản, quản lý rủi ro danh mục</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-slate-800">Kết quả đạt được</h4>
          <ul className="space-y-2 text-slate-600">
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>Hiểu sâu về các nguyên lý tài chính cơ bản và ứng dụng thực tế</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>Thành thạo các công cụ phân tích tài chính hiện đại</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>Có khả năng đánh giá và quản lý rủi ro tài chính</span>
            </li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: "fintech-application",
    title: "Ứng dụng Công nghệ Tài chính (FinTech)",
    description: "Sinh viên được trang bị những kiến thức mới nhất về công nghệ tài chính, giúp họ hiểu rõ cách thức ứng dụng trí tuệ nhân tạo, học máy, dữ liệu lớn, chuỗi khối vào các hoạt động tài chính.",
    icon: TrendingUp,
    category: "Công nghệ tài chính",
    highlights: [
      "Trí tuệ nhân tạo (AI) trong tài chính",
      "Học máy (Machine Learning)",
      "Dữ liệu lớn (Big Data)",
      "Chuỗi khối (Blockchain)",
      "Hợp đồng thông minh (Smart Contracts)",
      "Đổi mới mô hình kinh doanh ngân hàng"
    ],
    color: "blue",
    level: "Chuyên sâu",
    modalContent: (
      <div className="p-6 space-y-6">
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-slate-800">Tầm nhìn FinTech</h4>
          <p className="text-slate-600 leading-relaxed">
            Khám phá và ứng dụng các công nghệ tiên tiến nhất trong lĩnh vực tài chính, 
            tạo ra những giải pháp đột phá cho ngành ngân hàng và tài chính.
          </p>
        </div>
        
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-slate-800">Công nghệ cốt lõi</h4>
          <div className="grid gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h5 className="font-medium text-blue-800 mb-2">Artificial Intelligence</h5>
              <p className="text-sm text-blue-700">Chatbot tài chính, robo-advisor, credit scoring tự động</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h5 className="font-medium text-blue-800 mb-2">Big Data Analytics</h5>
              <p className="text-sm text-blue-700">Phân tích hành vi khách hàng, dự đoán xu hướng thị trường</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h5 className="font-medium text-blue-800 mb-2">Blockchain & DeFi</h5>
              <p className="text-sm text-blue-700">Tài chính phi tập trung, stablecoin, yield farming</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-slate-800">Cơ hội nghề nghiệp</h4>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-3 rounded-lg">
              <span className="text-sm font-medium text-blue-800">FinTech Developer</span>
            </div>
            <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-3 rounded-lg">
              <span className="text-sm font-medium text-blue-800">Blockchain Engineer</span>
            </div>
            <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-3 rounded-lg">
              <span className="text-sm font-medium text-blue-800">Data Scientist</span>
            </div>
            <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-3 rounded-lg">
              <span className="text-sm font-medium text-blue-800">Product Manager</span>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "practical-application",
    title: "Thực hành và Ứng dụng thực tế",
    description: "Chương trình CLC tập trung vào thực hành, giúp sinh viên phát triển kỹ năng ứng dụng công nghệ vào tài chính – ngân hàng với các phòng thí nghiệm hiện đại.",
    icon: Zap,
    category: "Thực hành và ứng dụng",
    highlights: [
      "Phòng thí nghiệm chuỗi khối",
      "Phòng học máy và trang thiết bị hiện đại",
      "Rèn luyện tư duy sáng tạo",
      "Phân tích dữ liệu tài chính",
      "Quản lý tài chính cá nhân số hóa"
    ],
    color: "green",
    level: "Thực hành",
    modalContent: (
      <div className="p-6 space-y-6">
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-slate-800">Phương pháp học tập</h4>
          <p className="text-slate-600 leading-relaxed">
            Học tập thông qua thực hành với các phòng thí nghiệm hiện đại, 
            dự án thực tế và hợp tác với doanh nghiệp hàng đầu.
          </p>
        </div>
        
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-slate-800">Cơ sở vật chất</h4>
          <div className="grid gap-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h5 className="font-medium text-green-800 mb-2">Phòng thí nghiệm Blockchain</h5>
              <p className="text-sm text-green-700">Trang bị đầy đủ phần cứng và phần mềm để phát triển ứng dụng blockchain</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h5 className="font-medium text-green-800 mb-2">Phòng Machine Learning</h5>
              <p className="text-sm text-green-700">GPU cluster, cloud computing access, big data processing tools</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h5 className="font-medium text-green-800 mb-2">Trading Simulation Lab</h5>
              <p className="text-sm text-green-700">Mô phỏng giao dịch thực tế với dữ liệu thị trường real-time</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-slate-800">Dự án capstone</h4>
          <ul className="space-y-2 text-slate-600">
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>Phát triển ứng dụng fintech hoàn chỉnh từ ý tưởng đến sản phẩm</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>Hợp tác với ngân hàng và công ty fintech trong các dự án thực tế</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>Tham gia hackathon và cuộc thi khởi nghiệp công nghệ</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
];
