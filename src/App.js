import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ProductList from './Components/ProductList';
import ProductDetails from './ProductDetails';
import ShoppingCart from './Components/ShoppingCart';
import AccountForm from './AccountForm';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [userDetails, setUserDetails] = useState(null);
  const [showAccountForm, setShowAccountForm] = useState(false);

  const products = [
    { id: 1, name: 'T-shirt', description: 'Comfortable cotton t-shirt', image: 'T_shirt1.jpg' },
    { id: 2, name: 'Hoodie 1', description: 'Warm and cozy hoodie', image: 'hoodie1.jpg' },
    { id: 3, name: 'Hoodie 2', description: 'Stylish hoodie with a front pocket', image: 'hoodie2.jpg' },
    { id: 4, name: 'Hoodie 3', description: 'Lightweight hoodie', image: 'hoodie3.jpg' },
    { id: 5, name: 'Hoodie 4', description: 'Comfortable and warm sweatshirt, perfect for cooler days', image: 'hoodie4.jpg' },
  ];

  const addToCart = (product, quantity) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prevCart, { ...product, quantity }];
    });
  };

  const updateCart = (productId, quantity) => {
    setCart((prevCart) => {
      if (quantity <= 0) {
        return prevCart.filter((item) => item.id !== productId);
      }
      return prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      );
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const finalizePurchase = () => {
    alert('Purchase complete!');
    setCart([]);
  };

  const saveUserDetails = (details) => {
    setUserDetails(details);
    setShowAccountForm(false);
  };

  return (
    <div className="App">
      <header>
        <nav>
          <button onClick={() => setShowAccountForm(true)}>Account</button>
          <button onClick={() => setShowAccountForm(false)}>Home</button>
        </nav>
      </header>
      {showAccountForm ? (
        <AccountForm userDetails={userDetails} saveUserDetails={saveUserDetails} />
      ) : (
        <>
          {selectedProduct ? (
            <ProductDetails product={selectedProduct} setSelectedProduct={setSelectedProduct} addToCart={addToCart} />
          ) : (
            <>
              <ProductList products={products} setSelectedProduct={setSelectedProduct} />
              <ShoppingCart cart={cart} updateCart={updateCart} removeFromCart={removeFromCart} finalizePurchase={finalizePurchase} />
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;