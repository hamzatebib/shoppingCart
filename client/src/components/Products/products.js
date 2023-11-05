import React, { useState } from "react";
import "../../css/Products/products.css";
import ProductModal from "./productModal";
import Bounce from "react-reveal/Bounce";
import { connect } from "react-redux";
import { fetchProduct } from "../../store/actions/products";
import { useEffect } from "react";
function Products(props) {
  const [product, setProduct] = useState("");
  const { products, addToCart, fetchProduct } = props;
  useEffect(() => {
    fetchProduct();
  }, []);
  const openModel = (product) => {
    setProduct(product);
  };
  const closeModal = () => {
    setProduct(false);
  };
  return (
    <Bounce left cascade>
      <div className="products-wrapper">
        {products && products.length
          ? products.map((product) => (
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
            ))
          : "loading..."}
        <ProductModal product={product} closeModal={closeModal} />
      </div>
    </Bounce>
  );
}
export default connect(
  (state) => {
    return { products: state.products.products };
  },
  { fetchProduct }
)(Products);
