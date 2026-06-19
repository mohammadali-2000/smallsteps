import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Mail, Briefcase, Send } from 'lucide-react';

export default function Interview() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    preferredDate: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8080';
      const res = await fetch(`${apiUrl}/api/interviews/request`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', role: '', preferredDate: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="pt-24 pb-16 px-6 sm:px-12 max-w-7xl mx-auto min-h-screen flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full">
        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">
            Free Mock <span className="text-teal-400">Interviews</span>
          </h1>
          <p className="text-lg text-slate-400 mb-8 max-w-lg">
            We believe in giving back to the community. Schedule a free mock interview with our senior engineers to practice for your next big role.
          </p>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-slate-800/50 p-3 rounded-lg text-teal-400">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-slate-200 font-semibold mb-1">Tailored Feedback</h3>
                <p className="text-slate-400">Role-specific technical and behavioral interviews.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-slate-800/50 p-3 rounded-lg text-teal-400">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-slate-200 font-semibold mb-1">Flexible Scheduling</h3>
                <p className="text-slate-400">Pick a date that works best for your preparation timeline.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-slate-800/30 border border-slate-700/50 p-8 rounded-2xl backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                    <User className="h-5 w-5" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="block w-full pl-10 pr-3 py-3 border border-slate-700 rounded-lg bg-slate-900/50 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                    placeholder="Jane Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                    <Mail className="h-5 w-5" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="block w-full pl-10 pr-3 py-3 border border-slate-700 rounded-lg bg-slate-900/50 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="role" className="block text-sm font-medium text-slate-300 mb-2">Target Role</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <select
                    id="role"
                    required
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="block w-full pl-10 pr-3 py-3 border border-slate-700 rounded-lg bg-slate-900/50 text-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors appearance-none"
                  >
                    <option value="" disabled>Select a role...</option>
                    <option value="Frontend Engineer">Frontend Engineer</option>
                    <option value="Backend Engineer">Backend Engineer</option>
                    <option value="Full-Stack Engineer">Full-Stack Engineer</option>
                    <option value="Mobile Developer">Mobile Developer</option>
                    <option value="DevOps/SRE">DevOps / SRE</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="preferredDate" className="block text-sm font-medium text-slate-300 mb-2">Preferred Date</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <input
                    type="date"
                    id="preferredDate"
                    required
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="block w-full pl-10 pr-3 py-3 border border-slate-700 rounded-lg bg-slate-900/50 text-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full flex items-center justify-center space-x-2 bg-teal-500 hover:bg-teal-400 text-slate-900 font-semibold py-3 px-6 rounded-lg transition-colors disabled:opacity-50"
              >
                {status === 'submitting' ? (
                  <span>Requesting...</span>
                ) : (
                  <>
                    <span>Request Interview</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              {status === 'success' && (
                <div className="p-4 bg-teal-500/10 border border-teal-500/20 text-teal-400 rounded-lg text-sm text-center">
                  Request sent successfully! We'll be in touch soon.
                </div>
              )}
              {status === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg text-sm text-center">
                  Failed to send request. Please try again later.
                </div>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
