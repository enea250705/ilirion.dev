import React from 'react';
import { motion } from 'framer-motion';
import { Newspaper, ArrowRight, Award, Rocket, Globe, Star } from 'lucide-react';

const NewsUpdates: React.FC = () => {
  const highlights = [
    {
      title: 'Research Breakthrough',
      description: 'Major advancement in artificial consciousness development with new neural architecture.'
    },
    {
      title: 'Industry Recognition',
      description: 'Awarded top innovation prize for contributions to AI safety and ethics.'
    },
    {
      title: 'Global Expansion',
      description: 'New research centers opened in Europe and Asia to accelerate AI development.'
    },
    {
      title: 'Partnership Success',
      description: 'Strategic collaborations with leading tech companies and research institutions.'
    }
  ];

  const news = [
    {
      icon: Award,
      title: 'Awards & Recognition',
      updates: [
        'AI Innovation Award 2024',
        'Tech Pioneer Recognition',
        'Safety Excellence Prize',
        'Research Impact Award'
      ]
    },
    {
      icon: Rocket,
      title: 'Product Launches',
      updates: [
        'New AI Platform Release',
        'Enhanced Safety Systems',
        'Advanced Neural Networks',
        'Cloud Integration Tools'
      ]
    },
    {
      icon: Globe,
      title: 'Global Presence',
      updates: [
        'European Expansion',
        'Asian Market Entry',
        'Research Partnerships',
        'Global Team Growth'
      ]
    },
    {
      icon: Star,
      title: 'Achievements',
      updates: [
        'Research Milestones',
        'Industry Standards',
        'Patent Approvals',
        'Team Recognition'
      ]
    }
  ];

  const stats = [
    {
      label: 'Research Papers',
      value: '25+ Published'
    },
    {
      label: 'Global Partners',
      value: '50+ Organizations'
    },
    {
      label: 'Team Growth',
      value: '200% YoY'
    },
    {
      label: 'Market Presence',
      value: '15+ Countries'
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
              <Newspaper className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-4">News & Updates</h1>
            <h2 className="text-2xl font-semibold text-black mb-6">Latest Developments in AI Technology</h2>
            <p className="text-xl text-black mb-8 max-w-3xl mx-auto">
              Stay informed about our latest breakthroughs, achievements, and developments in artificial intelligence. From research milestones to industry recognition, discover how we're shaping the future of AI.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2 mx-auto"
            >
              <span>View All Updates</span>
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Recent Highlights</h2>
            <p className="text-xl text-black max-w-3xl mx-auto">Key achievements and milestones in our journey.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, i) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-black p-8 rounded-2xl text-white"
              >
                <h3 className="text-xl font-bold mb-3">{highlight.title}</h3>
                <p className="text-sm leading-relaxed">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News Categories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Latest Updates</h2>
            <p className="text-xl text-black max-w-3xl mx-auto">Stay informed about our progress and achievements.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {news.map((category, i) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl border border-black"
              >
                <category.icon className="h-8 w-8 text-black mb-4" />
                <h3 className="text-xl font-bold text-black mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.updates.map((update) => (
                    <li key={update} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                      <span className="text-black text-sm">{update}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Stats */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Growth & Impact</h2>
            <p className="text-xl text-black mb-12">Our progress in numbers and achievements.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {stats.map(s => (
                <div key={s.label} className="bg-black text-white p-6 rounded-xl">
                  <div className="text-3xl font-bold mb-2">{s.value}</div>
                  <div className="text-sm">{s.label}</div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Stay Updated</h2>
            <p className="text-xl text-white mb-8">Subscribe to our newsletter for the latest news and updates.</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-xl font-semibold transition-colors"
            >
              Subscribe Now
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NewsUpdates; 