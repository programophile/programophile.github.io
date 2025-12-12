import { motion } from 'framer-motion';
import { useState } from 'react';
import ScrollReveal from '../Common/ScrollReveal';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal variant="fadeUp" className="text-center mb-12">
          <motion.div
            className="inline-block mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <span className="px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-gray-300 text-sm font-medium uppercase tracking-wider">
              Contact
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
            Get In Touch
          </h2>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Interested in collaboration? Send a message to discuss opportunities.
          </p>
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={0.2}>
          <motion.form
            onSubmit={handleSubmit}
            className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800"
          >
            {/* Name field */}
            <div className="mb-6">
              <label htmlFor="name" className="block text-white font-medium mb-2">
                Name
              </label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-slate-800/50 border ${
                  errors.name ? 'border-red-500' : 'border-slate-700'
                } rounded-lg text-white focus:outline-none focus:border-neon-blue transition-colors`}
                placeholder="John Doe"
              />
              {errors.name && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-sm mt-1"
                >
                  {errors.name}
                </motion.p>
              )}
            </div>

            {/* Email field */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-white font-medium mb-2">
                Email
              </label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-slate-800/50 border ${
                  errors.email ? 'border-red-500' : 'border-slate-700'
                } rounded-lg text-white focus:outline-none focus:border-neon-blue transition-colors`}
                placeholder="john@example.com"
              />
              {errors.email && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-sm mt-1"
                >
                  {errors.email}
                </motion.p>
              )}
            </div>

            {/* Message field */}
            <div className="mb-6">
              <label htmlFor="message" className="block text-white font-medium mb-2">
                Message
              </label>
              <motion.textarea
                whileFocus={{ scale: 1.01 }}
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className={`w-full px-4 py-3 bg-slate-800/50 border ${
                  errors.message ? 'border-red-500' : 'border-slate-700'
                } rounded-lg text-white focus:outline-none focus:border-neon-blue transition-colors resize-none`}
                placeholder="Tell me about your project..."
              />
              {errors.message && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-sm mt-1"
                >
                  {errors.message}
                </motion.p>
              )}
            </div>

            {/* Submit button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 ${
                isSubmitting
                  ? 'bg-slate-700 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-slate-900 shadow-lg hover:shadow-xl'
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>

            {/* Success message */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 bg-green-900/20 border border-green-700 rounded-lg text-green-400 text-center"
              >
                Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}
          </motion.form>
        </ScrollReveal>

        {/* Contact info */}
        <ScrollReveal variant="fadeUp" delay={0.4}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
            {[
              { label: 'Email', value: 'programophile@gmail.com' },
              { label: 'Location', value: 'Dhaka, Bangladesh' },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-800 hover:border-slate-700 transition-colors duration-300 text-center"
              >
                <div className="text-gray-400 text-sm mb-1 uppercase tracking-wider">{item.label}</div>
                <div className="text-white font-medium">{item.value}</div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactForm;