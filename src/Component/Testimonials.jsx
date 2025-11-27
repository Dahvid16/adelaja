import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: "Elena V.",
    role: "Art Curator",
    quote: "BrandName's designs aren't just clothes; they are sculptures for the body. The attention to detail is unmatched in the industry.",
    image: "https://picsum.photos/100/100?random=10"
  },
  {
    id: 2,
    name: "Marcus T.",
    role: "Tech Entrepreneur",
    quote: "The futuristic aesthetic perfectly aligns with my vision. I feel empowered and armored when wearing the Neo Trench.",
    image: "https://picsum.photos/100/100?random=11"
  },
  {
    id: 3,
    name: "Sarah J.",
    role: "Fashion Editor",
    quote: "A refreshing departure from the noise of fast fashion. Pure, intentional, and stunningly executed monochrome mastery.",
    image: "https://picsum.photos/100/100?random=12"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto">
          <FaQuoteLeft size={48} className="text-gray-700 mb-5" />
          
          <div className="relative w-full overflow-hidden min-h-[300px] flex items-center justify-center border border-gray-700 rounded-2xl p-5 md:p-8 bg-gray-900/50">
            {testimonials.map((item, index) => (
              <div 
                key={item.id}
                className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
                  index === currentIndex 
                    ? 'opacity-100 translate-x-0 relative' 
                    : 'opacity-0 translate-x-20 absolute pointer-events-none'
                }`}
                aria-hidden={index !== currentIndex}
              >
                <p className="text-xl md:text-3xl text-center font-serif text-white leading-relaxed mb-8 italic">
                  "{item.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-12 h-12 rounded-full grayscale object-cover border border-gray-700" loading='lazy'
                  />
                  <div className="text-left">
                    <p className="text-white font-bold tracking-widest text-sm uppercase">{item.name}</p>
                    <p className="text-gray-500 text-xs uppercase tracking-wide">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-8 mt-8">
            <button 
              onClick={prevSlide}
              className="p-3 border border-gray-700 rounded-full text-gray-400 hover:text-white hover:border-white transition-all focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="p-3 border border-gray-700 rounded-full text-gray-400 hover:text-white hover:border-white transition-all focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Next testimonial"
            >
              <FaChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials