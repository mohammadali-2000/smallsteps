import { motion } from 'framer-motion';
import { Code2, Server, Globe, Cloud, Cpu, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Full-Stack Web Development',
      desc: 'End-to-end web applications built with modern frameworks like React and Vue, delivering exceptional user experiences and responsive designs.',
      useCase: 'SaaS platforms, healthcare portals, custom dashboards.'
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Java Backend Development',
      desc: 'Robust, enterprise-grade backend systems built with Spring Boot, ensuring high performance, security, and scalability.',
      useCase: 'Core business logic, secure health data processing, microservices.'
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'REST API Development',
      desc: 'Well-documented, secure, and fast RESTful APIs designed for seamless integration across web and mobile platforms.',
      useCase: 'Mobile app backends, third-party integrations, public APIs.'
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud Application Development',
      desc: 'Cloud-native applications designed to run efficiently on AWS, Google Cloud, or modern platforms like Supabase and Vercel.',
      useCase: 'Highly available applications, auto-scaling infrastructure.'
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'IoT Solutions',
      desc: 'Integration of smart devices and sensors, capturing and processing real-time data for actionable insights.',
      useCase: 'Remote patient monitoring, smart medical devices, wearables.'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Technical Consulting',
      desc: 'Expert guidance on system architecture, tech stack selection, and scalability strategies for early-stage startups.',
      useCase: 'Architecture review, MVP planning, technical roadmapping.'
    }
  ];

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
            Our Services
          </motion.h1>
          <motion.p 
            className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            We provide professional, production-ready software development services tailored for startups and healthcare innovators.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-dark-900 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 dark:border-slate-800 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-primary-50 dark:bg-primary-900/40 rounded-2xl flex items-center justify-center text-primary-600 dark:text-primary-400 mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {service.desc}
                </p>
                <div className="bg-slate-50 dark:bg-dark-800 rounded-lg p-4">
                  <h4 className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-1">Use Case</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{service.useCase}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-600 dark:bg-primary-900 text-center text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Ready to start your project?</h2>
          <p className="text-primary-100 text-lg mb-8 leading-relaxed">
            Let's discuss how we can help bring your vision to life with robust, modern software solutions.
          </p>
          <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-white text-primary-600 dark:text-primary-900 rounded-full font-bold transition-all hover:scale-105 shadow-lg">
            Discuss Your Project
          </Link>
        </div>
      </section>
    </div>
  );
}
