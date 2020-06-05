import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import '../assets/styles/Layout.scss';

const Layout = ({ children }) => {
  return (
    <div className='Layout__Container'>
      <Header />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
