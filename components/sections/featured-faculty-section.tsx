"use client";
import React from "react";
import { User, Star, Award, BookOpen, GraduationCap, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import CustomizableCarousel from "@/components/ui/customizable-carousel";

export function FeaturedFacultySection() {
  // Custom card sections với thiết kế tối giản và dễ nhìn
  const customCardSections = {
    header: (
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 group-hover:from-slate-200 group-hover:to-slate-300 transition-all duration-300">
          <User className="w-6 h-6 text-slate-600" />
        </div>
        <div className="flex-1">
          <Badge variant="outline" className="mb-2 text-xs font-medium bg-slate-50 text-slate-700 border-slate-200">
            Đội ngũ giảng viên
          </Badge>
          <h3 className="text-lg font-bold text-slate-800 leading-tight">
            Giảng viên xuất sắc
          </h3>
        </div>
      </div>
    ),
    body: (
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <Star className="w-5 h-5 text-slate-500 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-slate-800 mb-1">Chuyên môn cao</h4>
            <p className="text-sm text-slate-600">Đội ngũ giảng viên có trình độ chuyên môn vững vàng</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Award className="w-5 h-5 text-slate-500 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-slate-800 mb-1">Kinh nghiệm thực tiễn</h4>
            <p className="text-sm text-slate-600">Kết hợp lý thuyết với thực hành chuyên nghiệp</p>
          </div>
        </div>
      </div>
    )
  };

  const facultyCarouselItems = [
    {
      id: "nguyen-duc-trung",
      title: "PGS.TS. Nguyễn Đức Trung",
      description: "Hiệu trưởng HUB với 20+ năm kinh nghiệm trong lĩnh vực giáo dục và nghiên cứu, chuyên gia về Tài chính Ngân hàng và Quản trị Chiến lược.",
      color: "slate",
      modalContent: (
        <div className="relative overflow-hidden">
          {/* Hero Section với thiết kế tối giản */}
          <div className="bg-gradient-to-r from-slate-600 to-slate-700 text-white p-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-white/20 rounded-lg">
                <User className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-1">PGS.TS. Nguyễn Đức Trung</h3>
                <p className="text-slate-100 text-sm">Hiệu trưởng HUB</p>
              </div>
            </div>
            <p className="text-slate-50 leading-relaxed">
              Lãnh đạo HUB trong quá trình chuyển đổi số và phát triển mạng lưới hợp tác quốc tế, 
              tiên phong trong đổi mới giáo dục đại học.
            </p>
          </div>

          {/* Main Content */}
          <div className="p-8 space-y-8">
            {/* Profile Image */}
            <div className="flex justify-center mb-6">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-slate-200">
                <img 
                  src="https://data.hub.edu.vn/resource/Common/danguyvien/708d3521-46d2-4270-82da-10ae4b8714d1.JPG" 
                  alt="PGS.TS. Nguyễn Đức Trung"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Basic Info */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-slate-50 border border-slate-100 rounded-lg">
                <div className="text-lg font-bold text-slate-600 mb-1">Hiệu trưởng</div>
                <div className="text-sm text-gray-600">Ban Giám hiệu</div>
              </div>
              <div className="text-center p-4 bg-slate-50 border border-slate-100 rounded-lg">
                <div className="text-lg font-bold text-slate-600 mb-1">20+ năm</div>
                <div className="text-sm text-gray-600">Kinh nghiệm</div>
              </div>
            </div>

            {/* Education */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-slate-800 flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-slate-600" />
                Trình độ học vấn
              </h4>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <p className="text-slate-700 font-medium">Tiến sĩ Kinh tế, Phó Giáo sư</p>
                <p className="text-slate-600 text-sm mt-2">Chuyên sâu về Tài chính Ngân hàng và Quản trị Chiến lược</p>
              </div>
            </div>

            {/* Specialization */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-slate-800 flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-slate-600" />
                Lĩnh vực chuyên môn
              </h4>
              <div className="grid gap-3">
                <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-slate-50 to-slate-100 rounded-lg border border-slate-200">
                  <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                  <span className="text-slate-800 text-sm font-medium">Tài chính Ngân hàng</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-slate-50 to-slate-100 rounded-lg border border-slate-200">
                  <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                  <span className="text-slate-800 text-sm font-medium">Quản trị Chiến lược</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-slate-50 to-slate-100 rounded-lg border border-slate-200">
                  <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                  <span className="text-slate-800 text-sm font-medium">Phát triển Đại học</span>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-slate-800 flex items-center gap-3">
                <Award className="w-6 h-6 text-slate-500" />
                Thành tựu nổi bật
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                  <div className="w-8 h-8 bg-gradient-to-br from-slate-500 to-slate-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h6 className="font-semibold text-slate-800 mb-1">Chuyển đổi số</h6>
                    <p className="text-sm text-slate-600">Lãnh đạo HUB trong quá trình chuyển đổi số toàn diện</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                  <div className="w-8 h-8 bg-gradient-to-br from-slate-500 to-slate-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h6 className="font-semibold text-slate-800 mb-1">Hợp tác quốc tế</h6>
                    <p className="text-sm text-slate-600">Phát triển mạng lưới đối tác chiến lược toàn cầu</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                  <div className="w-8 h-8 bg-gradient-to-br from-slate-500 to-slate-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h6 className="font-semibold text-slate-800 mb-1">Đổi mới giáo dục</h6>
                    <p className="text-sm text-slate-600">Tiên phong trong phương pháp giảng dạy hiện đại</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-slate-600 to-slate-700 rounded-lg p-6 text-white text-center">
              <h5 className="text-lg font-semibold mb-2">Lãnh đạo tầm nhìn</h5>
              <p className="text-slate-100 text-sm mb-4">Định hướng phát triển bền vững cho HUB</p>
              <div className="flex justify-center gap-3">
                <span className="px-4 py-2 bg-white/20 rounded-lg text-sm font-medium">Strategic Leadership</span>
                <span className="px-4 py-2 bg-white/20 rounded-lg text-sm font-medium">Innovation</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "le-thi-minh-hue",
      title: "TS. Lê Thị Minh Huệ",
      description: "Phó Hiệu trưởng phụ trách Đào tạo với chuyên môn sâu về Quản trị Nhân lực và Tâm lý Tổ chức, 15+ năm kinh nghiệm trong lĩnh vực giáo dục.",
      color: "blue",
      modalContent: (
        <div className="relative overflow-hidden">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-white/20 rounded-lg">
                <User className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-1">TS. Lê Thị Minh Huệ</h3>
                <p className="text-blue-100 text-sm">Phó Hiệu trưởng phụ trách Đào tạo</p>
              </div>
            </div>
            <p className="text-blue-50 leading-relaxed">
              Chuyên gia hàng đầu về Quản trị Nhân lực và Tâm lý Tổ chức, 
              dẫn dắt các chương trình đào tạo hiện đại tại HUB.
            </p>
          </div>

          {/* Main Content */}
          <div className="p-8 space-y-8">
            {/* Profile Image */}
            <div className="flex justify-center mb-6">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-200">
                <img 
                  src="https://data.hub.edu.vn/resource/Common/danguyvien/a8f5c2d1-3e4b-4c7a-9f8e-1b2c3d4e5f6g.JPG" 
                  alt="TS. Lê Thị Minh Huệ"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Basic Info */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-blue-50 border border-blue-100 rounded-lg">
                <div className="text-lg font-bold text-blue-600 mb-1">Phó Hiệu trưởng</div>
                <div className="text-sm text-blue-600">Phụ trách Đào tạo</div>
              </div>
              <div className="text-center p-4 bg-blue-50 border border-blue-100 rounded-lg">
                <div className="text-lg font-bold text-blue-600 mb-1">15+ năm</div>
                <div className="text-sm text-blue-600">Kinh nghiệm</div>
              </div>
            </div>

            {/* Education */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-slate-800 flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-blue-600" />
                Trình độ học vấn
              </h4>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <p className="text-slate-700 font-medium">Tiến sĩ Quản trị Kinh doanh</p>
                <p className="text-slate-600 text-sm mt-2">Chuyên sâu về Quản trị Nhân lực và Tâm lý Tổ chức</p>
              </div>
            </div>

            {/* Specialization */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-slate-800 flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-blue-600" />
                Lĩnh vực chuyên môn
              </h4>
              <div className="grid gap-3">
                <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-slate-800 text-sm font-medium">Quản trị Nhân lực</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-slate-800 text-sm font-medium">Tâm lý Tổ chức</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-slate-800 text-sm font-medium">Phát triển Chương trình Đào tạo</span>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-slate-800 flex items-center gap-3">
                <Award className="w-6 h-6 text-blue-500" />
                Thành tựu nổi bật
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h6 className="font-semibold text-slate-800 mb-1">Chương trình đào tạo</h6>
                    <p className="text-sm text-slate-600">Phát triển 20+ chương trình đào tạo hiện đại</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h6 className="font-semibold text-slate-800 mb-1">Nghiên cứu khoa học</h6>
                    <p className="text-sm text-slate-600">Công bố 50+ bài báo khoa học uy tín</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h6 className="font-semibold text-slate-800 mb-1">Tư vấn doanh nghiệp</h6>
                    <p className="text-sm text-slate-600">Tư vấn định hướng nghề nghiệp cho hàng nghìn sinh viên</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-6 text-white text-center">
              <h5 className="text-lg font-semibold mb-2">Phát triển nhân tài</h5>
              <p className="text-blue-100 text-sm mb-4">Đào tạo thế hệ lãnh đạo tương lai</p>
              <div className="flex justify-center gap-3">
                <span className="px-4 py-2 bg-white/20 rounded-lg text-sm font-medium">Talent Development</span>
                <span className="px-4 py-2 bg-white/20 rounded-lg text-sm font-medium">Leadership</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "tran-van-duc",
      title: "TS. Trần Văn Đức",
      description: "Trưởng khoa Tài chính Ngân hàng với 18+ năm kinh nghiệm, chuyên gia về Tài chính Doanh nghiệp và Đầu tư, từng làm việc tại các ngân hàng lớn.",
      color: "green",
      modalContent: (
        <div className="relative overflow-hidden">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-white/20 rounded-lg">
                <User className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-1">TS. Trần Văn Đức</h3>
                <p className="text-green-100 text-sm">Trưởng khoa Tài chính Ngân hàng</p>
              </div>
            </div>
            <p className="text-green-50 leading-relaxed">
              Chuyên gia hàng đầu về Tài chính Doanh nghiệp và Đầu tư, 
              kết hợp kinh nghiệm thực tiễn từ ngành ngân hàng với giảng dạy.
            </p>
          </div>

          {/* Main Content */}
          <div className="p-8 space-y-8">
            {/* Profile Image */}
            <div className="flex justify-center mb-6">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-green-200">
                <img 
                  src="https://data.hub.edu.vn/resource/Common/danguyvien/b9e6d3f2-4f5c-5d8e-af9f-2c3d4e5f6g7h.JPG" 
                  alt="TS. Trần Văn Đức"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Basic Info */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-green-50 border border-green-100 rounded-lg">
                <div className="text-lg font-bold text-green-600 mb-1">Trưởng khoa</div>
                <div className="text-sm text-green-600">Tài chính Ngân hàng</div>
              </div>
              <div className="text-center p-4 bg-green-50 border border-green-100 rounded-lg">
                <div className="text-lg font-bold text-green-600 mb-1">18+ năm</div>
                <div className="text-sm text-green-600">Kinh nghiệm</div>
              </div>
            </div>

            {/* Education */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-slate-800 flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-green-600" />
                Trình độ học vấn
              </h4>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <p className="text-slate-700 font-medium">Tiến sĩ Tài chính Ngân hàng</p>
                <p className="text-slate-600 text-sm mt-2">Chuyên sâu về Tài chính Doanh nghiệp và Quản lý Đầu tư</p>
              </div>
            </div>

            {/* Specialization */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-slate-800 flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-green-600" />
                Lĩnh vực chuyên môn
              </h4>
              <div className="grid gap-3">
                <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border border-green-200">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-slate-800 text-sm font-medium">Tài chính Doanh nghiệp</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border border-green-200">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-slate-800 text-sm font-medium">Quản lý Đầu tư</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border border-green-200">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-slate-800 text-sm font-medium">Phân tích Tài chính</span>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-slate-800 flex items-center gap-3">
                <Award className="w-6 h-6 text-green-500" />
                Thành tựu nổi bật
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h6 className="font-semibold text-slate-800 mb-1">Kinh nghiệm ngân hàng</h6>
                    <p className="text-sm text-slate-600">10 năm làm việc tại các ngân hàng hàng đầu Việt Nam</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h6 className="font-semibold text-slate-800 mb-1">Dự án tư vấn</h6>
                    <p className="text-sm text-slate-600">Tư vấn tài chính cho 100+ doanh nghiệp SME</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h6 className="font-semibold text-slate-800 mb-1">Chứng chỉ quốc tế</h6>
                    <p className="text-sm text-slate-600">CFA, FRM và các chứng chỉ tài chính uy tín</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-6 text-white text-center">
              <h5 className="text-lg font-semibold mb-2">Chuyên gia tài chính</h5>
              <p className="text-green-100 text-sm mb-4">Kết nối lý thuyết với thực tiễn ngành ngân hàng</p>
              <div className="flex justify-center gap-3">
                <span className="px-4 py-2 bg-white/20 rounded-lg text-sm font-medium">Financial Expert</span>
                <span className="px-4 py-2 bg-white/20 rounded-lg text-sm font-medium">Banking</span>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20">
        <CustomizableCarousel
          id="featured-faculty-section"
          items={facultyCarouselItems}
          title="Đội ngũ Giảng viên Xuất sắc"
          customCardSections={customCardSections}
          autoplayInterval={5000}
        />
    </section>
  );
}