import React, { useState } from "react";
import Popup from "./Popup";

function FinalCheckout(props) {
  // Popup Function
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  // const checkoutButton = () => {
  //     alert("Thank you for shopping with us!");
  // }
  return (
    <div>
      <div className="bg-amber-300 h-[330px] w-[450px] rounded-lg mx-10">
        <h2 className="text-center underline mb-10">Checkout:</h2>
        <div className="subtotal flex justify-between mx-5">
          <h3 className="text-[20px]">Subtotal</h3>
          <h3 className="text-[20px]">${props.setTotal}</h3>
        </div>
        <hr />
        <div className="total flex justify-between mx-5">
          <h3>Total</h3>
          <h3>${Math.round(props.setTotal * 1000) / 1000}</h3>
        </div>
        <hr />
        <div className="checkout-button">
          <button
            onClick={togglePopup}
            className="bg-blue-500 rounded-lg p-2 text-white font-bold flex m-auto"
          >
            Proceed To Checkout
          </button>
          {showPopup && (
            <Popup
              content={
                <>
                  <b>Thank You For Shopping</b>
                </>
              }
              handleClose={togglePopup}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default FinalCheckout;
