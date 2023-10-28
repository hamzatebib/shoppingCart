import React, { useEffect } from "react";
import "../../css/cart/cart.css";

function Cart(props) {
  const { cartItems, removeFromCart } = props;
  useEffect(() => {
    console.log("length" + cartItems.length);
  }, [cartItems]);
  return (
    <div className="cart-wrapper">
      <div className="cart-title">
        {" "}
        {cartItems.length === 0 ? (
          "Empty Card"
        ) : (
          <p>there is {cartItems.length} products in card</p>
        )}
      </div>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.imageUrl} alt="" />
            <div className="cart-info">
              <div>
                <p>title:{item.title}</p>
                <p>qty: {item.qty}</p>
                <p>price:{item.price}</p>
              </div>
              <button onClick={() => removeFromCart(item)}>
                Remove from Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      {cartItems.length && (
        <div className="cart-footer">
          <div className="total">
            total:${" "}
            {cartItems.reduce((acc, p) => {
              return acc + p.price;
            }, 0)}
          </div>
          <button>select product</button>
        </div>
      )}
    </div>
  );
}
export default Cart;
