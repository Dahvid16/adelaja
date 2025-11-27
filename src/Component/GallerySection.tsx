import React, { useState, useEffect, useCallback } from 'react';
import { GalleryItem } from '../types';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';

const galleryData = [
{ id: 1, src: 'https://picsum.photos/800/1200?random=1', alt: 'Midnight Silk Gown', title: 'Midnight Void', season: 'SS24', description: 'Hand-draped silk with structured shoulder pads.' },
{ id: 2, src: 'https://picsum.photos/800/800?random=2', alt: 'Geometric Trench Coat', title: 'Neo Trench', season: 'FW23', description: 'Water-resistant polymer blend with asymmetric lapels.' },
{ id: 3, src: 'https://picsum.photos/800/1000?random=3', alt: 'Avant-Garde Headpiece', title: 'Halo Visor', season: 'SS24', description: '3D printed headwear with chrome finish.' },
{ id: 4, src: 'https://picsum.photos/800/1200?random=4', alt: 'Structured Blazer', title: 'Brutalist Blazer', season: 'FW23', description: 'Wool blend with rigid architectural lining.' },
{ id: 5, src: 'https://picsum.photos/800/900?random=5', alt: 'Layered Mesh Dress', title: 'Cyber Mesh', season: 'SS24', description: 'Layered technical mesh with LED integration capabilities.' },
{ id: 6, src: 'https://picsum.photos/800/1100?random=6', alt: 'Platform Boots', title: 'Gravity Boots', season: 'Core', description: 'Sustainable vegan leather with hollow geometric sole.' },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const openModal = (item: GalleryItem) => {
    setSelectedImage(item);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = useCallback(() => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  }, []);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [closeModal]);

  return (
    <section id="gallery" className="py-24 bg-[#1a1a1a]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="font-serif text-5xl text-white mb-3">The Collection</h2>
          <div className="w-30 h-1 bg-white mx-auto"></div>
        </div>

        {/* Masonry-ish Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryData.map((item) => (
            <div 
              key={item.id} 
              className="group relative overflow-hidden cursor-pointer rounded-2xl"
              onClick={() => openModal(item)}
              role="button"
              tabIndex={0}
              aria-label={`View details for ${item.title}`}
              onKeyDown={(e) => { if (e.key === 'Enter') openModal(item); }}
            >
              <div className="aspect-square overflow-hidden bg-gray-800">
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-xs text-gray-300 tracking-widest uppercase mb-1">{item.season}</p>
                <h3 className="text-xl text-white font-serif">{item.title}</h3>
                <FaMagnifyingGlass className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-60 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          onClick={closeModal} // Click outside to close
          role="dialog"
          aria-modal="true"
        >
          <button 
            onClick={closeModal}
            className="absolute top-6 right-6 text-white hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white rounded-full p-1 cursor-pointer"
            aria-label="Close gallery"
          >
            <FaTimes size={30} />
          </button>

          <div 
            className="flex flex-col md:flex-row max-w-6xl w-full bg-brand-dark overflow-hidden shadow-2xl animate-fade-in"
            onClick={(e) => e.stopPropagation()} // Prevent click propagation to overlay
          >
            <div className="w-full md:w-1/2 h-[50vh] md:h-[80vh]">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt} 
                className="w-full h-full object-cover rounded-br-2xl rounded-tl-2xl" loading='lazy'
              />
            </div>
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center text-left">
              <span className="text-sm font-bold tracking-widest text-gray-500 mb-2 uppercase border-b border-gray-700 pb-2 inline-block w-max">
                {selectedImage.season} Collection
              </span>
              <h3 className="text-3xl md:text-4xl font-serif text-white mb-6">{selectedImage.title}</h3>
              <p className="text-gray-300 font-light leading-relaxed mb-8">{selectedImage.description}</p>
              <button 
                className="px-8 py-3 bg-white text-black text-sm uppercase tracking-widest hover:bg-gray-300 transition-colors self-start"
                onClick={closeModal}
              >
                Inquire About Piece
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default GallerySection