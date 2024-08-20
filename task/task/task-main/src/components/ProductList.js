import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ products }) => {
  return (
    <div>
      {products.map(product => (
        <div key={product.id} className="product-card">
          <h3>{product.productName}</h3>
          <p>Price: {product.price}</p>
          <p>Category: {product.rating}</p>
          <p>Company: {product.discount}</p>
          <p>Rating: {product.availability}</p>
          <Link to={`/product/${product.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
