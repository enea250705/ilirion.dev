import React from 'react';
import { motion } from 'framer-motion';
import { Users, ArrowRight, Briefcase, Star, Heart, Target } from 'lucide-react';

const Careers: React.FC = () => {
  const benefits = [
    {
      title: 'Innovation Focus',
      description: 'Work on cutting-edge AI technology and shape the future of artificial consciousness.'
    },
    {
      title: 'Growth & Learning',
      description: 'Continuous learning opportunities with access to advanced research and development resources.'
    },
    {
      title: 'Global Impact',
      description: 'Contribute to transformative AI solutions that are changing industries worldwide.'
    },
    {
      title: 'Work-Life Balance',
      description: 'Flexible work arrangements and comprehensive wellness programs for our team.'
    }
  ];

  const departments = [
    {
      icon: Briefcase,
      title: 'Engineering',
      positions: [
        'AI Research Scientist',
        'Senior Software Engineer',
        'Robotics Engineer',
        'Systems Architect'
      ]
    },
    {
      icon: Star,
      title: 'Product Development',
      positions: [
        'Product Manager',
        'UX Designer',
        'Technical Lead',
        'QA Engineer'
      ]
    },
    {
      icon: Heart,
      title: 'Operations',
      positions: [
        'Project Manager',
        'Business Analyst',
        'Operations Lead',
        'Support Specialist'
      ]
    },
    {
      icon: Target,
      title: 'Business Development',
      positions: [
        'Sales Engineer',
        'Account Manager',
        'Marketing Lead',
        'Strategy Consultant'
      ]
    }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We push boundaries and embrace new ideas.'
    },
    {
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do.'
    },
    {
      title: 'Collaboration',
      description: 'We work together to achieve extraordinary results.'
    },
    {
      title: 'Impact',
      description: 'We create meaningful change through our work.'
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
              <Users className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-4">Join Our Team</h1>
            <h2 className="text-2xl font-semibold text-black mb-6">Shape the Future of AI Technology</h2>
            <p className="text-xl text-black mb-8 max-w-3xl mx-auto">
              At Ilirion Tech, we're building the next generation of artificial intelligence. Join our team of innovators, researchers, and engineers in creating transformative AI solutions that push the boundaries of what's possible.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2 mx-auto"
            >
              <span>View Open Positions</span>
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Why Join Us</h2>
            <p className="text-xl text-black max-w-3xl mx-auto">Experience a career that combines innovation with impact.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-black p-8 rounded-2xl text-white"
              >
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Open Positions</h2>
            <p className="text-xl text-black max-w-3xl mx-auto">Find your perfect role in our growing team.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {departments.map((dept, i) => (
              <motion.div
                key={dept.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl border border-black"
              >
                <dept.icon className="h-8 w-8 text-black mb-4" />
                <h3 className="text-xl font-bold text-black mb-4">{dept.title}</h3>
                <ul className="space-y-2">
                  {dept.positions.map((position) => (
                    <li key={position} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                      <span className="text-black text-sm">{position}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Our Values</h2>
            <p className="text-xl text-black mb-12">The principles that guide our work and culture.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map(v => (
                <div key={v.title} className="bg-black text-white p-6 rounded-xl">
                  <div className="text-2xl font-bold mb-2">{v.title}</div>
                  <div className="text-sm">{v.description}</div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Start Your Journey</h2>
            <p className="text-xl text-white mb-8">Apply now and be part of our mission to advance AI technology.</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-xl font-semibold transition-colors"
            >
              Apply Now
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers; 