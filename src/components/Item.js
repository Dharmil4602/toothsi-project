import React from 'react'

function Item() {
  return (
    <>
      <div className="cart-items">
        <div className="cart-items-container">
          <div className="items-info">
            <div className="product-image"></div>
            <div className="product-title"></div>
            <div className="product-price"></div>
            <div className="product-quantity"></div>
            <div className="product-subtotal"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Item