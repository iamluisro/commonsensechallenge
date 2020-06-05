import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import HomeProducts from './components/HomeProducts';
import Features from './components/Features';
import Partners from './components/Partners';
import './assets/styles/App.scss';

function App() {
  return (
    <>
      <Layout>
        <Hero />
        <HomeProducts />
        <Features />
        <Partners />
      </Layout>
    </>
  );
}

export default App;
