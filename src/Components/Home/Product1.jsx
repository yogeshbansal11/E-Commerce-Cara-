import React, { useEffect, useState } from "react";
import Items from "./Product_Items";

import { Link } from "react-router-dom";

const Product1 = () => {

  const [featurPro, setFeaturePro] = useState([]);


  const FirstPro = Items.filter((item) => {
    return item.category == "featured_product";
  });


  useEffect(() => {
    setFeaturePro(FirstPro);
  },[]);

  return (
    <>
      <section id="product1" className="section-p1">
        <h2>Featured Products</h2>
        <p>Summer Collection New Modern Design</p>
        <div className="pro-container">
         

          {featurPro.map((item) => (
            // <Link
            //   className="pro"
            //   to={"/Prodetails/"}
            //   style={{ textDecoration: "none" }}
            // >

            <Link to={`/Prodetails/${item.id}`} className="pro">
              <img src={item.image[0]} alt="" />
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
              </Link>
            // </Link>
          ))}

          
        </div>
      </section>
    </>
  );
};

export default Product1;
