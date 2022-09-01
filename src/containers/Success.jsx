import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../styles/components/Success.css';

const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;
  return (
    <div className="succes">
      <div className="success-content">
        <h2>{`${buyer[0].name}, Gracias por tu compra`}</h2>
        <span>Tu pedido llegará en 3 dias a tu dirección:</span>
        <div className="success-map">Google Maps</div>
      </div>
    </div>
  )
}

export { Success };