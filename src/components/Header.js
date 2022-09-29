import React from "react";

function Header() {
  return (
    <>
      <div className="flex mx-auto p-3 bg-gray-300 justify-between">
        {/* Main Heading */}
        <div className="heading mr-5">
          <h1 className="text-4xl cursor-pointer">Products</h1>
        </div>

        {/* Search Box */}
        <div className="search_box">
          <input
            className="w-96 h-10"
            type="text"
            placeholder="Search For Products"
          />
          <button className="mr-3">Search</button>
        </div>

        {/* Dropdownlist */}
        <div className="dropdown_list flex">
          <div className="category-dropdown">
            <label>
              Category
              <select className="rounded-md p-2">
                <option value="fruit">Headphones</option>
                <option value="vegetable">Camera</option>
                <option value="meat">Mobile</option>
              </select>
            </label>
          </div>

          <div className="size-dropdown">
            <label>
              Size
              <select className="rounded-md p-2">
                <option value="fruit">Fruit</option>
                <option value="vegetable">Vegetable</option>
                <option value="meat">Meat</option>
              </select>
            </label>
          </div>
        </div>

        {/* Cart */}
        <div className="cart">
          <button className="rounded-md p-2 text-white">
            <img className="h-8 w-8" src="./images/shopping-cart.png" alt="shopping-cart" />
          </button>
          </div>
      </div>
    </>
  );
}

export default Header;
