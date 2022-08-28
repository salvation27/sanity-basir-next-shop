import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
// import { Switch } from '@mui/material';
import { Store } from "../utils/store";

const Navbar = ({ darkMode, darkModeChangeHandler }) => {
  // console.log("Navbar", darkMode);
  const [cartNum, setCartNum] = useState(0);
  const {
    state: {
      cart: { cartItems },
    },
  } = useContext(Store);
  useEffect(() => {
    setCartNum(cartItems.length);
  }, [cartItems]);

  return (
    <div className="navbar flex">
      <div className="navbar_logo">
        <Link href="/">Sanity+Next</Link>
      </div>
      <div className="navbar_items flex">
        {/* <Switch  checked={darkMode} onChange={darkModeChangeHandler}></Switch> */}
        <button onClick={darkModeChangeHandler}>
          {darkMode ? "Darck" : "White"}
        </button>
        <div className="cart_item">{cartNum}</div>
        <Link href="/cart">Cart</Link>
        <Link href="/login">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
