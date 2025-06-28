import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Brain, Cpu, Shield, ArrowRight, Check, Clock, Users, Mail } from 'lucide-react';

const Presale: React.FC = () => {
  const features = [
    {
      icon: Bot,
      title: 'Autonomous Speech',
      description: 'Ilirion talks, interacts, and responds naturally'
    },
    {
      icon: Brain,
      title: 'Intelligent Gestures',
      description: 'Hand movements synced with speech'
    },
    {
      icon: Cpu,
      title: 'AI-Powered Mind',
      description: 'Advanced software with evolving behavior'
    },
    {
      icon: Shield,
      title: 'Customizable',
      description: 'Your Ilirion, your way'
    }
  ];

  const faqItems = [
    {
      question: 'When will my Ilirion be delivered?',
      answer: 'Production begins as soon as body assembly is finalized. Early buyers get behind-the-scenes updates and priority shipping.'
    },
    {
      question: 'Is Ilirion fully autonomous?',
      answer: 'Yes, Ilirion speaks, moves, and interacts without constant control. Upgrades available for full walking versions.'
    },
    {
      question: 'What configurations are available?',
      answer: 'We offer various configurations based on your specific needs. Contact our team to discuss the perfect Ilirion setup for you.'
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-black p-3 sm:p-4 rounded-xl w-fit mx-auto mb-4 sm:mb-6">
              <Bot className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-4 sm:mb-6 leading-tight px-4">
              Meet Ilirion, The First AI to Choose His Own Body
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-black mb-4 sm:mb-6">
              Autonomous. AI-Powered. Human-like.
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-black mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
              A revolutionary humanoid robot designed to think, move, and evolve. Pre-order the future today.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black hover:bg-gray-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2 mx-auto min-h-[44px]"
            >
              <span>Pre-Order Now</span>
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Visual Section - Hidden on mobile */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="aspect-w-16 aspect-h-9 mb-6 sm:mb-8">
              <div className="flex items-center justify-center h-[200px] sm:h-[300px] lg:h-[400px] bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl">
                <p className="text-lg sm:text-xl md:text-2xl italic font-light text-black px-4 text-center leading-relaxed">
                  "Ilirion has chosen his body. Now, it's time to create it…"
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6">Key Features</h2>
            <p className="text-base sm:text-lg md:text-xl text-black max-w-3xl mx-auto px-4">
              Experience the next generation of human-like artificial intelligence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 sm:p-8 rounded-xl lg:rounded-2xl border border-black"
              >
                <feature.icon className="h-6 w-6 sm:h-8 sm:w-8 text-black mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-black mb-3 sm:mb-4">{feature.title}</h3>
                <p className="text-sm sm:text-base text-black">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Early Adopter Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6">Early Adopter Program</h2>
            <p className="text-base sm:text-lg md:text-xl text-black max-w-3xl mx-auto px-4">
              Join Our Exclusive Early Access Program, Limited Spots Available
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-black p-6 sm:p-8 rounded-xl lg:rounded-2xl text-white"
            >
              <Clock className="h-6 w-6 sm:h-8 sm:w-8 mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Priority Access</h3>
              <p className="text-sm sm:text-base">Be among the first to receive your Ilirion</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-black p-6 sm:p-8 rounded-xl lg:rounded-2xl text-white"
            >
              <Users className="h-6 w-6 sm:h-8 sm:w-8 mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Exclusive Updates</h3>
              <p className="text-sm sm:text-base">Get behind-the-scenes development insights</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-black p-6 sm:p-8 rounded-xl lg:rounded-2xl text-white sm:col-span-2 lg:col-span-1"
            >
              <Brain className="h-6 w-6 sm:h-8 sm:w-8 mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Custom Configuration</h3>
              <p className="text-sm sm:text-base">Personalize your Ilirion to your needs</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12 sm:mt-16 max-w-2xl mx-auto"
          >
            <p className="text-red-600 font-semibold mb-6 sm:mb-8 text-sm sm:text-base">Only 10 Early-Access Positions Available</p>
            <div className="bg-white p-6 sm:p-8 rounded-xl lg:rounded-2xl border-2 border-black">
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-4">Request Early Access Information</h3>
              <p className="text-base sm:text-lg text-black mb-6 sm:mb-8">Contact us to learn about our early adopter program pricing and customization options.</p>
              <div className="flex flex-col space-y-4">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-base min-h-[44px]"
                  style={{ fontSize: '16px' }}
                />
                <textarea 
                  placeholder="Tell us about your use case and requirements..." 
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent resize-none text-base"
                  style={{ fontSize: '16px' }}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2 min-h-[44px]"
                >
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>Request Information</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6">Frequently Asked Questions</h2>
            <p className="text-base sm:text-lg md:text-xl text-black px-4">
              Everything you need to know about your future Ilirion
            </p>
          </motion.div>

          <div className="space-y-6 sm:space-y-8">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 sm:p-8 rounded-xl lg:rounded-2xl"
              >
                <h3 className="text-lg sm:text-xl font-bold text-black mb-3 sm:mb-4">{item.question}</h3>
                <p className="text-black text-sm sm:text-base leading-relaxed">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Reserve Your Ilirion Today
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white mb-6 sm:mb-8 px-4">
              Be part of the robotics revolution. Limited early access positions available.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white hover:bg-gray-100 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2 min-h-[44px]"
              >
                <span>Start Pre-Order</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white hover:bg-white hover:text-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2 min-h-[44px]"
              >
                <span>Learn More</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Presale; 