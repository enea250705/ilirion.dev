import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, Bot } from 'lucide-react';

interface DropdownItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href?: string;
  dropdown?: DropdownItem[];
}

const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdowns, setMobileDropdowns] = useState<string[]>([]);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMobileDropdown = (label: string) => {
    setMobileDropdowns(prev => 
      prev.includes(label) 
        ? prev.filter(item => item !== label)
        : [...prev, label]
    );
  };

  const navItems: NavItem[] = [
    { label: 'Home', href: '/' },
    {
      label: 'Technology',
      dropdown: [
        { label: 'Ilirion Humanoid Robot', href: '/humanoid-robot' },
        { label: 'AI Consciousness Engine', href: '/ai-consciousness-engine' },
        { label: 'Safety Systems', href: '/safety-systems' },
        { label: 'Vision & Perception', href: '/vision-perception' },
        { label: 'Network Intelligence', href: '/network-intelligence' },
      ],
    },
    {
      label: 'Solutions',
      dropdown: [
        { label: 'Enterprise AI', href: '/enterprise-ai' },
        { label: 'Research & Development', href: '/research-development' },
        { label: 'Custom Robotics', href: '/custom-robotics' },
        { label: 'AI Consulting', href: '/ai-consulting' },
      ],
    },
    {
      label: 'Research',
      dropdown: [
        { label: 'Technical Papers', href: '/technical-papers' },
        { label: 'Open Source Projects', href: '/open-source' },
        { label: 'Innovation Lab', href: '/innovation-lab' },
        { label: 'Case Studies', href: '/case-studies' },
      ],
    },
    {
      label: 'Company',
      dropdown: [
        { label: 'About Us', href: '/about' },
        { label: 'Team', href: '/team' },
        { label: 'Careers', href: '/careers' },
        { label: 'News & Updates', href: '/news' },
      ],
    },
    { label: 'Contact', href: '/contact' },
    { label: 'Pre-Order Ilirion', href: '/presale' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setMobileDropdowns([]);
  }, [location.pathname]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isMobileMenuOpen ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
            <motion.div 
              className="flex items-center space-x-2 sm:space-x-3 h-16 sm:h-20"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="relative flex items-center">
                <Bot className="h-6 w-6 sm:h-8 sm:w-8 text-black" />
                <div className="absolute inset-0 h-6 w-6 sm:h-8 sm:w-8 bg-black rounded-full opacity-20 animate-ping"></div>
              </div>
              <div className="flex items-center">
                <span className="text-lg sm:text-2xl font-bold text-black">Ilirion</span>
                <span className="text-xs sm:text-sm font-medium text-black">Technologies</span>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.dropdown ? (
                  <div>
                    <button 
                      className="flex items-center space-x-1 text-black hover:text-gray-700 font-medium transition-colors duration-200 whitespace-nowrap"
                      onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                    >
                      <span className="text-sm xl:text-base">{item.label}</span>
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`} />
                    </button>

                    {activeDropdown === item.label && (
                      <div className="absolute left-0 mt-2 w-64 rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                        <div className="py-1">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.label}
                              to={dropdownItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {dropdownItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href!}
                    className={`text-black hover:text-gray-700 font-medium transition-colors duration-200 whitespace-nowrap ${
                      item.label === 'Pre-Order Ilirion' ? 'bg-black text-white hover:bg-gray-800 px-3 py-2 xl:px-4 xl:py-2 rounded-full text-sm xl:text-base' : 'text-sm xl:text-base'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center h-16 sm:h-20">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-black hover:text-gray-700 p-2 rounded-lg transition-colors duration-200 flex items-center justify-center"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-2 max-h-[calc(100vh-4rem)] overflow-y-auto">
              {navItems.map((item) => (
                <div key={item.label} className="py-1">
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleMobileDropdown(item.label)}
                        className="w-full flex items-center justify-between px-3 py-4 text-left text-black hover:text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200 min-h-[48px]"
                      >
                        <span className="font-medium text-base">{item.label}</span>
                        <ChevronDown
                          className={`h-5 w-5 transition-transform duration-200 ${
                            mobileDropdowns.includes(item.label) ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileDropdowns.includes(item.label) && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="ml-4 overflow-hidden"
                          >
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.label}
                                to={dropdownItem.href}
                                className="block px-3 py-3 text-black hover:text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200 text-sm min-h-[44px] flex items-center"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {dropdownItem.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={item.href!}
                      className={`block px-3 py-4 text-black hover:text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200 font-medium min-h-[48px] flex items-center ${
                        item.label === 'Pre-Order Ilirion' ? 'bg-black text-white hover:bg-gray-800 mt-2' : ''
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="text-base">{item.label}</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;