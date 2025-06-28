import React from 'react';
import { motion } from 'framer-motion';
import { Download, Code, Zap, Shield, Cpu, GitBranch, LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const IlirionIDE: React.FC = () => {
  const features: Feature[] = [
    {
      icon: Code,
      title: 'Advanced Code Intelligence',
      description: 'Smart code completion, real-time error detection, and intelligent suggestions powered by AI.'
    },
    {
      icon: Zap,
      title: 'Lightning Fast Performance',
      description: 'Built for speed with native performance and optimized resource usage.'
    },
    {
      icon: Shield,
      title: 'Secure Development',
      description: 'Built-in security features and vulnerability scanning to keep your code safe.'
    },
    {
      icon: Cpu,
      title: 'AI-Powered Development',
      description: 'Integrated AI assistant for code generation, refactoring, and optimization.'
    },
    {
      icon: GitBranch,
      title: 'Advanced Git Integration',
      description: 'Seamless version control with visual diff tools and conflict resolution.'
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            >
              Ilirion IDE
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 text-blue-100"
            >
              The Next Generation Development Environment
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a
                href="#download"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-blue-50 md:text-lg"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Now
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Powerful Features for Modern Development
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Everything you need to write better code, faster
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center p-2 bg-blue-600 rounded-md text-white mb-4">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Download Ilirion IDE</h2>
            <div className="inline-block">
              <a
                href="https://ilirion-ide-download.vercel.app/download"
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                <Download className="w-5 h-5 mr-2" />
                Download for Windows
              </a>
              <p className="mt-4 text-sm text-gray-600">Version 1.0.0 | 64-bit</p>
            </div>
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">System Requirements</h2>
          <div className="bg-white rounded-lg shadow p-6">
            <ul className="space-y-4 text-gray-600">
              <li>• Windows 10 64-bit or later</li>
              <li>• 8 GB RAM minimum (16 GB recommended)</li>
              <li>• 4 GB available hard disk space</li>
              <li>• 1920 x 1080 minimum screen resolution</li>
              <li>• Internet connection for installation and updates</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IlirionIDE; 