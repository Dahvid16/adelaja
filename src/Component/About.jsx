import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute -inset-4 border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <picture>
            <img 
              src="https://picsum.photos/600/600?grayscale" 
              alt="Designer working in studio" 
              className="w-full h-full object-cover grayscale brightness-75 contrast-125"
              loading="lazy"
            />
            </picture>
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="font-serif text-4xl md:text-[2.9rem] text-white mb-8">
              The Architecture of <span className="italic text-gray-400">Elegance</span>
            </h2>
            <div className="space-y-6 text-gray-300 font-light text-lg leading-relaxed">
              <p>
                <span className='text-xl font-semibold italic'>Aunty Adelaja</span> was founded on a singular principle: that clothing should be an extension of the body's geometry. We strip away the unnecessary, leaving only pure form and function.
              </p>
              <p>
                A Lagos born women's atelier crafting refined, sculptural silhouettes in premium fabrics. We design to empower confidence in every dress, trust through made-to-measure fits for every body shape, and love by turning your story into a singular, bespoke piece. Made-to-order for discerning women in Nigeria and beyond.
              </p>
              <p>
                Our designs are not merely worn; they are inhabited. Drawing inspiration from brutalist architecture and organic futurism, every piece is hand-crafted in our atelier using sustainable, high-tech fabrics that adapt to the wearer's movement.
              </p>
              <blockquote className="border-l-2 border-white pl-6 py-2 my-8 text-xl text-white font-serif italic">
                "Fashion is the armor to survive the reality of everyday life."
              </blockquote>
              <div className="pt-4">
                <a href="#" className="text-white border-b border-white pb-1 hover:text-gray-400 hover:border-gray-400 transition-colors uppercase tracking-widest text-sm">
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