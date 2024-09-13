import React, { useEffect, useState } from "react";
import Items from "./Item1"; // Ensure this matches the exact filename and location
import { Link } from "react-router-dom";

const Product1 = () => {
  const [featurPro, setFeaturePro] = useState([]);

  // Ensure Items is an array and 'category' exists in each item
  const FirstPro = Items.filter(item => item.category === "featured_product");

  useEffect(() => {
    setFeaturePro(FirstPro);
  }, []);

  return (
    <>
      <section id="product1" className="section-p1">
        <h2>Featured Products</h2>
        <p>Summer Collection New Modern Design</p>
        <div className="pro-container">
          {featurPro.map(item => (
            <Link
              key={item.id} // assuming each item has a unique 'id'
              className="pro"
              to={"/Prodetails/" + item.id} // dynamic routing assuming you use item.id
              style={{ textDecoration: "none" }}
            >
              <div className="pro">
                <img src={item.image} alt={item.title} />
                <div className="des">
                  <span>{item.brand}</span>
                  <h5>{item.title}</h5>
                  <div className="star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <h4>{item.price}</h4>
                </div>
                <a href="#">
                  <i className="fa-solid fa-cart-shopping"></i>
                </a>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Product1;
