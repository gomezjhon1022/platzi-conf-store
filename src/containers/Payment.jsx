import React from 'react';
import { useContext } from 'react/cjs/react.production.min';
import { PayPalButton } from 'react-paypal-button-v2';
import AppContext from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import '../styles/components/Payment.css';

const Payment = () => {
  const { addNewOrder, state: { cart, buyer } } = useContext(AppContext);
  const navigate = useNavigate();
  const paypalOptions = {
    clientId: 'AVLB9OoX8pVP6x37T4NAGWeUCon7zlSDtdKtOaw7gJAtd9Zg_rK-0_YTque5tRg8H7E4aQxhAnSSawRM',
    intent: 'capture',
    currency: 'USD',
  };
  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };
  const handlePaymentSuccess = (data) => {
    console.log(data);
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      navigate('/checkout/success')
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
            onPaymentStart={() => console.log('Start Payment')}
            onPaymentSuccess={(data) => handlePaymentSuccess(data)}
            onPaymentError={(error) => console.log(error)}
            onPaymentCancel={(data) => console.log(data)}
        />
        </div>
      </div>
      <div></div>
    </div>
  )
}

export { Payment };