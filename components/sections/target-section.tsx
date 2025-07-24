"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";
import { PointerHighlight } from "@/components/ui/pointer-highlight";

export default function TargetSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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
                duration: 0.8
              }
            }
          };

  const beamVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            type: "spring" as const,
            stiffness: 80,
            damping: 20,
            duration: 1.2
          }
        }
      };

  return (
    <motion.section 
      ref={ref}
      id="target-section" 
      className="py-16 lg:py-24 bg-gradient-to-b from-zinc-50 via-gray-100 to-zinc-50 relative overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-purple-100/20"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
      />
      
      <div className="max-w-4xl mx-auto flex flex-col items-end justify-end px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="mx-auto max-w-2xl lg:max-w-4xl text-center mb-6 sm:mb-8 lg:mb-12"
          variants={headerVariants}
        >
          <PointerHighlight>
            <motion.h2 
              className="text-2xl sm:text-3xl lg:text-4xl font-bold px-2 sm:px-4 py-2 sm:py-4"
              whileHover={{ 
                scale: 1.05,
                color: "#3b82f6",
                transition: { duration: 0.3 }
              }}
            >
              Mục tiêu của chương trình đào tạo
            </motion.h2>
          </PointerHighlight>
        </motion.div>
      </div>
      <motion.div variants={beamVariants}>
        <TracingBeam className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl lg:max-w-6xl mx-auto antialiased pt-4 relative">
          {targetContent.map((item, index) => (
            <motion.div 
              key={`content-${index}`} 
              className="mb-8 sm:mb-10 lg:mb-12 p-4"
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, y: 50 }}
              whileInView={{ 
                opacity: 1, 
                x: 0, 
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: index * 0.2
                }
              }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <motion.h2 
                className="bg-black text-white rounded-full text-xs sm:text-sm w-fit px-3 sm:px-4 py-1 sm:py-2 mb-3 sm:mb-4"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ 
                  scale: 1, 
                  rotate: 0,
                  transition: {
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: index * 0.2 + 0.3
                  }
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.2 }
                }}
              >
                {item.badge}
              </motion.h2>

              <motion.p 
                className={cn("text-lg sm:text-xl lg:text-2xl mb-4 sm:mb-6 font-semibold")}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    duration: 0.8,
                    delay: index * 0.2 + 0.5
                  }
                }}
                viewport={{ once: true }}
              >
                {item.title}
              </motion.p>

              <motion.div 
                className="prose prose-sm sm:prose-base lg:prose-lg dark:prose-invert max-w-none"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    duration: 1,
                    delay: index * 0.2 + 0.7
                  }
                }}
                viewport={{ once: true }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                  whileInView={{ 
                    opacity: 1, 
                    scale: 1, 
                    rotateY: 0,
                    transition: {
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                      delay: index * 0.2 + 0.9
                    }
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <AspectRatio ratio={16 / 9} className="mb-4 sm:mb-6 lg:mb-8">
                    {item?.image && (
                      <Image
                        src={item.image}
                        alt="blog thumbnail"
                        fill
                        className="rounded-lg object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                      />
                    )}
                  </AspectRatio>
                </motion.div>
                <div className="text-sm sm:text-base lg:text-lg leading-relaxed">
                  {item.description}
                </div>
              </motion.div>
            </motion.div>
          ))}
          </div>
        </TracingBeam>
      </motion.div>
    </motion.section>
  );
}

const targetContent = [
  {
    badge: "Kiến thức toàn diện",
    title: "Kiến thức toàn diện về Tài chính - Ngân hàng và Công nghệ",
    description: (
      <>
        <p className="text-lg">
          Chương trình cung cấp hệ thống kiến thức toàn diện về các lĩnh vực tài chính – ngân hàng cốt lõi như tài chính doanh nghiệp, ngân hàng thương mại, thị trường tài chính, quản trị rủi ro, đầu tư và thanh toán quốc tế. Cùng với đó, sinh viên được trang bị những kiến thức mới nhất về công nghệ tài chính, giúp họ hiểu rõ cách thức ứng dụng trí tuệ nhân tạo (AI), học máy (Machine Learning), dữ liệu lớn (Big Data), chuỗi khối (Blockchain), và hợp đồng thông minh (Smart Contracts) vào các hoạt động tài chính. Đây là những yếu tố cốt lõi trong việc đổi mới mô hình kinh doanh ngân hàng và tạo ra các sản phẩm tài chính số hiện đại.
        </p>
      </>
    ),
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    badge: "Công nghệ tài chính",
    title: "Ứng dụng Công nghệ Tài chính (FinTech)",
    description: (
      <>
        <p className="text-lg">
          Chương trình cung cấp hệ thống kiến thức toàn diện về các lĩnh vực tài chính – ngân hàng cốt lõi như tài chính doanh nghiệp, ngân hàng thương mại, thị trường tài chính, quản trị rủi ro, đầu tư và thanh toán quốc tế. Cùng với đó, sinh viên được trang bị những kiến thức mới nhất về công nghệ tài chính, giúp họ hiểu rõ cách thức ứng dụng trí tuệ nhân tạo (AI), học máy (Machine Learning), dữ liệu lớn (Big Data), chuỗi khối (Blockchain), và hợp đồng thông minh (Smart Contracts) vào các hoạt động tài chính. Đây là những yếu tố cốt lõi trong việc đổi mới mô hình kinh doanh ngân hàng và tạo ra các sản phẩm tài chính số hiện đại.
        </p>
      </>
    ),
    image:
      "https://images.unsplash.com/photo-1665686306574-1ace09918530?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    badge: "Thực hành và ứng dụng",
    title: "Thực hành và Ứng dụng thực tế",
    description: (
      <>
        <p className="text-lg">
          Không dừng lại ở lý thuyết, chương trình CLC còn tập trung vào thực hành, giúp sinh viên phát triển kỹ năng ứng dụng công nghệ vào tài chính – ngân hàng. Sinh viên có cơ hội tiếp cận các phòng thí nghiệm chuỗi khối, phòng học máy và trang thiết bị hiện đại, từ đó rèn luyện tư duy sáng tạo, khả năng phân tích dữ liệu và quản lý tài chính cá nhân bằng các công cụ số hóa. Chương trình cũng mang đến các môn học chuyên sâu như Nguyên lý và kỹ thuật học máy trong FinTech, Chuỗi khối và tiền mã hóa, Trí tuệ nhân tạo trong tài chính ngân hàng, Trí tuệ nhân tạo trong giao dịch định lượng, Phân tích dữ liệu lớn trong tài chính ngân hàng, giúp sinh viên nhanh chóng bắt nhịp với các xu hướng đổi mới trong ngành
        </p>
      </>
    ),
    image:
      "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
