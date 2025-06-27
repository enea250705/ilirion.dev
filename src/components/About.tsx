import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Shield, Star, Globe } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Star,
      title: 'Innovation',
      description: 'Pushing the boundaries of what\'s possible in AI and robotics.',
    },
    {
      icon: Shield,
      title: 'Safety',
      description: 'Ensuring the highest standards of safety and reliability.',
    },
    {
      icon: Building2,
      title: 'Quality',
      description: 'Delivering excellence in every product and service.',
    },
    {
      icon: Globe,
      title: 'Impact',
      description: 'Creating meaningful change through technology.',
    },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6">
            Our Vision
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-black max-w-3xl mx-auto leading-relaxed">
            To revolutionize human-AI interaction through advanced consciousness simulation and ethical robotics development.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl border-2 border-black"
            >
              <value.icon className="h-8 w-8 text-black mb-4" />
              <h3 className="text-xl font-bold text-black mb-2">{value.title}</h3>
              <p className="text-black">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6">
            Our Mission
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-black max-w-3xl mx-auto leading-relaxed">
            To develop safe, ethical, and transformative AI technologies that enhance human capabilities and advance society.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;