import React from "react";
import { SORT_OPTIONS } from "../constants/constants";

const SortStock = ({ sortValue, onSortChange }) => {
  return (
    <div className="sort-container">
      <label htmlFor="sort-options">Sort By:</label>
      <select
        id="sort-options"
        value={sortValue}
        onChange={(e) => onSortChange(e.target.value)}
      >
        <option value={SORT_OPTIONS.DEFAULT}>Select Sorting Option</option>
        <option value={SORT_OPTIONS.PRICE_HIGH_TO_LOW}>
          Price: High to Low
        </option>
        <option value={SORT_OPTIONS.PRICE_LOW_TO_HIGH}>
          Price: Low to High
        </option>
        <option value={SORT_OPTIONS.PERCENTAGE_HIGH_TO_LOW}>
          Percentage Change: High to Low
        </option>
        <option value={SORT_OPTIONS.PERCENTAGE_LOW_TO_HIGH}>
          Percentage Change: Low to High
        </option>
      </select>
    </div>
  );
};

export default SortStock;
