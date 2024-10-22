import React, { useEffect } from 'react';

const FilterStock = ({ filterValue, onFilterChange }) => {
  useEffect(() => {
    const savedFilterValue = sessionStorage.getItem('filterValue');
    if (savedFilterValue) {
      onFilterChange(savedFilterValue);
    }
  }, [onFilterChange]);

  const handleChange = (e) => {
    const newValue = e.target.value;
    onFilterChange(newValue);
    sessionStorage.setItem('filterValue', newValue);
  };

  return (
    <div className="filter-container">
      <label htmlFor="percentage-filter">Filter by % Change:</label>
      <input
        type="number"
        id="percentage-filter"
        min="0"
        step="0.5"
        value={filterValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default FilterStock;
