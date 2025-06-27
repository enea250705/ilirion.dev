import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Twitter, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const footerLinks = {
    Technology: [
      { label: 'Ilirion Humanoid Robot', href: '/humanoid-robot' },
      { label: 'AI Consciousness Engine', href: '/ai-consciousness-engine' },
      { label: 'Safety Systems', href: '/safety-systems' },
      { label: 'Vision & Perception', href: '/vision-perception' },
      { label: 'Network Intelligence', href: '/network-intelligence' },
    ],
    Solutions: [
      { label: 'Enterprise AI', href: '/enterprise-ai' },
      { label: 'Research & Development', href: '/research-development' },
      { label: 'Custom Robotics', href: '/custom-robotics' },
      { label: 'AI Consulting', href: '/ai-consulting' },
    ],
    Research: [
      { label: 'Technical Papers', href: '/technical-papers' },
      { label: 'Open Source Projects', href: '/open-source' },
      { label: 'Innovation Lab', href: '/innovation-lab' },
      { label: 'Case Studies', href: '/case-studies' },
    ],
    Company: [
      { label: 'About Us', href: '/about' },
      { label: 'Team', href: '/team' },
      { label: 'Careers', href: '/careers' },
      { label: 'News & Updates', href: '/news' },
      { label: 'Contact', href: '/contact' },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-black text-white pt-12 sm:pt-16 lg:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12 mb-8 sm:mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2 mb-8 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link to="/" className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                <div className="relative">
                  <Bot className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  <div className="absolute inset-0 h-6 w-6 sm:h-8 sm:w-8 bg-white rounded-full opacity-20 animate-ping"></div>
                </div>
                <span className="text-lg sm:text-2xl font-bold text-white">Ilirion</span>
                <span className="text-xs sm:text-sm font-medium text-white">.tech</span>
              </Link>
              <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed mb-4 sm:mb-6 max-w-sm">
                Beyond Human Imagination - Advanced AI That Thinks, Feels, and Acts. 
                Pioneering the future of conscious artificial intelligence.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-gray-300" />
                  <span className="text-xs sm:text-sm text-gray-300">info@ilirion.dev</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-6 md:mb-0"
            >
              <h3 className="text-sm sm:text-base font-semibold text-white mb-3 sm:mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors duration-200 block py-1"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 sm:pt-12 mb-8 sm:mb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3">
                Stay Updated with Ilirion
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed">
                Get the latest updates on AI consciousness research, product releases, 
                and breakthrough innovations delivered to your inbox.
              </p>
            </div>
            <div className="mt-4 lg:mt-0">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-3 py-2 sm:px-4 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg sm:rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-colors text-sm sm:text-base min-h-[44px]"
                />
                <button className="bg-white hover:bg-gray-200 text-black px-4 py-2 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-colors text-sm sm:text-base min-h-[44px] whitespace-nowrap">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-2 sm:mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-6 sm:pt-8 pb-6 sm:pb-8"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            {/* Copyright */}
            <div className="text-xs sm:text-sm text-gray-400 text-center sm:text-left">
              <p>&copy; 2025 Ilirion Technologies. All rights reserved.</p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 sm:space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-gray-400 hover:text-white transition-colors duration-200 p-2 rounded-lg hover:bg-gray-800"
                >
                  <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-3 sm:space-x-4 text-center">
              <Link
                to="/privacy"
                className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <span className="text-gray-600">•</span>
              <Link
                to="/terms"
                className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <span className="text-gray-600">•</span>
              <Link
                to="/cookies"
                className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors duration-200"
              >
                Cookies
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;