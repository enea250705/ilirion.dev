import React from 'react';
import { motion } from 'framer-motion';
import { Building, ArrowRight, Briefcase, BarChart2, Shield, Users } from 'lucide-react';

const EnterpriseAI: React.FC = () => {
  const solutions = [
    {
      title: 'Process Automation',
      description: 'Intelligent automation of complex business processes with cognitive workflows and decision support.'
    },
    {
      title: 'Data Analytics',
      description: 'Advanced analytics and predictive modeling powered by our AI consciousness engine.'
    },
    {
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with built-in compliance controls and audit capabilities.'
    },
    {
      title: 'Integration Platform',
      description: 'Seamless integration with existing enterprise systems and workflows.'
    }
  ];

  const features = [
    {
      icon: Briefcase,
      title: 'Business Solutions',
      items: [
        'Workflow automation',
        'Decision support',
        'Resource optimization',
        'Risk management'
      ]
    },
    {
      icon: BarChart2,
      title: 'Analytics Platform',
      items: [
        'Predictive analytics',
        'Business intelligence',
        'Performance metrics',
        'Custom reporting'
      ]
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      items: [
        'Data encryption',
        'Access control',
        'Compliance tools',
        'Audit logging'
      ]
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      items: [
        'Multi-user access',
        'Role management',
        'Team workflows',
        'Knowledge sharing'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Operational Efficiency',
      stats: '40% reduction in processing time'
    },
    {
      title: 'Cost Savings',
      stats: '30% decrease in operational costs'
    },
    {
      title: 'Decision Accuracy',
      stats: '95% improvement in decision quality'
    },
    {
      title: 'Resource Utilization',
      stats: '50% better resource allocation'
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
              <Building className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-3 sm:mb-4">Enterprise AI Solutions</h1>
            <h2 className="text-xl sm:text-2xl font-semibold text-black mb-4 sm:mb-6">Transform Your Business with Advanced AI</h2>
            <p className="text-base sm:text-lg md:text-xl text-black mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
              Empower your enterprise with our advanced AI solutions. From process automation to predictive analytics, we provide the tools and intelligence your business needs to stay ahead in today's competitive landscape.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black hover:bg-gray-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2 mx-auto min-h-[44px]"
            >
              <span>Download Enterprise Brochure</span>
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-6">Enterprise Solutions</h2>
            <p className="text-lg sm:text-xl text-black max-w-3xl mx-auto px-4">Comprehensive AI solutions for modern enterprises.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {solutions.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-black p-6 sm:p-8 rounded-xl lg:rounded-2xl text-white"
              >
                <h3 className="text-lg sm:text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-xs sm:text-sm leading-relaxed">{s.description}</p>
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-6">Key Features</h2>
            <p className="text-lg sm:text-xl text-black max-w-3xl mx-auto px-4">Enterprise-grade capabilities for your business needs.</p>
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

      {/* Benefits */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-6">Business Impact</h2>
            <p className="text-lg sm:text-xl text-black mb-8 sm:mb-12 px-4">Real results from our enterprise implementations.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-black text-white p-6 sm:p-8 rounded-xl lg:rounded-2xl"
                >
                  <div className="text-2xl sm:text-3xl font-bold mb-2">{benefit.stats}</div>
                  <div className="text-sm sm:text-base">{benefit.title}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white mb-6 sm:mb-8 px-4">
              Discover how our AI solutions can drive efficiency, reduce costs, and accelerate your business growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white hover:bg-gray-100 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2 min-h-[44px]"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white hover:bg-white hover:text-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2 min-h-[44px]"
              >
                <span>Enterprise Pricing</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EnterpriseAI; 