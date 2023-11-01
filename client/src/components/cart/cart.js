import React, { useEffect, useState } from "react";
import "../../css/cart/cart.css";
import Checkout from "../checkoutForm/checkout";

function Cart(props) {
  const [showForm, setShowForm] = useState(false);
  const [value, setValue] = useState("");
  const { cartItems, removeFromCart } = props;
  useEffect(() => {
    console.log("length" + cartItems.length);
  }, [cartItems]);
  const submitOrder = (e) => {
    e.preventDefault(); // Prevents the form from submitting in the default way
    const order = {
      name: value.name,
      value: value.email,
    };

    //console.log("submitOrder=" + JSON.stringify(order));
    console.log("ccccc");
    //console.log("dddddd");
  };
  const handleChange = (e) => {
    //prevstate +newvlue edit
    setValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
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
          <button onClick={() => setShowForm(true)}>select product</button>
        </div>
      )}
      <Checkout
        showForm={showForm}
        submitOrder={submitOrder}
        handleChange={handleChange}
        setShowForm={setShowForm}
      />
    </div>
  );
}
export default Cart;
