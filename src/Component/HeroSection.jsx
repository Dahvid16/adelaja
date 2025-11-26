import React from 'react'
import { FaArrowRight, FaPhoneAlt } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background - Gradient fallback defined here, can be replaced with an image by uncommenting below */}
      <div className="absolute inset-0 z-0 bg-linear-to-br from-black via-brand-dark to-gray-900">
        {/* Optional: Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay"></div>
      </div>
      
      {/* If using an image background, use this structure:
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale" 
          alt="Abstract fashion background" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div> 
      */}

      <div className="container mx-auto px-6 flex flex-col items-center z-10 text-center pt-20 md:pt-32 md:pb-16">
        <h2 className="text-sm md:text-base uppercase tracking-[0.3em] text-gray-400 mb-4 md:mb-2 animate-fade-in-up">
          Avant-Garde Collection 2024
        </h2>
        
        <h1 className="flex flex-col font-serif text-6xl md:text-7xl lg:text-9xl font-bold text-white mb-8 md:mb-6 tracking-tighter leading-tight animate-fade-in-up delay-100">
          FUTURISTIC
          <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-600">COUTURE</span>
        </h1>

        <p className="max-w-xl mx-auto text-gray-300 text-lg md:text-xl mb-10 font-light leading-relaxed animate-fade-in-up delay-200">
          Redefining silhouette and structure through monochrome expression. 
          Where architectural precision meets wearable art.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 animate-fade-in-up delay-300">
          <a 
            href="tel:+15551234567" 
            className="group relative px-6 py-4 bg-white text-black font-semibold tracking-widest uppercase overflow-hidden rounded-3xl hover:bg-gray-200 transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-white focus:outline-none"
          >
            <span className="relative z-10 flex items-center gap-2">
              <FaPhoneAlt size={18} /> Book Appointment
            </span>
          </a>

          <a 
            href="#gallery" 
            className="group flex items-center px-6 py-4 gap-2 text-white uppercase tracking-widest border-1 rounded-3xl hover:text-gray-300 transition focus:outline-none focus:underline"
          >
            Explore Collection <FaArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-px h-16 bg-linear-to-b from-transparent via-white to-transparent"></div>
      </div>
    </section>
  )
}

export default HeroSection