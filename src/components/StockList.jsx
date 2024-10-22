import React, { useState, useEffect, useMemo } from "react";
import FilterStock from "./FilterStock";
import SortStock from "./SortStock";
import StockItem from "./StockItem";
import { SORT_OPTIONS } from "../constants/constants";

const StockList = () => {
  const [stocks, setStocks] = useState([]);
  const [filterValue, setFilterValue] = useState(0);
  const [sortValue, setSortValue] = useState("");

  useEffect(() => {
    fetchStocks();
  }, []);

  const fetchStocks = async () => {
    try {
      const response = await fetch("/data/stockData.json");
      const data = await response.json();
      setStocks(data);
    } catch (error) {
      console.log("Error fetching stocks:", error);
    }
  };

  const handleFilterChange = (value) => {
    setFilterValue(value);
  };

  const handleSortChange = (value) => {
    setSortValue(value);
  };

  const getFilteredStocks = () => {
    return stocks.filter((stock) =>
      filterValue ? Math.abs(stock.percentageChange) > filterValue : true
    );
  };

  const getSortedStocks = (filteredStocks) => {
    switch (sortValue) {
      case SORT_OPTIONS.PRICE_HIGH_TO_LOW:
        return [...filteredStocks].sort((a, b) => b.price - a.price);
      case SORT_OPTIONS.PRICE_LOW_TO_HIGH:
        return [...filteredStocks].sort((a, b) => a.price - b.price);
      case SORT_OPTIONS.PERCENTAGE_HIGH_TO_LOW:
        return [...filteredStocks].sort(
          (a, b) => Math.abs(b.percentageChange) - Math.abs(a.percentageChange)
        );
      case SORT_OPTIONS.PERCENTAGE_LOW_TO_HIGH:
        return [...filteredStocks].sort(
          (a, b) => Math.abs(a.percentageChange) - Math.abs(b.percentageChange)
        );
      default:
        return filteredStocks;
    }
  };

  const displayedStocks = useMemo(() => {
    return getSortedStocks(getFilteredStocks());
  }, [stocks, filterValue, sortValue]);

  return (
    <div className="stock-list">
      <FilterStock
        filterValue={filterValue}
        onFilterChange={handleFilterChange}
      />
      <SortStock sortValue={sortValue} onSortChange={handleSortChange} />
      <ul>
        {displayedStocks.map((stock) => (
          <StockItem key={stock.symbol} stock={stock} />
        ))}
      </ul>
      {displayedStocks.length === 0 && <p>No records found!!!</p>}
    </div>
  );
};

export default StockList;
