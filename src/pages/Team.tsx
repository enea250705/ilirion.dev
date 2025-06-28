import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

const Team:React.FC=()=> (
 <div className="min-h-screen bg-white pt-20">
  <section className="py-24 bg-white text-center">
   <div className="max-w-4xl mx-auto px-4">
    <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.8}} className="text-5xl font-bold text-black mb-6">
      Our Team
    </motion.h1>
    <p className="text-xl text-black">A diverse group of scientists, engineers and dreamers building the future of AI.</p>
   </div>
  </section>
 </div>
);

export default Team; 