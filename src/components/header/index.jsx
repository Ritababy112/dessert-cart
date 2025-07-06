import React from "react";
import "./index.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useState } from "react";
// import useStateValue from './hooks/useStateValue';

  const Header = ({ setSearchTerm }) => {
  // const handleSearch = (e) => {
  //   setSearchTerm(e.target.value);
  // };
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
    setSearchTerm(value);
  };

  const clearSearch = () => {
    setInput("");
    setSearchTerm("");
  };


  //   const [{basket}, dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="header_logo">
          <StorefrontIcon className="header_img" />
          <h1 className="header_title">
            Dessert.<span>ng</span>
          </h1>
        </div>
      </Link>

      <div className="header_search">
        <input
        type="text"
        className="header_searchInput"
        value={input}
        onChange={handleChange}
        placeholder="Search desserts or categories..."
      />
      {input && (
        <button onClick={clearSearch} className="clear-btn">✖</button>
      )}
        <SearchIcon className="header_icon" />
      </div>
      <div className="header_nav">
        <Link to="/review" style={{textDecoration: "none"}}>
          <div className="nav_item">
            <button className="nav_item1">Leave A
              Review</button>
          </div>
        </Link>
        <Link to="/contact"style={{textDecoration: "none"}}>
          <div className="nav_item">
            <button className="nav_item1">Contact-us</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
