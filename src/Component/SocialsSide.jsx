import React from 'react'
import { FaFacebook, FaInstagram, FaSnapchat, FaSnapchatSquare, FaTiktok } from 'react-icons/fa';
/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';

const SocialsSide = () => {
  return (
    <motion.div className="fixed bottom-0 right-0 z-40 flex flex-col items-center gap-2 p-2 md:p-6"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <div className="flex flex-col gap-8">
        <motion.a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-400 hover:text-white transition-transform hover:-translate-y-1"
          aria-label="Follow us on Instagram"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaInstagram size={28} />
        </motion.a>
        <motion.a 
          href="https://twitter.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-400 hover:text-white transition-transform hover:-translate-y-1"
          aria-label="Follow us on Twitter"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaTiktok size={28} />
        </motion.a>
        <motion.a 
          href="https://facebook.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-400 hover:text-white transition-transform hover:-translate-y-1"
          aria-label="Follow us on Facebook"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaSnapchatSquare size={28} />
        </motion.a>
      </div>
      <div className="w-px h-14 bg-gray-700 mt-4"></div>
    </motion.div>
  )
}

export default SocialsSide