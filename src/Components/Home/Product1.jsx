import React from "react";
import Items from "./Item1";
import prof1 from "../../assets/proimg/f1.jpg";
import prof2 from "../../assets/proimg/f2.jpg";
import prof3 from "../../assets/proimg/f3.jpg";
import prof4 from "../../assets/proimg/f4.jpg";
import prof5 from "../../assets/proimg/f5.jpg";
import prof6 from "../../assets/proimg/f6.jpg";
import prof7 from "../../assets/proimg/f7.jpg";
import prof8 from "../../assets/proimg/f8.jpg";
import { Link } from "react-router-dom";

const Product1 = () => {
  return (
    <>
      <section id="product1" className="section-p1">
        <h2>Featured Products</h2>
        <p>Summer Collection New Modern Design</p>
        <div className="pro-container">
          {/* 
      <div className="pro">
        <img src={prof1} alt="" />
        <div className="des">
          <span>adidas</span>
          <h5>Cartoon Astronaut T-Shirts</h5>
          <div className="star">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <h4>$78</h4>
        </div>
        <a href="#"><i className="fal fa-shopping-cart cart"></i></a>
      </div> */}

          {Items.map((item) => (
            // <Link
            //   className="pro"
            //   to={"/Prodetails/"}
            //   style={{ textDecoration: "none" }}
            // >

            <div className="pro">
              <img src={item.image} alt="" />
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
            // </Link>
          ))}

          {/* <div className="pro">
        <img src={prof3} alt="" />
        <div className="des">
          <span>adidas</span>
          <h5>Cartoon Astronaut T-Shirts</h5>
          <div className="star">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <h4>$78</h4>
        </div>
        <a href="#"><i className="fal fa-shopping-cart cart"></i></a>
      </div>
      <div className="pro">
        <img src={prof4} alt="" />
        <div className="des">
          <span>adidas</span>
          <h5>Cartoon Astronaut T-Shirts</h5>
          <div className="star">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <h4>$78</h4>
        </div>
        <a href="#"><i className="fal fa-shopping-cart cart"></i></a>
      </div>
      <div className="pro">
        <img src={prof5} alt="" />
        <div className="des">
          <span>adidas</span>
          <h5>Cartoon Astronaut T-Shirts</h5>
          <div className="star">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <h4>$78</h4>
        </div>
        <a href="#"><i className="fal fa-shopping-cart cart"></i></a>
      </div>
      <div className="pro">
        <img src={prof6} alt="" />
        <div className="des">
          <span>adidas</span>
          <h5>Cartoon Astronaut T-Shirts</h5>
          <div className="star">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <h4>$78</h4>
        </div>
        <a href="#"><i className="fal fa-shopping-cart cart"></i></a>
      </div>
      <div className="pro">
        <img src={prof7} alt="" />
        <div className="des">
          <span>adidas</span>
          <h5>Cartoon Astronaut T-Shirts</h5>
          <div className="star">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <h4>$78</h4>
        </div>
        <a href="#"><i className="fal fa-shopping-cart cart"></i></a>
      </div>
      <div className="pro">
        <img src={prof8} alt="" />
        <div className="des">
          <span>adidas</span>
          <h5>Cartoon Astronaut T-Shirts</h5>
          <div className="star">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <h4>$78</h4>
        </div>
        <a href="#"><i className="fal fa-shopping-cart cart"></i></a>
      </div> */}
        </div>
      </section>
    </>
  );
};

export default Product1;
