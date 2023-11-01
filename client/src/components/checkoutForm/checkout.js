import React from "react";
import "../../css/checkoutForm/checkout.css";
import Input from "../input/input";
function Checkout(props) {
  const { showForm, submitOrder, handleChange, setShowForm } = props;
  return (
    <>
      {showForm && (
        <div className="checkout-form">
          <span className="close-icon" onClick={() => setShowForm(false)}>
            &times;
          </span>
          <form onSubmit={submitOrder}>
            <Input
              label="name"
              type="text"
              name="name"
              onChange={handleChange}
            />
            <Input
              label="email"
              type="email"
              name="email"
              onChange={handleChange}
            />

            <div>
              <button type="submit">checkout</button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
export default Checkout;
