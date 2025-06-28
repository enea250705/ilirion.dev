import React from 'react';
import { motion } from 'framer-motion';
import { Users, Compass, Server, FileText, BarChart2, Activity, Building, Heart, ShoppingCart, ClipboardList, ArrowRight } from 'lucide-react';

const AIConsulting: React.FC = () => {
  const coreServices = [
    {
      icon: Compass,
      title: 'Strategic Planning',
      points: [
        'AI strategy & roadmap',
        'Digital transformation',
        'Innovation planning',
        'Risk & ROI analysis'
      ]
    },
    {
      icon: Server,
      title: 'Technical Consulting',
      points: [
        'Architecture design',
        'Technology selection',
        'Implementation planning',
        'Performance optimization'
      ]
    },
    {
      icon: BarChart2,
      title: 'Business Analysis',
      points: [
        'Process assessment',
        'Requirements analysis',
        'Impact evaluation',
        'Change management'
      ]
    }
  ];

  const serviceAreas = [
    {
      icon: Compass,
      title: 'Strategic Services',
      bullets: [
        'AI Strategy Development',
        'Digital Transformation',
        'Goal Setting & Metrics',
        'Innovation Planning'
      ]
    },
    {
      icon: Server,
      title: 'Technical Services',
      bullets: [
        'Architecture Design',
        'Implementation Support',
        'Quality Assurance',
        'Scalability Planning'
      ]
    },
    {
      icon: BarChart2,
      title: 'Business Services',
      bullets: [
        'Process Optimization',
        'Cost Reduction',
        'Change Management',
        'Performance Metrics'
      ]
    }
  ];

  const industries = [
    {
      icon: Activity,
      title: 'Financial Services',
      bullets: ['Risk analysis', 'Fraud detection', 'Process automation', 'Customer service']
    },
    {
      icon: Building,
      title: 'Manufacturing',
      bullets: ['Process automation', 'Quality control', 'Predictive maintenance', 'Industry 4.0']
    },
    {
      icon: Heart,
      title: 'Healthcare',
      bullets: ['Patient care', 'Diagnostic support', 'Operations management', 'Compliance']
    },
    {
      icon: ShoppingCart,
      title: 'Retail',
      bullets: ['Personalization', 'Inventory management', 'Market analysis', 'Omnichannel']
    }
  ];

  const deliverables = [
    'Strategy Documents',
    'Technical Specifications',
    'Architecture Designs',
    'ROI & Analysis Reports',
    'Implementation Roadmaps'
  ];

  const engagementModels = [
    {
      title: 'Strategic Consulting',
      description: 'Long-term partnership providing comprehensive guidance and continuous assessment.'
    },
    {
      title: 'Project-Based Consulting',
      description: 'Focused engagement for specific initiatives with defined scope and deliverables.'
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="bg-black p-4 rounded-xl w-fit mx-auto mb-6">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-4">AI Consulting Services</h1>
            <h2 className="text-2xl font-semibold text-black mb-6">Expert Guidance for AI Transformation</h2>
            <p className="text-xl text-black mb-8 max-w-3xl mx-auto">
              Leverage Ilirion Tech's deep experience in AI consciousness, robotics, and enterprise solutions to unlock transformative business value.
            </p>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2 mx-auto">
              <span>Schedule Consultation</span>
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Core Services</h2>
            <p className="text-xl text-black max-w-3xl mx-auto">Strategic planning, technical expertise, and business insight, all in one partnership.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreServices.map((svc, i) => (
              <motion.div key={svc.title} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: i * 0.1 }} viewport={{ once: true }} className="bg-black p-8 rounded-2xl text-white">
                <svc.icon className="h-8 w-8 text-white mb-4" />
                <h3 className="text-xl font-bold mb-4">{svc.title}</h3>
                <ul className="space-y-2 text-sm">
                  {svc.points.map(p => (
                    <li key={p} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Service Areas</h2>
            <p className="text-xl text-black max-w-3xl mx-auto">Comprehensive support across strategy, technology, and business domains.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceAreas.map((area, i) => (
              <motion.div key={area.title} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: i * 0.1 }} viewport={{ once: true }} className="bg-white p-8 rounded-2xl border border-black">
                <area.icon className="h-8 w-8 text-black mb-4" />
                <h3 className="text-xl font-bold text-black mb-4">{area.title}</h3>
                <ul className="space-y-2 text-sm text-black">
                  {area.bullets.map(b => (
                    <li key={b} className="flex items-center space-x-2">
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

      {/* Industry Expertise */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Industry Expertise</h2>
            <p className="text-xl text-black max-w-3xl mx-auto">Proven success across diverse sectors.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((ind, i) => (
              <motion.div key={ind.title} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: i * 0.1 }} viewport={{ once: true }} className="bg-white p-8 rounded-2xl border border-black">
                <ind.icon className="h-8 w-8 text-black mb-4" />
                <h3 className="text-xl font-bold text-black mb-4">{ind.title}</h3>
                <ul className="space-y-2 text-sm text-black">
                  {ind.bullets.map(b => (
                    <li key={b} className="flex items-center space-x-2">
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

      {/* Deliverables & Engagement */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Key Deliverables</h2>
            <ul className="space-y-4 text-black">
              {deliverables.map(d => (
                <li key={d} className="flex items-center space-x-3">
                  <FileText className="h-5 w-5" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="space-y-8">
            {engagementModels.map(em => (
              <div key={em.title} className="border border-black p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-black mb-3">{em.title}</h3>
                <p className="text-sm text-black leading-relaxed">{em.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Begin Your AI Transformation</h2>
            <p className="text-xl text-white mb-8">Contact our consulting team to discuss your goals and challenges.</p>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-xl font-semibold transition-colors">
              Get Started
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIConsulting; 