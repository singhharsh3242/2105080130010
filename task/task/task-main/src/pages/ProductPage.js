import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://api.ecommerce.com/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product details', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: {product.price}</p>
      <p>Category: {product.category}</p>
      <p>Company: {product.company}</p>
      <p>Rating: {product.rating}</p>
      <p>Discount: {product.discount}</p>
    </div>
  );
};

export default ProductPage;
