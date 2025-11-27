import React from 'react'
import { FaFacebook, FaInstagram, FaSnapchat, FaSnapchatSquare, FaTiktok } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';

const SocialsSide = () => {
  return (
    <div className="fixed bottom-0 right-0 z-40 flex flex-col items-center gap-6 p-2 md:p-6">
      <div className="flex flex-col gap-6">
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-400 hover:text-white transition-transform hover:-translate-y-1"
          aria-label="Follow us on Instagram"
        >
          <FaInstagram size={28} />
        </a>
        <a 
          href="https://twitter.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-400 hover:text-white transition-transform hover:-translate-y-1"
          aria-label="Follow us on Twitter"
        >
          <FaTiktok size={28} />
        </a>
        <a 
          href="https://facebook.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-400 hover:text-white transition-transform hover:-translate-y-1"
          aria-label="Follow us on Facebook"
        >
          <FaSnapchatSquare size={28} />
        </a>
      </div>
      <div className="w-px h-14 bg-gray-700 mt-4"></div>
    </div>
  )
}

export default SocialsSide