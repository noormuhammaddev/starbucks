import React from 'react';
import { NavLink } from 'react-router-dom';
import MenuIcons from '../Menu/MenuIcons';


const Header = () => {
  return (
    <>
      <header className='w-full bg-black text-white flex justify-between p-2 h-16'>
        <div className="logo ">
         {/* <h1 className='text-3xl p-2 font-protest-guerrilla'> StarBucks</h1> */}
         <NavLink className='text-3xl p-2 font-protest-guerrilla'>StarBucks</NavLink>
        </div>
        <nav className='flex space-x-6 p-2'>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/AboutUs">AboutUs</NavLink>
          <NavLink to = "/NewBlogPost">Create Blog</NavLink>
          {/* <NavLink to="/contactUs">ContactUs</NavLink> */}
        </nav>
        <div className="icons flex space-x-5 p-2">
        <MenuIcons/>
        {/* <div className="Talk">
          {/* <span>Let's Talk</span> */}
          {/* <NavLink to = "/NewBlogPost">Let's Talk</NavLink>
        </div>  */}
        </div>
       
      </header>
    </>
  );
};

export default Header;
