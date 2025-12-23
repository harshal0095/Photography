
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, MapPin, Phone, Mail, Loader2, CheckCircle2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
    }, 2000);
  };

  return (
    <div className="pt-32 pb-24 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-20 text-center">
          <span className="text-[#c9a24d] tracking-[0.4em] uppercase text-xs font-bold">Inquiries</span>
          <h1 className="text-5xl md:text-7xl serif mt-6">Book Your Session</h1>
          <p className="text-gray-400 max-w-xl mx-auto mt-6">
            Ready to tell your story? Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div className="space-y-8">
              <h2 className="text-3xl serif">Studio Details</h2>
              <div className="flex items-start space-x-6">
                <div className="p-4 bg-white/5 rounded-full text-[#c9a24d]">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-white font-medium mb-1 uppercase tracking-widest text-sm">Location</p>
                  <p className="text-gray-400">123 Creative Lane, Art District<br />New York, NY 10001</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="p-4 bg-white/5 rounded-full text-[#c9a24d]">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-white font-medium mb-1 uppercase tracking-widest text-sm">Phone</p>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="p-4 bg-white/5 rounded-full text-[#c9a24d]">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-white font-medium mb-1 uppercase tracking-widest text-sm">Email</p>
                  <p className="text-gray-400">hello@trinetra-studio.com</p>
                </div>
              </div>
            </div>

            <div className="relative h-80 w-full overflow-hidden rounded-sm grayscale opacity-60">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1709841234567!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/5 p-8 md:p-12 rounded-sm border border-white/5 relative"
          >
            <AnimatePresence mode="wait">
              {formState === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-full py-20 text-center"
                >
                  <CheckCircle2 size={80} className="text-[#c9a24d] mb-6" />
                  <h2 className="text-3xl serif mb-4">Message Sent!</h2>
                  <p className="text-gray-400">Thank you for reaching out. We'll be in touch very soon.</p>
                  <button
                    onClick={() => setFormState('idle')}
                    className="mt-8 text-xs font-bold tracking-widest uppercase text-[#c9a24d] border-b border-[#c9a24d] pb-1"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Name</label>
                      <input
                        required
                        type="text"
                        className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-[#c9a24d] transition-all"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Email</label>
                      <input
                        required
                        type="email"
                        className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-[#c9a24d] transition-all"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Shoot Type</label>
                    <select
                      className="w-full bg-[#1a1a1a] border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-[#c9a24d] transition-all appearance-none"
                    >
                      <option>Wedding</option>
                      <option>Portrait</option>
                      <option>Fashion</option>
                      <option>Commercial</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Message</label>
                    <textarea
                      required
                      rows={6}
                      className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-[#c9a24d] transition-all"
                      placeholder="Tell us about your vision..."
                    ></textarea>
                  </div>

                  <button
                    disabled={formState === 'loading'}
                    type="submit"
                    className="w-full py-4 bg-white text-black font-bold tracking-[0.3em] uppercase text-xs hover:bg-[#c9a24d] hover:text-white transition-all flex items-center justify-center disabled:opacity-50"
                  >
                    {formState === 'loading' ? (
                      <>
                        <Loader2 className="animate-spin mr-2" size={18} />
                        Processing...
                      </>
                    ) : (
                      <>
                        Book My Session <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;