import { Link } from 'react-router-dom';
import { Activity } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-dark-900 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Activity className="h-6 w-6 text-primary-500" />
              <span className="font-bold text-lg text-slate-900 dark:text-white">Smallsteps</span>
            </Link>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
              Building the Future of Open HealthTech. One Small Step at a Time.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary-500">About Us</Link></li>
              <li><Link to="/services" className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary-500">Services</Link></li>
              <li><Link to="/contact" className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary-500">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Community</h3>
            <ul className="space-y-3">
              <li><Link to="/community" className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary-500">Join Us</Link></li>
              <li><Link to="/community" className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary-500">Mock Interviews</Link></li>
              <li><Link to="/community" className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary-500">Mentorship</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary-500">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary-500">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
          <p className="text-sm text-center text-slate-400">
            &copy; {new Date().getFullYear()} Smallsteps. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
