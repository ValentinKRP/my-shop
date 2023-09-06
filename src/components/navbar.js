import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/"> Shop </Link>
      <Link to="/contact"> Contact </Link>
      <Link to="/cart"> Cart</Link>
    </div>
  );
};

export default Navbar;
