import React from 'react'
import { FaArrowRight, FaPhoneAlt } from 'react-icons/fa';
import { OnReveal } from '../OnReveal';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-linear-to-br from-black via-brand-dark to-gray-900">
      </div>
      
      <div className="container mx-auto px-6 flex flex-col items-center z-10 text-center pt-16 md:pt-32 md:pb-16">
      <OnReveal>
        <h2 className="text-[12px] md:text-base tracking-[0.3em] text-gray-400 mb-4 md:mb-1 animate-fade-in-up">
          No. 1 TRUSTED BRAND
        </h2>
        </OnReveal>
        <OnReveal>
        <h1 className="flex flex-col font-serif text-7xl md:text-7xl lg:text-9xl font-bold text-white mb-8 md:mb-6 tracking-tighter leading-tighter">
          AFRICAN
          <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-600">Elegance</span>
        </h1>
        </OnReveal>
        <OnReveal>
        <p className="max-w-xl mx-auto text-gray-300 text-lg mb-10 font-light leading-relaxed animate-fade-in-up delay-200">
          Where heritage meets haute couture. Bespoke silhouettes crafted to celebrate your story and instill confidence by every stitch.
        </p>
        </OnReveal>
        <OnReveal>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 md:gap-8 animate-fade-in-up delay-300">
          <motion.a 
            href="#contact" 
            className="group relative px-8 py-4 bg-white text-black font-semibold tracking-widest uppercase overflow-hidden rounded-3xl hover:bg-gray-200 transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-white focus:outline-none"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <FaPhoneAlt size={18} /> Make Enquiry
            </span>
          </motion.a>

          <motion.a 
            href="#gallery" 
            className="group flex items-center px-6 py-4 gap-2 text-white uppercase tracking-widest border rounded-3xl hover:text-gray-300 transition focus:outline-none focus:underline"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Gallery <FaArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>
    </OnReveal>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-px h-20 bg-linear-to-b from-transparent via-white to-transparent"></div>
      </div>
    </section>
  )
}

export default HeroSection