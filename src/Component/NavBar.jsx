import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from "../assets/Adelaja_Logo_main.png";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];


const NavBar = () => {
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace('#', ''));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // find the entry with the largest intersectionRatio that is intersecting
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { root: null, rootMargin: '0px', threshold: [0.25, 0.5, 0.75] }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  
  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-transparent ${
        isScrolled || isMobileMenuOpen
          ? 'bg-black/80 backdrop-blur-md border-white/10 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Brand Logo */}
        <motion.a href="#" className="flex items-center gap-1 text-[1.7rem] md:text-3xl font-serif font-bold tracking-tighter text-white hover:text-gray-300 transition-colors"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        >
          <picture>
            <img src={Logo} alt="Adélàjà Logo" className='w-10 h-10' loading='load' />
          </picture>
          Aunty Adélàjà
        </motion.a>

        {/* Desktop Nav */}
        <motion.nav className="hidden md:flex space-x-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        >
          {navLinks.map((link) => {
            const id = link.href.replace('#', '');
            const isActive = activeSection === id;
            return (
              <a
                key={link.label}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                className={`text-sm uppercase tracking-widest transition-colors relative group ${isActive ? 'text-white' : 'text-gray-300 hover:text-white'}`}
              >
                {link.label}
                <span className={`absolute left-0 -bottom-1 ${isActive ? 'w-full' : 'w-0'} h-px bg-white transition-all duration-300 navline`}></span>
              </a>
            );
          })}
        </motion.nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      
      <AnimatePresence>
      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <motion.div className="md:hidden absolute top-full left-0 w-full bg-black/95 border-b border-white/10 p-6 flex flex-col space-y-4 shadow-2xl"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0 }}
        exit={{y: -50, opacity: 0}}
        >
          {navLinks.map((link) => {
            const id = link.href.replace('#', '');
            const isActive = activeSection === id;
            return (
              <a
                key={link.label}
                href={link.href}
                className={`text-lg uppercase tracking-widest block ${isActive ? 'text-white' : 'text-gray-200/70 hover:text-white'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            );
          })}
        </motion.div>
      )}
      </AnimatePresence>
    </header>
  )
}

export default NavBar