import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import T_shirt1 from '../images/T_shirt1.jpg';
import hoodie1 from '../images/hoodie1.jpg';
import hoodie2 from '../images/hoodie2.jpg';
import hoodie3 from '../images/hoodie3.jpg';
import hoodie4 from '../images/hoodie4.jpg';

const images = {
  'T_shirt1.jpg': T_shirt1,
  'hoodie1.jpg': hoodie1,
  'hoodie2.jpg': hoodie2,
  'hoodie3.jpg': hoodie3,
  'hoodie4.jpg': hoodie4,
};

function ShoppingCart({ cart, updateCart, removeFromCart, finalizePurchase }) {
  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map(item => (
          <div key={item.id} className="cart-item">
            <img src={images[item.image]} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <label>
                Quantity:
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => updateCart(item.id, parseInt(e.target.value, 10))}
                />
              </label>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </div>
        ))
      )}
      {cart.length > 0 && (
        <button onClick={finalizePurchase}>Finalize Purchase</button>
      )}
    </div>
  );
}

export default ShoppingCart;
