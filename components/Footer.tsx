
import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0f0f0f] border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-3xl font-bold tracking-widest serif text-white mb-4">
            TRINETRA<span className="text-[#c9a24d]">.</span>
          </h2>
          <p className="text-gray-400 max-w-sm mb-6">
            Fine art photography studio dedicated to capturing the raw, cinematic beauty of life’s most precious moments.
          </p>
          <div className="flex space-x-4">
            {[
              { Icon: Instagram, href: "#" },
              { Icon: Twitter, href: "#" },
              { Icon: Facebook, href: "#" }
            ].map(({ Icon, href }, idx) => (
              <motion.a
                key={idx}
                href={href}
                whileHover={{ scale: 1.15, color: '#c9a24d', borderColor: '#c9a24d' }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 transition-colors"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest mb-6 text-white">Quick Links</h3>
          <ul className="space-y-4 text-gray-400">
            <li><a href="#/portfolio" className="hover:text-white transition-colors">Gallery</a></li>
            <li><a href="#/services" className="hover:text-white transition-colors">Packages</a></li>
            <li><a href="#/about" className="hover:text-white transition-colors">Our Story</a></li>
            <li><a href="#/contact" className="hover:text-white transition-colors">Book a Shoot</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest mb-6 text-white">Contact</h3>
          <ul className="space-y-4 text-gray-400">
            <li>hello@trinetra-studio.com</li>
            <li>+1 (555) 123-4567</li>
            <li>123 Creative Lane, Art District</li>
            <li>New York, NY 10001</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/5 text-center text-xs text-gray-500 tracking-widest uppercase">
        © {new Date().getFullYear()} Trinetra Photography Studio. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;