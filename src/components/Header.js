import React, { useEffect, useState } from "react";
import data from "../Products";

function Header(props) {

    const [handleSearch, setHandleSearch] = useState("");

    const [search, setSearch] = useState("");
    const handleSubmit = (e) => {
      e.preventDefault();
      setSearch(handleSearch);
      setHandleSearch("");
    };

  useEffect(() => {}, [search]);


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
            onChange={(e) => setHandleSearch(e.target.value)}
            value={handleSearch}
          />
          <button className="mr-3 bg-red-200 p-2 font-bold" onSubmit={handleSubmit}>Search</button>
          {/* <div className="dropdown"> */}
            {data
              .filter((item) => {
                const searchTerm = handleSearch.toLowerCase();
                const fullName = item.name.toLowerCase();

                return (
                  searchTerm &&
                  fullName.startsWith(searchTerm) &&
                  fullName !== searchTerm
                );
              })
              .map((item) => (
                <div
                  onClick={() => setHandleSearch(item.name)}
                  className="dropdown-row"
                  // pass all the parameters to the function
                  key={item.id}
                >
                  {item.name}
                </div>
              ))}
          {/* </div> */}
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
