import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

function ProductList() {
  const [data, setData] = useState([]);
  useEffect(async () => {
    const url = "https://dummyjson.com/products";
    let result = await fetch(url);
    result = result.json();
    setData(result);
  }, []);
console.log(data);
  return <div></div>;
}

export default ProductList;
