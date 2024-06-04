import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import T_shirt1 from './images/T_shirt1.jpg';
import hoodie1 from './images/hoodie1.jpg';
import hoodie2 from './images/hoodie2.jpg';
import hoodie3 from './images/hoodie3.jpg';
import hoodie4 from './images/hoodie4.jpg';


const images = {
  'T_shirt1.jpg': T_shirt1,
  'hoodie1.jpg': hoodie1,
  'hoodie2.jpg': hoodie2,
  'hoodie3.jpg': hoodie3,
  'hoodie4.jpg': hoodie4,
};

function ProductDetails({ product, setSelectedProduct, addToCart }) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value, 10));
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setSelectedProduct(null);
  };

  return (
    <div className="product-details">
      <button onClick={() => setSelectedProduct(null)}>Back to List</button>
      <img src={images[product.image]} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <label>
        Quantity:
        <input type="number" min="1" value={quantity} onChange={handleQuantityChange} />
      </label>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductDetails;
