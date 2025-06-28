import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const HumanoidRobot: React.FC = () => {
  const capabilities = [
    'Advanced bipedal locomotion with dynamic balance',
    'Dexterous manipulation with 15-DOF hands',
    'Natural language processing and conversation',
    'Real-time environmental mapping and navigation',
    'Autonomous task planning and execution',
    'Emotional intelligence and social interaction',
  ];

  const specifications = [
    { label: 'Height', value: '180 cm' },
    { label: 'Weight', value: '75 kg' },
    { label: 'Battery Life', value: '8+ hours' },
    { label: 'Processing Power', value: '500 TOPS' },
    { label: 'Sensors', value: '40+ sensors' },
    { label: 'Load Capacity', value: '20 kg' },
  ];

  return (
    <section id="humanoid" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ilirion Humanoid Robot
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Our flagship humanoid robot represents the pinnacle of robotics engineering. 
              Designed for seamless integration into human environments, it combines advanced 
              AI with sophisticated mechanical systems.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {specifications.map((spec) => (
                <div key={spec.label} className="bg-gray-900 p-4 rounded-lg">
                  <div className="text-blue-400 font-semibold">{spec.label}</div>
                  <div className="text-white text-lg font-bold">{spec.value}</div>
                </div>
              ))}
            </div>

            <div className="space-y-4 mb-8">
              <h3 className="text-2xl font-semibold text-white">Key Capabilities</h3>
              {capabilities.map((capability) => (
                <div key={capability} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">{capability}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <h3 className="text-xl font-bold text-gray-900">Advanced AI Core</h3>
              <p className="mt-2 text-gray-600">Powered by a custom neural network for true learning.</p>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg"
                alt="Ilirion Humanoid Robot"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
                            <div className="absolute bottom-4 left-4 bg-gray-900 p-6 rounded-xl border border-gray-700 hidden lg:block">
              <div className="text-3xl font-bold text-blue-500">99.7%</div>
              <div className="text-gray-400">Uptime Reliability</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HumanoidRobot;