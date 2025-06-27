import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ArrowRight, Lock, Brain, AlertTriangle } from 'lucide-react';

const SafetySystems: React.FC = () => {
  const layers = [
    {
      title: 'Physical Safety',
      description: 'Emergency protocols, movement safety, force control, and environmental awareness with redundant hardware failsafes.'
    },
    {
      title: 'Cognitive Safety',
      description: 'Ethical decision framework, behavioral boundaries, decision validation, and real-time consciousness monitoring.'
    },
    {
      title: 'System Security',
      description: 'Multi-level authentication, end-to-end encryption, secure communication protocols, and intrusion detection.'
    },
    {
      title: 'Emergency Response',
      description: 'Instant shutdown capabilities, backup power systems, safe state fallback, and human override controls.'
    }
  ];

  const certifications = [
    'ISO/IEC 27001 Information Security',
    'ISO 13482 Robot Safety',
    'IEC 61508 Functional Safety',
    'ISO/IEC 15408 Common Criteria'
  ];

  const features = [
    {
      icon: Shield,
      title: 'Collision Avoidance',
      items: [
        '360° sensor coverage',
        'Predictive movement analysis',
        'Dynamic safety zones',
        'Adaptive force control'
      ]
    },
    {
      icon: Brain,
      title: 'Ethical Framework',
      items: [
        'Value alignment',
        'Moral reasoning',
        'Decision validation',
        'Behavioral constraints'
      ]
    },
    {
      icon: Lock,
      title: 'Data Protection',
      items: [
        'End-to-end encryption',
        'Secure storage',
        'Access control',
        'Audit logging'
      ]
    },
    {
      icon: AlertTriangle,
      title: 'Emergency Systems',
      items: [
        'Instant shutdown',
        'Backup power',
        'Safe state fallback',
        'Override controls'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-16 sm:pt-20">
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-black p-3 sm:p-4 rounded-xl w-fit mx-auto mb-4 sm:mb-6">
              <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-3 sm:mb-4">Safety Systems</h1>
            <h2 className="text-xl sm:text-2xl font-semibold text-black mb-4 sm:mb-6">Advanced Protection for AI and Robotics</h2>
            <p className="text-base sm:text-lg md:text-xl text-black mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
              At Ilirion Tech, safety isn't just a feature – it's the foundation of everything we build. Our multi-layered safety system ensures responsible AI development and deployment, protecting both users and AI systems while maintaining optimal performance.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black hover:bg-gray-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2 mx-auto min-h-[44px]"
            >
              <span>Download Safety Whitepaper</span>
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Layer Grid */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-6">Safety Architecture</h2>
            <p className="text-lg sm:text-xl text-black max-w-3xl mx-auto px-4">Comprehensive protection through multiple safety layers.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {layers.map((l, i) => (
              <motion.div
                key={l.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-black p-6 sm:p-8 rounded-xl lg:rounded-2xl text-white"
              >
                <h3 className="text-lg sm:text-xl font-bold mb-3">{l.title}</h3>
                <p className="text-xs sm:text-sm leading-relaxed">{l.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-6">Safety Features</h2>
            <p className="text-lg sm:text-xl text-black max-w-3xl mx-auto px-4">Comprehensive protection for human-safe operation.</p>
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
                <ul className="space-y-1 sm:space-y-2">
                  {feature.items.map((item) => (
                    <li key={item} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-black rounded-full flex-shrink-0"></div>
                      <span className="text-black text-xs sm:text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-6">International Certifications</h2>
            <p className="text-lg sm:text-xl text-black mb-8 sm:mb-12 px-4">Meeting the world's most stringent safety standards.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {certifications.map(c => (
                <div key={c} className="bg-black text-white p-4 sm:p-6 rounded-xl font-medium text-sm sm:text-base">{c}</div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              Safety First, Innovation Always
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white mb-6 sm:mb-8 px-4">
              Experience the future of AI with complete confidence. Our safety systems ensure responsible innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white hover:bg-gray-100 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2 min-h-[44px]"
              >
                <span>Safety Consultation</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white hover:bg-white hover:text-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2 min-h-[44px]"
              >
                <span>Certification Details</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SafetySystems; 