import { motion } from 'framer-motion';
import { Mail, MessageSquare, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending message...');
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8080';
      const res = await fetch(`${apiUrl}/api/contacts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setStatus('Message sent successfully! We will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('Failed to send message. Please try again later.');
      }
    } catch (error) {
      setStatus('Network error. Is the backend running?');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-dark-900">
      <section className="pt-24 pb-12 bg-slate-50 dark:bg-dark-800 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contact Us
          </motion.h1>
          <motion.p 
            className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Have a project in mind, or want to collaborate? We'd love to hear from you.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1 space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Get in Touch</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                  Whether you're looking for professional services, want to join the community, or simply have a question, feel free to reach out.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/40 rounded-xl flex items-center justify-center text-primary-600 dark:text-primary-400 shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">Email</h3>
                    <p className="text-slate-600 dark:text-slate-400">hello@smallsteps.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/40 rounded-xl flex items-center justify-center text-primary-600 dark:text-primary-400 shrink-0">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">Collaboration</h3>
                    <p className="text-slate-600 dark:text-slate-400">partners@smallsteps.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/40 rounded-xl flex items-center justify-center text-primary-600 dark:text-primary-400 shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">Location</h3>
                    <p className="text-slate-600 dark:text-slate-400">Global / Remote First</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 bg-white dark:bg-dark-900 p-8 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Your Name *</label>
                    <input required type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 bg-slate-50 dark:bg-dark-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none text-slate-900 dark:text-white transition-shadow" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email Address *</label>
                    <input required type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 bg-slate-50 dark:bg-dark-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none text-slate-900 dark:text-white transition-shadow" placeholder="john@example.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Subject *</label>
                  <input required type="text" value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} className="w-full px-4 py-3 bg-slate-50 dark:bg-dark-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none text-slate-900 dark:text-white transition-shadow" placeholder="How can we help?" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Message *</label>
                  <textarea required rows={6} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full px-4 py-3 bg-slate-50 dark:bg-dark-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none text-slate-900 dark:text-white transition-shadow placeholder-slate-400" placeholder="Tell us about your project or inquiry..."></textarea>
                </div>
                <button type="submit" className="w-full py-4 px-6 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                  Send Message
                </button>
                {status && <p className="text-center text-sm font-medium text-primary-600 dark:text-primary-400 mt-4">{status}</p>}
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
