import React, { useEffect, useState } from "react";
import Items from "./Product_Items";

import { Link } from "react-router-dom";
import product1 from "./Product_Items";

const Product1 = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [ratingVal, setRatingVal] = useState(0);
  const [searchResults, setSearchResults] = useState(product1);

  const handleSearch = () => {
    const filtered = product1.filter((item) => {
      return (
        item.title?.toLowerCase().includes(search?.toLowerCase() || "") ||
        item.description?.toLowerCase().includes(search?.toLowerCase() || "") ||
        item.category?.toLowerCase().includes(search?.toLowerCase() || "")
      );
    });
    setSearchResults(filtered);
  };


  const sorttest = () => {
    const ratingValue = ratingVal;
    const filterByRating = searchResults.filter(
      (item) => item.rating >= ratingValue
    );
    if (sort === "a") {
      return [...filterByRating].sort((a, b) => a.price - b.price);
    }
    if (sort === "b") {
      return [...filterByRating].sort((a, b) => b.price - a.price);
    }
    return filterByRating;
  };



  return (
    <>
      <section id="product1" className="section-p1">
        <h2>Featured Products</h2>
        <p>Summer Collection New Modern Design</p>



        <div className="filter">
          <input
            type="search"
             onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Items"
          />
          <button className="login-btn" onClick={handleSearch}>
            Search
          </button>
          <button className="login-btn" onClick={() => setSort("a")}>
            Low to high
          </button>
          <button className="login-btn" onClick={() => setSort("b")}>
            High to low
          </button>
          <label htmlFor="Rating">Rating:</label>
          <select
            name="Rating"
            id="Rating"
            onChange={(e) => setRatingVal(e.target.value)}
          >
            <option value="1">1 and above</option>
            <option value="2">2 and above</option>
            <option value="3">3 and above</option>
            <option value="4">4 and above</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="pro-container">
          {sorttest().map((item) => (
            <Link to={`/Prodetails/${item.id}`} className="pro">
              <img src={item.image[0]} alt="" />
              <div className="des">
                <span>{item.brand}</span>
                <h5>{item.title}</h5>
                <div className="star">
                  <i className="fas fa-star"></i>

                  <span> {item.rating}</span>
                </div>
                <h4>&#8377; {item.price}</h4>
              </div>
              <a href="#">
                <i className="fa-solid fa-cart-shopping"></i>
              </a>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Product1;
