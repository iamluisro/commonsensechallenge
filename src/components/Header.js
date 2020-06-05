import React from 'react';
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';
import { MdFavorite } from 'react-icons/md';
import '../assets/styles/Header.scss';

const Header = () => {
  return (
    <>
      <nav className='navbar' role='navigation' aria-label='main navigation' style={{ padding: '1rem 5rem 1rem 2rem' }}>
        <div className='navbar-brand'>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className='navbar-item'>
            <h1 className='is-size-2 has-text-orange logoFont'>LOGO</h1>
          </a>
          <a role='button' className='navbar-burger burger' aria-label='menu' aria-expanded='false' data-target='navbarBasicExample'>
            <span aria-hidden='true' />
            <span aria-hidden='true' />
            <span aria-hidden='true' />
          </a>
        </div>

        <div id='navbarBasicExample' className='navbar-menu  navbar-end'>
          <div className='navbar-input'>
            <input type='text' placeholder='Buscar producto...' />
            <span className='icon is-small is-right'>
              <FaSearch />
            </span>
          </div>
          <div className='navbar-item Header__Item'>
            <span className='icon is-small is-right'>
              <FaUser />
            </span>
            <span>Perfil</span>
          </div>
          <div className='navbar-item Header__Item'>
            <span className='icon is-small is-right'>
              <MdFavorite />
            </span>
            <span>Mis Favoritos</span>
          </div>
          <div className='navbar-item Header__Item'>
            <span className='icon is-small is-right'>
              <FaShoppingCart />
            </span>
            <span>Mi Carrito</span>
          </div>

        </div>

      </nav>

    </>
  );
};

export default Header;
