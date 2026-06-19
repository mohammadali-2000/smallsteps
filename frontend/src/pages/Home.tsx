import { motion } from 'framer-motion';
import { ArrowRight, Code2, Server, Cloud, Cpu, Users, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const focusAreas = [
    { icon: <Stethoscope className="w-6 h-6" />, title: 'HealthTech Solutions', desc: 'Building accessible and scalable healthcare technology for the future.' },
    { icon: <Cpu className="w-6 h-6" />, title: 'IoT & Smart Devices', desc: 'Integrating connected devices for seamless healthcare monitoring.' },
    { icon: <Code2 className="w-6 h-6" />, title: 'Full-Stack Web Apps', desc: 'Modern, responsive web applications built with React and modern tools.' },
    { icon: <Server className="w-6 h-6" />, title: 'Backend Engineering', desc: 'Robust and secure APIs powered by Java Spring Boot and PostgreSQL.' },
    { icon: <Cloud className="w-6 h-6" />, title: 'Cloud-Native Systems', desc: 'Scalable infrastructure designed for high availability and performance.' },
    { icon: <Users className="w-6 h-6" />, title: 'Open Source Innovation', desc: 'Contributing to and building open solutions for the global community.' }
  ];

  const communityHighlights = [
    'Free Mock Interviews',
    'Java Backend Mentorship',
    'Software Engineering Guidance',
    'Open Source Contributions',
    'Real-World Learning',
    'Community Collaboration'
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-50 to-white dark:from-dark-900 dark:to-dark-800 -z-10" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Building the Future of <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">Open HealthTech.</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-medium mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            One Small Step at a Time.
          </motion.p>
          <motion.p 
            className="max-w-2xl mx-auto text-lg text-slate-500 dark:text-slate-400 mb-10 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Smallsteps is an open initiative focused on healthcare technology, software engineering, community-driven innovation, and real-world learning opportunities for aspiring developers.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <Link to="/about" className="w-full sm:w-auto px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
              Explore Our Vision
            </Link>
            <Link to="/community" className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-dark-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 hover:border-primary-500 dark:hover:border-primary-500 rounded-full font-semibold transition-all shadow-sm hover:shadow-md">
              Join The Community
            </Link>
          </motion.div>
        </div>
      </section>

      {/* What is Smallsteps Section */}
      <section className="py-24 bg-white dark:bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">What is Smallsteps?</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              We believe that the best way to learn software engineering is by building real products that matter. Smallsteps combines technology, learning, and innovation to create meaningful solutions in healthcare and software engineering, while empowering the next generation of developers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="py-24 bg-slate-50 dark:bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Our Focus Areas</h2>
            <p className="text-slate-600 dark:text-slate-400">The core technologies and domains we are passionate about.</p>
          </div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {focusAreas.map((area, index) => (
              <motion.div 
                key={index}
                className="bg-white dark:bg-dark-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow group"
                variants={fadeIn}
              >
                <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/30 rounded-xl flex items-center justify-center text-primary-600 dark:text-primary-400 mb-6 group-hover:scale-110 transition-transform">
                  {area.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{area.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{area.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* The Community Section */}
      <section className="py-24 bg-primary-600 dark:bg-primary-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The Community</h2>
              <p className="text-primary-100 text-lg mb-8 leading-relaxed">
                Smallsteps is more than just a development studio; it's a thriving community of learners and builders. We provide the resources and mentorship you need to take your next big step.
              </p>
              <Link to="/community" className="inline-flex items-center text-white font-semibold hover:text-primary-200 transition-colors">
                Join our community <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {communityHighlights.map((highlight, index) => (
                <motion.div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 flex items-center space-x-3"
                  variants={fadeIn}
                >
                  <div className="w-2 h-2 bg-primary-300 rounded-full" />
                  <span className="font-medium">{highlight}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Roadmap Section */}
      <section className="py-24 bg-white dark:bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Vision Roadmap</h2>
            <p className="text-slate-600 dark:text-slate-400">Our journey to building the future.</p>
          </div>
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-slate-200 dark:bg-slate-800"></div>
            
            <div className="space-y-12">
              {[
                { phase: 'Phase 1', title: 'Community & Foundation', align: 'left' },
                { phase: 'Phase 2', title: 'Open Source Projects', align: 'right' },
                { phase: 'Phase 3', title: 'HealthTech Solutions', align: 'left' },
                { phase: 'Phase 4', title: 'Open HealthTech Ecosystem', align: 'right' },
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className={`relative flex items-center justify-between w-full ${item.align === 'left' ? 'flex-row-reverse' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="w-5/12"></div>
                  <div className="z-20 flex items-center order-1 bg-primary-500 shadow-xl w-8 h-8 rounded-full">
                    <h1 className="mx-auto font-semibold text-lg text-white">{index + 1}</h1>
                  </div>
                  <div className="order-1 bg-slate-50 dark:bg-dark-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 w-5/12 px-6 py-4">
                    <h3 className="mb-1 font-bold text-slate-900 dark:text-white text-lg">{item.phase}</h3>
                    <p className="text-sm leading-snug text-slate-600 dark:text-slate-400">{item.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-50 dark:bg-dark-800 border-t border-slate-200 dark:border-slate-800 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">Why Smallsteps?</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
              We envision a future where affordable healthcare technology is accessible to everyone. By empowering developers to gain practical experience, we are building the talent and the tools needed to make this vision a reality.
            </p>
            <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold transition-all hover:scale-105 shadow-lg">
              Join Smallsteps Today
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
