"use client";
import React from "react";
import { Target, TrendingUp, Zap, Star, Award, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import CustomizableCarousel from "@/components/ui/customizable-carousel";

export function TargetSection() {
  // Custom card sections với thiết kế tối giản và dễ nhìn
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
            Tài chính - Ngân hàng & FinTech
          </h3>
        </div>
      </div>
    ),
    body: (
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <Star className="w-5 h-5 text-slate-500 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-slate-800 mb-1">Kiến thức toàn diện</h4>
            <p className="text-sm text-slate-600">Tài chính cốt lõi kết hợp công nghệ hiện đại</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Award className="w-5 h-5 text-slate-500 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-slate-800 mb-1">Thực hành chuyên sâu</h4>
            <p className="text-sm text-slate-600">Ứng dụng AI, Blockchain vào tài chính</p>
          </div>
        </div>
      </div>
    )
  };
  const targetCarouselItems = [
    {
      id: "comprehensive-knowledge",
      title: "Kiến thức nền tảng vững chắc",
      description: "Hệ thống kiến thức cốt lõi về tài chính doanh nghiệp, ngân hàng thương mại, thị trường tài chính và quản trị rủi ro.",
      color: "slate",
      modalContent: (
        <div className="relative overflow-hidden">
          {/* Hero Section với thiết kế tối giản */}
          <div className="bg-gradient-to-r from-slate-600 to-slate-700 text-white p-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-white/20 rounded-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-1">Kiến thức Nền tảng</h3>
                <p className="text-slate-100 text-sm">Vững chắc cho tương lai</p>
              </div>
            </div>
            <p className="text-slate-50 leading-relaxed">
              Chương trình cung cấp hệ thống kiến thức toàn diện về tài chính doanh nghiệp, ngân hàng thương mại, 
              thị trường tài chính và quản trị rủi ro với phương pháp giảng dạy hiện đại.
            </p>
          </div>

          {/* Main Content */}
          <div className="p-8 space-y-8">
            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-slate-50 border border-slate-100 rounded-lg">
                <div className="text-2xl font-bold text-slate-600 mb-1">95%</div>
                <div className="text-sm text-gray-600">Tỷ lệ có việc làm</div>
              </div>
              <div className="text-center p-4 bg-slate-50 border border-slate-100 rounded-lg">
                <div className="text-2xl font-bold text-slate-600 mb-1">50+</div>
                <div className="text-sm text-gray-600">Đối tác doanh nghiệp</div>
              </div>
              <div className="text-center p-4 bg-slate-50 border border-slate-100 rounded-lg">
                <div className="text-2xl font-bold text-slate-600 mb-1">4.8/5</div>
                <div className="text-sm text-gray-600">Đánh giá sinh viên</div>
              </div>
            </div>

            {/* Curriculum Highlights */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-gray-800 flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-slate-600" />
                Nội dung chương trình
              </h4>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-slate-100 rounded-lg">
                      <TrendingUp className="w-5 h-5 text-slate-600" />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold text-gray-800 mb-2">Tài chính - Ngân hàng cốt lõi</h5>
                      <p className="text-gray-600 text-sm leading-relaxed">Tài chính doanh nghiệp, ngân hàng thương mại, thị trường tài chính, quản trị rủi ro, đầu tư và thanh toán quốc tế</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-slate-100 rounded-lg">
                      <Zap className="w-5 h-5 text-slate-600" />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold text-gray-800 mb-2">Công nghệ tài chính (FinTech)</h5>
                      <p className="text-gray-600 text-sm leading-relaxed">AI, Machine Learning, Big Data, Blockchain và Smart Contracts ứng dụng trong hoạt động tài chính</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-slate-100 rounded-lg">
                      <Award className="w-5 h-5 text-slate-600" />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold text-gray-800 mb-2">Đổi mới mô hình kinh doanh</h5>
                      <p className="text-gray-600 text-sm leading-relaxed">Tạo ra các sản phẩm tài chính số hiện đại, chuyển đổi số trong ngân hàng và tài chính</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Specialized Courses */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-slate-800 flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-slate-600" />
                Môn học chuyên sâu
              </h4>
              <div className="grid gap-3">
                <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-slate-50 to-slate-100 rounded-lg border border-slate-200">
                  <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                  <span className="text-slate-800 text-sm font-medium">Nguyên lý và kỹ thuật học máy trong FinTech</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-slate-50 to-slate-100 rounded-lg border border-slate-200">
                  <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                  <span className="text-slate-800 text-sm font-medium">Chuỗi khối và tiền mã hóa</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-slate-50 to-slate-100 rounded-lg border border-slate-200">
                  <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                  <span className="text-slate-800 text-sm font-medium">Trí tuệ nhân tạo trong tài chính ngân hàng</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-slate-50 to-slate-100 rounded-lg border border-slate-200">
                  <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                  <span className="text-slate-800 text-sm font-medium">Trí tuệ nhân tạo trong giao dịch định lượng</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-slate-50 to-slate-100 rounded-lg border border-slate-200">
                  <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                  <span className="text-slate-800 text-sm font-medium">Phân tích dữ liệu lớn trong tài chính ngân hàng</span>
                </div>
              </div>
            </div>

            {/* Learning Outcomes */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-slate-800 flex items-center gap-3">
                <Star className="w-6 h-6 text-slate-500" />
                Kết quả học tập
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                  <div className="w-8 h-8 bg-gradient-to-br from-slate-500 to-slate-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h6 className="font-semibold text-slate-800 mb-1">Kiến thức toàn diện</h6>
                    <p className="text-sm text-slate-600">Nắm vững lý thuyết tài chính cốt lõi và công nghệ FinTech</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                  <div className="w-8 h-8 bg-gradient-to-br from-slate-500 to-slate-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h6 className="font-semibold text-slate-800 mb-1">Kỹ năng thực hành</h6>
                    <p className="text-sm text-slate-600">Ứng dụng AI, Blockchain vào giải quyết bài toán tài chính</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                  <div className="w-8 h-8 bg-gradient-to-br from-slate-500 to-slate-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h6 className="font-semibold text-slate-800 mb-1">Tư duy sáng tạo</h6>
                    <p className="text-sm text-slate-600">Rèn luyện khả năng phân tích dữ liệu và quản lý tài chính số</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                  <div className="w-8 h-8 bg-gradient-to-br from-slate-500 to-slate-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h6 className="font-semibold text-slate-800 mb-1">Bắt nhịp xu hướng</h6>
                    <p className="text-sm text-slate-600">Nhanh chóng thích ứng với đổi mới trong ngành tài chính</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-slate-600 to-slate-700 rounded-lg p-6 text-white text-center">
              <h5 className="text-lg font-semibold mb-2">Sẵn sàng trở thành chuyên gia FinTech?</h5>
              <p className="text-slate-100 text-sm mb-4">Tham gia chương trình CLC Tài chính - Ngân hàng với công nghệ tiên tiến</p>
              <div className="flex justify-center gap-3">
                <span className="px-4 py-2 bg-white/20 rounded-lg text-sm font-medium">Phòng lab hiện đại</span>
                <span className="px-4 py-2 bg-white/20 rounded-lg text-sm font-medium">Thực hành chuyên sâu</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "fintech-application",
      title: "Công nghệ FinTech hiện đại",
      description: "AI, Machine Learning, Blockchain và Big Data ứng dụng trong tài chính với thực hành chuyên sâu.",
      color: "slate",
      modalContent: (
        <div className="relative overflow-hidden">
          {/* Hero Section với thiết kế tối giản */}
          <div className="bg-slate-700 text-white p-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-white/20 rounded-lg">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-1">Công nghệ FinTech</h3>
                <p className="text-slate-100 text-sm">Hiện đại và thực tiễn</p>
              </div>
            </div>
            <p className="text-slate-50 leading-relaxed">
              Chương trình tập trung vào thực hành với AI, Machine Learning, Blockchain và Big Data,
              giúp sinh viên phát triển kỹ năng ứng dụng công nghệ vào tài chính thực tế.
            </p>
          </div>

          {/* Main Content */}
          <div className="p-8 space-y-8">
            {/* Innovation Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-slate-50 border border-slate-100 rounded-lg">
                <div className="text-2xl font-bold text-slate-600 mb-1">85%</div>
                <div className="text-sm text-gray-600">Tự động hóa quy trình</div>
              </div>
              <div className="text-center p-4 bg-slate-50 border border-slate-100 rounded-lg">
                <div className="text-2xl font-bold text-slate-600 mb-1">24/7</div>
                <div className="text-sm text-gray-600">Dịch vụ không gián đoạn</div>
              </div>
              <div className="text-center p-4 bg-slate-50 border border-slate-100 rounded-lg">
                <div className="text-2xl font-bold text-slate-600 mb-1">300%</div>
                <div className="text-sm text-gray-600">Tăng trưởng hiệu quả</div>
              </div>
            </div>

            {/* Core Technologies */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-slate-800 flex items-center gap-3">
                <Zap className="w-6 h-6 text-slate-600" />
                Công nghệ cốt lõi
              </h4>
              <div className="grid gap-4">
                <div className="group bg-gradient-to-r from-slate-50 to-slate-100 p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-slate-200 rounded-xl group-hover:bg-slate-300 transition-colors">
                      <div className="w-6 h-6 bg-slate-600 rounded-md flex items-center justify-center">
                        <span className="text-white text-xs font-bold">AI</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h5 className="font-bold text-slate-800 mb-2">Trí tuệ nhân tạo trong tài chính</h5>
                      <p className="text-slate-700 text-sm leading-relaxed mb-3">Môn học chuyên sâu: Trí tuệ nhân tạo trong tài chính ngân hàng, AI trong giao dịch định lượng</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-slate-200 text-slate-800 text-xs rounded-full">Machine Learning</span>
                        <span className="px-2 py-1 bg-slate-200 text-slate-800 text-xs rounded-full">NLP</span>
                        <span className="px-2 py-1 bg-slate-200 text-slate-800 text-xs rounded-full">Computer Vision</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group bg-gradient-to-r from-slate-50 to-slate-100 p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-slate-200 rounded-xl group-hover:bg-slate-300 transition-colors">
                      <div className="w-6 h-6 bg-slate-600 rounded-md flex items-center justify-center">
                        <span className="text-white text-xs font-bold">BD</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h5 className="font-bold text-slate-800 mb-2">Phân tích dữ liệu lớn</h5>
                      <p className="text-slate-700 text-sm leading-relaxed mb-3">Môn học: Phân tích dữ liệu lớn trong tài chính ngân hàng, rèn luyện khả năng phân tích dữ liệu</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-slate-200 text-slate-800 text-xs rounded-full">Hadoop</span>
                        <span className="px-2 py-1 bg-slate-200 text-slate-800 text-xs rounded-full">Spark</span>
                        <span className="px-2 py-1 bg-slate-200 text-slate-800 text-xs rounded-full">Kafka</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group bg-gradient-to-r from-slate-50 to-slate-100 p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-slate-200 rounded-xl group-hover:bg-slate-300 transition-colors">
                      <div className="w-6 h-6 bg-slate-600 rounded-md flex items-center justify-center">
                        <span className="text-white text-xs font-bold">⛓</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h5 className="font-bold text-slate-800 mb-2">Chuỗi khối và hợp đồng thông minh</h5>
                      <p className="text-slate-700 text-sm leading-relaxed mb-3">Môn học: Chuỗi khối và tiền mã hóa, thực hành tại phòng thí nghiệm chuỗi khối hiện đại</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-slate-200 text-slate-800 text-xs rounded-full">Ethereum</span>
                        <span className="px-2 py-1 bg-slate-200 text-slate-800 text-xs rounded-full">Solidity</span>
                        <span className="px-2 py-1 bg-slate-200 text-slate-800 text-xs rounded-full">Web3</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Career Opportunities */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-slate-800 flex items-center gap-3">
                <Award className="w-6 h-6 text-slate-500" />
                Cơ hội nghề nghiệp
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="group p-4 bg-slate-100 rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-slate-600 rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm font-bold">💻</span>
                    </div>
                    <h6 className="font-bold text-slate-800">FinTech Developer</h6>
                  </div>
                  <p className="text-slate-700 text-xs">Phát triển ứng dụng tài chính hiện đại</p>
                  <div className="mt-2 text-slate-600 text-sm font-semibold">$80K - $150K</div>
                </div>

                <div className="group p-4 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-slate-600 rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm font-bold">⛓</span>
                    </div>
                    <h6 className="font-bold text-slate-800">Blockchain Engineer</h6>
                  </div>
                  <p className="text-slate-700 text-xs">Xây dựng hệ thống blockchain</p>
                  <div className="mt-2 text-slate-600 text-sm font-semibold">$90K - $180K</div>
                </div>

                <div className="group p-4 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-slate-600 rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm font-bold">📊</span>
                    </div>
                    <h6 className="font-bold text-slate-800">Data Scientist</h6>
                  </div>
                  <p className="text-slate-700 text-xs">Phân tích dữ liệu tài chính</p>
                  <div className="mt-2 text-slate-600 text-sm font-semibold">$85K - $160K</div>
                </div>

                <div className="group p-4 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-slate-600 rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm font-bold">🚀</span>
                    </div>
                    <h6 className="font-bold text-slate-800">Product Manager</h6>
                  </div>
                  <p className="text-slate-700 text-xs">Quản lý sản phẩm FinTech</p>
                  <div className="mt-2 text-slate-600 text-sm font-semibold">$95K - $170K</div>
                </div>
              </div>
            </div>

            {/* Future Vision */}
            <div className="bg-slate-700 rounded-xl p-6 text-white text-center">
              <h5 className="text-lg font-bold mb-2">🚀 Tương lai FinTech đang chờ bạn!</h5>
              <p className="text-slate-100 text-sm mb-4">Trở thành người tiên phong trong cuộc cách mạng công nghệ tài chính</p>
              <div className="flex justify-center gap-3">
                <span className="px-4 py-2 bg-white/20 rounded-lg text-sm font-medium backdrop-blur-sm">Startup Incubator</span>
                <span className="px-4 py-2 bg-white/20 rounded-lg text-sm font-medium backdrop-blur-sm">Tech Mentorship</span>
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
      color: "slate",
      modalContent: (
        <div className="relative overflow-hidden">
          {/* Hero Section với Practical Gradient */}
          <div className="bg-gradient-to-br from-slate-600 via-slate-600 to-slate-700 text-white p-8 relative">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute top-4 right-4 opacity-20">
              <div className="flex space-x-1">
                <div className="w-3 h-8 bg-white rounded-full animate-pulse"></div>
                <div className="w-3 h-6 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-3 h-10 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                <div className="w-3 h-4 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
              </div>
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">Thực hành & Ứng dụng</h3>
                  <p className="text-slate-100 text-sm">Học qua làm - Làm để học</p>
                </div>
              </div>
              <p className="text-slate-50 leading-relaxed">
                Học tập thông qua thực hành với các phòng thí nghiệm hiện đại,
                dự án thực tế và hợp tác với doanh nghiệp hàng đầu.
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-8 space-y-8">
            {/* Practical Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-4 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl">
                <div className="text-2xl font-bold text-slate-600 mb-1">100+</div>
                <div className="text-sm text-slate-700">Dự án thực tế</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl">
                <div className="text-2xl font-bold text-slate-600 mb-1">15</div>
                <div className="text-sm text-slate-700">Phòng thí nghiệm</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl">
                <div className="text-2xl font-bold text-slate-600 mb-1">98%</div>
                <div className="text-sm text-slate-700">Hài lòng thực hành</div>
              </div>
            </div>

            {/* Lab Facilities */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-slate-800 flex items-center gap-3">
                <div className="p-2 bg-slate-100 rounded-lg">
                  <span className="text-slate-600 text-lg">🔬</span>
                </div>
                Cơ sở vật chất hiện đại
              </h4>
              <div className="grid gap-4">
                <div className="group bg-gradient-to-r from-slate-50 to-slate-100 p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-slate-200 rounded-xl group-hover:bg-slate-300 transition-colors">
                      <div className="w-6 h-6 bg-slate-600 rounded-md flex items-center justify-center">
                        <span className="text-white text-xs font-bold">⛓</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h5 className="font-bold text-slate-800 mb-2">Phòng thí nghiệm Blockchain</h5>
                      <p className="text-slate-700 text-sm leading-relaxed mb-3">Trang bị đầy đủ phần cứng và phần mềm để phát triển ứng dụng blockchain, smart contracts và DeFi</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-slate-200 text-slate-800 text-xs rounded-full">Ethereum Node</span>
                        <span className="px-2 py-1 bg-slate-200 text-slate-800 text-xs rounded-full">Solidity IDE</span>
                        <span className="px-2 py-1 bg-slate-200 text-slate-800 text-xs rounded-full">Web3 Tools</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group bg-gradient-to-r from-slate-50 to-slate-100 p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-slate-200 rounded-xl group-hover:bg-slate-300 transition-colors">
                      <div className="w-6 h-6 bg-slate-600 rounded-md flex items-center justify-center">
                        <span className="text-white text-xs font-bold">🤖</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h5 className="font-bold text-slate-800 mb-2">Phòng Machine Learning</h5>
                      <p className="text-slate-700 text-sm leading-relaxed mb-3">GPU cluster hiệu năng cao, cloud computing access và big data processing tools chuyên nghiệp</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-slate-200 text-slate-800 text-xs rounded-full">NVIDIA RTX</span>
                        <span className="px-2 py-1 bg-slate-200 text-slate-800 text-xs rounded-full">TensorFlow</span>
                        <span className="px-2 py-1 bg-slate-200 text-slate-800 text-xs rounded-full">PyTorch</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group bg-gradient-to-r from-slate-50 to-slate-100 p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-slate-200 rounded-xl group-hover:bg-slate-300 transition-colors">
                      <div className="w-6 h-6 bg-slate-600 rounded-md flex items-center justify-center">
                        <span className="text-white text-xs font-bold">📈</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h5 className="font-bold text-slate-800 mb-2">Trading Simulation Lab</h5>
                      <p className="text-slate-700 text-sm leading-relaxed mb-3">Mô phỏng giao dịch thực tế với dữ liệu thị trường real-time và các công cụ phân tích chuyên nghiệp</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-slate-200 text-slate-800 text-xs rounded-full">Bloomberg Terminal</span>
                        <span className="px-2 py-1 bg-slate-200 text-slate-800 text-xs rounded-full">MetaTrader</span>
                        <span className="px-2 py-1 bg-slate-200 text-slate-800 text-xs rounded-full">TradingView</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Capstone Projects */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-slate-800 flex items-center gap-3">
                <div className="p-2 bg-slate-100 rounded-lg">
                  <span className="text-slate-600 text-lg">🚀</span>
                </div>
                Dự án Capstone
              </h4>
              <div className="grid gap-4">
                <div className="group p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-slate-500 to-slate-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-lg font-bold">1</span>
                    </div>
                    <div className="flex-1">
                      <h6 className="font-bold text-slate-800 mb-2">Phát triển ứng dụng FinTech hoàn chỉnh</h6>
                      <p className="text-slate-600 text-sm leading-relaxed mb-3">Từ ý tưởng đến sản phẩm cuối cùng, sinh viên sẽ trải qua toàn bộ quy trình phát triển một ứng dụng tài chính thực tế</p>
                      <div className="flex items-center gap-2 text-xs text-slate-600">
                        <span className="w-2 h-2 bg-slate-500 rounded-full"></span>
                        <span>6 tháng thực hiện</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-slate-500 to-slate-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-lg font-bold">2</span>
                    </div>
                    <div className="flex-1">
                      <h6 className="font-bold text-slate-800 mb-2">Hợp tác với doanh nghiệp</h6>
                      <p className="text-slate-600 text-sm leading-relaxed mb-3">Làm việc trực tiếp với các ngân hàng và công ty fintech hàng đầu trong các dự án có tác động thực tế</p>
                      <div className="flex items-center gap-2 text-xs text-slate-600">
                        <span className="w-2 h-2 bg-slate-500 rounded-full"></span>
                        <span>50+ đối tác doanh nghiệp</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-slate-500 to-slate-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-lg font-bold">3</span>
                    </div>
                    <div className="flex-1">
                      <h6 className="font-bold text-slate-800 mb-2">Hackathon & Cuộc thi khởi nghiệp</h6>
                      <p className="text-slate-600 text-sm leading-relaxed mb-3">Tham gia các cuộc thi công nghệ quốc tế, hackathon và các chương trình ươm tạo startup</p>
                      <div className="flex items-center gap-2 text-xs text-slate-600">
                        <span className="w-2 h-2 bg-slate-500 rounded-full"></span>
                        <span>Giải thưởng lên đến $50K</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Success Stories */}
            <div className="bg-gradient-to-r from-slate-600 to-slate-700 rounded-xl p-6 text-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 bg-white/20 rounded-lg">
                  <span className="text-2xl">🏆</span>
                </div>
                <div>
                  <h5 className="text-lg font-bold">Thành tựu sinh viên</h5>
                  <p className="text-slate-100 text-sm">Những câu chuyện thành công từ thực hành</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <div className="text-2xl font-bold mb-1">15+</div>
                  <div className="text-slate-100 text-sm">Startup được thành lập</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <div className="text-2xl font-bold mb-1">$2M+</div>
                  <div className="text-slate-100 text-sm">Vốn đầu tư huy động</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];
  // Sử dụng default info panel sections của carousel để đảm bảo tất cả chức năng hoạt động đúng

  return (
    <CustomizableCarousel
      items={targetCarouselItems}
      customCardSections={customCardSections}
      title="Mục tiêu của chương trình đào tạo"
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


