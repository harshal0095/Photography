
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, User, Calendar, Box, Camera, Check } from 'lucide-react';
import { SERVICES } from '../constants';
import { Link } from 'react-router-dom';

const Icons: Record<string, any> = { Heart, User, Calendar, Box, Camera };

const Services: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-20 text-center">
          <span className="text-[#c9a24d] tracking-[0.4em] uppercase text-xs font-bold">Offerings</span>
          <h1 className="text-5xl md:text-7xl serif mt-6">Our Services</h1>
          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg leading-relaxed">
            Tailored photography packages designed to meet your unique needs. We don't just take pictures; we craft memories.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => {
            const IconComponent = Icons[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="group p-10 border border-white/10 bg-white/5 relative overflow-hidden transition-all duration-500 hover:border-[#c9a24d]/50"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#c9a24d]/5 -mr-12 -mt-12 rounded-full blur-2xl group-hover:bg-[#c9a24d]/20 transition-all" />
                
                <div className="mb-8 text-[#c9a24d]">
                  <IconComponent size={40} />
                </div>
                
                <h3 className="text-2xl serif mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="text-sm font-bold tracking-widest text-white mb-8 border-b border-white/5 pb-4">
                  {service.price}
                </div>

                <ul className="space-y-3 mb-10">
                  {['High-res editing', 'Online Gallery', 'Print Rights'].map((item, idx) => (
                    <li key={idx} className="flex items-center text-xs text-gray-400 tracking-wide">
                      <Check size={14} className="text-[#c9a24d] mr-2" /> {item}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="inline-block text-xs font-bold tracking-widest uppercase py-3 px-6 bg-white/10 hover:bg-[#c9a24d] hover:text-white transition-all w-full text-center"
                >
                  Book This Package
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Custom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 p-12 bg-white/5 border border-white/10 rounded-2xl text-center"
        >
          <h2 className="text-3xl serif mb-6">Need something bespoke?</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-10">
            Every project is unique. Contact us to discuss custom multi-day coverage, travel projects, or high-volume commercial shoots.
          </p>
          <Link
            to="/contact"
            className="inline-block border border-[#c9a24d] text-[#c9a24d] px-12 py-4 uppercase tracking-[0.2em] text-xs font-bold hover:bg-[#c9a24d] hover:text-white transition-all"
          >
            Get a Custom Quote
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
