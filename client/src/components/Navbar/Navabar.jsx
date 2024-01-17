import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./../Navbar/Navbar.scss";


const Navabar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <span>menu</span>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">about:blank</Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/">account</Link>
          </div>
          <div className="icons">
            <SearchIcon />

            <div className="cartIcon">
              <ShoppingCartOutlinedIcon />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navabar;
