import React from 'react';

const CompanyFilter = ({ filterProducts }) => {
  const handleCompanyChange = (e) => {
    filterProducts(null, e.target.value);
  };

  return (
    <div>
      <label>Filter by Company:</label>
      <select onChange={handleCompanyChange}>
        <option value="">All Companies</option>
        <option value="company1">Company 1</option>
        <option value="company2">Company 2</option>
        <option value="company3">Company 3</option>
        {/* Add more companies as needed */}
      </select>
    </div>
  );
};

export default CompanyFilter;
