import React from "react";

const StockItem = ({ stock }) => {
  return (
    <li
      className={`stock-item ${
        stock.percentageChange > 3
          ? "text-green"
          : stock.percentageChange < -3
          ? "text-red"
          : ""
      }  `}
    >
      {stock.symbol}: ${stock.price} ({stock.percentageChange}%)
    </li>
  );
};

export default StockItem;
