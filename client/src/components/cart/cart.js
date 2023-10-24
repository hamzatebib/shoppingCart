import React, { useEffect } from "react";
import "../../css/cart/cart.css";

function Cart(props) {
  const { cartitems, removeFromCart } = props;
  useEffect(() => {
    console.log("length" + cartitems.length);
  }, [cartitems]);
  return (
    <div className="cart-wrapper">
      <div className="cart-title">
        {" "}
        {cartitems.length === 0 ? (
          "Empty Card"
        ) : (
          <p>there is {cartitems.length} products in card</p>
        )}
      </div>
      <div className="cart-items">
        {cartitems.map((item) => (
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
    </div>
  );
}
export default Cart;
