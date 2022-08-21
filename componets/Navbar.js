import React from 'react'
import {TypographyEl}from '../componets'
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="navbar flex">
      <div className="navbar_logo">
        <Link href="/">
            Sanity+Next
        </Link>
      </div>
      <div className="navbar_items">
        <Link href="/cart">
            Cart
        </Link>
      </div>
    </div>
  );
}

export default Navbar