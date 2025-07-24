import React from 'react';
import { Badge } from '@/components/ui/badge';
import { PointerHighlight } from '@/components/ui/pointer-highlight';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { CometCard } from '@/components/ui/comet-card';
import {
  Briefcase,
  Building2,
  Clock,
  Users,
  Award,
  MapPin,
  TrendingUp,
  CheckCircle,
  Calendar,
  Target
} from 'lucide-react';

interface InternshipProgram {
  title: string;
  duration: string;
  type: string;
  description: string;
  requirements: string[];
  benefits: string[];
  partners: string[];
  icon: React.ReactNode;
  badge: string;
  level: string;
}

const InternshipSection: React.FC = () => {
  const internshipPrograms: InternshipProgram[] = [
    {
      title: "Thực tập Tài chính - Ngân hàng",
      duration: "3-6 tháng",
      type: "Thực tập có lương",
      description: "Trải nghiệm thực tế tại các ngân hàng, công ty tài chính hàng đầu, học hỏi quy trình nghiệp vụ và phát triển kỹ năng chuyên môn.",
      requirements: [
        "Sinh viên năm 3, 4 ngành Tài chính - Ngân hàng",
        "GPA từ 2.5 trở lên",
        "Kỹ năng giao tiếp tốt"
      ],
      benefits: [
        "Lương thực tập 3-5 triệu/tháng",
        "Cơ hội được tuyển dụng chính thức",
        "Chứng chỉ hoàn thành từ doanh nghiệp"
      ],
      partners: ["Vietcombank", "BIDV", "Techcombank", "MB Bank"],
      icon: <Briefcase className="w-6 h-6" />,
      badge: "Phổ biến",
      level: "Trung cấp"
    },
    {
      title: "Kiến tập Quản trị Kinh doanh",
      duration: "2-4 tháng",
      type: "Kiến tập học tập",
      description: "Tham quan, học hỏi mô hình quản trị tại các doanh nghiệp lớn, hiểu rõ quy trình vận hành và chiến lược kinh doanh.",
      requirements: [
        "Sinh viên năm 2, 3 ngành Quản trị",
        "Có tinh thần học hỏi cao",
        "Kỹ năng làm việc nhóm"
      ],
      benefits: [
        "Hiểu rõ môi trường doanh nghiệp",
        "Xây dựng mạng lưới quan hệ",
        "Báo cáo kiến tập được công nhận"
      ],
      partners: ["Vingroup", "FPT", "Saigon Co.op", "Masan Group"],
      icon: <Building2 className="w-6 h-6" />,
      badge: "Mới",
      level: "Cơ bản"
    },
    {
      title: "Thực tập Khoa học Dữ liệu",
      duration: "4-6 tháng",
      type: "Thực tập dự án",
      description: "Tham gia các dự án phân tích dữ liệu thực tế, ứng dụng AI/ML trong giải quyết bài toán kinh doanh của doanh nghiệp.",
      requirements: [
        "Sinh viên năm 3, 4 ngành Data Science",
        "Thành thạo Python, SQL",
        "Hiểu biết về Machine Learning"
      ],
      benefits: [
        "Làm việc với dữ liệu thực tế",
        "Mentor 1-1 từ chuyên gia",
        "Portfolio dự án chuyên nghiệp"
      ],
      partners: ["VNG", "Tiki", "Shopee", "Grab"],
      icon: <TrendingUp className="w-6 h-6" />,
      badge: "Hot",
      level: "Nâng cao"
    },
    {
      title: "Thực tập Marketing Digital",
      duration: "3-5 tháng",
      type: "Thực tập sáng tạo",
      description: "Thực hiện các chiến dịch marketing online, quản lý social media, phân tích hiệu quả quảng cáo cho các thương hiệu.",
      requirements: [
        "Sinh viên ngành Marketing, Truyền thông",
        "Sáng tạo, am hiểu social media",
        "Kỹ năng thiết kế cơ bản"
      ],
      benefits: [
        "Thực hiện chiến dịch thực tế",
        "Học công cụ marketing chuyên nghiệp",
        "Cơ hội phát triển personal brand"
      ],
      partners: ["Unilever", "P&G", "Coca-Cola", "Nestle"],
      icon: <Target className="w-6 h-6" />,
      badge: "Sáng tạo",
      level: "Trung cấp"
    },
    {
      title: "Kiến tập Luật Kinh tế",
      duration: "2-3 tháng",
      type: "Kiến tập chuyên môn",
      description: "Tham quan tòa án, văn phòng luật sư, học hỏi quy trình xử lý các vụ việc pháp lý trong lĩnh vực kinh tế.",
      requirements: [
        "Sinh viên ngành Luật Kinh tế",
        "Hiểu biết pháp luật cơ bản",
        "Kỹ năng nghiên cứu, phân tích"
      ],
      benefits: [
        "Tiếp xúc môi trường pháp lý thực tế",
        "Học hỏi từ luật sư kinh nghiệm",
        "Hiểu rõ quy trình tố tụng"
      ],
      partners: ["Tòa án TP.HCM", "Công ty Luật ANVI", "Công ty Luật Bình Minh"],
      icon: <Award className="w-6 h-6" />,
      badge: "Chuyên môn",
      level: "Trung cấp"
    },
    {
      title: "Thực tập Kế toán - Kiểm toán",
      duration: "3-4 tháng",
      type: "Thực tập nghiệp vụ",
      description: "Thực hành công việc kế toán, kiểm toán tại các công ty kiểm toán độc lập và doanh nghiệp lớn.",
      requirements: [
        "Sinh viên năm 3, 4 ngành Kế toán",
        "Thành thạo Excel, phần mềm kế toán",
        "Tỉ mỉ, chính xác cao"
      ],
      benefits: [
        "Thực hành nghiệp vụ kế toán thực tế",
        "Chuẩn bị cho các kỳ thi chứng chỉ",
        "Cơ hội làm việc tại Big 4"
      ],
      partners: ["PwC", "Deloitte", "EY", "KPMG"],
      icon: <CheckCircle className="w-6 h-6" />,
      badge: "Uy tín",
      level: "Chuyên nghiệp"
    }
  ];

  const stats = [
    {
      number: "500+",
      label: "Doanh nghiệp đối tác",
      icon: <Building2 className="w-5 h-5" />,
      color: "text-blue-600 dark:text-blue-400"
    },
    {
      number: "95%",
      label: "Sinh viên có việc làm",
      icon: <TrendingUp className="w-5 h-5" />,
      color: "text-green-600 dark:text-green-400"
    },
    {
      number: "3-6",
      label: "Tháng thực tập",
      icon: <Clock className="w-5 h-5" />,
      color: "text-purple-600 dark:text-purple-400"
    },
    {
      number: "24/7",
      label: "Hỗ trợ sinh viên",
      icon: <Users className="w-5 h-5" />,
      color: "text-orange-600 dark:text-orange-400"
    }
  ];

  return (
    <section className="py-12 md:py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-50 via-slate-100 to-zinc-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className='w-full flex justify-end'> 
            <PointerHighlight>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white p-4">
                Cơ hội Thực tập Nghề nghiệp
              </h2>
            </PointerHighlight>
          </div>

          <div className="max-w-3xl mx-auto">
            <TextGenerateEffect
              words="Giúp sinh viên tích lũy kinh nghiệm thực tế và phát triển kỹ năng nghề nghiệp."
              className="text-lg text-gray-600 dark:text-gray-300"
            />
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {internshipPrograms.map((program, index) => (
            <CometCard
              key={index}
              className="h-full"
              rotateDepth={12}
              translateDepth={12}
            >
              <div className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-500 h-full">
                {/* Header */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="p-2 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg text-white">
                        {program.icon}
                      </div>
                      <Badge className="bg-gradient-to-r from-green-500 to-blue-600 text-white border-0 text-xs">
                        {program.badge}
                      </Badge>
                    </div>
                    <Badge variant="outline" className="text-xs bg-gray-50 dark:bg-gray-800">
                      {program.level}
                    </Badge>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                    {program.title}
                  </h3>

                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {program.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {program.type}
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {program.description}
                  </p>
                </div>

                {/* Requirements */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Yêu cầu:
                  </h4>
                  <ul className="space-y-1">
                    {program.requirements.slice(0, 2).map((req, reqIndex) => (
                      <li key={reqIndex} className="text-xs text-gray-600 dark:text-gray-400 flex items-start gap-1">
                        <span className="w-1 h-1 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-1">
                    <Award className="w-4 h-4 text-blue-500" />
                    Lợi ích:
                  </h4>
                  <ul className="space-y-1">
                    {program.benefits.slice(0, 2).map((benefit, benIndex) => (
                      <li key={benIndex} className="text-xs text-gray-600 dark:text-gray-400 flex items-start gap-1">
                        <span className="w-1 h-1 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Partners */}
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-1">
                    <Building2 className="w-4 h-4 text-purple-500" />
                    Đối tác:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {program.partners.slice(0, 3).map((partner, partnerIndex) => (
                      <Badge
                        key={partnerIndex}
                        variant="outline"
                        className="bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-700"
                      >
                        {partner}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CometCard>
          ))}
        </div>

      </div>
    </section>
  );
};

export default InternshipSection;