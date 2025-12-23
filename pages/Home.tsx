
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Home: React.FC = () => {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 800], [0, 250]);
  const yText = useTransform(scrollY, [0, 800], [0, -120]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <div className="relative overflow-hidden bg-[#0f0f0f]">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: yBg }} className="absolute inset-0 z-0 scale-110">
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#0f0f0f] z-10" />
          <img
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ opacity, y: yText }}
          className="relative z-20 text-center px-6 max-w-5xl"
        >
          <span className="text-[#c9a24d] tracking-[0.6em] uppercase text-[10px] font-bold mb-8 block">Est. MMXII</span>
          <h1 className="text-6xl md:text-9xl serif mb-8 tracking-tighter leading-[0.9]">
            Visual <br /> <span className="italic font-light opacity-80">Poetry.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 font-light tracking-widest mb-12 max-w-xl mx-auto uppercase">
            Cinematic Photography for those who see beyond the frame.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <Link
              to="/portfolio"
              className="px-12 py-5 bg-[#c9a24d] text-black font-bold tracking-[0.3em] uppercase text-[10px] hover:bg-white transition-all duration-500 flex items-center group shadow-xl"
            >
              Explore Archive <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="px-12 py-5 border border-white/10 text-white font-bold tracking-[0.3em] uppercase text-[10px] hover:bg-white hover:text-black transition-all duration-500"
            >
              Book Studio
            </Link>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 15, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[#c9a24d]"
        >
          <ChevronDown size={24} strokeWidth={1} />
        </motion.div>
      </section>

      {/* Cinematic Reveal Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-4xl md:text-6xl serif leading-tight mb-8">Capturing the <br/><span className="italic">unspoken.</span></h2>
              <p className="text-gray-500 leading-relaxed text-lg font-light tracking-wide mb-8">
                Every shutter click is a dialogue between light and shadow. We specialize in finding the narrative in the mundane and the majesty in the moments you might otherwise miss.
              </p>
              <Link to="/about" className="group flex items-center text-[#c9a24d] tracking-[0.4em] uppercase text-[10px] font-bold">
                Discover Our Craft <div className="ml-4 w-12 h-[1px] bg-[#c9a24d] group-hover:w-20 transition-all duration-500" />
              </Link>
            </motion.div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-6 h-[700px]">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?q=80&w=1974"
                alt="Feature"
                className="absolute inset-0 w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-1000 scale-110"
              />
            </motion.div>
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="relative overflow-hidden translate-y-20"
            >
              <img
                src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1976"
                alt="Feature"
                className="absolute inset-0 w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-1000 scale-110"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Wide Cinematic Shot */}
      <section className="relative h-[80vh] w-full overflow-hidden mt-20">
        <motion.div
          initial={{ scale: 1.3 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070" 
            className="w-full h-full object-cover brightness-50"
          />
        </motion.div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-4xl md:text-7xl serif text-white mb-6">Inspired by Nature.</h3>
            <p className="text-[#c9a24d] uppercase tracking-[0.5em] text-xs font-bold">Limited Edition Prints Now Available</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
