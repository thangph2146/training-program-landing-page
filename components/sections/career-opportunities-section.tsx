"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/shadcn-tabs";
import { Progress } from "@/components/ui/progress";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { 
  TrendingUp, 
  Building2, 
  Globe, 
  Calculator, 
  Shield, 
  BarChart3,
  Target,
  Zap,
  Star,
  CheckCircle
} from "lucide-react";

interface CareerPath {
  title: string;
  description: string;
  icon: React.ReactNode;
  salary: string;
  growth: number;
  skills: string[];
  companies: string[];
}

interface IndustryData {
  sector: string;
  demand: number;
  avgSalary: string;
  positions: number;
  icon: React.ReactNode;
}

const careerPaths: CareerPath[] = [
  {
    title: "Chuyên viên Ngân hàng",
    description: "Làm việc trực tiếp với khách hàng, xử lý giao dịch và tư vấn dịch vụ ngân hàng",
    icon: <Building2 className="h-6 w-6" />,
    salary: "15-35 triệu VNĐ",
    growth: 85,
    skills: ["Giao tiếp", "Tư vấn", "Kế toán ngân hàng", "Quản lý rủi ro"],
    companies: ["Vietcombank", "BIDV", "VietinBank", "Techcombank"]
  },
  {
    title: "Chuyên gia Phân tích Tài chính",
    description: "Phân tích dữ liệu tài chính, đánh giá đầu tư và tư vấn chiến lược tài chính",
    icon: <BarChart3 className="h-6 w-6" />,
    salary: "20-50 triệu VNĐ",
    growth: 92,
    skills: ["Phân tích dữ liệu", "Mô hình tài chính", "Excel/Python", "Báo cáo tài chính"],
    companies: ["SSI", "VPS", "HSC", "KPMG"]
  },
  {
    title: "Chuyên viên Fintech",
    description: "Phát triển và quản lý các sản phẩm công nghệ tài chính hiện đại",
    icon: <Zap className="h-6 w-6" />,
    salary: "25-60 triệu VNĐ",
    growth: 95,
    skills: ["Công nghệ tài chính", "Digital Banking", "Blockchain", "AI/ML"],
    companies: ["MoMo", "VNPay", "Timo", "Techcombank"]
  },
  {
    title: "Quản lý Rủi ro",
    description: "Đánh giá và quản lý các rủi ro tài chính trong hoạt động ngân hàng",
    icon: <Shield className="h-6 w-6" />,
    salary: "18-45 triệu VNĐ",
    growth: 88,
    skills: ["Quản lý rủi ro", "Basel III", "Stress Testing", "Compliance"],
    companies: ["ACB", "MB Bank", "VPBank", "Sacombank"]
  },
  {
    title: "Tư vấn Đầu tư",
    description: "Tư vấn và quản lý danh mục đầu tư cho khách hàng cá nhân và tổ chức",
    icon: <TrendingUp className="h-6 w-6" />,
    salary: "22-55 triệu VNĐ",
    growth: 90,
    skills: ["Phân tích thị trường", "Quản lý danh mục", "Tư vấn khách hàng", "CFA"],
    companies: ["Dragon Capital", "VinaCapital", "Mirae Asset", "KB Securities"]
  },
  {
    title: "Giám đốc Tài chính (CFO)",
    description: "Quản lý toàn bộ hoạt động tài chính và chiến lược tài chính của doanh nghiệp",
    icon: <Target className="h-6 w-6" />,
    salary: "50-200 triệu VNĐ",
    growth: 78,
    skills: ["Chiến lược tài chính", "Lãnh đạo", "M&A", "Corporate Finance"],
    companies: ["Vingroup", "FPT", "Vietjet", "Masan Group"]
  }
];

const industryData: IndustryData[] = [
  {
    sector: "Ngân hàng Thương mại",
    demand: 95,
    avgSalary: "25-45 triệu",
    positions: 15000,
    icon: <Building2 className="h-5 w-5" />
  },
  {
    sector: "Chứng khoán & Đầu tư",
    demand: 88,
    avgSalary: "30-60 triệu",
    positions: 8000,
    icon: <TrendingUp className="h-5 w-5" />
  },
  {
    sector: "Fintech & Công nghệ",
    demand: 92,
    avgSalary: "35-70 triệu",
    positions: 5000,
    icon: <Zap className="h-5 w-5" />
  },
  {
    sector: "Tài chính Doanh nghiệp",
    demand: 85,
    avgSalary: "20-50 triệu",
    positions: 12000,
    icon: <Calculator className="h-5 w-5" />
  }
];

const CareerOpportunitiesSection = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-br from-emerald-400/10 to-cyan-600/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <PointerHighlight>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              Triển vọng Nghề nghiệp Rộng mở
            </h2>
          </PointerHighlight>
          <div className="max-w-3xl mx-auto">
            <TextGenerateEffect 
              words="Cơ hội việc làm đa dạng với mức lương hấp dẫn trong bối cảnh chuyển đổi số và hội nhập quốc tế."
              className="text-lg text-slate-600"
            />
          </div>
        </div>

        {/* Market Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {industryData.map((industry, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-white/50 shadow-xl transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl group-hover:from-blue-200 group-hover:to-indigo-200 transition-colors">
                    {industry.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-800">{industry.sector}</h3>
                    <p className="text-sm text-slate-500">{industry.positions.toLocaleString()} vị trí</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-600">Nhu cầu tuyển dụng</span>
                      <span className="font-semibold">{industry.demand}%</span>
                    </div>
                    <Progress value={industry.demand} className="h-2" />
                  </div>
                  <div className="pt-3 border-t border-slate-200">
                    <p className="text-sm text-slate-600">Mức lương trung bình</p>
                    <p className="font-bold text-emerald-600">{industry.avgSalary}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Career Paths */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-16">
          <TabsList className="grid w-full h-fit grid-cols-1 sm:grid-cols-2 mb-8 bg-white/60 sm:bg-white/70 lg:bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-1.5 sm:p-2">
            <TabsTrigger value="overview" className="rounded-xl">Tổng quan</TabsTrigger>
            <TabsTrigger value="skills" className="rounded-xl">Kỹ năng Cần thiết</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl">
                    <Star className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">Ưu điểm Cạnh tranh</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-800">Thích ứng Công nghệ cao</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">95% ngân hàng đang chuyển đổi số, tạo cơ hội cho nhân tài công nghệ tài chính</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-800">Cơ hội Thăng tiến Rõ ràng</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">Lộ trình phát triển từ chuyên viên đến quản lý cấp cao trong 5-7 năm</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-800">Mạng lưới Quan hệ Rộng</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">Kết nối với doanh nghiệp, nhà đầu tư và các tổ chức tài chính hàng đầu</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl">
                    <Globe className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">Xu hướng Thị trường</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-700">Fintech & Công nghệ tài chính</span>
                      <span className="font-semibold text-emerald-600">+25%/năm</span>
                    </div>
                    <Progress value={95} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-700">Quản lý rủi ro & Tuân thủ</span>
                      <span className="font-semibold text-emerald-600">+18%/năm</span>
                    </div>
                    <Progress value={88} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-700">Tư vấn đầu tư cá nhân</span>
                      <span className="font-semibold text-emerald-600">+22%/năm</span>
                    </div>
                    <Progress value={90} className="h-2" />
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="skills" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-xl">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Kỹ năng Chuyên môn</h3>
                  <p className="text-sm text-slate-600">Kiến thức cốt lõi trong lĩnh vực tài chính ngân hàng</p>
                </div>
                <div className="space-y-4">
                  {[
                    { skill: "Phân tích tài chính", level: 95 },
                    { skill: "Quản lý rủi ro", level: 90 },
                    { skill: "Nghiệp vụ ngân hàng", level: 88 },
                    { skill: "Đầu tư chứng khoán", level: 85 },
                    { skill: "Tài chính doanh nghiệp", level: 82 }
                  ].map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-semibold text-slate-800">{item.skill}</span>
                        <span className="text-slate-600">{item.level}%</span>
                      </div>
                      <Progress value={item.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-xl">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Kỹ năng Mềm</h3>
                  <p className="text-sm text-slate-600">Năng lực cần thiết để thành công trong môi trường làm việc</p>
                </div>
                <div className="space-y-4">
                  {[
                    { skill: "Giao tiếp & Thuyết phục", level: 92 },
                    { skill: "Tư duy phân tích", level: 95 },
                    { skill: "Làm việc nhóm", level: 88 },
                    { skill: "Quản lý thời gian", level: 85 },
                    { skill: "Thích ứng công nghệ", level: 90 }
                  ].map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-semibold text-slate-800">{item.skill}</span>
                        <span className="text-slate-600">{item.level}%</span>
                      </div>
                      <Progress value={item.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default CareerOpportunitiesSection;