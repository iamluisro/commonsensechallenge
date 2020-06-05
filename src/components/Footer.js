import React from 'react';
import '../assets/styles/Footer.scss';

const Footer = () => {
  return (
    <div className='Footer__Container'>
      <div className='Footer__Items'>
        <div className='Footer__Text'>
          <h3>CONTÁCTANOS</h3>
          <span>(351) 530 9850</span>
        </div>
        <div className='Footer__Text'>
          <h3>CONÓCENOS</h3>
          <span>
            Acerca de nosotros
            <br />
            Nuestro equipo
            <br />
            Nuestros servicios
            <br />
            Responsabilidad social
            <br />
            Atención a proveedores
            <br />
            Aviso de privacidad
          </span>

        </div>
        <div className='Footer__Text'>
          <h3>COMPRA SEGURA</h3>
          <span>
            Aceptamos tarjetas de crédito, débito,
            <br />
            prepago y pagos en efectivo.
          </span>
        </div>
      </div>
      <div className='TOC__Items'>
        <span>Términos y Condiciones</span>
        <span>Aviso de Privacidad</span>
      </div>
    </div>
  );
};

export default Footer;
