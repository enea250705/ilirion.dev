import React from 'react';
import { Brain, Shield, Eye, Network, Cpu, Zap } from 'lucide-react';

const TechnologyOverview: React.FC = () => {
  const technologies = [
    {
      icon: Brain,
      title: 'AI Consciousness Engine',
      description: 'Revolutionary neural architecture that enables true machine consciousness and self-awareness.'
    },
    {
      icon: Shield,
      title: 'Advanced Safety Systems',
      description: 'Multi-layered safety protocols ensuring secure human-robot interaction in all environments.'
    },
    {
      icon: Eye,
      title: 'Vision & Perception',
      description: 'State-of-the-art computer vision systems for real-time environmental understanding.'
    },
    {
      icon: Network,
      title: 'Network Intelligence',
      description: 'Distributed AI systems enabling collective learning and knowledge sharing.'
    },
    {
      icon: Cpu,
      title: 'Quantum Processing',
      description: 'Next-generation quantum processors for unprecedented computational capabilities.'
    },
    {
      icon: Zap,
      title: 'Adaptive Learning',
      description: 'Real-time learning algorithms that continuously improve performance and adaptability.'
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-6">
            Our Technology Stack
          </h2>
          <p className="text-lg sm:text-xl text-black max-w-3xl mx-auto">
            Cutting-edge AI and robotics technologies powering the next generation of intelligent systems.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {technologies.map((tech) => (
            <div
              key={tech.title}
              className="bg-black p-6 sm:p-8 rounded-xl text-white"
            >
              <tech.icon className="h-8 w-8 mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold mb-2">{tech.title}</h3>
              <p className="text-sm sm:text-base mb-4">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyOverview;