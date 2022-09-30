import React from "react";
import { Table } from "react-bootstrap";
import products from "../Products";

function Item() {
    const handleIncrement = (item) => {
        console.log("Increment");
    };


    const handleDecrement = (item) => {
        console.log("Decrement");
    };
  return (
    <>
      <Table>
        <thead>
          <tr className="text-center">
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, i) => (
            <tr key={i} className="font-bold">
              <td className="flex justify-center">
                <img className="h-20 w-20" src={item.image} alt="product" />
              </td>
              <td className="text-center">{item.name}</td>
              <td className="text-center">${item.price}</td>
              <td className="quantity text-center">
                <div className="">
                  <button>
                    <i className="uil uil-minus"></i>
                  </button>
                  <input className="w-4 mx-2" type="text" value=""/>
                  <button onClick={handleIncrement}>
                    <i className="uil uil-plus"></i>
                  </button>
                </div>
              </td>
              <td className="subTotal text-center">Subtotal</td>
              <td className="delete text-center">
                <i className="fa fa-trash" aria-hidden="true"></i>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default Item;
