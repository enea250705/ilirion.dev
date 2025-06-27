import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'info@ilirion.dev',
      href: 'mailto:info@ilirion.dev',
      description: 'Send us an email anytime'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');
    
    try {
      const response = await fetch('http://localhost:3001/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        let errorData;
        try {
          errorData = await response.json();
          setErrorMessage(errorData.error || 'Failed to send email');
        } catch (e) {
          setErrorMessage(`Server error: ${response.status} ${response.statusText}`);
        }
        setStatus('error');
        return;
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error in form submission:', error);
      setErrorMessage(error instanceof Error ? error.message : 'Network error - Is the server running?');
      setStatus('error');
    } finally {
      // Reset status after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setErrorMessage('');
      }, 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-6">
            Get in Touch
          </h2>
          <p className="text-lg sm:text-xl text-black max-w-2xl mx-auto">
            Have questions about our AI solutions? We're here to help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Methods */}
          <div className="space-y-6">
            {contactMethods.map((method) => (
              <motion.a
                key={method.label}
                href={method.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            viewport={{ once: true }}
                className="block bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-black rounded-lg p-3">
                    <method.icon className="h-6 w-6 text-white" />
                </div>
                <div className="min-w-0">
                    <h4 className="font-semibold text-black text-sm sm:text-base">{method.label}</h4>
                    <p className="text-black text-sm sm:text-base break-all">{method.value}</p>
                    <p className="text-gray-500 text-sm mt-1">{method.description}</p>
              </div>
                </div>
              </motion.a>
            ))}
              </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-xl p-6 sm:p-8"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-black mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                <label htmlFor="name" className="block text-sm font-medium text-black mb-1">
                  Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                  value={formData.name}
                  onChange={handleChange}
                      required
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="Your name"
                    />
                  </div>
                  <div>
                <label htmlFor="email" className="block text-sm font-medium text-black mb-1">
                  Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                  value={formData.email}
                  onChange={handleChange}
                      required
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                      placeholder="your.email@company.com"
                    />
                  </div>
                  <div>
                <label htmlFor="message" className="block text-sm font-medium text-black mb-1">
                  Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                  value={formData.message}
                  onChange={handleChange}
                    required
                    rows={4}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="How can we help you?"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className={`w-full bg-black text-white px-6 py-3 rounded-lg font-semibold transition-colors ${
                  status === 'sending' ? 'opacity-70 cursor-not-allowed' : 'hover:bg-gray-800'
                }`}
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mt-4">
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mt-4">
                  {errorMessage || 'Failed to send message. Please try again.'}
                </div>
              )}
              </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;