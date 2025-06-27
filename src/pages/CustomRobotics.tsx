import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Bot, Brain, Users, Building, Heart, Microscope, Cpu, Shield, ArrowRight } from 'lucide-react';

const CustomRobotics: React.FC = () => {
  const coreCapabilities = [
    {
      icon: Bot,
      title: 'Robotics Platforms',
      items: [
        'Humanoid Robots',
        'Industrial Automation',
        'Service & Collaborative Robots',
        'Mobile Autonomous Platforms'
      ]
    },
    {
      icon: Brain,
      title: 'Intelligence Systems',
      items: [
        'Consciousness Integration',
        'Emotional Intelligence',
        'Learning & Adaptation',
        'Autonomous Decision Making'
      ]
    },
    {
      icon: Settings,
      title: 'Custom Development',
      items: [
        'Hardware Design',
        'Control Systems',
        'Sensor Integration',
        'Interface Development'
      ]
    }
  ];

  const solutions = [
    {
      icon: Building,
      title: 'Industrial Robotics',
      bullets: [
        'Assembly automation',
        'Quality inspection',
        'Material handling',
        'Warehouse optimization'
      ]
    },
    {
      icon: Heart,
      title: 'Healthcare Robotics',
      bullets: [
        'Surgical support',
        'Patient care & monitoring',
        'Rehabilitation assistance',
        'Laboratory automation'
      ]
    },
    {
      icon: Users,
      title: 'Service Robotics',
      bullets: [
        'Customer interaction',
        'Facility management',
        'Security patrols',
        'Cleaning automation'
      ]
    },
    {
      icon: Microscope,
      title: 'Research Robotics',
      bullets: [
        'Custom testbeds',
        'Prototype platforms',
        'Experiment automation',
        'Data collection'
      ]
    }
  ];

  const technical = [
    {
      icon: Cpu,
      title: 'Hardware Architecture',
      points: [
        'Custom actuators & precision joints',
        'Modular mechanical design',
        'Real-time control systems',
        'Redundant safety hardware'
      ]
    },
    {
      icon: Brain,
      title: 'AI Software Stack',
      points: [
        'Consciousness simulation engine',
        'Multi-modal perception',
        'Continuous learning',
        'Ethical decision framework'
      ]
    }
  ];

  const safetyCompliance = [
    'ISO/IEC 27001 Information Security',
    'ISO 13482 Robot Safety',
    'IEC 61508 Functional Safety',
    'Comprehensive risk assessment & documentation'
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-black p-4 rounded-xl w-fit mx-auto mb-6">
              <Settings className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-4">Custom Robotics Solutions</h1>
            <h2 className="text-2xl font-semibold text-black mb-6">Advanced Robotics Tailored to Your Needs</h2>
            <p className="text-xl text-black mb-8 max-w-3xl mx-auto">
              Ilirion Tech combines cutting-edge AI consciousness with precision engineering to build intelligent robots perfectly suited to your unique requirements.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2 mx-auto"
            >
              <span>Request Consultation</span>
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Core Capabilities</h2>
            <p className="text-xl text-black max-w-3xl mx-auto">From platforms to intelligence ,  everything you need for a bespoke robot.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreCapabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-black p-8 rounded-2xl text-white"
              >
                <cap.icon className="h-8 w-8 text-white mb-4" />
                <h3 className="text-xl font-bold mb-4">{cap.title}</h3>
                <ul className="space-y-2">
                  {cap.items.map((item) => (
                    <li key={item} className="flex items-center space-x-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Custom Solutions</h2>
            <p className="text-xl text-black max-w-3xl mx-auto">Tailored robotics for every industry vertical.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((sol, i) => (
              <motion.div
                key={sol.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl border border-black"
              >
                <sol.icon className="h-8 w-8 text-black mb-4" />
                <h3 className="text-xl font-bold text-black mb-4">{sol.title}</h3>
                <ul className="space-y-2">
                  {sol.bullets.map((b) => (
                    <li key={b} className="flex items-center space-x-2 text-sm text-black">
                      <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Excellence */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Technical Excellence</h2>
            <p className="text-xl text-black max-w-3xl mx-auto">Combining robust hardware with conscious AI.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technical.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl border border-black"
              >
                <t.icon className="h-8 w-8 text-black mb-4" />
                <h3 className="text-xl font-bold text-black mb-4">{t.title}</h3>
                <ul className="space-y-2">
                  {t.points.map((p) => (
                    <li key={p} className="flex items-center space-x-2 text-sm text-black">
                      <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Compliance */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Safety & Compliance</h2>
            <p className="text-xl text-black mb-8">Built to the highest international standards.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {safetyCompliance.map((sc) => (
                <div key={sc} className="bg-black text-white p-6 rounded-xl text-sm font-medium">
                  {sc}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Start Your Custom Robotics Journey</h2>
            <p className="text-xl text-white mb-8">Schedule a consultation to discuss your unique robotics requirements.</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-xl font-semibold transition-colors"
            >
              Schedule Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CustomRobotics; 