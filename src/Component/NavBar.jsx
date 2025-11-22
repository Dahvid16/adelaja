import React from 'react'

const NavBar = () => {
  return (
    <nav className='flex justify-between items-center px-16 py-6 glassy shadow-md'>
        <div className="">
            <picture>
                <img src="" alt="" />
            </picture>
            <h1 className="text-3xl font-bold">Aunty Adelaja</h1>
        </div>
        <ul className='flex gap-10'>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}

export default NavBar