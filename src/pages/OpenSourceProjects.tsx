import React from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

const OpenSourceProjects: React.FC = () => (
  <div className="min-h-screen bg-white pt-20">
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="bg-black p-4 rounded-xl w-fit mx-auto mb-6">
            <Code2 className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">Open Source Projects</h1>
          <p className="text-xl text-black mb-8 max-w-3xl mx-auto">
            Explore our community-driven open source initiatives and contribute to the future of AI robotics.
          </p>
        </motion.div>
      </div>
    </section>
  </div>
);

export default OpenSourceProjects; 