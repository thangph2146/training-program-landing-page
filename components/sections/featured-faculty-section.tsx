import React from 'react';
import { Badge } from '@/components/ui/badge';
import { PointerHighlight } from '@/components/ui/pointer-highlight';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { GraduationCap, Award, BookOpen, Users, Star, User } from 'lucide-react';

interface FacultyMember {
  name: string;
  title: string;
  department: string;
  specialization: string[];
  achievements: string[];
  education: string;
  experience: string;
  image?: string;
  src: string;
}

const FeaturedFacultySection: React.FC = () => {
  const facultyMembers: FacultyMember[] = [
    {
      name: "PGS.TS. Nguyễn Đức Trung",
      title: "Hiệu trưởng",
      department: "Ban Giám hiệu",
      specialization: ["Tài chính Ngân hàng", "Quản trị Chiến lược", "Phát triển Đại học"],
      achievements: [
        "Lãnh đạo HUB trong quá trình chuyển đổi số",
        "Phát triển mạng lưới hợp tác quốc tế",
        "Tiên phong trong đổi mới giáo dục đại học"
      ],
      education: "Tiến sĩ Kinh tế, Phó Giáo sư",
      experience: "20+ năm kinh nghiệm trong lĩnh vực giáo dục và nghiên cứu",
      image: "https://data.hub.edu.vn/resource/Common/danguyvien/708d3521-46d2-4270-82da-10ae4b8714d1.JPG",
      src: "https://data.hub.edu.vn/resource/Common/danguyvien/708d3521-46d2-4270-82da-10ae4b8714d1.JPG"
    },
    {
      name: "PGS.TS. Hoàng Thị Thanh Hằng",
      title: "Trưởng phòng Quản lý Đào tạo",
      department: "Phòng Quản lý Đào tạo",
      specialization: ["Quản lý Giáo dục", "Phát triển Chương trình", "Đảm bảo Chất lượng"],
      achievements: [
        "Thiết kế hệ thống chương trình đào tạo đa dạng",
        "Phát triển chương trình quốc tế",
        "Cải tiến phương pháp giảng dạy hiện đại"
      ],
      education: "Tiến sĩ Quản trị Kinh doanh, Phó Giáo sư",
      experience: "15+ năm trong quản lý và phát triển chương trình đào tạo",
      image: "https://data.hub.edu.vn/resource/Common/danguyvien/dc2248f3-55fb-4a0a-b22c-6b130663f76a.jpg",
      src: "https://data.hub.edu.vn/resource/Common/danguyvien/dc2248f3-55fb-4a0a-b22c-6b130663f76a.jpg"
    },
    {
      name: "TS. Nguyễn Anh Vũ",
      title: "Trưởng Khoa Tài chính",
      department: "Khoa Tài chính",
      specialization: ["Tài chính Doanh nghiệp", "Thị trường Tài chính", "Phân tích Đầu tư"],
      achievements: [
        "Chuyên gia hàng đầu về tài chính doanh nghiệp",
        "Tư vấn cho nhiều doanh nghiệp lớn",
        "Nghiên cứu được công bố quốc tế"
      ],
      education: "Tiến sĩ Tài chính",
      experience: "12+ năm nghiên cứu và giảng dạy tài chính",
      image: "/placeholder.svg",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
      {
      name: "TS. Đinh Nguyễn Duy Hải",
      title: "Trưởng Bộ môn Khoa học Dữ liệu",
      department: "Khoa Công nghệ Thông tin",
      specialization: ["Khoa học Dữ liệu", "Trí tuệ Nhân tạo", "Machine Learning"],
      achievements: [
        "Tiên phong trong ứng dụng AI trong tài chính",
        "Phát triển các giải pháp fintech",
        "Hợp tác nghiên cứu với các trường quốc tế"
      ],
      education: "Tiến sĩ Khoa học Máy tính",
      experience: "10+ năm trong lĩnh vực AI và Data Science",
      image: "/placeholder.svg",
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "TS. Nguyễn Kim Nam",
      title: "Trưởng Bộ môn Marketing",
      department: "Khoa Quản trị Kinh doanh",
      specialization: ["Digital Marketing", "Consumer Behavior", "Brand Management"],
      achievements: [
        "Chuyên gia marketing số hàng đầu",
        "Tư vấn chiến lược thương hiệu",
        "Nghiên cứu về hành vi người tiêu dùng"
      ],
      education: "Tiến sĩ Marketing",
      experience: "8+ năm trong nghiên cứu và thực hành marketing",
      image: "/placeholder.svg",
      src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "PGS.TS. Nguyễn Văn Thụy",
      title: "Trưởng phòng Tuyển sinh & Phát triển Thương hiệu",
      department: "Phòng Tuyển sinh",
      specialization: ["Phát triển Thương hiệu", "Truyền thông Giáo dục", "Tư vấn Định hướng"],
      achievements: [
        "Xây dựng thương hiệu HUB",
        "Phát triển mạng lưới tuyển sinh",
        "Tư vấn định hướng nghề nghiệp"
      ],
      education: "Tiến sĩ Truyền thông, Phó Giáo sư",
      experience: "18+ năm trong lĩnh vực giáo dục và truyền thông",
      image: "/placeholder.svg",
      src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-zinc-50 via-gray-100 to-zinc-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div>
            <PointerHighlight>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white p-4">
                Giảng viên Tiêu biểu
              </h2>
            </PointerHighlight>
          </div>
          <div className="max-w-3xl mx-auto">
            <TextGenerateEffect 
              words="Luôn tận tâm với sinh viên và tiên phong trong nghiên cứu khoa học."
              className="text-lg text-gray-600 dark:text-gray-300"
            />
          </div>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facultyMembers.map((faculty, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{faculty.name}</CardTitle>
                    <CardDescription className="text-sm">{faculty.title}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-600">
                      <strong>Khoa/Phòng:</strong> {faculty.department}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">
                      <strong>Chuyên môn:</strong> {faculty.specialization.slice(0, 2).join(', ')}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">
                      <strong>Học vấn:</strong> {faculty.education}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Thành tựu nổi bật:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {faculty.achievements.slice(0, 2).map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Star className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedFacultySection;