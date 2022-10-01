import React from "react";

function Header(props) {
  return (
    <>
      <div className="flex mx-auto p-3 bg-gray-300 justify-between sticky ">
        {/* Main Heading */}
        <div className="heading mr-5">
          <h1
            className="text-4xl cursor-pointer"
            onClick={() => props.setShow(true)}
          >
            Products
          </h1>
        </div>

        {/* Search Box */}
        <div className="search_box">
          <input
            className="w-96 h-10 p-3"
            type="text"
            placeholder="Search For Products"
          />
          <button className="mr-3 bg-red-200 p-2 font-bold">Search</button>
        </div>

        {/* Dropdownlist */}
        <div className="dropdown_list flex">
          <div className="category-dropdown">
            <label className="mr-5">
              <strong>Category:</strong>
              <select className="rounded-md p-2 mx-3">
                <option value="fruit">Headphones</option>
                <option value="vegetable">Camera</option>
                <option value="meat">Mobile</option>
              </select>
            </label>
          </div>

          <div className="size-dropdown">
            <label>
              <strong>Size:</strong>
              <select className="rounded-md p-2 mx-3">
                <option value="fruit">Small</option>
                <option value="vegetable">Medium</option>
                <option value="meat">Large</option>
              </select>
            </label>
          </div>
        </div>

        {/* Cart */}
        <div className="cart">
          <button className="rounded-md p-2 text-white">
            <img
              className="h-9 w-9"
              src="./images/shopping-cart.png"
              alt="shopping-cart"
              onClick={() => props.setShow(false)}
            />
          </button>
          <span className="bg-red-500 text-white font-bold px-2 rounded-md w-fit absolute right-2 top-1">
            0
          </span>
        </div>
      </div>
    </>
  );
}

export default Header;
