import React from 'react'
import Card from './Card'
import products from "../Products";
import { TableContainer } from '@mui/material';

function Body() {
  return (
    <div>
    <section>
      {products.map((item) => (
        <Card key={products.id} item={item}/>
      ))}
    </section>
    </div>
  );
}

export default Body