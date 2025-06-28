import React from 'react';
import { motion } from 'framer-motion';
import { Building2, FlaskConical, Settings, Users, ArrowRight } from 'lucide-react';
import ilirionVideo from '../assets/ilirion.mp4';

const Solutions: React.FC = () => {
  const solutions = [
    {
      icon: Building2,
      title: 'Enterprise AI',
      description: 'Transform your business operations with intelligent automation and AI-powered workflows.',
      features: ['24/7 Availability', 'Consistent Service Quality', 'Scalable Intelligence', 'Cost Efficiency'],
      applications: ['Customer Service Robots', 'Training & Education', 'Security & Monitoring'],
      image: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg',
    },
    {
      icon: FlaskConical,
      title: 'Research & Development',
      description: 'Partner with us to push the boundaries of robotics and AI research for breakthrough innovations.',
      features: ['University Partnerships', 'Open Source Contributions', 'Joint Development', 'Grant Funding'],
      applications: ['Academic Collaboration', 'Government Projects', 'Healthcare Research'],
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
    },
    {
      icon: Settings,
      title: 'Custom Robotics',
      description: 'Bespoke robotic solutions tailored to your specific industry requirements and challenges.',
      features: ['Custom Design', 'Rapid Prototyping', 'Integration Support', 'Maintenance'],
      applications: ['Manufacturing', 'Healthcare', 'Hospitality'],
      image: 'https://images.pexels.com/photos/8386369/pexels-photo-8386369.jpeg',
    },
    {
      icon: Users,
      title: 'AI Consulting',
      description: 'Strategic consulting services to help you navigate the AI transformation journey.',
      features: ['Strategy Development', 'Implementation Planning', 'Team Training', 'ROI Analysis'],
      applications: ['Digital Transformation', 'AI Strategy', 'Technology Assessment'],
      image: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg',
    },
  ];

  return (
    <section id="solutions" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="w-full overflow-hidden">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 md:mb-16 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center overflow-hidden"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-3 sm:mb-4 md:mb-6">
              Solutions for Every Industry
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-black max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              From enterprise automation to cutting-edge research, we provide comprehensive 
              solutions that drive innovation and efficiency across all sectors.
            </p>
          </motion.div>
        </div>

        {/* Full-width video section */}
        <div className="w-full mb-8 sm:mb-12 md:mb-16 relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="w-full overflow-hidden"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
            >
              <source src={ilirionVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 pointer-events-none">
              {/* Top shadow (optional) */}
              <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/20 to-transparent"></div>
              {/* Bottom shadow - enhanced with multiple gradient stops */}
              <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white via-white/95 to-transparent"></div>
            </div>
          </motion.div>
        </div>

        {/* Solutions Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="space-y-12 sm:space-y-16 lg:space-y-20">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center overflow-hidden ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} order-2 lg:order-1`}>
                  <div className="bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl w-fit mb-4 sm:mb-6 border-2 border-black">
                    <solution.icon className="h-6 w-6 sm:h-8 sm:w-8 text-black" />
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-3 sm:mb-4">{solution.title}</h3>
                  <p className="text-gray-600 mt-2 flex-grow">{solution.description}</p>
                  
                  {/* Key Benefits */}
                  <div className="mb-4 sm:mb-6">
                    <h4 className="font-semibold text-black mb-2 sm:mb-3 text-sm sm:text-base">Key Benefits</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                      {solution.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-black rounded-full flex-shrink-0"></div>
                          <span className="text-black text-xs sm:text-sm md:text-base">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Applications */}
                  <div className="mb-6 sm:mb-8">
                    <h4 className="font-semibold text-black mb-2 sm:mb-3 text-sm sm:text-base">Applications</h4>
                    <div className="flex flex-wrap gap-2">
                      {solution.applications.map((app) => (
                        <span
                          key={app}
                          className="bg-black text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Image - Hidden on mobile */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} order-1 lg:order-2 hidden md:block`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                  >
                    <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl">
                      <img
                        src={solution.image}
                        alt={solution.title}
                        className="w-full h-48 sm:h-64 md:h-80 lg:h-[400px] object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    
                    {/* Floating Stats */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 }}
                      className="absolute bottom-4 right-4 bg-black p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl shadow-xl border border-gray-800"
                    >
                      <div className="text-lg sm:text-xl md:text-2xl font-bold text-white">99.9%</div>
                      <div className="text-xs sm:text-sm text-white">Success Rate</div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;