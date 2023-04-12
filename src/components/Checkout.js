import React from 'react';
import PropTypes from 'prop-types';
import './Estilo.css';

const Checkout = ({ cartItems, total }) => {
  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="cart-item__name">{item.name}</div>
            <div className="cart-item__price">${item.price.toFixed(2)}</div>
          </div>
        ))}
      </div>
      <div className="total-price">Total: ${total.toFixed(2)}</div>
      <button className="checkout-button">Pay Now</button>
    </div>
  );
};

Checkout.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
  total: PropTypes.number.isRequired,
};

export default Checkout;
