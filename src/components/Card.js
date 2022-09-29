import React from 'react'

function Card(props) {
    const {image, name, color, stock, price, buy} = props.item;
  return (
    <div className="flex mx-auto p-3 justify-center w-fit">
        <div className="image_box h-10 w-10 mr-10 text-2xl">
          <img src={image} alt="product" />
        </div>
      <div className="name_box mr-9 text-2xl">
        <h1>{name}</h1>
      </div>
      <div className="color_box mx-2 mr-20 text-2xl">
        <h1>{color}</h1>
      </div>
      <div className="stock_box mx-2 mr-20 text-2xl">
        <h1>{stock}</h1>
      </div>
      <div className="price_box mx-2 mr-20 text-2xl">
        <h1>{price}</h1>
      </div>
      <div className="buy_box mx-2 mr-20 text-2xl">
        <button>{buy}</button>
      </div>
    </div>
  );
}

export default Card