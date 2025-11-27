import React from 'react'
import HeroSection from '../Component/HeroSection'
import About from '../Component/About'
import Testimonials from '../Component/Testimonials'
import Contact from '../Component/Contact'
import SocialsSide from '../Component/SocialsSide'
import GallerySection from '../Component/GallerySection'

const MainPage = () => {
  return (
    <>
        <SocialsSide/>
        <HeroSection/>
        <About/>
        <GallerySection/>
        <Testimonials/>
        <Contact/>
    </>
  )
}

export default MainPage