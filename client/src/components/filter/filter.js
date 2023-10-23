import React from "react";
import "../../css/filter/filter.css";

function Filter(props) {
  const { sise, sort, handleFilterBySise, handleFilterByOrder } = props;
  return (
    <div className="filter-wrapper">
      <h2 className="filter-title">filter title</h2>
      <div className="filter-number-of-product">numberof product: 4</div>
      <div className="filter-by-size">
        <span>filter</span>
        <select
          value={sise}
          className="filter-select"
          onChange={handleFilterBySise}
        >
          <option value="all">All</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="XS">XS</option>
        </select>
      </div>
      <div className="filter-by-size">
        <span>filter</span>
        <select
          value={sort}
          className="filter-select"
          onChange={handleFilterByOrder}
        >
          <option value="lastest">Lastest</option>
          <option value="lower">Lower</option>
          <option value="highest">Highest</option>
        </select>
      </div>
    </div>
  );
}
export default Filter;
