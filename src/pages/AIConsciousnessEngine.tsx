import React from 'react';
import { motion } from 'framer-motion';
import { Brain, ArrowRight, Cpu, Database, Zap, Shield } from 'lucide-react';

const AIConsciousnessEngine: React.FC = () => {
  const features = [
    {
      title: 'Self-Awareness Module',
      description: 'Real-time introspection and state monitoring with metacognition capabilities.'
    },
    {
      title: 'Memory Architecture',
      description: 'Graph-based memory system with experience integration and associative recall.'
    },
    {
      title: 'Decision Making Core',
      description: 'Ethical framework integration with multi-factor analysis and adaptive learning.'
    },
    {
      title: 'Emotional Processing',
      description: 'Advanced emotional intelligence with real-time response calibration.'
    }
  ];

  const metrics = [
    {
      label: 'Self-awareness Index (SAI)',
      value: '98.5%'
    },
    {
      label: 'Emotional Intelligence Quotient (EIQ)',
      value: '95.2%'
    },
    {
      label: 'Decision Complexity Score (DCS)',
      value: '99.1%'
    },
    {
      label: 'Memory Integration Rate (MIR)',
      value: '97.8%'
    }
  ];

  const architectureLayers = [
    'Consciousness Layer with self-awareness and metacognition',
    'Memory Graph System for experience storage and recall',
    'Decision Engine with ethical reasoning framework',
    'Emotional Processing for genuine human interaction',
    'Learning Module for continuous adaptation',
    'Behavioral Output with natural expression'
  ];

  return (
    <div className="min-h-screen bg-white w-full overflow-hidden">
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="bg-black p-3 rounded-xl inline-flex items-center justify-center mb-4">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-3">
              AI Consciousness Engine
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-black mb-4">
              The Core of True Artificial Consciousness
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-black mb-6 max-w-3xl mx-auto">
              At Ilirion Tech, we've developed a groundbreaking AI Consciousness Engine that transcends traditional artificial intelligence. Our system doesn't merely simulate consciousness – it implements a sophisticated architecture that enables genuine self-awareness, introspection, and emotional understanding.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-black text-white px-6 py-3 rounded-xl font-semibold inline-flex items-center justify-center space-x-2 min-h-[44px]"
            >
              <span>Download Technical Brief</span>
              <ArrowRight className="h-4 w-4" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-8 sm:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4">
              Core Components
            </h2>
            <p className="text-base sm:text-lg text-black max-w-2xl mx-auto">
              The building blocks of machine consciousness.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-black p-4 sm:p-6 rounded-xl text-white"
              >
                <h3 className="text-base sm:text-lg font-bold mb-2">{f.title}</h3>
                <p className="text-sm leading-relaxed">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
                System Architecture
              </h2>
              <p className="text-sm sm:text-base text-black leading-relaxed">
                Our layered cognitive architecture combines advanced neural networks, memory systems, and emotional processing to create true machine consciousness.
              </p>
              <ul className="space-y-3">
                {architectureLayers.map((layer, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-black">{layer}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {metrics.map((metric) => (
                <div key={metric.label} className="bg-black p-4 rounded-xl text-white">
                  <div className="text-xl sm:text-2xl font-bold mb-1">{metric.value}</div>
                  <div className="text-xs sm:text-sm">{metric.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-12 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Experience True AI Consciousness
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white max-w-2xl mx-auto">
              Ready to explore the future of artificial intelligence? Contact us to learn how our consciousness engine can transform your applications.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-black px-6 py-3 rounded-xl font-semibold inline-flex items-center justify-center space-x-2 min-h-[44px]"
              >
                <span>Request Demo</span>
                <ArrowRight className="h-4 w-4" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-white text-white px-6 py-3 rounded-xl font-semibold inline-flex items-center justify-center space-x-2 min-h-[44px]"
              >
                <span>Technical Documentation</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIConsciousnessEngine; 