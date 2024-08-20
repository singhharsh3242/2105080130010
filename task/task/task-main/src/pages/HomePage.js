import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from '../components/ProductList';
import CategoryFilter from '../components/CategoryFilter';
import CompanyFilter from '../components/CompanyFilter';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://api.ecommerce.com/products');
        setProducts(response.data);
        setFilteredProducts(response.data);
      } catch (error) {
        console.error('Error fetching products', error);
      }
    };

    fetchProducts();
  }, []);

  const filterProducts = (category, company) => {
    let filtered = products;
    if (category) {
      filtered = filtered.filter(product => product.category === category);
    }
    if (company) {
      filtered = filtered.filter(product => product.company === company);
    }
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <CategoryFilter filterProducts={filterProducts} />
      <CompanyFilter filterProducts={filterProducts} />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default HomePage;
