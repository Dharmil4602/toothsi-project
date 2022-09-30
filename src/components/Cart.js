import React, { useState } from 'react'
import products from '../Products'
import Item from './Item'
import Table from "react-bootstrap/Table";


function Cart() {
  const [item, setItem] = useState(products)
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