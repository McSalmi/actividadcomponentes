import React, { useState } from 'react';
import Header from './components/Header';
import Promotion from './components/Promotions';
import Producto from './components/Producto';
import ShoppingCart from './components/ShoppingCart';
import Checkout from './components/Checkout';
import './components/Estilo.css';

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

const products = [
  { id: 1, name: 'Product 1', price: 9.99 },
  { id: 2, name: 'Product 2', price: 14.99 },
  { id: 3, name: 'Product 3', price: 19.99 },
];

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    const newProduct = new Product(product.name, product.price);
    setCartItems([...cartItems, newProduct]);
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="app">
      <Header />
      <Promotion />
      <div className="main-content">
        <Producto products={products} onAddToCart={handleAddToCart} />
        <ShoppingCart items={cartItems} onRemoveFromCart={handleRemoveFromCart} />
        <Checkout cartItems={cartItems} total={totalPrice} />
      </div>
    </div>
  );
};

export default App;
