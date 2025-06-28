import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ilirionRobot from '../assets/ilirion1.png';

// Custom hook for counter animation
const useCounter = (end: number, duration: number = 2000, delay: number = 0) => {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!isActive) return;

    const timer = setTimeout(() => {
      let start = 0;
      const increment = end / (duration / 16); // 60fps
      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(counter);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(counter);
    }, delay);

    return () => clearTimeout(timer);
  }, [end, duration, delay, isActive]);

  return { count, setIsActive };
};

// Function to format counter values
const formatValue = (value: number, originalValue: string): string => {
  if (originalValue.includes('+')) {
    return `${value.toLocaleString()}+`;
  } else if (originalValue.includes('ms')) {
    return `${value}ms`;
  } else if (originalValue.includes('Hz')) {
    return `${value}Hz`;
  }
  return value.toString();
};

// Function to extract numeric value from string
const extractNumber = (value: string): number => {
  // Remove commas and extract all digits
  const match = value.replace(/,/g, '').match(/\d+/);
  return match ? parseInt(match[0]) : 0;
};

const Hero: React.FC = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.5 });

  const stats = [
    { value: '25,000+', label: 'Lines of Advanced AI Code' },
    { value: '15', label: 'Integrated AI Systems' },
    { value: '100ms', label: 'Real-time Processing Cycles' },
    { value: '10Hz', label: 'Autonomous Decision Making' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Animated Background Elements - Hidden on mobile */}
      <div className="absolute inset-0 overflow-hidden hidden sm:block">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gray-100 rounded-full opacity-20 floating-animation"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gray-200 rounded-full opacity-20 floating-animation" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gray-50 rounded-full opacity-10 floating-animation" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black mb-4 sm:mb-6 leading-tight">
                The Future of
                <span className="gradient-text block">AI is Here</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Advanced humanoid AI with consciousness, emotions, and human-like intelligence. 
                Beyond science fiction, this is science reality.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 sm:mb-12">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group border-2 border-black hover:bg-black hover:text-white text-black px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base min-h-[48px]"
                >
                  <span>Explore Technology</span>
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </div>

              {/* Stats */}
              <div ref={statsRef} className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                {stats.map((stat, index) => {
                  const numericValue = extractNumber(stat.value);
                  const { count, setIsActive } = useCounter(numericValue, 2000, index * 200);
                  
                  // Trigger animation when stats come into view
                  useEffect(() => {
                    if (isStatsInView) {
                      setIsActive(true);
                    }
                  }, [isStatsInView, setIsActive]);

                  return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="text-center lg:text-left"
                  >
                      <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black">
                        {formatValue(count, stat.value)}
                      </div>
                      <div className="text-xs sm:text-sm text-black leading-tight">{stat.label}</div>
                  </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Right Content - Robot Visualization */}
          <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative"
            >
              {/* Main Robot Image */}
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl">
                <img
                  src={ilirionRobot}
                  alt="Ilirion Humanoid Robot"
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;