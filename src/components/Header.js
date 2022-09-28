import React from "react";

function Header() {
    return (
      <div className="flex mx-auto p-3 bg-gray-300 justify-center w-fit">
        <div className="mr-10 text-2xl">
          <h1>Image</h1>
        </div>
        <div className="mx-10 mr-60 text-2xl">
          <h1>Name</h1>
        </div>
        <div className="mx-2 mr-20 text-2xl">
          <h1>Color</h1>
        </div>
        <div className="mx-2 mr-20 text-2xl">
          <h1>Stock</h1>
        </div>
        <div className="mx-2 mr-20 text-2xl">
          <h1>Price</h1>
        </div>
        <div className="mx-2 mr-20 text-2xl">
          <h1>Buy</h1>
        </div>
      </div>
    );
}

export default Header;
