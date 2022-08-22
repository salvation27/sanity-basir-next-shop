import React from 'react'
import Link from 'next/link';
import { Switch } from '@mui/material';

const Navbar = ({ darkMode, darkModeChangeHandler }) => {
  // console.log("Navbar", darkMode);

  return (
    <div className="navbar flex">
      <div className="navbar_logo">
        <Link href="/">Sanity+Next</Link>
      </div>
      <div className="navbar_items">
        <Switch checked={darkMode} onChange={darkModeChangeHandler}></Switch>
        {/* <button onClick={darkModeChangeHandler}>
          {darkMode ? "Darck" : "White"}
        </button> */}
        <Link href="/cart">Cart</Link>
      </div>
    </div>
  );
};

export default Navbar