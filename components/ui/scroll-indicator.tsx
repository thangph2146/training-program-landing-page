"use client";

import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

interface ScrollIndicatorProps {
  sections: string[];
  currentSection: number;
  onSectionClick: (index: number) => void;
  className?: string;
  position?: 'left' | 'right';
  showLabels?: boolean;
}

const sectionLabels: Record<string, string> = {
  'hero': 'Trang chủ',
  'target': 'Mục tiêu',
  'program-timeline': 'Lộ trình',
  'featured-courses': 'Khóa học',
  'career-timeline': 'Sự nghiệp',
  'featured-faculty': 'Giảng viên',
  'internship': 'Thực tập',
  'career-opportunities': 'Cơ hội'
};

export const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({
  sections,
  currentSection,
  onSectionClick,
  className,
  position = 'right',
  showLabels = false
}) => {
  return (
    <div
      className={cn(
        'fixed top-1/2 z-50 -translate-y-1/2 transform',
        position === 'right' ? 'right-6' : 'left-6',
        className
      )}
    >
      <div className="flex flex-col space-y-3">
        {sections.map((section, index) => {
          const isActive = index === currentSection;
          const label = sectionLabels[section] || section;
          
          return (
            <div
              key={section}
              className={cn(
                'group relative flex items-center',
                position === 'right' ? 'flex-row-reverse' : 'flex-row'
              )}
            >
              {/* Dot indicator */}
              <motion.button
                onClick={() => onSectionClick(index)}
                className={cn(
                  'relative h-3 w-3 rounded-full border-2 transition-all duration-300 hover:scale-125',
                  isActive
                    ? 'border-blue-500 bg-blue-500 shadow-lg shadow-blue-500/30'
                    : 'border-gray-400 bg-transparent hover:border-blue-400 hover:bg-blue-400/20'
                )}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                {/* Active indicator glow */}
                {isActive && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-blue-500"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>

              {/* Label tooltip */}
              {showLabels && (
                <motion.div
                  className={cn(
                    'absolute whitespace-nowrap rounded-md bg-gray-900 px-2 py-1 text-xs text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100',
                    position === 'right'
                      ? 'right-6 translate-x-0'
                      : 'left-6 translate-x-0'
                  )}
                  initial={{ opacity: 0, x: position === 'right' ? 10 : -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                >
                  {label}
                  {/* Arrow */}
                  <div
                    className={cn(
                      'absolute top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 bg-gray-900',
                      position === 'right' ? '-right-1' : '-left-1'
                    )}
                  />
                </motion.div>
              )}
            </div>
          );
        })}
      </div>

      {/* Progress line */}
      <div
        className={cn(
          'absolute top-0 w-0.5 bg-gray-200',
          position === 'right' ? 'right-[5px]' : 'left-[5px]'
        )}
        style={{ height: `${(sections.length - 1) * 24}px` }}
      >
        <motion.div
          className="w-full bg-gradient-to-b from-blue-500 to-blue-600"
          initial={{ height: 0 }}
          animate={{
            height: `${(currentSection / (sections.length - 1)) * 100}%`
          }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />
      </div>
    </div>
  );
};

// Floating scroll controls
interface ScrollControlsProps {
  onScrollUp: () => void;
  onScrollDown: () => void;
  canScrollUp: boolean;
  canScrollDown: boolean;
  className?: string;
}

export const ScrollControls: React.FC<ScrollControlsProps> = ({
  onScrollUp,
  onScrollDown,
  canScrollUp,
  canScrollDown,
  className
}) => {
  return (
    <div
      className={cn(
        'fixed bottom-8 right-8 z-50 flex flex-col space-y-2',
        className
      )}
    >
      {/* Scroll Up */}
      <motion.button
        onClick={onScrollUp}
        disabled={!canScrollUp}
        className={cn(
          'flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-200',
          canScrollUp
            ? 'text-gray-700 hover:bg-blue-50 hover:text-blue-600 hover:shadow-xl'
            : 'cursor-not-allowed text-gray-300'
        )}
        whileHover={canScrollUp ? { scale: 1.1 } : {}}
        whileTap={canScrollUp ? { scale: 0.95 } : {}}
      >
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
      </motion.button>

      {/* Scroll Down */}
      <motion.button
        onClick={onScrollDown}
        disabled={!canScrollDown}
        className={cn(
          'flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-200',
          canScrollDown
            ? 'text-gray-700 hover:bg-blue-50 hover:text-blue-600 hover:shadow-xl'
            : 'cursor-not-allowed text-gray-300'
        )}
        whileHover={canScrollDown ? { scale: 1.1 } : {}}
        whileTap={canScrollDown ? { scale: 0.95 } : {}}
      >
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </motion.button>
    </div>
  );
};