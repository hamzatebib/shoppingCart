import React from "react";
import "../../css/Products/products.css";
function Products(props) {
  return (
    <div className="products-wrapper">
      {props.products.map((product) => (
        <div className="product-item" key={product.id}>
          <img src={product.imageUrl} alt={product.title} />
          <div className="product-desc">
            <p>{product.title}</p>
            <span>{product.price}</span>
          </div>
          <button> add item </button>
        </div>
      ))}
    </div>
  );
}
export default Products;
