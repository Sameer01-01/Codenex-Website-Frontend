import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  // State to toggle mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Navbar Container */}
      <div className='bg-black text-white font-semibold flex items-center justify-between px-6 py-4'>
        {/* Logo */}
        <div className='flex items-center'>
          <img src={logo} alt="Logo" className='w-12' />
        </div>

        {/* Navigation Links for larger screens */}
        <nav className='hidden md:flex items-center gap-8'>
          <a href="#" className='hover:text-cyan-300'>HOME</a>
          <a href="#" className='hover:text-cyan-300'>TEAM</a>
          <a href="#" className='hover:text-cyan-300'>COURSE</a>
          <a href="#" className='hover:text-cyan-300'>NEWSLETTER</a>
          <a href="#" className='hover:text-cyan-300'>CONTACT</a>
        </nav>

        {/* Hamburger Icon for mobile screens */}
        <div className='md:hidden'>
          <button onClick={toggleMobileMenu} className='text-white'>
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className='md:hidden flex flex-col items-center bg-black text-white'>
          <a href="#" className='py-2 hover:text-cyan-300'>HOME</a>
          <a href="#" className='py-2 hover:text-cyan-300'>TEAM</a>
          <a href="#" className='py-2 hover:text-cyan-300'>COURSE</a>
          <a href="#" className='py-2 hover:text-cyan-300'>NEWSLETTER</a>
          <a href="#" className='py-2 hover:text-cyan-300'>CONTACT</a>
        </div>
      )}
    </>
  );
};

export default Navbar;
