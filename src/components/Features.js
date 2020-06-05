import React from 'react';
import '../assets/styles/Features.scss';
import Delivery from '../assets/img/delivery.svg';
import Devolucion from '../assets/img/return.svg';
import Like from '../assets/img/like.svg';

const Features = () => {
  return (
    <div className='Features__Container'>
      <div className='Feature__Item'>
        <div className='Feature__Img'>
          <img src={Delivery} alt='Envíos y devoluciones Entrega garantizada en máximo de 48 horas.' />
        </div>
        <div className='Feature__Text'>
          <h3>Envíos y devoluciones</h3>
          <span>Entrega garantizada en máximo de 48 horas.</span>
        </div>
      </div>
      <div className='Feature__Item'>
        <div className='Feature__Img'>
          <img src={Devolucion} alt='Envíos y devoluciones Entrega garantizada en máximo de 48 horas.' />
        </div>
        <div className='Feature__Text'>
          <h3>Garantía de devolución</h3>
          <span>Clientes 100% satisfechos.</span>
        </div>
      </div>
      <div className='Feature__Item'>
        <div className='Feature__Img'>
          <img src={Like} alt='Envíos y devoluciones Entrega garantizada en máximo de 48 horas.' />
        </div>
        <div className='Feature__Text'>
          <h3>Clientes satisfechos</h3>
          <span>Ofrecemos la mejor variedad de productos.</span>
        </div>
      </div>
    </div>
  );
};

export default Features;
