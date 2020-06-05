import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import HomeProducts from './components/HomeProducts';
import './assets/styles/App.scss';

function App() {
  return (
    <>
      <Layout>
        <Hero />
        <HomeProducts />
      </Layout>
    </>
  );
}

export default App;
