import React from 'react';
import '../styles/components/Payment.css';

const Payment = () => {
  return (
    <div className="payment">
      <div className="payment-content">
        <h3>Resumen del pedido:</h3>
        <div className="payment-button">Botón de pago con Paypal
        </div>
      </div>
      <div></div>
    </div>
  )
}

export { Payment };