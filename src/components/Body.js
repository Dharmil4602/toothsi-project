import React from 'react'
import Card from './Card'
import products from "../Products";

function Body() {
  return (
    <section>
      {products.map((item) => (
        <Card key={products.id} item={item}/>
      ))}
    </section>
  );
}

export default Body