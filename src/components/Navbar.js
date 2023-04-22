import React from 'react'
import Logo from '../logo.png'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='border flex space-x-6 md:space-x-8 items-center md:pl-8 py-4 '>
          <img className='h-[60px] md:h-[70px]' src={Logo} alt="" />
      <Link to={'/'} className='text-blue-400 text-xl md:text-3xl font-bold'>BlueBird Movies</Link>
      <Link to={'favourites'} className='text-blue-400 text-xl md:text-3xl font-bold'>Favourite</Link>
    </div>
  )
}

export default Navbar
