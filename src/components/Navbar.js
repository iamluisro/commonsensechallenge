import React from 'react';
import '../assets/styles/Navbar.scss';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { IoMdPricetag } from 'react-icons/io';

const Navbar = () => {
  return (
    <div className='NavBar__Container'>

      <div className='NavBar__Menu'>
        <div className='Navbar__Menu__Item'>
          <h1>DEPARTAMENTOS</h1>
          <RiArrowDropDownLine style={{ fontSize: '2rem' }} />
        </div>
        <div className='Navbar__Menu__Item'>
          <h1>MARCAS</h1>
          <RiArrowDropDownLine style={{ fontSize: '2rem' }} />
        </div>
      </div>
      <div className='Navbar__Oferta'>
        <div className='Navbar__Menu__Item'>
          <h1>OFERTAS</h1>
          <IoMdPricetag style={{ fontSize: '1rem', marginLeft: '.5rem', transform: 'scale(-1, 1)' }} />
        </div>

      </div>

    </div>
  );
};

export default Navbar;
