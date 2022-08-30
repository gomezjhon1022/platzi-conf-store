import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Checkout.css'

const Checkout = () => {
  const { state: { cart }, removeFromCart } = useContext(AppContext);
  const handleRemove = (index) => () => {
    removeFromCart(index);
  };
  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  }
  return (
    <div className="checkout">
      <div className="checkout-content">
        {cart.length > 0 ? <h3>Lista de pedidos:</h3>: <h3>Sin pedidos...</h3>}
        {cart.map((item, index) => (
          <div className="checkout-item" key= {index}>
            <div className="checkout-element">
              <h4>{item.title}</h4>
              <span> $ {item.price}</span>
            </div>
            <button type="button" onClick={handleRemove(index)}>
              <i className="fas fa-trash-alt" />
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 &&
      <div className="checkout-sidebar">
        <h3>{`Precio Total: $ ${handleSumTotal()}`}</h3>
        <Link to="/checkout/information">
          <button type="button">Continuar pedido</button>
        </Link>
      </div>
      }
    </div>
  )
}

export { Checkout };