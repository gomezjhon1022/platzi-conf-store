import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Header.css';


const Header = () => {
  const {state: { cart }} = useContext(AppContext);
  return (
    <div className="header">
      <h1 className="header-title">
        <Link to="/">
          Platzi Conf Merch
        </Link>
      </h1>
      <div className="header-checkout">
        <Link to="/checkout">
          <i className="fas fa-shopping-basket"></i>
        </Link>
        {cart.length > 0 && <div className="header-alert">{cart.length}</div>}
      </div>
    </div>
  );
}

export default Header;