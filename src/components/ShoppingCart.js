import React from 'react';
import Producto from './Producto';
import './Estilo.css';

const ShoppingCart = ({ items, onRemoveFromCart }) => {
  const totalPrice = items.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {items.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          items.map((item) => (
            <Producto
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              onRemove={() => onRemoveFromCart(item.id)}
              showAddToCart={false}
            />
          ))
        )}
      </div>
      <div className="total-price">Total: ${totalPrice.toFixed(2)}</div>
    </div>
  );
};

export default ShoppingCart;
