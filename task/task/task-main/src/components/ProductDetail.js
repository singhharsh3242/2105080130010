import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`https://api.ecommerce.com/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        setError('Error fetching product details.');
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!product) return <div>No product found.</div>;

  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>Price: {product.price}</p>
      <p>Category: {product.category}</p>
      <p>Company: {product.company}</p>
      <p>Rating: {product.rating}</p>
      <p>Discount: {product.discount}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetail;
