
import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Award, Users, ShieldCheck } from 'lucide-react';

const StatCard = ({ icon: Icon, value, label, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="text-center p-8 border border-white/5 bg-white/2"
  >
    <Icon className="mx-auto mb-4 text-[#c9a24d]" size={32} />
    <div className="text-4xl font-bold serif mb-2">{value}</div>
    <div className="text-xs uppercase tracking-[0.2em] text-gray-500 font-bold">{label}</div>
  </motion.div>
);

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-[#0f0f0f]">
      {/* Bio Section */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-6 -left-6 w-full h-full border border-[#c9a24d]/20 -z-10" />
            <img
              src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?q=80&w=2070"
              alt="Photographer"
              className="w-full h-[600px] object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#c9a24d] tracking-[0.4em] uppercase text-xs font-bold">The Creative Director</span>
            <h1 className="text-5xl md:text-7xl serif mt-6 mb-8">Elias Thorne</h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              With over 12 years of experience behind the lens, Elias Thorne has carved a niche in the world of high-fashion and cinematic wedding photography. His work is characterized by dramatic lighting, raw emotional depth, and a commitment to authenticity.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              "I don't just see pixels; I see stories. Every frame is a chance to freeze a feeling in time, creating a legacy that outlives the moment itself."
            </p>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Signature_of_Theodore_Roosevelt.svg"
              alt="Signature"
              className="h-16 invert brightness-0 opacity-50"
            />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white/5 py-24 mb-32">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatCard icon={Camera} value="1,200+" label="Shoots Done" delay={0.1} />
          <StatCard icon={Users} value="450+" label="Happy Clients" delay={0.2} />
          <StatCard icon={Award} value="12" label="Art Awards" delay={0.3} />
          <StatCard icon={ShieldCheck} value="100%" label="Safe Delivery" delay={0.4} />
        </div>
      </section>

      {/* Philosophy */}
      <section className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl serif mb-12">Our Philosophy</h2>
          <div className="space-y-12">
            <div>
              <h3 className="text-[#c9a24d] uppercase tracking-widest text-sm font-bold mb-4">Simplicity</h3>
              <p className="text-gray-400 leading-relaxed">
                Great photography doesn't need to be complicated. We focus on the core elements—light, composition, and emotion.
              </p>
            </div>
            <div className="w-12 h-[1px] bg-white/10 mx-auto" />
            <div>
              <h3 className="text-[#c9a24d] uppercase tracking-widest text-sm font-bold mb-4">Connection</h3>
              <p className="text-gray-400 leading-relaxed">
                The best shots happen when the subject is at ease. We pride ourselves on building genuine connections with everyone we photograph.
              </p>
            </div>
            <div className="w-12 h-[1px] bg-white/10 mx-auto" />
            <div>
              <h3 className="text-[#c9a24d] uppercase tracking-widest text-sm font-bold mb-4">Excellence</h3>
              <p className="text-gray-400 leading-relaxed">
                From the initial consultation to the final edit, we pursue absolute excellence in every technical and creative aspect.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
