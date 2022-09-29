import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
// import Card from './Card'
import products from "../Products";

function Body(props) {


  return (
    <>
      <h1>Product List</h1>
      {/* Creating A Table */}
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

        {/* Mapping Each Product */}
        {products.map((item, i) => (
          <tr key={i} className="text-center">
            <td>{item.id}</td>
            <td>
              <img className="h-40 w-40" src={item.image} alt="product" />
            </td>
            <td>{item.name}</td>
            <td>{item.color}</td>
            <td>{item.stock}</td>
            <td>{item.price}</td>
            <td>
              <Button variant="outline-primary" onClick={props.handleClick}>Add To Cart</Button>{" "}
            </td>
          </tr>
        ))}
      </Table>
    </>
  );
}

export default Body;
