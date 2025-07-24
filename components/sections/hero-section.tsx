'use client';

import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Grid } from '@radix-ui/themes';
import { motion } from "framer-motion";

import Image from "next/image";

function HeroSection() {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-zinc-50 via-gray-100 to-zinc-50">
      <HeroHighlight containerClassName="w-full min-h-screen relative z-10">
      <div className="w-full mx-auto px-4 py-8 lg:py-16">
        <Grid columns={{xs: '1', lg: '2'}} gap={{xs: '6', lg: '8'}} width="auto" className="items-center min-h-[80vh] lg:min-h-[70vh]">
          <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: [20, -5, 0] }}
              transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
              className="w-full max-w-4xl leading-tight"
            >
              <span className="block mb-2 text-xs sm:text-sm md:text-base font-semibold text-red-600 dark:text-red-400 uppercase tracking-wide">Chất lượng cao Tiếng Anh Bán Phần</span>
              <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-neutral-800 dark:text-white mb-1">Giảng dạy bằng tiếng Anh</span>
              <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-neutral-800 dark:text-white mb-1">Công nghệ <Highlight className="text-red-700 dark:text-red-300">FinTech</Highlight></span>
              <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-neutral-800 dark:text-white mb-2">Khởi tạo tương lai với</span>
              <span className="block text-red-700 dark:text-red-300 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold">Tài chính - Ngân hàng Tiếng Anh Bán Phần</span>
            </motion.h1>
          </div>
            <AspectRatio ratio={1} className="w-full relative">
              <Image
                src="/logo truong/HUB logo-01.png"
                alt="HUB Logo"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain"
                priority
              />
            </AspectRatio>
        </Grid>
      </div>
      </HeroHighlight>
    </div>
  );
}

export default HeroSection