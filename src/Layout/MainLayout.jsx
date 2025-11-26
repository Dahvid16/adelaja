import React from 'react'
import NavBar from '../Component/NavBar'
import { Outlet } from 'react-router-dom'
import FooterSection from '../Component/FooterSection'

const MainLayout = () => {
  return (
    <>
        <NavBar/>
        <Outlet/>
        <FooterSection/>
    </>
  )
}

export default MainLayout