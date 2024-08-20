import React from 'react';

const CategoryFilter = ({ filterProducts }) => {
  const handleCategoryChange = (e) => {
    filterProducts(e.target.value, null);
  };

  return (
    <div>
      <label>Filter by Category:</label>
      <select onChange={handleCategoryChange}>
        <option value="">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="fashion">Fashion</option>
        <option value="home">Home</option>
        {/* Add more categories as needed */}
      </select>
    </div>
  );
};

export default CategoryFilter;
