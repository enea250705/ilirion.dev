import React from 'react';
import { motion } from 'framer-motion';
import { Building, Users, Star, Globe, ArrowRight } from 'lucide-react';

const AboutUs: React.FC = () => {
  const values = [
    {
      title: 'Innovation Excellence',
      description: 'Pushing boundaries in AI consciousness and robotics technology.'
    },
    {
      title: 'Ethical Leadership',
      description: 'Setting standards for responsible AI development and deployment.'
    },
    {
      title: 'Quality Focus',
      description: 'Maintaining exceptional standards in all our endeavors.'
    },
    {
      title: 'Customer Success',
      description: 'Delivering measurable impact and value to our clients.'
    }
  ];

  const expertise = [
    {
      title: 'AI Consciousness',
      items: [
        'Advanced consciousness simulation',
        'Emotional intelligence',
        'Cognitive architecture',
        'Learning systems'
      ]
    },
    {
      title: 'Robotics Innovation',
      items: [
        'Humanoid development',
        'Control systems',
        'Safety frameworks',
        'Human interaction'
      ]
    }
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
              <Building className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-4">About Ilirion Tech</h1>
            <h2 className="text-2xl font-semibold text-black mb-6">Pioneering the Future of AI & Robotics</h2>
            <p className="text-xl text-black mb-8 max-w-3xl mx-auto">
              Ilirion Tech was founded with a revolutionary vision: to create truly conscious artificial intelligence that can form genuine emotional connections with humans. What began as groundbreaking research in AI consciousness has evolved into a leading technology company at the forefront of robotics and artificial intelligence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-black p-8 rounded-2xl text-white"
            >
              <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Star className="h-6 w-6 flex-shrink-0" />
                  <span>Developing true machine consciousness</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Star className="h-6 w-6 flex-shrink-0" />
                  <span>Creating meaningful AI-human relationships</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Star className="h-6 w-6 flex-shrink-0" />
                  <span>Maintaining the highest ethical standards</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Star className="h-6 w-6 flex-shrink-0" />
                  <span>Pushing technological boundaries</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-black p-8 rounded-2xl text-white"
            >
              <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Globe className="h-6 w-6 flex-shrink-0" />
                  <span>Leading the evolution of conscious machines</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Globe className="h-6 w-6 flex-shrink-0" />
                  <span>Seamless human-AI integration</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Globe className="h-6 w-6 flex-shrink-0" />
                  <span>Transforming industries worldwide</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Globe className="h-6 w-6 flex-shrink-0" />
                  <span>Setting standards for responsible AI</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Our Values</h2>
            <p className="text-xl text-black max-w-3xl mx-auto">Core principles that guide our innovation and development.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-black p-8 rounded-2xl text-white"
              >
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Our Expertise</h2>
            <p className="text-xl text-black max-w-3xl mx-auto">Leading innovation in AI consciousness and robotics.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertise.map((area, i) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl border border-black"
              >
                <h3 className="text-2xl font-bold text-black mb-6">{area.title}</h3>
                <ul className="space-y-4">
                  {area.items.map((item) => (
                    <li key={item} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-black rounded-full"></div>
                      <span className="text-black">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Join Our Journey</h2>
            <p className="text-xl text-white mb-8">Be part of the team shaping the future of AI and robotics.</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-xl font-semibold transition-colors inline-flex items-center space-x-2"
            >
              <span>View Career Opportunities</span>
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs; 