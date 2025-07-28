"use client";

import React, { useRef, useState, useCallback, useMemo, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { Badge } from "@/components/ui/badge";
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerClose } from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import {
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Play,
  X,
} from "lucide-react";
import { ScrollArea } from './scroll-area';

// Base interfaces for carousel items
interface CarouselItem {
  id: string;
  title: string;
  description: string;
  color: string;
  modalContent?: React.ReactNode;
}

// Animation variants type
interface AnimationVariants {
  container: {
    hidden: any;
    visible: any;
  };
  card: {
    hidden: any;
    visible: any;
  };
  icon: {
    hidden: any;
    visible: any;
  };
  sparkle: {
    hidden: any;
    visible: any;
  };
  header: {
    hidden: any;
    visible: any;
  };
}

// Utility function types
type GetColorClassesFunction = (colorName: string, type: 'bg' | 'text' | 'border' | 'ring') => string;

// Card section structure interfaces
interface CardSection {
  header?: React.ReactNode;
  body?: React.ReactNode;
  footer?: React.ReactNode;
}

// Info Panel section structure interfaces
interface InfoPanelSection {
  header?: React.ReactNode;
  body?: React.ReactNode;
  footer?: React.ReactNode;
}

// Item Card Props
interface ItemCardProps {
  item: CarouselItem;
  index: number;
  isActive: boolean;
  isHovered: boolean;
  isFocused: boolean;
  onHover: (itemId: string | null) => void;
  onFocus: (itemId: string | null) => void;
  animationVariants: AnimationVariants;
  customColors: {
    primary?: string;
    secondary?: string;
    accent?: string;
  };
  getColorClasses: GetColorClassesFunction;
  randomRotateY: (index?: number) => number;
  customCardSections?: CardSection;
}

// Info Panel Props
interface InfoPanelProps {
  activeItem: CarouselItem;
  customSections?: InfoPanelSection;
  colorClasses: {
    primary: string;
    secondary: string;
    accent: string;
  };
  customColors: {
    primary?: string;
    secondary?: string;
    accent?: string;
  };
  onNext: () => void;
  onPrev: () => void;
  onItemSelect: (index: number) => void;
  items: CarouselItem[];
  activeIndex: number;
  isActive: (index: number) => boolean;
  animationVariants: AnimationVariants;
  getColorClasses: GetColorClassesFunction;
}

// Main Carousel Props
interface CustomizableCarouselProps {
  id?: string;
  items: CarouselItem[];
  title?: string;
  description?: string;
  autoplayInterval?: number;
  enableAutoplay?: boolean;
  flipped?: boolean;
  className?: string;
  onItemClick?: (item: CarouselItem) => void;
  // Custom props
  customColors?: {
    primary?: string;
    secondary?: string;
    accent?: string;
  };
  // Section customization
  customCardSections?: CardSection;
  customInfoPanelSections?: InfoPanelSection;
}

// Individual Item Card Component with Header-Body-Footer structure
const ItemCard: React.FC<ItemCardProps> = ({
  item,
  index,
  isActive,
  isHovered,
  isFocused,
  onHover,
  onFocus,
  animationVariants,
  customColors,
  getColorClasses,
  randomRotateY,
  customCardSections
}) => {

  // Default card header
  const defaultCardHeader = (
    <div className="flex items-start gap-5 mb-8">
   
      
      <div className="flex-1 min-w-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + index * 0.1 }}
        >
          <h3 className="text-xl font-bold text-slate-800 mb-3 leading-tight group-hover:text-slate-900 transition-colors">
            {item.title}
          </h3>
        </motion.div>
      </div>
    </div>
  );

  // Default card body
  const defaultCardBody = (
    <div className="mb-6">
      <p className="text-slate-600 text-sm leading-relaxed group-hover:text-slate-700 transition-colors">
        {item.description}
      </p>
    </div>
  );

  // Default card footer
  const defaultCardFooter = (
    <DrawerTrigger className="w-full p-0 bg-transparent hover:bg-transparent group/trigger mt-6">
      <motion.div
        className={cn(
          "flex items-center justify-between p-2 rounded-2xl transition-all duration-300 cursor-pointer",
          "bg-gradient-to-r from-slate-50/80 to-slate-100/80",
          "hover:from-blue-50/80 hover:to-indigo-50/80",
          "border border-slate-200/50 hover:border-blue-200/50",
          "shadow-sm hover:shadow-md"
        )}
        whileHover={{ y: -2, scale: 1.02 }}
        whileTap={{ y: 0, scale: 0.98 }}
      >
        <div className="flex items-center gap-3">
          <div className={cn(
            "w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300",
            "bg-slate-200/80 group-hover/trigger:bg-blue-200/80"
          )}>
            <Play className="w-4 h-4 text-slate-600 group-hover/trigger:text-blue-600" />
          </div>
          <span className="text-sm text-slate-700 group-hover/trigger:text-slate-900">
            Xem chi tiết
          </span>
        </div>
        
        <motion.div
          className="flex items-center gap-1 text-slate-500 group-hover/trigger:text-blue-600"
          whileHover={{ x: 4 }}
        >
          <ChevronRight className="h-5 w-5" />
        </motion.div>
      </motion.div>
    </DrawerTrigger>
  );

  return (
    <motion.div
      key={item.id}
      className="absolute inset-0 origin-bottom"
      initial={{
        opacity: 0,
        scale: 0.9,
        z: -100,
        rotate: randomRotateY(),
      }}
      animate={{
        opacity: isActive ? 1 : 0.7,
        scale: isActive ? 1 : 0.95,
        z: isActive ? 0 : -100,
        rotate: isActive ? 0 : randomRotateY(),
        zIndex: isActive ? 40 : 30 + 2 - index,
        y: isActive ? [0, -20, 0] : 0,
      }}
      exit={{
        opacity: 0,
        scale: 0.9,
        z: 100,
        rotate: randomRotateY(index),
      }}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
      }}
    >
      <Drawer>
        <motion.article
          className={cn(
            "group cursor-pointer w-full h-full relative",
            "transform-gpu transition-all duration-300"
          )}
          variants={animationVariants.card}
          whileHover={{
            scale: 1.05,
            y: -8,
            transition: { type: "spring", stiffness: 400, damping: 25 }
          }}
          whileTap={{ scale: 0.97 }}
          onHoverStart={() => onHover(item.id)}
          onHoverEnd={() => onHover(null)}
          onFocus={() => onFocus(item.id)}
          onBlur={() => onFocus(null)}
          role="listitem"
          tabIndex={0}
          aria-label={`Môn học ${item.title} - ${item.description}`}
        >
          <motion.div
            className={cn(
              "bg-white/95 backdrop-blur-md rounded-3xl p-8 border h-full relative overflow-hidden",
              "shadow-xl hover:shadow-2xl transition-all duration-500",
              "border-white/80 hover:border-white/90",
              (isHovered || isFocused || isActive) && "ring-2 ring-red-500/30 ring-offset-2 ring-offset-transparent"
            )}
            style={{
              boxShadow: (isHovered || isFocused || isActive)
                ? "0 32px 64px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(239, 68, 68, 0.1)" 
                : "0 20px 40px -8px rgba(0, 0, 0, 0.1)"
            }}
          >
            {/* Dynamic background gradient */}
            <motion.div
              className={cn(
                "absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500",
                index % 6 === 0 && "bg-gradient-to-br from-blue-50/80 to-cyan-50/80",
                index % 6 === 1 && "bg-gradient-to-br from-green-50/80 to-emerald-50/80",
                index % 6 === 2 && "bg-gradient-to-br from-purple-50/80 to-violet-50/80",
                index % 6 === 3 && "bg-gradient-to-br from-red-50/80 to-rose-50/80",
                index % 6 === 4 && "bg-gradient-to-br from-orange-50/80 to-amber-50/80",
                index % 6 === 5 && "bg-gradient-to-br from-teal-50/80 to-cyan-50/80"
              )}
              animate={{ opacity: (isHovered || isFocused || isActive) ? 1 : 0 }}
            />

            {/* Floating decorative elements */}
            <motion.div
              className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ 
                scale: (isHovered || isFocused || isActive) ? 1 : 0, 
                rotate: (isHovered || isFocused || isActive) ? 0 : -180,
                opacity: (isHovered || isFocused || isActive) ? 1 : 0
              }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center",
                customColors.accent ? `bg-gradient-to-br from-${customColors.accent}-400/20 to-${customColors.accent}-500/20` : 'bg-gradient-to-br from-red-400/20 to-red-500/20'
              )}>
                <Sparkles className={cn("w-4 h-4", getColorClasses(customColors.accent || 'red', 'text'))} />
              </div>
            </motion.div>

            {/* Focus indicator */}
            <AnimatePresence>
              {isFocused && (
                <motion.div
                  className={cn("absolute inset-0 border-2 rounded-3xl", getColorClasses(customColors.accent || 'red', 'border'))}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </AnimatePresence>

            <div className="relative z-10">
              {/* Card Header */}
              <div className="card-header">
                {customCardSections?.header || defaultCardHeader}
              </div>
              
              {/* Card Body */}
              <div className="card-body">
                {customCardSections?.body || defaultCardBody}
              </div>
              
              {/* Card Footer */}
              <div className="card-footer">
                {customCardSections?.footer || defaultCardFooter}
              </div>
            </div>
          </motion.div>
        </motion.article>
        
        {/* Modal Content */}
        {item.modalContent && (
          <DrawerContent className="w-full">
            <DrawerHeader className="relative">
              <DrawerTitle>{item.title}</DrawerTitle>
              <DrawerClose asChild>
                <button className="absolute right-4 top-4 p-2 rounded-full hover:bg-slate-100 transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </DrawerClose>
            </DrawerHeader>
            <ScrollArea className="h-[70vh]">
              {item.modalContent}
            </ScrollArea>
          </DrawerContent>
        )}
      </Drawer>
    </motion.div>
  );
};

// Info Panel Component with Header-Body-Footer structure
const InfoPanel: React.FC<InfoPanelProps> = ({
  activeItem,
  customSections,
  customColors,
  onNext,
  onPrev,
  onItemSelect,
  items,
  isActive,
  animationVariants,
  getColorClasses
}) => {
  // Default header content
  const defaultHeader = (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-slate-800">
        {activeItem?.title}
      </h3>
      <p className="text-slate-600 leading-relaxed">
        {activeItem?.description}
      </p>
    </div>
  );

  // Default footer content
  const defaultFooter = (
    <div className="space-y-6">
      {/* Navigation Controls */}
      <div className="flex gap-4 pt-8">
        <button
          onClick={onPrev}
          className="group/button flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 transition-colors duration-200 cursor-pointer"
          aria-label="Mục trước"
        >
          <ChevronLeft className="h-6 w-6 text-slate-600 transition-transform duration-300 group-hover/button:scale-110" />
        </button>
        <button
          onClick={onNext}
          className="group/button flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 transition-colors duration-200 cursor-pointer"
          aria-label="Mục tiếp theo"
        >
          <ChevronRight className="h-6 w-6 text-slate-600 transition-transform duration-300 group-hover/button:scale-110" />
        </button>
      </div>
      
      {/* Item Indicators */}
      <div className="flex gap-2 mt-4">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => onItemSelect(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-200",
              isActive(index) 
                ? cn(getColorClasses(customColors.accent || 'red', 'bg'), "w-8") 
                : "bg-slate-300 hover:bg-slate-400"
            )}
            aria-label={`Chuyển đến mục ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );

  return (
    <motion.div
      className="flex flex-col justify-center space-y-8"
      variants={animationVariants.container}
    >
      <motion.div
        className="space-y-6"
        variants={animationVariants.card}
      >
        {/* Info Panel Header */}
        <div className="info-panel-header">
          {customSections?.header || defaultHeader}
        </div>
        
        {/* Info Panel Body */}
        <div className="info-panel-body">
          {customSections?.body}
        </div>
        
        {/* Info Panel Footer */}
        <div className="info-panel-footer">
          {customSections?.footer || defaultFooter}
        </div>
      </motion.div>
    </motion.div>
  );
};

// Main Customizable Carousel Component
export default function CustomizableCarousel({
  id,
  items,
  title,
  description,
  autoplayInterval = 5000,
  enableAutoplay = false,
  flipped = false,
  className,
  customColors = {
    primary: "red",
    secondary: "slate",
    accent: "red"
  },
  customCardSections,
  customInfoPanelSections,
}: CustomizableCarouselProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [focusedCard, setFocusedCard] = useState<string | null>(null);
  const [activeItem, setActiveItem] = useState(0);
  const [autoplay, setAutoplay] = useState(enableAutoplay);

  const handleCardHover = useCallback((itemId: string | null) => {
    setHoveredCard(itemId);
  }, []);

  const handleCardFocus = useCallback((itemId: string | null) => {
    setFocusedCard(itemId);
  }, []);

  const handleNext = useCallback(() => {
    setActiveItem((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const handlePrev = useCallback(() => {
    setActiveItem((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  const isActive = useCallback((index: number) => {
    return index === activeItem;
  }, [activeItem]);

  useEffect(() => {
    if (autoplay && isInView && enableAutoplay) {
      const interval = setInterval(handleNext, autoplayInterval);
      return () => clearInterval(interval);
    }
  }, [autoplay, isInView, enableAutoplay, handleNext, autoplayInterval]);

  const randomRotateY = (index: number = 0) => {
    return (index % 3 - 1) * 7;
  };

  // Optimized animation variants
  const animationVariants = useMemo(() => ({
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.2
        }
      }
    },
    header: {
      hidden: { opacity: 0, y: -50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring" as const,
          stiffness: 100,
          damping: 15,
          duration: 0.8
        }
      }
    },
    card: {
      hidden: {
        opacity: 0,
        y: 100,
        scale: 0.8
      },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          type: "spring" as const,
          stiffness: 100,
          damping: 15,
          duration: 0.6
        }
      }
    },
    icon: {
      hidden: { scale: 0, rotate: -180 },
      visible: {
        scale: 1,
        rotate: 0,
        transition: {
          type: "spring" as const,
          stiffness: 200,
          damping: 20,
          delay: 0.2
        }
      }
    },
    sparkle: {
      hidden: { scale: 0, opacity: 0 },
      visible: {
        scale: [0, 1.2, 1],
        opacity: [0, 1, 0.8],
        transition: {
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse" as const
        }
      }
    }
  }), []);

  const getColorClasses = (colorName: string, type: 'bg' | 'text' | 'border' | 'ring') => {
    const colorMap: Record<string, Record<string, string>> = {
      red: {
        bg: 'bg-red-500',
        text: 'text-red-600',
        border: 'border-red-200',
        ring: 'ring-red-500'
      },
      blue: {
        bg: 'bg-blue-500',
        text: 'text-blue-600',
        border: 'border-blue-200',
        ring: 'ring-blue-500'
      },
      green: {
        bg: 'bg-green-500',
        text: 'text-green-600',
        border: 'border-green-200',
        ring: 'ring-green-500'
      },
      purple: {
        bg: 'bg-purple-500',
        text: 'text-purple-600',
        border: 'border-purple-200',
        ring: 'ring-purple-500'
      },
      slate: {
        bg: 'bg-slate-500',
        text: 'text-slate-600',
        border: 'border-slate-200',
        ring: 'ring-slate-500'
      }
    };
    
    return colorMap[colorName]?.[type] || colorMap.red[type];
  };

  const colorClasses = {
    primary: getColorClasses(customColors.primary || 'red', 'bg'),
    secondary: getColorClasses(customColors.secondary || 'slate', 'bg'),
    accent: getColorClasses(customColors.accent || 'red', 'bg')
  };

  return (
    <motion.section
      id={id}
      ref={ref}
      className={cn(
        "w-full min-h-[100vh] h-fit flex flex-col items-center justify-center py-6 bg-gradient-to-br from-slate-50 via-slate-100/50 to-blue-50/30 relative overflow-hidden",
        className
      )}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={animationVariants.container}
      role="region"
      aria-labelledby="carousel-title"
      aria-describedby="carousel-description"
    >
      {/* Professional Academic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-900/8 to-slate-800/8 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-slate-900/8 to-blue-800/8 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-slate-100/15 to-blue-100/15 rounded-full blur-3xl" />
        
        {/* Academic Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.015]">
          <div className="h-full w-full" style={{
            backgroundImage: `linear-gradient(rgba(30, 41, 59, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 41, 59, 0.1) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }} />
        </div>
        
        {/* Floating animated elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-slate-400/30 rounded-full"
            style={{
              top: `${20 + (i * 15)}%`,
              left: `${10 + (i * 12)}%`,
            }}
            variants={animationVariants.sparkle}
            initial="hidden"
            animate="visible"
            transition={{ delay: i * 0.2 }}
          />
        ))}
        
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute"
            style={{
              top: `${30 + (i * 20)}%`,
              right: `${15 + (i * 10)}%`,
            }}
            variants={animationVariants.sparkle}
            initial="hidden"
            animate="visible"
            transition={{ delay: i * 0.3 }}
          >
            <Sparkles className={cn("w-4 h-4", getColorClasses(customColors.accent || 'red', 'text'), "opacity-40")} />
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <motion.div className="text-center mb-6" variants={animationVariants.header}>
          <div className={cn('w-full flex justify-center', flipped ? 'lg:justify-end' : 'lg:justify-start')}>
            <PointerHighlight>
              <h2 
                id="carousel-title"
                className={cn(
                  "text-3xl font-bold bg-gradient-to-r bg-clip-text text-transparent p-4 leading-tight",
                  customColors.primary ? `from-slate-700 via-${customColors.primary}-700 to-${customColors.primary}-800` : 'from-slate-700 via-red-700 to-red-800'
                )}
              >
                {title}
              </h2>
            </PointerHighlight>
          </div>
          {description && (
            <p id="carousel-description" className="text-slate-600 mt-2 max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </motion.div>

        {/* Enhanced Carousel */}
        <motion.div
          className={cn(
            "relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20",
            flipped && "lg:grid-cols-2 lg:gap-20 lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1"
          )}
          variants={animationVariants.container}
          role="list"
          aria-label="Danh sách các mục nổi bật"
        >
          {/* Item Cards Stack */}
          <div 
            className="relative h-96 w-full"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <AnimatePresence>
              {items.map((item, index) => (
                <ItemCard
                  key={item.id}
                  item={item}
                  index={index}
                  isActive={isActive(index)}
                  isHovered={hoveredCard === item.id}
                  isFocused={focusedCard === item.id}
                  onHover={handleCardHover}
                  onFocus={handleCardFocus}
                  animationVariants={animationVariants}
                  customColors={customColors}
                  getColorClasses={getColorClasses}
                  randomRotateY={randomRotateY}
                  customCardSections={customCardSections}
                />
              ))}
            </AnimatePresence>
          </div>
          
          {/* Info Panel */}
          <InfoPanel
            activeItem={items[activeItem]}
            customSections={customInfoPanelSections}
            colorClasses={colorClasses}
            customColors={customColors}
            onNext={handleNext}
            onPrev={handlePrev}
            onItemSelect={setActiveItem}
            items={items}
            activeIndex={activeItem}
            isActive={isActive}
            animationVariants={animationVariants}
            getColorClasses={getColorClasses}
          />
        </motion.div>
      </div>
    </motion.section>
  );
}