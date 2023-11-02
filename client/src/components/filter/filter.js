import React from "react";
import "../../css/filter/filter.css";
import Flip from "react-reveal/Flip";

function Filter(props) {
  const {
    sise,
    sort,
    handleFilterBySise,
    handleFilterByOrder,
    productsNumber,
    searchByName,
    handleInputNameChange,
    searchTerm,
  } = props;
  return (
    <Flip left>
      <div className="filter-wrapper">
        <h2 className="filter-title">filter title</h2>
        <div className="filter-by-name">
          <input
            type="text"
            className="filter-input"
            placeholder="search by name"
            onChange={handleInputNameChange}
          />
          <button
            className="filter-button"
            onClick={() => searchByName(searchTerm)}
          >
            search
          </button>
        </div>
        <div className="filter-number-of-product">
          numberof product: {productsNumber}
        </div>
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
        {/* <!-- add button call serch by name --> */}
      </div>
    </Flip>
  );
}
export default Filter;
