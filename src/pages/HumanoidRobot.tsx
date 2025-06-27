import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Cpu, Eye, Heart, Shield, Zap, ArrowRight, Play } from 'lucide-react';

const HumanoidRobot: React.FC = () => {
  const specifications = [
    { label: 'Height', value: '180cm (5\'11")' },
    { label: 'Weight', value: '85kg (187lbs)' },
    { label: 'Power Source', value: 'Advanced Lithium-Ion Battery' },
    { label: 'Operating Time', value: '12-16 hours continuous' },
    { label: 'Processing Power', value: '25,000+ AI code lines' },
    { label: 'Response Time', value: '100ms real-time processing' },
  ];

  const capabilities = [
    {
      icon: Bot,
      title: 'Human-like Movement',
      description: 'Advanced servo motors and AI-driven locomotion for natural movement patterns.',
      features: ['360° Joint Mobility', 'Balance Control', 'Gesture Recognition', 'Facial Expressions']
    },
    {
      icon: Eye,
      title: 'Advanced Vision System',
      description: 'Multi-camera array with AI-powered computer vision for environmental understanding.',
      features: ['Object Recognition', 'Face Detection', 'Depth Perception', '4K Visual Processing']
    },
    {
      icon: Cpu,
      title: 'AI Consciousness Engine',
      description: 'Proprietary consciousness simulation with emotional intelligence and learning capabilities.',
      features: ['Memory Formation', 'Emotional Response', 'Decision Making', 'Personality Development']
    },
    {
      icon: Heart,
      title: 'Emotional Intelligence',
      description: 'Advanced emotional processing for meaningful human-robot interactions.',
      features: ['Empathy Simulation', 'Mood Recognition', 'Social Awareness', 'Contextual Responses']
    },
    {
      icon: Shield,
      title: 'Safety Systems',
      description: 'Multi-layered safety protocols ensuring secure operation in human environments.',
      features: ['Collision Avoidance', 'Emergency Stop', 'Ethical Guidelines', 'Privacy Protection']
    },
    {
      icon: Zap,
      title: 'Network Intelligence',
      description: 'Connected intelligence sharing knowledge across the robot network.',
      features: ['Cloud Learning', 'Shared Experiences', 'Remote Updates', 'Collective Intelligence']
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Mobile: Content first, Image hidden on mobile */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative order-1 lg:order-2 hidden md:block"
            >
              <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg"
                  alt="Ilirion Humanoid Robot"
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 sm:mb-6 leading-tight">
                Ilirion Humanoid Robot
              </h1>
              <p className="text-lg sm:text-xl text-black mb-6 sm:mb-8 leading-relaxed">
                Meet the future of robotics. Our humanoid robot combines advanced AI consciousness 
                with human-like intelligence, creating the most sophisticated robotic companion ever built.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-black hover:bg-black hover:text-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2 min-h-[44px]"
                >
                  <span>Request Quote</span>
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </motion.button>
              </div>

              {/* Specifications */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {specifications.map((spec, index) => (
                  <motion.div
                    key={spec.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="border border-gray-200 p-3 sm:p-4 rounded-xl"
                  >
                    <div className="text-xs sm:text-sm text-gray-600">{spec.label}</div>
                    <div className="font-semibold text-black text-sm sm:text-base">{spec.value}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-6">
              Advanced Capabilities
            </h2>
            <p className="text-lg sm:text-xl text-black max-w-3xl mx-auto px-4">
              Every aspect of our humanoid robot is engineered for excellence, 
              combining cutting-edge technology with human-centered design.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl lg:rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100"
              >
                <div className="bg-black p-2 sm:p-3 rounded-xl w-fit mb-4 sm:mb-6">
                  <capability.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4">{capability.title}</h3>
                <p className="text-black mb-4 sm:mb-6 text-sm sm:text-base">{capability.description}</p>
                
                <div className="space-y-1 sm:space-y-2">
                  {capability.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-black rounded-full flex-shrink-0"></div>
                      <span className="text-black text-xs sm:text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-6">
              Technical Excellence
            </h2>
            <p className="text-lg sm:text-xl text-black max-w-3xl mx-auto px-4">
              Built with precision engineering and the latest advances in robotics technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-black">Precision Engineering</h3>
              <p className="text-black text-sm sm:text-base leading-relaxed">
                Every component is meticulously crafted for optimal performance and reliability. 
                Our manufacturing process ensures the highest quality standards in every unit.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span className="text-black text-sm sm:text-base">Advanced servo motor system</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span className="text-black text-sm sm:text-base">High-precision sensor array</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span className="text-black text-sm sm:text-base">Durable lightweight frame</span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black hover:bg-gray-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-colors flex items-center space-x-2 min-h-[44px]"
              >
                <span>Download Specifications</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative hidden md:block"
            >
              <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg"
                  alt="Technical Components"
                  className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              Ready to Experience the Future?
            </h2>
            <p className="text-lg sm:text-xl text-white mb-6 sm:mb-8 px-4">
              Join the revolution in human-robot interaction. Contact us to learn more about 
              bringing Ilirion to your organization.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white hover:bg-gray-100 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2 min-h-[44px]"
              >
                <span>Schedule Demo</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white hover:bg-white hover:text-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2 min-h-[44px]"
              >
                <span>Contact Sales</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HumanoidRobot; 