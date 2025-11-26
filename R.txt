import React from 'react'
import HeroBg from '../assets/Video/heroBg.mp4'

const HeroSection = () => {
  return (
    <section className="relative h-[70svh] overflow-hidden">
      {/* Background video (positioned behind content) */}
      <video
        className="absolute inset-0 w-full h-full object-cover object-center"
        src={HeroBg}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src={HeroBg} type="video/mp4" />
        {/* Fallback text */}
      </video>

      {/* Overlay to darken video for readable text */}
      <div className="absolute inset-0 bg-black/65" aria-hidden="true"></div>

      {/* Hero content on top of video */}
      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <div className="max-w-4xl text-center text-white">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight">
            Welcome to Aunty Adelaja
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-white/90">
            Beautiful, handcrafted designs for your brand. Playful, modern, and
            responsive — built with love.
          </p>
        </div>
      </div>
    </section>
  )
}

export default HeroSection