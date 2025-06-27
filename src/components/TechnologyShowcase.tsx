import React from 'react';
import { Brain, Shield, Eye, Network, Cpu, Zap } from 'lucide-react';

const TechnologyShowcase: React.FC = () => {
  const technologies = [
    {
      icon: Brain,
      title: 'AI Consciousness Engine',
      description: 'Revolutionary neural architecture that enables true machine consciousness and self-awareness.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
    },
    {
      icon: Shield,
      title: 'Advanced Safety Systems',
      description: 'Multi-layered safety protocols ensuring secure human-robot interaction in all environments.',
      image: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg',
    },
    {
      icon: Eye,
      title: 'Vision & Perception',
      description: 'State-of-the-art computer vision systems for real-time environmental understanding.',
      image: 'https://images.pexels.com/photos/8386369/pexels-photo-8386369.jpeg',
    },
    {
      icon: Network,
      title: 'Network Intelligence',
      description: 'Distributed AI systems enabling collective learning and knowledge sharing.',
      image: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg',
    },
    {
      icon: Cpu,
      title: 'Quantum Processing',
      description: 'Next-generation quantum processors for unprecedented computational capabilities.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
    },
    {
      icon: Zap,
      title: 'Adaptive Learning',
      description: 'Real-time learning algorithms that continuously improve performance and adaptability.',
      image: 'https://images.pexels.com/photos/8386369/pexels-photo-8386369.jpeg',
    },
  ];

  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Breakthrough Technologies
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our cutting-edge innovations push the boundaries of what's possible in robotics and artificial intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={tech.title}
              className="group bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-750 transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative h-48 overflow-hidden hidden md:block">
                <img
                  src={tech.image}
                  alt={tech.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <tech.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
              
              {/* Mobile icon - shown only on mobile */}
              <div className="md:hidden p-6 pb-0">
                <div className="bg-blue-600 p-3 rounded-lg w-fit">
                  <tech.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{tech.title}</h3>
                <p className="text-gray-400 leading-relaxed">{tech.description}</p>
              </div>


            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyShowcase;