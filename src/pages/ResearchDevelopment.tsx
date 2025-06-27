import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, ArrowRight, Brain, Lightbulb, Atom, BookOpen } from 'lucide-react';

const ResearchDevelopment: React.FC = () => {
  const areas = [
    {
      title: 'Consciousness Research',
      description: 'Pioneering research into artificial consciousness and self-aware AI systems.'
    },
    {
      title: 'Cognitive Architecture',
      description: 'Development of advanced neural architectures for human-like reasoning and learning.'
    },
    {
      title: 'Ethical AI',
      description: 'Research into ethical frameworks and moral decision-making for autonomous systems.'
    },
    {
      title: 'Applied Innovation',
      description: 'Practical applications of cutting-edge AI research in real-world scenarios.'
    }
  ];

  const publications = [
    {
      icon: Brain,
      title: 'Neural Systems',
      papers: [
        'Emergent Consciousness in Deep Networks',
        'Self-Organizing Memory Systems',
        'Adaptive Learning Architectures',
        'Cognitive Processing Models'
      ]
    },
    {
      icon: Lightbulb,
      title: 'Innovation Research',
      papers: [
        'Next-Gen AI Systems',
        'Quantum AI Integration',
        'Distributed Intelligence',
        'Autonomous Learning'
      ]
    },
    {
      icon: Atom,
      title: 'Core Science',
      papers: [
        'Consciousness Theory',
        'Neural Foundations',
        'Quantum Computing',
        'System Architecture'
      ]
    },
    {
      icon: BookOpen,
      title: 'Applied Research',
      papers: [
        'Industrial Applications',
        'Healthcare Solutions',
        'Security Systems',
        'Enterprise Integration'
      ]
    }
  ];

  const metrics = [
    {
      label: 'Research Papers',
      value: '200+'
    },
    {
      label: 'Patents Filed',
      value: '50+'
    },
    {
      label: 'Research Partners',
      value: '25+'
    },
    {
      label: 'Active Projects',
      value: '15'
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
              <Microscope className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-4">Research & Development</h1>
            <h2 className="text-2xl font-semibold text-black mb-6">Advancing the Frontiers of AI Technology</h2>
            <p className="text-xl text-black mb-8 max-w-3xl mx-auto">
              Our research and development team is dedicated to pushing the boundaries of artificial intelligence and consciousness. Through groundbreaking research and innovative development, we're shaping the future of intelligent systems.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2 mx-auto"
            >
              <span>View Research Papers</span>
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Research Areas</h2>
            <p className="text-xl text-black max-w-3xl mx-auto">Exploring the frontiers of artificial intelligence.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {areas.map((area, i) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-black p-8 rounded-2xl text-white"
              >
                <h3 className="text-xl font-bold mb-3">{area.title}</h3>
                <p className="text-sm leading-relaxed">{area.description}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Research Publications</h2>
            <p className="text-xl text-black max-w-3xl mx-auto">Leading research across multiple disciplines.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {publications.map((pub, i) => (
              <motion.div
                key={pub.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl border border-black"
              >
                <pub.icon className="h-8 w-8 text-black mb-4" />
                <h3 className="text-xl font-bold text-black mb-4">{pub.title}</h3>
                <ul className="space-y-2">
                  {pub.papers.map((paper) => (
                    <li key={paper} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                      <span className="text-black text-sm">{paper}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Metrics */}
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
            <p className="text-xl text-black mb-12">Our contributions to the field of artificial intelligence.</p>
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Join Our Research Team</h2>
            <p className="text-xl text-white mb-8">Explore opportunities to contribute to groundbreaking AI research.</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-xl font-semibold transition-colors"
            >
              View Opportunities
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ResearchDevelopment; 