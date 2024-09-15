import React from 'react'
import { FaDribbble, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa'; 
const MenuIcons = () => {
  return (
   <>
   <div className="MenuIcons flex space-x-5">
      {/* Social Media Icons */}
      <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
            <FaDribbble size={24} className='hover:text-green-700' />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={24} className='hover:text-green-700' />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} className='hover:text-green-700'/>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={24} className='hover:text-green-700'/>
          </a>
   </div>
   </>
  )
}

export default MenuIcons
