import React from 'react';
import { PointerHighlight } from '@/components/ui/pointer-highlight';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import {
  Briefcase,
  Building2,
  Award,
  TrendingUp,
  CheckCircle,
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
  src: string;
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
      level: "Trung cấp",
      src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
      level: "Cơ bản",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
      level: "Nâng cao",
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
      level: "Trung cấp",
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
      level: "Trung cấp",
      src: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
      level: "Chuyên nghiệp",
      src: "https://images.unsplash.com/photo-1554224154-26032fced8bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-12 md:py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-50 via-slate-100 to-zinc-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className='w-full flex justify-end'> 
            <PointerHighlight>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white p-4">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 md:mb-16">
          {internshipPrograms.map((program, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  {program.icon}
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                    {program.badge}
                  </span>
                </div>
                <CardTitle className="text-xl">{program.title}</CardTitle>
                <CardDescription className="text-sm text-gray-500">
                  {program.duration} • {program.type}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Yêu cầu:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {program.requirements.slice(0, 2).map((req, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Lợi ích:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {program.benefits.slice(0, 2).map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Award className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                          {benefit}
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

export default InternshipSection;