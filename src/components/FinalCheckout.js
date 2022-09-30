import React from "react";

function FinalCheckout() {
  return (
    <div>
      <div className="bg-amber-300 h-[500px] w-[450px] rounded-lg mx-10">
        <h2 className="text-center underline">Checkout:</h2>
        <h3 className="no-underline">Cart Total</h3>
        <div className="subtotal flex justify-between mx-5">
          <h3>Subtotal</h3>
          <h3>500</h3>
        </div>
        <hr />
        <div className="total flex justify-between mx-5">
          <h3>Total</h3>
          <h3>10000</h3>
        </div>
        <hr />
        <div className="checkout-button">
            <button className="bg-blue-500 rounded-lg p-2 text-white font-bold">Proceed To Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default FinalCheckout;
