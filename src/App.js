import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import Cart from "./components/Cart";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = [...cart];
    arr[ind].quantity += d;

    if (arr[ind].quantity === 0) arr[ind].quantity = 1;
    setCart([...arr]);
  };

  return (
    <div>
      <Header setShow={setShow} />
      {show ? (
        <Body handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
      {/* <Body/> */}
    </div>
  );
}

export default App;
