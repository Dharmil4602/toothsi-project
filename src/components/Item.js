import React, { useState } from "react";
import { Table } from "react-bootstrap";
import products from "../Products";
import FinalCheckout from "./FinalCheckout";

function Item() {

    const [item, setItem] = useState(products)

    const handleIncrement = (item_id) => {
        setItem((item) =>
          item.map((item) =>
            item_id === item.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        );
    };


    const handleDecrement = (item_id) => {
        setItem(item => 
            item.map(item => item_id === item.id ? {...item, quantity: item.quantity - (item.quantity > 1 ? 1:0)} : item)
        );
    }


  return (
    <>
      <Table className="flex justify-around">
        <tbody className="align-middle">
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
          {item.map((item, i) => (
            <tr key={i} className="font-bold">
              <td className="flex justify-center">
                <img className="h-20 w-20" src={item.image} alt="product" />
              </td>
              <td className="text-center">{item.name}</td>
              <td className="text-center">${item.price}</td>
              <td className="quantity text-center">
                <div className="flex justify-center">
                  <button onClick={() => handleDecrement(item.id)}>
                    <i className="uil uil-minus"></i>
                  </button>
                  <div className="quantity mx-4">{item.quantity}</div>
                  <button onClick={() => handleIncrement(item.id)}>
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
        <FinalCheckout />
      </Table>
    </>
  );
}

export default Item;
