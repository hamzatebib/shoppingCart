import React, { useState } from "react";
import "../../css/Products/products.css";
import ProductModal from "./productModal";
function Products(props) {
  const [product, setProduct] = useState("");
  const { products, addToCart } = props;
  const openModel = (product) => {
    setProduct(product);
  };
  const closeModal = () => {
    setProduct(false);
  };
  return (
    <div className="products-wrapper">
      {products.map((product) => (
        <div className="product-item" key={product.id}>
          <a href="#" onClick={() => openModel(product)}>
            <img src={product.imageUrl} alt={product.title} />
          </a>
          <div className="product-desc">
            <p>{product.title}</p>
            <span>${product.price}</span>
          </div>
          <button onClick={() => addToCart(product)}> add item </button>
        </div>
      ))}
      <ProductModal product={product} closeModal={closeModal} />
    </div>
  );
}
export default Products;
