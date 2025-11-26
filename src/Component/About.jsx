import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute -inset-4 border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img 
              src="https://picsum.photos/600/800?grayscale" 
              alt="Designer working in studio" 
              className="w-full h-auto object-cover grayscale brightness-75 contrast-125"
              loading="lazy"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-8">
              The Architecture of <span className="italic text-gray-400">Silence</span>
            </h2>
            <div className="space-y-6 text-gray-300 font-light text-lg leading-relaxed">
              <p>
                BrandName was founded on a singular principle: that clothing should be an extension of the soul's geometry. We strip away the unnecessary, leaving only pure form and function.
              </p>
              <p>
                Our designs are not merely worn; they are inhabited. Drawing inspiration from brutalist architecture and organic futurism, every piece is hand-crafted in our atelier using sustainable, high-tech fabrics that adapt to the wearer's movement.
              </p>
              <blockquote className="border-l-2 border-white pl-6 py-2 my-8 text-xl text-white font-serif italic">
                "Fashion is the armor to survive the reality of everyday life."
              </blockquote>
              <div className="pt-4">
                <a href="#contact" className="text-white border-b border-white pb-1 hover:text-gray-400 hover:border-gray-400 transition-colors uppercase tracking-widest text-sm">
                  Read Our Full Story
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About