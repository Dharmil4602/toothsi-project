import React, { useEffect, useState } from "react";
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

    const removeProduct = (id) => {
      if (window.confirm("Do you want to delete this product?")) {
        item.forEach((item, index) => {
          if (item._id === id) {
            item.splice(index, 1);
          }
        });
        setItem([...item]);
      }
    };

    // Setting Total
    const [total, setTotal] = useState(0);
    useEffect(() => {
      const totalCost = () => {
        let total = item.reduce((prev, item) => {
          return prev + item.price * item.quantity;
        }, 0);
        setTotal(total);
      };
      totalCost();
    }, [item]);
  return (
    <>
      <div className="flex justify-evenly">
        <Table className="mx-16 bg-red-200 p-2 rounded-md">
          {/* <tbody className="align-middle mx-20 overflow-scroll"> */}
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
          {/* {item.map((item, i) => (
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
                    <div className="quantity mx-2">{item.quantity}</div>
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
            ))} */}

          {item.map((item, i) => (
            <tr
              key={i}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              className="font-bold"
            >
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
                  <div className="quantity mx-2">{item.quantity}</div>
                  <button onClick={() => handleIncrement(item.id)}>
                    <i className="uil uil-plus"></i>
                  </button>
                </div>
              </td>
              <td className="subTotal text-center">${item.price * item.quantity}</td>
              <td className="delete text-center">
                <i onClick={() => removeProduct(item.id)} className="fa fa-trash" aria-hidden="true"></i>
              </td>
            </tr>
          ))}

          {/* {item.map((item) => (
            <TableRow
              key={item.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {item.name.length > 40 ? (
                <td>{item.name.substring(0, 40)}...</td>
              ) : (
                <td>{item.name}</td>
              )}
              <TableCell>
                <img className="h-20 w-20" src={item.image} alt="product" />
              </TableCell>
              <TableCell align="right">${item.price}</TableCell>
              <TableCell>
                <div>
                  <button onClick={() => handleDecrement(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncrement(item.id)}>+</button>
                </div>
              </TableCell>
              <TableCell align="right">${item.price * item.quantity}</TableCell>
              <TableCell align="right">
                <i className="fa fa-trash" aria-hidden="true"></i>
              </TableCell>
            </TableRow>
          ))} */}
          {/* </tbody> */}
        </Table>
        <FinalCheckout setTotal={total}/>
      </div>
    </>
  );
}

export default Item;
