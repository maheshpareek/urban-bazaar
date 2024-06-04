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

function ProductList({ products, setSelectedProduct }) {
  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-item">
          <img src={images[product.image]} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <label>
            Quantity:
            <input type="number" min="1" defaultValue="1" />
          </label>
          <button onClick={() => setSelectedProduct(product)}>View Details</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
