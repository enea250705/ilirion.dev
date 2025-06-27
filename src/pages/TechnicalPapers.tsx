import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ArrowRight, Brain, Cpu, Shield, Network } from 'lucide-react';

const TechnicalPapers: React.FC = () => {
  const categories = [
    {
      title: 'AI Consciousness',
      description: 'Research papers exploring artificial consciousness and cognitive architectures.'
    },
    {
      title: 'Neural Systems',
      description: 'Studies on advanced neural networks and brain-inspired computing.'
    },
    {
      title: 'Safety & Ethics',
      description: 'Papers addressing AI safety protocols and ethical considerations.'
    },
    {
      title: 'System Architecture',
      description: 'Technical documentation on AI system design and implementation.'
    }
  ];

  const papers = [
    {
      icon: Brain,
      title: 'Consciousness Research',
      publications: [
        'Emergent Properties in Neural Networks',
        'Self-Awareness in AI Systems',
        'Cognitive Processing Models',
        'Consciousness Metrics'
      ]
    },
    {
      icon: Cpu,
      title: 'Neural Architecture',
      publications: [
        'Advanced Neural Networks',
        'Memory Systems Design',
        'Learning Algorithms',
        'Processing Optimization'
      ]
    },
    {
      icon: Shield,
      title: 'Safety Protocols',
      publications: [
        'Ethical AI Framework',
        'Safety Mechanisms',
        'Risk Assessment',
        'Compliance Standards'
      ]
    },
    {
      icon: Network,
      title: 'System Integration',
      publications: [
        'Distributed Systems',
        'Network Architecture',
        'Data Processing',
        'Performance Analysis'
      ]
    }
  ];

  const metrics = [
    {
      label: 'Published Papers',
      value: '150+'
    },
    {
      label: 'Citations',
      value: '5000+'
    },
    {
      label: 'Research Impact',
      value: 'H-index 45'
    },
    {
      label: 'Active Research',
      value: '25 Projects'
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
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-4">Technical Papers</h1>
            <h2 className="text-2xl font-semibold text-black mb-6">Leading Research in AI Technology</h2>
            <p className="text-xl text-black mb-8 max-w-3xl mx-auto">
              Explore our collection of peer-reviewed research papers and technical documentation. Our publications cover groundbreaking advances in artificial consciousness, neural systems, and AI safety.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2 mx-auto"
            >
              <span>Browse Publications</span>
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Research Categories</h2>
            <p className="text-xl text-black max-w-3xl mx-auto">Comprehensive research across key AI domains.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, i) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-black p-8 rounded-2xl text-white"
              >
                <h3 className="text-xl font-bold mb-3">{category.title}</h3>
                <p className="text-sm leading-relaxed">{category.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Latest Publications</h2>
            <p className="text-xl text-black max-w-3xl mx-auto">Recent advances in AI research and development.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {papers.map((paper, i) => (
              <motion.div
                key={paper.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl border border-black"
              >
                <paper.icon className="h-8 w-8 text-black mb-4" />
                <h3 className="text-xl font-bold text-black mb-4">{paper.title}</h3>
                <ul className="space-y-2">
                  {paper.publications.map((pub) => (
                    <li key={pub} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                      <span className="text-black text-sm">{pub}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Impact */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Research Impact</h2>
            <p className="text-xl text-black mb-12">Our contributions to the scientific community.</p>
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Access Our Research</h2>
            <p className="text-xl text-white mb-8">Get full access to our research papers and technical documentation.</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-xl font-semibold transition-colors"
            >
              Request Access
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TechnicalPapers; 