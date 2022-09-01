import React, { useContext } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import AppContext from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import '../styles/components/Payment.css';

const Payment = () => {
  const { addNewOrder,removeAllFromCart, state: { cart, buyer } } = useContext(AppContext);
  const navigate = useNavigate();
  const paypalOptions = {
    clientId: process.env.REACT_APP_CLIENT_ID,
    intent: 'capture',
    currency: 'USD',
  };
  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };
  const handlePaymentSuccess = (data) => {
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      navigate('/checkout/success');
      removeAllFromCart();
    }
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <div className="payment">
      <div className="payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map((item) => (
          <div className="payment-item" key={item.title}>
            <div className="payment-element">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
          </div>
        ))}
        <div className="payment-button">
        <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal()}
            onSuccess={data => handlePaymentSuccess(data)}
            onError={error => console.log(error)}
            onCancel={data => console.log(data)}
        />
        </div>
      </div>
      <div></div>
    </div>
  )
}

export { Payment };