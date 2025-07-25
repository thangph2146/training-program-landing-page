"use client";
import React, { useState, useRef, useEffect, useMemo } from "react";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { motion, useInView, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerClose } from "@/components/ui/drawer";
import { BookOpen, Target, CheckCircle, GraduationCap, Star, Award, Lightbulb, Briefcase, MapPin, TrendingUp, Clock, X, Sparkles, Zap, Badge } from "lucide-react";

export function CareerTimelineSection() {
  const [activePhase, setActivePhase] = useState<number>(0);
  const [isClient, setIsClient] = useState(false);
  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    setIsClient(true);
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        duration: 1
      }
    }
  };

  const timelineVariants = {
    hidden: { scaleY: 0, opacity: 0 },
    visible: {
      scaleY: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: ["easeIn", "easeOut"],
        delay: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 0, y: 50, scale: 0.8 },
    visible: (custom: { position: string; index: number }) => ({
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 120,
        damping: 15,
        delay: custom.index * 0.3 + 0.8
      }
    })
  };

  const dotVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: (index: number) => ({
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 15,
        delay: index * 0.3 + 1.2
      }
    })
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (index: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        delay: index * 0.3 + 1
      }
    })
  };

  const careerTimeline = [
    {
      id: 0,
      phase: "Năm 1-2",
      title: "Xây dựng nền tảng",
      subtitle: "Kiến thức cơ bản và định hướng",
      description: "Học các môn cơ sở, làm quen với lĩnh vực tài chính ngân hàng, tham gia các hoạt động ngoại khóa và câu lạc bộ chuyên ngành.",
      skills: ["Kiến thức nền tảng", "Tư duy phân tích", "Kỹ năng mềm", "Tiếng Anh chuyên ngành"],
      opportunities: ["Học bổng", "Tham gia CLB", "Hoạt động tình nguyện", "Kỹ năng thuyết trình"],
      icon: "🌱",
      color: "from-red-500 to-red-600",
      bgColor: "from-red-50 to-red-100",
      position: "left",
      modalContent: (
        <div className="max-h-[80vh] overflow-y-auto">
          {/* Header */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 rounded-t-2xl mb-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/20 rounded-xl text-2xl">
                🌱
              </div>
              <div>
                <h2 className="text-2xl font-bold">Năm 1-2: Xây dựng nền tảng</h2>
                <p className="text-red-100">Kiến thức cơ bản và định hướng</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            {/* Overview */}
            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
              <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Tổng quan giai đoạn
              </h3>
              <p className="text-red-700 leading-relaxed">
                Giai đoạn đầu tiên trong hành trình học tập, sinh viên sẽ được trang bị những kiến thức nền tảng vững chắc về kinh tế, tài chính và ngân hàng. Đây là thời điểm quan trọng để hình thành tư duy phân tích và định hướng nghề nghiệp rõ ràng.
              </p>
            </div>

            {/* Learning Objectives */}
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-red-600" />
                Mục tiêu học tập
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Nắm vững kiến thức kinh tế cơ bản',
                  'Hiểu rõ hệ thống tài chính ngân hàng',
                  'Phát triển kỹ năng tư duy phân tích',
                  'Rèn luyện kỹ năng giao tiếp',
                  'Xây dựng nền tảng tiếng Anh',
                  'Định hướng chuyên ngành phù hợp'
                ].map((objective, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-white rounded-lg border border-red-100">
                    <CheckCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{objective}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Subjects */}
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-red-600" />
                Môn học chính
              </h3>
              <div className="space-y-4">
                {[
                  {
                    category: 'Kiến thức cơ sở',
                    subjects: ['Kinh tế vi mô', 'Kinh tế vĩ mô', 'Toán kinh tế', 'Thống kê kinh tế']
                  },
                  {
                    category: 'Tài chính cơ bản',
                    subjects: ['Nguyên lý tài chính', 'Kế toán cơ bản', 'Ngân hàng thương mại', 'Thị trường tài chính']
                  },
                  {
                    category: 'Kỹ năng mềm',
                    subjects: ['Tiếng Anh thương mại', 'Kỹ năng thuyết trình', 'Làm việc nhóm', 'Tư duy sáng tạo']
                  }
                ].map((category, idx) => (
                  <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-800 mb-2">{category.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.subjects.map((subject, subjectIdx) => (
                        <span key={subjectIdx} className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Activities & Opportunities */}
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-red-600" />
                Hoạt động và cơ hội
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Tham gia Câu lạc bộ Tài chính',
                  'Cuộc thi Business Plan',
                  'Chương trình tình nguyện',
                  'Workshop kỹ năng mềm',
                  'Học bổng khuyến khích học tập',
                  'Giao lưu với sinh viên quốc tế'
                ].map((activity, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-gradient-to-r from-red-50 to-red-100 rounded-lg border border-red-200">
                    <Award className="w-5 h-5 text-red-600" />
                    <span className="text-slate-700 font-medium">{activity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 1,
      phase: "Năm 3",
      title: "Chuyên sâu và ứng dụng",
      subtitle: "FinTech và công nghệ tài chính",
      description: "Học các môn chuyên sâu về FinTech, AI, Blockchain. Tham gia dự án thực tế với doanh nghiệp và thực tập ngắn hạn.",
      skills: ["AI trong tài chính", "Blockchain", "Phân tích dữ liệu", "Quản trị rủi ro"],
      opportunities: ["Dự án thực tế", "Thực tập ngắn hạn", "Chứng chỉ quốc tế", "Nghiên cứu khoa học"],
      icon: "🚀",
      color: "from-red-500 to-red-600",
      bgColor: "from-red-50 to-red-100",
      position: "right",
      modalContent: (
        <div className="max-h-[80vh] overflow-y-auto">
          {/* Header */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 rounded-t-2xl mb-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/20 rounded-xl text-2xl">
                🚀
              </div>
              <div>
                <h2 className="text-2xl font-bold">Năm 3: Chuyên sâu và ứng dụng</h2>
                <p className="text-red-100">FinTech và công nghệ tài chính</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            {/* Overview */}
            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
              <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Tổng quan giai đoạn
              </h3>
              <p className="text-red-700 leading-relaxed">
                Giai đoạn chuyên sâu với trọng tâm là công nghệ tài chính hiện đại. Sinh viên sẽ tiếp cận với AI, Blockchain, Big Data và các công nghệ tiên tiến khác trong lĩnh vực tài chính. Đây là thời điểm bắt đầu ứng dụng kiến thức vào thực tế thông qua các dự án và thực tập.
              </p>
            </div>

            {/* Learning Objectives */}
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-red-600" />
                Mục tiêu học tập
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Thành thạo công nghệ FinTech',
                  'Ứng dụng AI trong tài chính',
                  'Hiểu rõ công nghệ Blockchain',
                  'Phân tích dữ liệu tài chính',
                  'Quản lý rủi ro hiện đại',
                  'Phát triển sản phẩm FinTech'
                ].map((objective, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-white rounded-lg border border-red-100">
                    <CheckCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{objective}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Subjects */}
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-red-600" />
                Môn học chính
              </h3>
              <div className="space-y-4">
                {[
                  {
                    category: 'Công nghệ FinTech',
                    subjects: ['AI trong tài chính', 'Blockchain và Cryptocurrency', 'Digital Banking', 'Payment Systems']
                  },
                  {
                    category: 'Phân tích dữ liệu',
                    subjects: ['Big Data Analytics', 'Machine Learning', 'Financial Modeling', 'Risk Analytics']
                  },
                  {
                    category: 'Ứng dụng thực tế',
                    subjects: ['FinTech Innovation', 'Startup Ecosystem', 'Digital Transformation', 'Regulatory Technology']
                  }
                ].map((category, idx) => (
                  <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-800 mb-2">{category.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.subjects.map((subject, subjectIdx) => (
                        <span key={subjectIdx} className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects & Opportunities */}
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-red-600" />
                Dự án và cơ hội
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Dự án FinTech với doanh nghiệp',
                  'Thực tập tại Techcombank',
                  'Chứng chỉ AWS/Google Cloud',
                  'Hackathon FinTech',
                  'Nghiên cứu khoa học NCKH',
                  'Startup Incubator Program'
                ].map((opportunity, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-gradient-to-r from-red-50 to-red-100 rounded-lg border border-red-200">
                    <Award className="w-5 h-5 text-red-600" />
                    <span className="text-slate-700 font-medium">{opportunity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      phase: "Năm 4",
      title: "Chuẩn bị nghề nghiệp",
      subtitle: "Thực tập và luận văn",
      description: "Thực tập tốt nghiệp tại các ngân hàng, công ty tài chính hoặc FinTech. Hoàn thành luận văn và chuẩn bị cho sự nghiệp.",
      skills: ["Kinh nghiệm thực tế", "Quản lý dự án", "Kỹ năng lãnh đạo", "Mạng lưới nghề nghiệp"],
      opportunities: ["Thực tập có lương", "Cơ hội việc làm", "Luận văn xuất sắc", "Khởi nghiệp"],
      icon: "🎯",
      color: "from-red-500 to-red-600",
      bgColor: "from-red-50 to-red-100",
      position: "left",
      modalContent: (
        <div className="max-h-[80vh] overflow-y-auto">
          {/* Header */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 rounded-t-2xl mb-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/20 rounded-xl text-2xl">
                🎯
              </div>
              <div>
                <h2 className="text-2xl font-bold">Năm 4: Chuẩn bị nghề nghiệp</h2>
                <p className="text-red-100">Thực tập và luận văn</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            {/* Overview */}
            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
              <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Tổng quan giai đoạn
              </h3>
              <p className="text-red-700 leading-relaxed">
                Giai đoạn cuối của chương trình đào tạo, tập trung vào việc ứng dụng toàn bộ kiến thức đã học vào thực tế nghề nghiệp. Sinh viên sẽ thực tập tại các tổ chức tài chính hàng đầu, hoàn thành luận văn tốt nghiệp và chuẩn bị sẵn sàng cho thị trường lao động.
              </p>
            </div>

            {/* Learning Objectives */}
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-red-600" />
                Mục tiêu giai đoạn
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Tích lũy kinh nghiệm thực tế',
                  'Hoàn thành luận văn chất lượng cao',
                  'Xây dựng mạng lưới nghề nghiệp',
                  'Phát triển kỹ năng lãnh đạo',
                  'Chuẩn bị cho thị trường lao động',
                  'Định hướng nghề nghiệp rõ ràng'
                ].map((objective, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-white rounded-lg border border-red-100">
                    <CheckCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{objective}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Internship Programs */}
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-red-600" />
                Chương trình thực tập
              </h3>
              <div className="space-y-4">
                {[
                  {
                    category: 'Ngân hàng thương mại',
                    companies: ['Vietcombank', 'Techcombank', 'BIDV', 'VPBank']
                  },
                  {
                    category: 'Công ty FinTech',
                    companies: ['MoMo', 'VNPay', 'Timo', 'Finhay']
                  },
                  {
                    category: 'Tập đoàn tài chính',
                    companies: ['Vingroup', 'FPT', 'Viettel Money', 'SSI']
                  }
                ].map((category, idx) => (
                  <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-800 mb-2">{category.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.companies.map((company, companyIdx) => (
                        <span key={companyIdx} className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">
                          {company}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Thesis Topics */}
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-red-600" />
                Chủ đề luận văn phổ biến
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'AI trong dự báo tài chính',
                  'Blockchain và thanh toán số',
                  'Phân tích rủi ro tín dụng',
                  'FinTech và ngân hàng số',
                  'Sustainable Finance',
                  'Cryptocurrency và quy định'
                ].map((topic, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-gradient-to-r from-red-50 to-red-100 rounded-lg border border-red-200">
                    <Award className="w-5 h-5 text-red-600" />
                    <span className="text-slate-700 font-medium">{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      phase: "Sau tốt nghiệp",
      title: "Phát triển sự nghiệp",
      subtitle: "Chuyên gia tài chính tương lai",
      description: "Làm việc tại các vị trí chuyên môn cao, tiếp tục học tập và phát triển, trở thành chuyên gia hàng đầu trong lĩnh vực.",
      skills: ["Chuyên môn cao", "Tư duy chiến lược", "Quản lý nhóm", "Đổi mới sáng tạo"],
      opportunities: ["Vị trí quản lý", "Chuyên gia tư vấn", "Khởi nghiệp FinTech", "Nghiên cứu cao học"],
      icon: "👑",
      color: "from-red-500 to-red-600",
      bgColor: "from-red-50 to-red-100",
      position: "right",
      modalContent: (
        <div className="max-h-[80vh] overflow-y-auto">
          {/* Header */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 rounded-t-2xl mb-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/20 rounded-xl text-2xl">
                👑
              </div>
              <div>
                <h2 className="text-2xl font-bold">Sau tốt nghiệp: Phát triển sự nghiệp</h2>
                <p className="text-red-100">Chuyên gia tài chính tương lai</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            {/* Overview */}
            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
              <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Tổng quan giai đoạn
              </h3>
              <p className="text-red-700 leading-relaxed">
                Bước vào thị trường lao động với đầy đủ kiến thức và kỹ năng cần thiết. Cựu sinh viên sẽ có cơ hội làm việc tại các vị trí chuyên môn cao, phát triển sự nghiệp theo nhiều hướng khác nhau từ chuyên gia kỹ thuật đến lãnh đạo doanh nghiệp.
              </p>
            </div>

            {/* Career Paths */}
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-600" />
                Lộ trình nghề nghiệp
              </h3>
              <div className="space-y-4">
                {[
                  {
                    path: 'Chuyên gia FinTech',
                    positions: ['FinTech Analyst', 'Product Manager', 'Tech Lead', 'CTO']
                  },
                  {
                    path: 'Quản lý ngân hàng',
                    positions: ['Relationship Manager', 'Branch Manager', 'Regional Director', 'CEO']
                  },
                  {
                    path: 'Tư vấn tài chính',
                    positions: ['Financial Advisor', 'Senior Consultant', 'Partner', 'Managing Director']
                  },
                  {
                    path: 'Khởi nghiệp',
                    positions: ['Co-founder', 'CEO Startup', 'Serial Entrepreneur', 'Venture Capitalist']
                  }
                ].map((career, idx) => (
                  <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-800 mb-2">{career.path}</h4>
                    <div className="flex flex-wrap gap-2">
                      {career.positions.map((position, positionIdx) => (
                        <span key={positionIdx} className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">
                          {position}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Success Stories */}
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-red-600" />
                Thành tựu tiêu biểu
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'CEO công ty FinTech triệu đô',
                  'Giám đốc chi nhánh ngân hàng',
                  'Chuyên gia AI hàng đầu',
                  'Founder startup thành công',
                  'Nghiên cứu sinh tiến sĩ',
                  'Chuyên gia tư vấn quốc tế'
                ].map((achievement, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-gradient-to-r from-red-50 to-red-100 rounded-lg border border-red-200">
                    <Award className="w-5 h-5 text-red-600" />
                    <span className="text-slate-700 font-medium">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Continuous Learning */}
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-red-600" />
                Học tập suốt đời
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'MBA tại trường top',
                  'Chứng chỉ CFA/FRM',
                  'Executive Education',
                  'Khóa học công nghệ mới',
                  'Hội thảo quốc tế',
                  'Mạng lưới alumni'
                ].map((learning, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-red-100">
                    <CheckCircle className="w-5 h-5 text-red-500" />
                    <span className="text-slate-700">{learning}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  // Fixed seed values for consistent rendering
  const seedValues = useMemo(() => [
    { size: 120, x: 15, y: 20, delay: 0 },
    { size: 80, x: 85, y: 15, delay: 0.5 },
    { size: 100, x: 10, y: 70, delay: 1 },
    { size: 60, x: 90, y: 80, delay: 1.5 },
    { size: 140, x: 50, y: 10, delay: 2 }
  ], []);

  const sparklePositions = useMemo(() => [
    { x: 20, y: 30, delay: 0.2 },
    { x: 80, y: 25, delay: 0.8 },
    { x: 30, y: 75, delay: 1.4 },
    { x: 70, y: 85, delay: 2.0 },
    { x: 60, y: 40, delay: 2.6 }
  ], []);

  return (
    <motion.section
      ref={containerRef}
      className="py-6 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 relative overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Enhanced Background Effects */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-purple-50/20 to-orange-50/30"
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{
          opacity: isInView ? 1 : 0,
          scale: isInView ? 1 : 1.2,
          transition: { duration: 2, ease: "easeOut" }
        }}
      />

      {/* Floating Background Elements */}
      {isClient && (
        <div className="absolute inset-0">
          {seedValues.map((seed, index) => (
            <motion.div
              key={index}
              className="absolute rounded-full opacity-10"
              style={{
                width: `${seed.size}px`,
                height: `${seed.size}px`,
                left: `${seed.x}%`,
                top: `${seed.y}%`,
                background: index % 3 === 0 ? 'linear-gradient(135deg, #3b82f6, #8b5cf6)' : 
                           index % 3 === 1 ? 'linear-gradient(135deg, #8b5cf6, #ec4899)' : 
                           'linear-gradient(135deg, #06b6d4, #3b82f6)'
              }}
              animate={{
                y: [-20, 20, -20],
                x: [-10, 10, -10],
                rotate: [0, 180, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 8 + index * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: seed.delay
              }}
            />
          ))}
        </div>
      )}

      {/* Animated Sparkles */}
      {isClient && (
        <AnimatePresence>
          {sparklePositions.map((sparkle, index) => (
            <motion.div
              key={index}
              className="absolute z-10"
              style={{
                left: `${sparkle.x}%`,
                top: `${sparkle.y}%`
              }}
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: sparkle.delay
              }}
            >
              <Sparkles className="w-6 h-6 text-red-400" />
            </motion.div>
          ))}
        </AnimatePresence>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Enhanced Header */}
          <motion.div
            className="text-center mb-16 lg:mb-20"
            variants={headerVariants}
          >
            {/* Badge */}
            <motion.div 
              className="flex justify-center mb-6"
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.3 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500/10 to-red-600/10 backdrop-blur-sm border border-red-200/30 rounded-full">
                <MapPin className="w-4 h-4 text-red-600" />
                <span className="text-sm font-semibold text-red-700 dark:text-red-400">
                  Hành trình 4 năm phát triển
                </span>
                <TrendingUp className="w-4 h-4 text-red-600" />
              </div>
            </motion.div>

            <div className='w-full flex justify-center mb-6'>
              <PointerHighlight>
                <motion.h2
                  className="text-3xl font-bold bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent p-4 leading-tight"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{
                    opacity: isInView ? 1 : 0,
                    x: isInView ? 0 : -100,
                    transition: { delay: 0.3, duration: 0.8, type: "spring", stiffness: 100 }
                  }}
                >
                  Lộ trình phát triển sự nghiệp
                </motion.h2>
              </PointerHighlight>
            </div>

        </motion.div>

        {/* Timeline */}
        <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
          {careerTimeline.map((item, index) => (
            <Drawer key={item.id}>
              <div className="flex justify-start pt-10 md:pt-40 md:gap-10">
                <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                  <motion.div
                    className={cn(
                      "h-16 w-16 rounded-full flex items-center justify-center text-2xl cursor-pointer transition-all duration-300 border-4 border-white shadow-lg",
                      `bg-gradient-to-b ${item.color}`,
                      activePhase === item.id ? "scale-125 shadow-2xl" : "hover:scale-110"
                    )}
                    variants={dotVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    custom={item.id}
                    onClick={() => setActivePhase(activePhase === item.id ? -1 : item.id)}
                    whileHover={{
                      scale: 1.2,
                      rotate: 10,
                      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                      transition: { duration: 0.3 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="hidden md:block text-xl md:pl-20 md:text-3xl font-bold text-slate-600">
                    {item.phase}
                  </h3>
                </div>

                <div className="relative pl-20 pr-4 md:pl-4 w-full">
                  <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-slate-600">
                    {item.phase}
                  </h3>
                  <motion.div
                    className={cn(
                      "bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-8 border border-white/50 shadow-xl transition-all duration-300 cursor-pointer",
                      activePhase === item.id ? "shadow-2xl ring-4 ring-red-500/20" : ""
                    )}
                    variants={cardVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    custom={item.id}
                    whileHover={{
                      scale: 1.02,
                      y: -5,
                      boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
                      transition: { duration: 0.3 }
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <DrawerTrigger className="w-full text-left">
                      <div className="mb-4 md:mb-6">
                        <motion.div
                          className={cn(
                            "inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-xl md:rounded-2xl text-white font-bold text-xs md:text-sm mb-2 md:mb-3 shadow-lg",
                            "bg-gradient-to-r " + item.color
                          )}
                          whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                        >
                          {item.title}
                        </motion.div>
                        <h4 className="text-lg md:text-xl font-bold text-slate-800 mb-1 md:mb-2">
                          {item.subtitle}
                        </h4>
                      </div>

                      <p className="text-sm md:text-base text-slate-700 mb-4 md:mb-6 leading-relaxed">
                        {item.description}
                      </p>
                      
                      <div className="text-center">
                        <span className="text-xs text-red-600 font-medium">Nhấn để xem chi tiết →</span>
                      </div>
                    </DrawerTrigger>
                  </motion.div>
                </div>
              </div>

              <DrawerContent className="w-full p-4">
                <DrawerHeader className="flex flex-row items-center justify-between">
                  <div>
                    <DrawerTitle className="text-2xl font-bold">{item.title}</DrawerTitle>
                  </div>
                  <DrawerClose className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                    <X className="w-5 h-5" />
                  </DrawerClose>
                </DrawerHeader>
                {item.modalContent}
              </DrawerContent>
            </Drawer>
          ))}
          
          {/* Animated timeline line */}
          <div
            style={{
              height: height + "px",
            }}
            className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-red-500 via-red-600 to-transparent from-[0%] via-[10%] rounded-full"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}