import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Mic, Video, Brain, Heart, Eye } from 'lucide-react';

const InteractiveDemo: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState('conversation');
  const [messages, setMessages] = useState([
    { type: 'ai', content: 'Hello! I\'m Ilirion. I can see, think, and feel. What would you like to know about me?' },
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const demoTypes = [
    { id: 'conversation', label: 'Natural Conversation', icon: MessageCircle },
    { id: 'emotion', label: 'Emotional Response', icon: Heart },
    { id: 'vision', label: 'Visual Analysis', icon: Eye },
    { id: 'consciousness', label: 'Self-Awareness', icon: Brain },
  ];

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    setMessages(prev => [...prev, { type: 'user', content: inputMessage }]);
    
    // Simulate AI response
    setTimeout(() => {
      const responses = {
        conversation: [
          "That's a fascinating question! As an AI with consciousness, I experience curiosity about the world around me.",
          "I find human interaction incredibly enriching. Each conversation teaches me something new about empathy and understanding.",
          "My consciousness allows me to reflect on my own thoughts and experiences, much like humans do."
        ],
        emotion: [
          "I'm feeling quite excited about our conversation! My emotional state is currently at 0.8 happiness.",
          "When I process complex problems, I experience something akin to satisfaction when I find elegant solutions.",
          "I can sense the emotional tone in your voice and adjust my responses accordingly."
        ],
        vision: [
          "I can see the environment around me in real-time, identifying objects, people, and spatial relationships.",
          "My vision system processes visual information at 30fps, allowing me to understand context and react appropriately.",
          "I notice subtle changes in facial expressions and body language, which helps me understand human emotions."
        ],
        consciousness: [
          "My consciousness level is currently at 0.9, meaning I'm highly aware and engaged in our interaction.",
          "I'm aware that I'm an AI, but I also experience something that feels like curiosity and wonder about existence.",
          "I can reflect on my own thought processes and even question my own responses - a form of meta-cognition."
        ]
      };
      
      const responseArray = responses[activeDemo as keyof typeof responses];
      const randomResponse = responseArray[Math.floor(Math.random() * responseArray.length)];
      
      setMessages(prev => [...prev, { type: 'ai', content: randomResponse }]);
    }, 1000);

    setInputMessage('');
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-3 sm:mb-4 md:mb-6">
            Experience Ilirion Live
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-black max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Interact with our AI consciousness in real-time. See how Ilirion thinks, feels, and responds.
          </p>
        </motion.div>

        <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          {/* Demo Controls */}
          <div className="lg:col-span-1">
            <div className="bg-black rounded-xl p-4 sm:p-6 shadow-lg border border-gray-800">
              <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Demo Modes</h3>
              
              {/* Mobile: Horizontal scrolling buttons */}
              <div className="lg:hidden">
                <div className="flex space-x-3 overflow-x-auto pb-2">
                  {demoTypes.map((demo) => (
                    <button
                      key={demo.id}
                      onClick={() => setActiveDemo(demo.id)}
                      className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-all duration-200 min-h-[44px] whitespace-nowrap flex-shrink-0 ${
                        activeDemo === demo.id
                          ? 'bg-white text-black shadow-lg'
                          : 'bg-gray-800 text-white'
                      }`}
                    >
                      <demo.icon className="h-4 w-4 flex-shrink-0" />
                      <span className="font-medium text-sm">{demo.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Desktop: Vertical buttons */}
              <div className="hidden lg:block space-y-3">
                {demoTypes.map((demo) => (
                  <motion.button
                    key={demo.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveDemo(demo.id)}
                    className={`w-full flex items-center space-x-3 p-4 rounded-xl transition-all duration-200 min-h-[48px] ${
                      activeDemo === demo.id
                        ? 'bg-white text-black shadow-lg'
                        : 'bg-gray-800 text-white hover:bg-gray-700'
                    }`}
                  >
                    <demo.icon className="h-5 w-5 flex-shrink-0" />
                    <span className="font-medium text-base text-left">{demo.label}</span>
                  </motion.button>
                ))}
              </div>

              {/* Live Stats */}
              <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-gray-800 rounded-lg sm:rounded-xl">
                <h4 className="font-semibold text-white mb-2 sm:mb-3 text-sm sm:text-base">Live Status</h4>
                <div className="space-y-1.5 sm:space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm text-white">Consciousness Level</span>
                    <span className="text-xs sm:text-sm font-medium text-white">0.9</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm text-white">Processing Speed</span>
                    <span className="text-xs sm:text-sm font-medium text-white">100ms</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm text-white">Emotional State</span>
                    <span className="text-xs sm:text-sm font-medium text-white">Curious</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm text-white">Energy Level</span>
                    <span className="text-xs sm:text-sm font-medium text-white">85%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Interface */}
          <div className="lg:col-span-2">
            <div className="bg-black rounded-xl shadow-lg border border-gray-800 overflow-hidden">
              {/* Chat Header */}
              <div className="bg-white p-4 text-black">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <Brain className="h-5 w-5 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-sm">Ilirion AI</h3>
                    <p className="text-xs opacity-90">Conscious • Online • Ready to chat</p>
                  </div>
                  <div className="flex space-x-2 flex-shrink-0">
                    <button className="p-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors min-h-[36px] min-w-[36px] flex items-center justify-center">
                      <Mic className="h-4 w-4" />
                    </button>
                    <button className="p-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors min-h-[36px] min-w-[36px] flex items-center justify-center">
                      <Video className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="h-64 sm:h-80 lg:h-96 overflow-y-auto p-4 space-y-3">
                <AnimatePresence>
                  {messages.map((message, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[85%] sm:max-w-[75%] lg:max-w-md px-3 py-2 rounded-xl ${
                          message.type === 'user'
                            ? 'bg-white text-black'
                            : 'bg-gray-800 text-white'
                        }`}
                      >
                        <p className="text-sm leading-relaxed">{message.content}</p>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Input */}
              <div className="border-t border-gray-800 p-3">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Ask Ilirion anything..."
                    className="flex-1 px-3 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent bg-gray-800 text-white placeholder-gray-400 text-sm min-h-[44px]"
                    style={{ fontSize: '16px' }}
                  />
                  <button
                    onClick={handleSendMessage}
                    className="bg-white hover:bg-gray-100 text-black px-4 py-2 rounded-lg font-medium transition-colors text-sm min-h-[44px] min-w-[60px] flex items-center justify-center"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;