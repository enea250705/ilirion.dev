import React from 'react';
import { motion } from 'framer-motion';
import { Network, ArrowRight, Globe, Cpu, Lock, Zap } from 'lucide-react';

const NetworkIntelligence: React.FC = () => {
  const capabilities = [
    {
      title: 'Distributed Learning',
      description: 'Federated learning system that enables AI systems to share knowledge while maintaining data privacy.'
    },
    {
      title: 'Swarm Intelligence',
      description: 'Coordinated behavior and decision-making across multiple AI units for enhanced problem-solving.'
    },
    {
      title: 'Secure Communication',
      description: 'End-to-end encrypted data exchange with quantum-resistant cryptography for future-proof security.'
    },
    {
      title: 'Adaptive Networking',
      description: 'Self-optimizing network protocols that adapt to changing conditions and requirements.'
    }
  ];

  const features = [
    {
      icon: Globe,
      title: 'Global Network',
      items: [
        'Worldwide coverage',
        'Low-latency connections',
        'Edge computing',
        'Cloud integration'
      ]
    },
    {
      icon: Cpu,
      title: 'Processing Power',
      items: [
        'Distributed computing',
        'Load balancing',
        'Resource optimization',
        'Parallel processing'
      ]
    },
    {
      icon: Lock,
      title: 'Security Protocol',
      items: [
        'Quantum encryption',
        'Access control',
        'Threat detection',
        'Data protection'
      ]
    },
    {
      icon: Zap,
      title: 'Performance',
      items: [
        'Real-time sync',
        'High availability',
        'Fault tolerance',
        'Auto-scaling'
      ]
    }
  ];

  const metrics = [
    {
      label: 'Network Uptime',
      value: '99.999%'
    },
    {
      label: 'Global Latency',
      value: '<10ms'
    },
    {
      label: 'Data Throughput',
      value: '100Gb/s'
    },
    {
      label: 'Node Coverage',
      value: '1000+'
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-black p-4 rounded-xl w-fit mx-auto mb-6">
              <Network className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-4">Network Intelligence</h1>
            <h2 className="text-2xl font-semibold text-black mb-6">Distributed AI Systems Working in Perfect Harmony</h2>
            <p className="text-xl text-black mb-8 max-w-3xl mx-auto">
              Our Network Intelligence platform enables AI systems to communicate, learn, and evolve together. Through advanced distributed computing and secure data sharing, we create a powerful network of interconnected intelligence that grows stronger with every interaction.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2 mx-auto"
            >
              <span>Download Network Overview</span>
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Grid */}
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
            <p className="text-xl text-black max-w-3xl mx-auto">Advanced networking features for collective intelligence.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-black p-8 rounded-2xl text-white"
              >
                <h3 className="text-xl font-bold mb-3">{c.title}</h3>
                <p className="text-sm leading-relaxed">{c.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">System Components</h2>
            <p className="text-xl text-black max-w-3xl mx-auto">Integrated infrastructure for seamless AI networking.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl border border-black"
              >
                <feature.icon className="h-8 w-8 text-black mb-4" />
                <h3 className="text-xl font-bold text-black mb-4">{feature.title}</h3>
                <ul className="space-y-2">
                  {feature.items.map((item) => (
                    <li key={item} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                      <span className="text-black text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Network Performance</h2>
            <p className="text-xl text-black mb-12">Industry-leading reliability and speed in distributed AI operations.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {metrics.map(m => (
                <div key={m.label} className="bg-black text-white p-6 rounded-xl">
                  <div className="text-3xl font-bold mb-2">{m.value}</div>
                  <div className="text-sm">{m.label}</div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Experience Network Intelligence</h2>
            <p className="text-xl text-white mb-8">Schedule a demonstration of our distributed AI capabilities.</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-xl font-semibold transition-colors"
            >
              Request Demo
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NetworkIntelligence; 