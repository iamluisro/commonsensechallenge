import React from 'react';
import { FaSearch } from 'react-icons/fa';
import '../assets/styles/Header.scss';

const Header = () => {
  return (
    <>
      <nav className='navbar' role='navigation' aria-label='main navigation' style={{ padding: '2rem 2rem' }}>
        <div className='navbar-brand'>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className='navbar-item'>
            <h1 className='is-size-2 has-text-orange'>Logo</h1>
          </a>
        </div>
        <div className='navbar-menu navbar-end'>
          <div className='navbar-input'>
            <input type='text' placeholder='Buscar producto...' />
            <span className='icon is-small is-right'>
              <FaSearch />
            </span>
          </div>
          <div className='navbar-item Header__Item'>
            <span className='icon is-small is-right'>
              <FaSearch />
            </span>
            <span>Perfil</span>
          </div>
          <div className='navbar-item Header__Item' style={{ padding: '.5rem 3rem' }}>
            <span className='icon is-small is-right'>
              <FaSearch />
            </span>
            <span>Mis Favoritos</span>
          </div>
          <div className='navbar-item Header__Item'>
            <span className='icon is-small is-right'>
              <FaSearch />
            </span>
            <span>Mi Carrito</span>
          </div>

        </div>
      </nav>

    </>
  );
};

export default Header;
