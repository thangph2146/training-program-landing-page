import React from 'react';
import { Badge } from '@/components/ui/badge';
import { PointerHighlight } from '@/components/ui/pointer-highlight';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { CometCard } from '@/components/ui/comet-card';
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
      image: "https://data.hub.edu.vn/resource/Common/danguyvien/708d3521-46d2-4270-82da-10ae4b8714d1.JPG"
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
      image: "https://data.hub.edu.vn/resource/Common/danguyvien/dc2248f3-55fb-4a0a-b22c-6b130663f76a.jpg"
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
      image: "/placeholder.svg"
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
      image: "/placeholder.svg"
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
      image: "/placeholder.svg"
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
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-12 pb-50 bg-gradient-to-br from-zinc-50 via-gray-100 to-zinc-50 relative overflow-hidden">
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
              words="Đội ngũ giảng viên chất lượng cao với kinh nghiệm phong phú, được đào tạo từ các cơ sở giáo dục uy tín trong và ngoài nước, luôn tận tâm với sinh viên và tiên phong trong nghiên cứu khoa học."
              className="text-lg text-gray-600 dark:text-gray-300"
            />
          </div>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {facultyMembers.map((faculty, index) => (
            <CometCard
              key={index}
              className="h-full"
              rotateDepth={15}
              translateDepth={15}
            >
              <div className="group relative rounded-2xl p-6 h-full">
              {/* Avatar & Header */}
              <div className="mb-4">
                <div className="flex items-start gap-4 mb-4">
                  {/* Avatar */}
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-0.5">
                      <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                        {faculty.image ? (
                          <img 
                            src={faculty.image} 
                            alt={faculty.name}
                            className="w-full h-full object-cover rounded-full"
                          />
                        ) : (
                          <User className="w-8 h-8 text-gray-400" />
                        )}
                      </div>
                    </div>
                    <div className="absolute -top-1 -right-1">
                      <Star className="w-5 h-5 text-yellow-500 bg-white dark:bg-gray-800 rounded-full p-0.5" />
                    </div>
                  </div>
                  
                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 mb-2">
                      {faculty.department}
                    </Badge>
                    
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 leading-tight">
                      {faculty.name}
                    </h3>
                    
                    <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm">
                      {faculty.title}
                    </p>
                  </div>
                </div>
              </div>

              {/* Education & Experience */}
              <div className="mb-4 space-y-2">
                <div className="flex items-start gap-2">
                  <GraduationCap className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {faculty.education}
                  </p>
                </div>
                
                <div className="flex items-start gap-2">
                  <Award className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {faculty.experience}
                  </p>
                </div>
              </div>

              {/* Specializations */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="w-4 h-4 text-purple-500" />
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Chuyên môn:
                  </span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {faculty.specialization.map((spec, specIndex) => (
                    <Badge
                      key={specIndex}
                      variant="outline"
                      className="text-xs bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-700"
                    >
                      {spec}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-4 h-4 text-orange-500" />
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Thành tựu nổi bật:
                  </span>
                </div>
                <ul className="space-y-1">
                  {faculty.achievements.slice(0, 2).map((achievement, achIndex) => (
                    <li key={achIndex} className="text-xs text-gray-600 dark:text-gray-400 flex items-start gap-1">
                      <span className="w-1 h-1 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              </div>
            </CometCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedFacultySection;