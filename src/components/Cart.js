import React from 'react'
import Item from './Item'


function Cart() {
  return (
    <div>
      <h1>Shopping Cart</h1>
      <p>
        You Have <span>4</span> Items In Cart
      </p>
        <Item />
    </div>
  );
}

export default Cart