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
      <Table>
        <thead>
          <tr className="text-center">
            <th>Id</th>
            <th>Image</th>
            <th>Name</th>
            <th>Color</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Buy</th>
          </tr>
        </thead>
        {
          item.map((currentItem) => {
            return <Item />
          })
        }
      </Table>
    </div>
  );
}

export default Cart