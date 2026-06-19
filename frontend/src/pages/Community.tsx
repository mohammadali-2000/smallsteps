import { motion } from 'framer-motion';
import { Users, BookOpen, GitPullRequest, Code } from 'lucide-react';
import { useState } from 'react';

export default function Community() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    github_url: '',
    linkedin_url: '',
    background: '',
    interest_area: 'Backend Engineering'
  });
  const [status, setStatus] = useState('');

  const benefits = [
    { icon: <BookOpen className="w-5 h-5" />, title: "Free Mock Interviews", desc: "Practice with industry professionals and get constructive feedback." },
    { icon: <Code className="w-5 h-5" />, title: "Java Backend Mentorship", desc: "Learn Spring Boot, system design, and production best practices." },
    { icon: <GitPullRequest className="w-5 h-5" />, title: "Open Source Contributions", desc: "Build your portfolio by contributing to real HealthTech projects." },
    { icon: <Users className="w-5 h-5" />, title: "Collaborative Network", desc: "Connect with like-minded developers and healthcare innovators." }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Submitting...');
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8080';
      const res = await fetch(`${apiUrl}/api/community/apply`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setStatus('Application submitted successfully!');
        setFormData({ name: '', email: '', github_url: '', linkedin_url: '', background: '', interest_area: 'Backend Engineering' });
      } else {
        setStatus('Failed to submit application. Please try again later.');
      }
    } catch (error) {
      setStatus('Network error. Is the backend running?');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-dark-900">
      <section className="pt-24 pb-12 bg-primary-600 dark:bg-primary-900 text-white border-b border-primary-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-extrabold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Join The Community
          </motion.h1>
          <motion.p 
            className="text-lg text-primary-100 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Whether you want to learn, contribute, or mentor, there's a place for you at Smallsteps.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Info Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Why Join Us?</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Smallsteps is dedicated to fostering the next generation of software engineers by providing free resources, mentorship, and opportunities to build technology that impacts healthcare.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-slate-50 dark:bg-dark-800 p-5 rounded-xl border border-slate-100 dark:border-slate-700">
                    <div className="text-primary-500 mb-3">{benefit.icon}</div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-2">{benefit.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Application Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-dark-900 p-8 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800"
            >
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Application Form</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Full Name *</label>
                  <input required type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-2 bg-slate-50 dark:bg-dark-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none text-slate-900 dark:text-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email Address *</label>
                  <input required type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-2 bg-slate-50 dark:bg-dark-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none text-slate-900 dark:text-white" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">GitHub URL</label>
                    <input type="url" value={formData.github_url} onChange={(e) => setFormData({...formData, github_url: e.target.value})} className="w-full px-4 py-2 bg-slate-50 dark:bg-dark-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none text-slate-900 dark:text-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">LinkedIn URL</label>
                    <input type="url" value={formData.linkedin_url} onChange={(e) => setFormData({...formData, linkedin_url: e.target.value})} className="w-full px-4 py-2 bg-slate-50 dark:bg-dark-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none text-slate-900 dark:text-white" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Interest Area *</label>
                  <select value={formData.interest_area} onChange={(e) => setFormData({...formData, interest_area: e.target.value})} className="w-full px-4 py-2 bg-slate-50 dark:bg-dark-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none text-slate-900 dark:text-white">
                    <option>Backend Engineering</option>
                    <option>Frontend Development</option>
                    <option>Full-Stack Development</option>
                    <option>Mock Interview Only</option>
                    <option>HealthTech Innovation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Your Background *</label>
                  <textarea required rows={4} value={formData.background} onChange={(e) => setFormData({...formData, background: e.target.value})} className="w-full px-4 py-2 bg-slate-50 dark:bg-dark-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none text-slate-900 dark:text-white placeholder-slate-400" placeholder="Tell us briefly about your experience and what you want to achieve..."></textarea>
                </div>
                <button type="submit" className="w-full py-3 px-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-colors">
                  Submit Application
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
