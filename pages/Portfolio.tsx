
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus } from 'lucide-react';
import { PORTFOLIO } from '../constants';
import { Photo } from '../types';

const PortfolioItem = ({ photo, index, onClick }: { photo: Photo; index: number; onClick: () => void }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.8, 
        ease: [0.21, 1, 0.36, 1],
        delay: (index % 3) * 0.1 
      }}
      className="relative group overflow-hidden break-inside-avoid cursor-none mb-8"
      onClick={onClick}
    >
      <div className="relative overflow-hidden bg-[#1a1a1a] rounded-sm shadow-2xl">
        <motion.img
          src={photo.url}
          alt={photo.title}
          loading="lazy"
          className="w-full h-auto object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
        />
        
        {/* Cinematic Overlay on Hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="bg-[#c9a24d] p-3 rounded-full inline-block mb-4 shadow-lg"
            >
              <Plus className="text-black w-6 h-6" />
            </motion.div>
            <h3 className="text-2xl serif text-white tracking-wide px-4">{photo.title}</h3>
            <div className="w-12 h-[1px] bg-[#c9a24d] mx-auto my-3" />
            <p className="text-[#c9a24d] text-[10px] uppercase tracking-[0.4em] font-bold">{photo.category}</p>
          </div>
        </div>

        {/* Minimal Corner Framing on Hover */}
        <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-white/40 opacity-0 group-hover:opacity-100 transition-all duration-700 -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
        <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-white/40 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
      </div>
    </motion.div>
  );
};

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const categories = ['All', 'Weddings', 'Portraits', 'Fashion', 'Events', 'Products'];
  const filteredPhotos = filter === 'All' ? PORTFOLIO : PORTFOLIO.filter(p => p.category === filter);

  return (
    <div className="pt-32 pb-24 bg-[#0f0f0f] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-16 h-[1px] bg-[#c9a24d] mx-auto mb-8"
          />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl serif mb-6 tracking-tight"
          >
            Gallery
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-500 uppercase tracking-[0.6em] text-[10px] font-black"
          >
            A Journey Through Light & Lens
          </motion.p>
        </header>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-12 mb-20">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`group relative text-[10px] font-black tracking-[0.3em] uppercase transition-all duration-500 py-2 ${
                filter === cat ? 'text-[#c9a24d]' : 'text-gray-500 hover:text-white'
              }`}
            >
              {cat}
              {filter === cat && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute bottom-0 left-0 w-full h-[1px] bg-[#c9a24d]"
                />
              )}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div 
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredPhotos.map((photo, index) => (
              <PortfolioItem 
                key={photo.id} 
                photo={photo} 
                index={index} 
                onClick={() => setSelectedPhoto(photo)} 
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.button
              whileHover={{ rotate: 90, color: '#c9a24d' }}
              className="absolute top-8 right-8 text-white/40 transition-all z-[101]"
              onClick={() => setSelectedPhoto(null)}
            >
              <X size={40} strokeWidth={1} />
            </motion.button>
            
            <div className="relative w-full h-full flex flex-col items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 150 }}
                className="relative max-w-6xl w-full flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedPhoto.url}
                  alt={selectedPhoto.title}
                  className="max-w-full max-h-[80vh] object-contain border border-white/5 shadow-2xl"
                />
                
                <div className="mt-8 text-center max-w-2xl">
                  <h2 className="text-3xl md:text-4xl serif text-white mb-3">{selectedPhoto.title}</h2>
                  <div className="flex items-center justify-center space-x-4">
                    <div className="h-[1px] w-8 bg-[#c9a24d]/40" />
                    <p className="text-[#c9a24d] tracking-[0.4em] uppercase text-xs font-bold">{selectedPhoto.category}</p>
                    <div className="h-[1px] w-8 bg-[#c9a24d]/40" />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;
