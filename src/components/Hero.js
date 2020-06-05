import React from 'react';
import '../assets/styles/Hero.scss';
import heroImgSlider from '../assets/img/heroImg1.png';

const Hero = () => {
  return (
    <div className='Hero__Container'>
      <img src={heroImgSlider} alt='Conoce nuestra nueva línea de placas' />
    </div>
  );
};

export default Hero;
