import React from 'react';
import '../assets/styles/HeroProducts.scss';
import { FaShoppingCart } from 'react-icons/fa';
import { AiOutlineArrowRight } from 'react-icons/ai';
import FeaturedProduct from '../assets/img/901187.png';
import Product1 from '../assets/img/250137.png';
import Product2 from '../assets/img/900289.png';
import Product3 from '../assets/img/380506.png';
import Product4 from '../assets/img/380504.png';

const HomeProducts = () => {
  return (
    <div className='HomeProducts__Container'>
      <h1 className='has-text-primary is-size-4'>Nuevos Productos</h1>
      <div className='Products__Container'>
        <div className='Product__Item__FeaturedItm'>
          <div className='Product__Item__Img'>
            <img src={FeaturedProduct} alt='Ventilador de pedestal 3 velocidades 45w VP-1645 High Power' />
          </div>
          <div className='Product__Item__Description'>
            <p>Ventilador de pedestal 3 velocidades 45w VP-1645 High Power</p>
            <div>
              <span>$339.96</span>
              <div className='Product__Item__ShoppingCart'>
                <FaShoppingCart />
                <span>
                  Agregar al carrito
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className='Product__Item1'>
          <div className='Product__Item__Img__Secondary'>
            <img src={Product1} alt='Cable bimetal unipolar calibre 10 rojo Voltmex' />
          </div>
          <div className='Product__Item__Description'>
            <p>Cable bimetal unipolar calibre 10 rojo Voltmex</p>
            <div>
              <span>$405.18</span>
              <div className='Product__Item__ShoppingCart'>
                <FaShoppingCart />
                <span>
                  Agregar al carrito
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className='Product__Item2'>
          <div className='Product__Item__Img__Secondary'>
            <img src={Product2} alt='Compresor de banda de 50 lts COM-3450 Oakland' />
          </div>
          <div className='Product__Item__Description'>
            <p>Compresor de banda de 50 lts COM-3450 Oakland</p>
            <div>
              <span>$4,508.46</span>
              <div className='Product__Item__ShoppingCart'>
                <FaShoppingCart />
                <span>
                  Agregar al carrito
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className='Product__Item3'>
          <div className='Product__Item__Img__Secondary'>
            <img src={Product3} alt='Ventilador de pedestal 3 velocidades 45w VP-1645 High Power' />
          </div>
          <div className='Product__Item__Description'>
            <p>Atornillador inalambrico 6V con estuche, bateria y cargador DCF060-B3</p>
            <div>
              <span>$$1,215.63</span>
              <div className='Product__Item__ShoppingCart'>
                <FaShoppingCart />
                <span>
                  Agregar al carrito
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className='Product__Item4'>
          <div className='Product__Item__Img__Secondary'>
            <img src={Product4} alt='Ventilador de pedestal 3 velocidades 45w VP-1645 High Power' />
          </div>
          <div className='Product__Item__Description'>
            <p>Atornillador inalambrico 6V con estuche, bateria y cargador DCF060-B3</p>
            <div>
              <span>$1,215.63</span>
              <div className='Product__Item__ShoppingCart'>
                <FaShoppingCart />
                <span>
                  Agregar al carrito
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='MoreOptions'>
        Ver Más
        <AiOutlineArrowRight />
      </div>
    </div>
  );
};

export default HomeProducts;
