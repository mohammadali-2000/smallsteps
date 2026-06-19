import { motion } from 'framer-motion';
import { Target, Heart, Lightbulb, Shield } from 'lucide-react';

export default function About() {
  const values = [
    { icon: <Target className="w-6 h-6" />, title: "Mission-Driven", desc: "Every line of code should serve a higher purpose in improving lives." },
    { icon: <Lightbulb className="w-6 h-6" />, title: "Open Innovation", desc: "We believe in open-source collaboration to accelerate technological breakthroughs." },
    { icon: <Heart className="w-6 h-6" />, title: "Community First", desc: "Empowering developers through mentorship, learning, and real-world experience." },
    { icon: <Shield className="w-6 h-6" />, title: "Trust & Quality", desc: "Building robust, secure, and production-ready systems that scale." }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-dark-900">
      {/* Header */}
      <section className="pt-24 pb-12 bg-slate-50 dark:bg-dark-800 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Smallsteps
          </motion.h1>
          <motion.p 
            className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            We are an early-stage Open HealthTech initiative and software development studio dedicated to bridging the gap between technology, healthcare, and education.
          </motion.p>
        </div>
      </section>

      {/* Story & Mission */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                <p>
                  Smallsteps began with a simple observation: while the world needs affordable healthcare technology, countless passionate developers struggle to find meaningful opportunities to learn and contribute.
                </p>
                <p>
                  We created this initiative to solve both problems simultaneously. By building open HealthTech solutions, we provide a platform for developers to gain real-world experience, receive mentorship, and contribute to projects that matter.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-primary-50 dark:bg-dark-800 p-8 rounded-2xl border border-primary-100 dark:border-slate-700"
            >
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">The Mission</h2>
              <p className="text-xl text-primary-700 dark:text-primary-400 font-medium italic leading-relaxed">
                "Building the Future of Open HealthTech. One Small Step at a Time."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-slate-50 dark:bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Core Values</h2>
            <p className="text-slate-600 dark:text-slate-400">The principles that guide everything we build.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-dark-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/40 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{value.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
