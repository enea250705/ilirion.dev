import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Microscope, FlaskConical, Wrench, Brain, Bot, Eye, Activity, ArrowRight, Users } from 'lucide-react';

const InnovationLab: React.FC = () => {
  const facilities = [
    {
      icon: Microscope,
      title: 'Research Labs',
      items: [
        'AI Consciousness Lab',
        'Robotics Testing Center',
        'Human Interaction Lab',
        'Safety Testing Facility',
        'Performance Lab'
      ]
    },
    {
      icon: FlaskConical,
      title: 'Specialized Equipment',
      items: [
        'Neural Computing Systems',
        'Motion Capture Suites',
        'Sensor Arrays',
        'Controlled Testing Chambers',
        '3D Visualization Platforms'
      ]
    },
    {
      icon: Wrench,
      title: 'Development Tools',
      items: [
        'Prototyping Lab',
        'Electronics Workshop',
        'Software Lab',
        'Integration Lab',
        'Quality Assurance Lab'
      ]
    }
  ];

  const innovationAreas = [
    {
      icon: Brain,
      title: 'AI Research',
      bullets: ['Consciousness Studies', 'Decision Making', 'Adaptive Learning', 'Pattern Recognition']
    },
    {
      icon: Bot,
      title: 'Robotics Research',
      bullets: ['Biomechanics', 'Control Systems', 'Human Interaction', 'Motion Planning']
    },
    {
      icon: Eye,
      title: 'Perception Research',
      bullets: ['Object Recognition', '3D Perception', 'Sensor Fusion', 'Scene Understanding']
    }
  ];

  const projects = [
    {
      icon: Activity,
      title: 'Current Projects',
      items: ['Project Alpha – Consciousness & EI', 'Project Beta – Movement & Safety']
    },
    {
      icon: Lightbulb,
      title: 'Future Initiatives',
      items: ['Project Gamma – Quantum Processing', 'Project Delta – Bio-inspired Systems']
    }
  ];

  const visitOptions = [
    'General Lab Tours',
    'Technical Visits',
    'Collaborative Workshops',
    'Research Seminars'
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="bg-black p-4 rounded-xl w-fit mx-auto mb-6">
              <Lightbulb className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-4">Innovation Lab</h1>
            <h2 className="text-2xl font-semibold text-black mb-6">Where Future Technology Takes Shape</h2>
            <p className="text-xl text-black mb-8 max-w-3xl mx-auto">
              Our state-of-the-art research facility drives breakthroughs in AI consciousness, robotics, and human-robot interaction.
            </p>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2 mx-auto">
              <span>Request Lab Tour</span>
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Core Facilities */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Advanced Research Facilities</h2>
            <p className="text-xl text-black max-w-3xl mx-auto">Everything needed to turn bold ideas into working technology.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facilities.map((fac, i) => (
              <motion.div key={fac.title} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: i * 0.1 }} viewport={{ once: true }} className="bg-black p-8 rounded-2xl text-white">
                <fac.icon className="h-8 w-8 text-white mb-4" />
                <h3 className="text-xl font-bold mb-4">{fac.title}</h3>
                <ul className="space-y-2 text-sm">
                  {fac.items.map(it => (
                    <li key={it} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Areas */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Innovation Areas</h2>
            <p className="text-xl text-black max-w-3xl mx-auto">Focused research streams driving next-generation technology.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {innovationAreas.map((area, i) => (
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

      {/* Research Projects */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Research Projects</h2>
            <p className="text-xl text-black max-w-3xl mx-auto">Pioneering projects shaping the future of AI and robotics.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((proj, i) => (
              <motion.div key={proj.title} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: i * 0.1 }} viewport={{ once: true }} className="bg-white p-8 rounded-2xl border border-black">
                <proj.icon className="h-8 w-8 text-black mb-4" />
                <h3 className="text-xl font-bold text-black mb-4">{proj.title}</h3>
                <ul className="space-y-2 text-sm text-black">
                  {proj.items.map(it => (
                    <li key={it} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit CTA */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Visit Our Innovation Lab</h2>
            <p className="text-xl text-white mb-8">Explore our facilities, meet the team, and discover collaboration opportunities.</p>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-xl font-semibold transition-colors">
              Book a Tour
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default InnovationLab; 