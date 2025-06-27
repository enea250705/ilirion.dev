import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Github, Beaker, BarChart3, Download, ExternalLink } from 'lucide-react';

const Research: React.FC = () => {
  const papers = [
    {
      title: 'Implementing Artificial Consciousness in Humanoid Robotics',
      authors: 'Research Team',
      journal: 'Nature Machine Intelligence',
      year: '2025',
      citations: 247,
      abstract: 'We present a novel approach to implementing artificial consciousness in humanoid robots through multi-modal integration and real-time processing.',
      pdf: '#',
    },
    {
      title: 'Multi-Layered Safety Systems for Autonomous AI',
      authors: 'Research Team',
      journal: 'IEEE Transactions on Robotics',
      year: '2025',
      citations: 189,
      abstract: 'A comprehensive framework for ensuring safe human-AI interaction through ethical, legal, and physical safety layers.',
      pdf: '#',
    },
    {
      title: 'Emotional Intelligence in Human-Robot Interaction',
      authors: 'Research Team',
      journal: 'Journal of Human-Robot Interaction',
      year: '2025',
      citations: 156,
      abstract: 'Exploring the role of emotional intelligence in creating more natural and empathetic human-robot relationships.',
      pdf: '#',
    },
  ];

  const stats = [
    { label: 'Research Papers Published', value: '25+' },
    { label: 'Open Source Contributors', value: '100+' },
    { label: 'GitHub Stars', value: '10K+' },
    { label: 'Lines of Code', value: '25K+' },
  ];

  return (
    <section id="research" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-3 sm:mb-4 md:mb-6">
            Research & Innovation
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-black max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Advancing the frontiers of AI consciousness and robotics through rigorous research 
            and open collaboration with the global scientific community.
          </p>
        </motion.div>

        {/* Research Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 md:mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-4 sm:p-6"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-2">{stat.value}</div>
              <div className="text-xs sm:text-sm md:text-base text-black leading-tight">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Technical Papers */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8">
          {papers.map((paper, index) => (
            <motion.div
              key={paper.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 sm:p-8 rounded-xl border-2 border-black"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-black mb-2 sm:mb-0">{paper.title}</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">{paper.year}</span>
                  <span className="text-sm text-gray-600">•</span>
                  <span className="text-sm text-gray-600">{paper.citations} citations</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-2">{paper.authors}</p>
              <p className="text-sm text-gray-600 mb-4">{paper.journal}</p>
              <p className="text-black mb-4">{paper.abstract}</p>
              <div className="flex items-center space-x-4">
                <a
                  href={paper.pdf}
                  className="inline-flex items-center text-black hover:text-gray-700"
                >
                  <Download className="h-5 w-5 mr-1" />
                  <span>Download PDF</span>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center text-black hover:text-gray-700"
                >
                  <ExternalLink className="h-5 w-5 mr-1" />
                  <span>View Online</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;