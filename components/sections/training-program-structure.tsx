"use client";
import React from "react";
import Image from "next/image";
import { Tabs } from "@/components/ui/tabs";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { cn } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

export function TrainingProgramStructure() {
    const tabs = [
        {
            title: "Thông tin chung",
            value: "thong-tin-chung",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-3xl p-4 text-slate-800 bg-gradient-to-b from-slate-50 via-blue-50 to-indigo-100 shadow-xl border border-slate-200">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent rounded-3xl"></div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                            <div className="w-3 h-3 bg-indigo-400 rounded-full animate-pulse"></div>
                            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-indigo-700">Thông tin chung về chương trình</p>
                        </div>
                        <Content
                            description={(
                                <>
                                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-sm">
                                        <p className="text-base sm:text-lg font-semibold text-indigo-700 mb-3">Tên chương trình:</p>
                                        <ul className="space-y-2 ml-2 sm:ml-4">
                                            <li className="flex items-start gap-2">
                                                <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                                                <span className="text-sm sm:text-base text-slate-700">Tiếng Việt: Tài chính – Ngân hàng; tiếng Anh bán phần (CLC)</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                                                <span className="text-sm sm:text-base text-slate-700">Tiếng Anh: Finance and Banking, partial English program (High-quality)</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-sm">
                                        <p className="text-base sm:text-lg font-semibold text-indigo-700 mb-3">Thông tin cơ bản:</p>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                                                <span className="text-sm text-slate-600">Trình độ đào tạo: Đại học</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                                                <span className="text-sm text-slate-600">Ngành đào tạo: Tài chính – Ngân hàng</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                                                <span className="text-sm text-slate-600">Mã ngành: 7340201</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                                                <span className="text-sm text-slate-600">Hình thức đào tạo: Chính quy tập trung</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                                                <span className="text-sm text-slate-600">Chuẩn đầu vào: Thực hiện theo đề án tuyển sinh</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                                                <span className="text-sm text-slate-600">Thời gian đào tạo: 04 năm (08 học kỳ)</span>
                                            </div>
                                        </div>
                                        <div className="mt-4 pt-4 border-t border-slate-300">
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                                                <span className="text-sm text-slate-600">Thời điểm cập nhật bản chương trình đào tạo: tháng 6 năm 2024</span>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "Mục tiêu chương trình",
            value: "muc-tieu",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-3xl p-4 text-slate-800 bg-gradient-to-b from-cyan-50 via-sky-50 to-blue-100 shadow-xl border border-slate-200">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent rounded-3xl"></div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                            <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-blue-700">Mục tiêu của chương trình đào tạo</p>
                        </div>
                        <Content
                            description={(
                                <>
                                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-sm">
                                        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center text-xs sm:text-sm font-bold text-white shadow-sm">1.1</div>
                                            <p className="text-base sm:text-lg font-bold text-blue-700">Mục tiêu chung (PO)</p>
                                        </div>
                                        <p className="text-sm sm:text-base leading-relaxed ml-8 sm:ml-11 text-slate-700">Sinh viên tốt nghiệp chương trình Tài chính – Ngân hàng; tiếng Anh bán phần (CLC) nắm vững kiến thức nền tảng hiện đại về kinh tế nói chung, kiến thức chuyên sâu về tài chính ngân hàng nói riêng; Có phẩm chất đạo đức tốt; Có năng lực nghiên cứu và thực hành nghề nghiệp thuộc lĩnh vực tài chính ngân hàng trong trong bối cảnh hội nhập quốc tế và kỹ nguyên số.</p>
                                    </div>
                                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-sm">
                                        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg flex items-center justify-center text-xs sm:text-sm font-bold text-white shadow-sm">1.2</div>
                                            <p className="text-base sm:text-lg font-bold text-cyan-700">Mục tiêu cụ thể (PO1)</p>
                                        </div>
                                        <p className="text-sm sm:text-base leading-relaxed ml-8 sm:ml-11 text-slate-700">Có khả năng vận dụng kiến thức về khoa học tự nhiên, khoa học xã hội, khoa học cơ bản và kiến thức chuyên ngành để giải quyết các vấn đề phức tạp trong lĩnh vực tài chính ngân hàng.</p>
                                    </div>
                                </>
                            )}
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "Khối kiến thức",
            value: "khoi-kien-thuc",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-3xl p-4 text-slate-800 bg-gradient-to-b from-emerald-50 via-green-50 to-teal-100 shadow-xl border border-slate-200">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent rounded-3xl"></div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                            <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-emerald-700">Khối kiến thức cơ bản</p>
                        </div>
                        <Content
                            description={(
                                <>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                        {[
                                            "Triết học Mác - Lênin/Marxist-Leninist philosophy",
                                            "Kinh tế chính trị Mác - Lênin/Marxist Leninist political economics",
                                            "Chủ nghĩa xã hội khoa học/Scientific socialism",
                                            "Lịch sử Đảng Cộng sản Việt Nam/History of Vietnamese Communist Party",
                                            "Tư tưởng Hồ Chí Minh/Ho Chi Minh Ideology",
                                            "Toán cao cấp 1/Advanced Mathematics 1",
                                            "Toán cao cấp 2/Advanced Mathematics 2",
                                            "Lý thuyết xác suất và thống kê toán/Theory of Probability and Statistics",
                                            "Pháp luật đại cương/General Law"
                                        ].map((subject, index) => (
                                            <div key={index} className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-white/40 rounded-xl border border-slate-200 hover:bg-white/60 transition-all duration-300 shadow-sm">
                                                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0 mt-0.5 shadow-sm">
                                                    {index + 1}
                                                </div>
                                                <span className="text-xs sm:text-sm leading-relaxed text-slate-700">{subject}</span>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "Đặc điểm CLC",
            value: "dac-diem-clc",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-3xl p-4 text-slate-800 bg-gradient-to-b from-amber-50 via-orange-50 to-red-100 shadow-xl border border-slate-200">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent rounded-3xl"></div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                            <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
                            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-orange-700">Đặc điểm của chương trình</p>
                        </div>
                        <Content
                            description={(
                                <>
                                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-sm">
                                        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-amber-400 to-orange-400 rounded-lg flex items-center justify-center">
                                                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-orange-900" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <p className="text-base sm:text-lg font-bold text-orange-700">Chương trình chất lượng cao (CLC)</p>
                                        </div>
                                        <div className="space-y-2 sm:space-y-3 ml-8 sm:ml-11">
                                            {[
                                                "Được thiết kế theo tiêu chuẩn chất lượng cao",
                                                "Có thành phần tiếng Anh bán phần (partial English program)",
                                                "Tích hợp kiến thức quốc tế trong lĩnh vực tài chính ngân hàng"
                                            ].map((item, index) => (
                                                <div key={index} className="flex items-start gap-2">
                                                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                                                    <span className="text-sm sm:text-base text-slate-700">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-sm">
                                        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-orange-400 to-red-400 rounded-lg flex items-center justify-center">
                                                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-red-900" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <p className="text-base sm:text-lg font-bold text-orange-700">Định hướng thực tiễn</p>
                                        </div>
                                        <div className="space-y-2 sm:space-y-3 ml-8 sm:ml-11">
                                            {[
                                                "Kết hợp lý thuyết và thực hành",
                                                "Phát triển năng lực nghiên cứu và thực hành nghề nghiệp",
                                                "Thích ứng với bối cảnh hội nhập quốc tế và kỹ nguyên số"
                                            ].map((item, index) => (
                                                <div key={index} className="flex items-start gap-2">
                                                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                                                    <span className="text-sm sm:text-base text-slate-700">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            )}
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "Ma trận phân bổ PLO",
            value: "ma-tran-phan-bo",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-3xl p-4 text-slate-800 bg-gradient-to-b from-purple-50 via-indigo-50 to-blue-100 shadow-xl border border-slate-200">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent rounded-3xl"></div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                            <div className="w-3 h-3 bg-indigo-400 rounded-full animate-pulse"></div>
                            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-indigo-700">Ma trận phân bổ PLO (Program Learning Outcomes)</p>
                        </div>
                        <Content
                            description={(
                                <div className="h-fit flex flex-col gap-6">
                                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-sm">
                                        <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-indigo-700">Program Learning Outcomes (PLO)</h4>
                                        <p className="text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 text-slate-700">Chương trình có ma trận phân bổ các kết quả học tập theo từng học phần với các mức độ PLO1 đến PLO11, trong đó:</p>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                            {[
                                                "PLO1: Vận dụng kiến thức cơ bản và chuyên ngành",
                                                "PLO2: Phân tích và giải quyết vấn đề tài chính",
                                                "PLO3: Thiết kế giải pháp tài chính ngân hàng",
                                                "PLO4: Nghiên cứu và đánh giá thông tin",
                                                "PLO5: Sử dụng công cụ và công nghệ hiện đại",
                                                "PLO6: Kỹ năng giao tiếp và làm việc nhóm",
                                                "PLO7: Lãnh đạo và quản lý dự án",
                                                "PLO8: Đạo đức nghề nghiệp và trách nhiệm xã hội",
                                                "PLO9: Học tập suốt đời",
                                                "PLO10: Hiểu biết về bối cảnh toàn cầu",
                                                "PLO11: Khởi nghiệp và đổi mới sáng tạo"
                                            ].map((plo, index) => (
                                                <div key={index} className="flex items-start gap-3 p-3 bg-white/40 rounded-xl border border-slate-200 hover:bg-white/60 transition-all duration-300 shadow-sm">
                                                    <div className="w-8 h-6 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-lg flex items-center justify-center text-xs font-bold text-white flex-shrink-0 mt-0.5 shadow-sm">
                                                        {index + 1}
                                                    </div>
                                                    <span className="text-sm leading-relaxed text-slate-700">{plo}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 shadow-sm">
                                        <h4 className="text-lg font-bold mb-4 text-indigo-700">Mức độ phân bổ PLO</h4>
                                        <div className="space-y-3">
                                            {[
                                                { text: "Các môn cơ bản thường có mức độ 2-3", level: "2-3", color: "from-indigo-400 to-blue-400" },
                                                { text: "Các môn chuyên ngành có mức độ cao hơn (3)", level: "3", color: "from-blue-400 to-purple-400" },
                                                { text: "Phân bổ đều các PLO qua các học phần", level: "PLO", color: "from-purple-400 to-indigo-400" }
                                            ].map((item, index) => (
                                                <div key={index} className="flex items-center gap-4 p-4 bg-white/40 rounded-xl border border-slate-200 hover:bg-white/60 transition-all duration-300 shadow-sm">
                                                    <div className={`w-12 h-8 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center text-xs font-bold text-white shadow-sm`}>
                                                        {item.level}
                                                    </div>
                                                    <span className="text-base text-slate-700">{item.text}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        />
                    </div>
                </div>
            ),
        },
    ];
    const words =
        "Chương trình đào tạo Tài chính - Ngân hàng TABP CLC được thiết kế toàn diện với cấu trúc khoa học, cân bằng giữa kiến thức cơ bản và chuyên ngành.";

    return (
        <div className="py-10 sm:py-16 md:py-20 bg-gradient-to-b from-zinc-50 via-gray-100 to-zinc-50">
            <div className="max-w-6xl mx-auto flex flex-col items-center justify-center min-h-[16rem] sm:min-h-[18rem] md:min-h-[20rem] p-4">
                <div className="mx-auto max-w-lg sm:max-w-xl md:max-w-2xl text-xl sm:text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl p-2 sm:p-4">
                    <PointerHighlight>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-12 text-red-600 p-2 sm:p-4">Cấu trúc chương trình</h2>
                    </PointerHighlight>
                </div>
                <TextGenerateEffect words={words} align="flex justify-center items-center gap-2 flex-wrap text-center" />
            </div>
            <div className="h-[25rem] sm:h-[30rem] md:h-[35rem] lg:h-[40rem] [perspective:1000px] relative flex flex-col max-w-6xl mx-auto w-full items-start justify-start my-6 sm:my-8 md:my-10 px-4">
                <Tabs tabs={tabs} />
            </div>
        </div>
    );
}

const Content = ({ description, image }: { description: string | React.ReactNode, image?: string }) => {
    return (
        <ScrollArea className="w-full h-120">
            <div className="p-4">
                <div className={cn("text-sm sm:text-base md:text-lg font-normal text-neutral-200 text-left space-y-3 sm:space-y-4", image ? "md:w-1/2" : "w-full")}>{description}</div>
                {image && (
                    <div className="w-full md:w-1/2 flex justify-center">
                        <Image
                            src={image}
                            alt="program image"
                            width="250"
                            height="250"
                            className="object-contain object-center sm:w-[300px] sm:h-[300px]"
                        />
                    </div>
                )}
            </div>
            <ScrollBar orientation="vertical" />
        </ScrollArea>
    );
};