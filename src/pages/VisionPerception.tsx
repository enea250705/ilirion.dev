import React from 'react';
import { motion } from 'framer-motion';
import { Eye, ArrowRight, Camera, Cpu, Zap, Layers } from 'lucide-react';

const VisionPerception: React.FC = () => {
  const capabilities = [
    {
      title: 'Multi-Modal Sensing',
      description: 'Advanced sensor fusion combining visual, depth, thermal, and spectral data for comprehensive scene understanding.'
    },
    {
      title: 'Real-time Processing',
      description: 'Ultra-low latency perception pipeline with hardware acceleration for instantaneous environmental awareness.'
    },
    {
      title: '3D Scene Analysis',
      description: 'Precise depth mapping and spatial reconstruction for accurate object localization and navigation.'
    },
    {
      title: 'Dynamic Tracking',
      description: 'Continuous multi-object tracking with predictive motion analysis and occlusion handling.'
    }
  ];

  const features = [
    {
      icon: Camera,
      title: 'Visual System',
      items: [
        'High-resolution cameras',
        'Depth sensors',
        'Thermal imaging',
        'Spectral analysis'
      ]
    },
    {
      icon: Cpu,
      title: 'Neural Processing',
      items: [
        'Object recognition',
        'Scene segmentation',
        'Action understanding',
        'Facial analysis'
      ]
    },
    {
      icon: Zap,
      title: 'Real-time Analysis',
      items: [
        'Motion prediction',
        'Gesture recognition',
        'Behavior analysis',
        'Event detection'
      ]
    },
    {
      icon: Layers,
      title: 'Spatial Mapping',
      items: [
        '3D reconstruction',
        'Environment modeling',
        'Object localization',
        'Navigation mapping'
      ]
    }
  ];

  const metrics = [
    {
      label: 'Object Recognition Accuracy',
      value: '99.8%'
    },
    {
      label: 'Processing Latency',
      value: '<5ms'
    },
    {
      label: 'Depth Accuracy',
      value: '±0.1mm'
    },
    {
      label: 'Field of View',
      value: '360°'
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
              <Eye className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-4">Vision & Perception</h1>
            <h2 className="text-2xl font-semibold text-black mb-6">Advanced Visual Intelligence for AI Systems</h2>
            <p className="text-xl text-black mb-8 max-w-3xl mx-auto">
              Our cutting-edge vision and perception system enables AI systems to see, understand, and interact with the world in real-time. Through advanced sensor fusion and neural processing, we achieve human-level visual comprehension with machine precision.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2 mx-auto"
            >
              <span>Download Technical Overview</span>
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Core Capabilities</h2>
            <p className="text-xl text-black max-w-3xl mx-auto">Advanced perception features for intelligent interaction.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-black p-8 rounded-2xl text-white"
              >
                <h3 className="text-xl font-bold mb-3">{c.title}</h3>
                <p className="text-sm leading-relaxed">{c.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">System Components</h2>
            <p className="text-xl text-black max-w-3xl mx-auto">Integrated hardware and software for comprehensive visual intelligence.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl border border-black"
              >
                <feature.icon className="h-8 w-8 text-black mb-4" />
                <h3 className="text-xl font-bold text-black mb-4">{feature.title}</h3>
                <ul className="space-y-2">
                  {feature.items.map((item) => (
                    <li key={item} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                      <span className="text-black text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Performance Metrics</h2>
            <p className="text-xl text-black mb-12">Industry-leading accuracy and speed in visual processing.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {metrics.map(m => (
                <div key={m.label} className="bg-black text-white p-6 rounded-xl">
                  <div className="text-3xl font-bold mb-2">{m.value}</div>
                  <div className="text-sm">{m.label}</div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Experience Advanced Vision</h2>
            <p className="text-xl text-white mb-8">Schedule a live demonstration of our vision and perception capabilities.</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-xl font-semibold transition-colors"
            >
              Request Demo
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default VisionPerception; 