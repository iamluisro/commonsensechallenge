import React from 'react';
import '../assets/styles/Partners.scss';
import Truper from '../assets/img/truper.png';
import Phillips from '../assets/img/phillips.png';
import Coplex from '../assets/img/coplex.png';
import Teka from '../assets/img/teka.png';
import Steren from '../assets/img/steren.png';

const Partners = () => {
  return (
    <div className='Partners__Container'>
      <div className='Partners__Item'>
        <img src={Truper} alt='Truper' />
      </div>
      <div className='Partners__Item'>
        <img src={Phillips} alt='Phillips' />
      </div>
      <div className='Partners__Item'>
        <img src={Coplex} alt='Coplex' />
      </div>
      <div className='Partners__Item'>
        <img src={Teka} alt='Teka' />
      </div>
      <div className='Partners__Item'>
        <img src={Steren} alt='Steren' />
      </div>
    </div>
  );
};

export default Partners;
