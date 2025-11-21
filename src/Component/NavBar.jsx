import React from 'react'

const NavBar = () => {
  return (
    <nav className='flex justify-between items-center px-10 py-4 bg-gray-200 shadow-md'>
        <div className="">
            <picture>
                <img src="" alt="" />
            </picture>
            <h1>Aunty Adelaja</h1>
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