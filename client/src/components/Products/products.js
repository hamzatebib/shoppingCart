import React, { useState } from "react";
import "../../css/Products/products.css";
import ProductModal from "./productModal";
import Bounce from "react-reveal/Bounce";

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
    <Bounce left cascade>
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
    </Bounce>
  );
}
export default Products;
