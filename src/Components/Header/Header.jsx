import { Link } from "react-router-dom";

import React from "react";
import logo from "../../assets/Aboutimages/logo.png";

const Header = () => {
  return (
    <>
      <section id="header">
        <a href="#">
          <img src={logo} alt="Logo" />
        </a>

        <div>
          <ul id="navbar">
             <li>
            {/* <a className="active" href="index.html">Home</a> */}
           
            <Link className="active nav-link" to={"/"}>
              Home
            </Link>
            </li> 

            <li>
            <Link className="nav-link" to={"/shop/"}>
              Shop
            </Link>
            </li>

            <li>
            <Link className="nav-link" to={"/blog/"}>
              Blog
            </Link>
            </li>

            <li>
            <Link className="nav-link" to={"/about/"}>
              About
            </Link>
            </li>

             <li>
            <Link className="nav-link" to={"/contact/"}>
              Contact
            </Link>
            </li>

            <li id="lg-bag">
              <Link to={"/cart/"}>
                <i className="fa fa-shopping-bag" aria-hidden="true"></i>
              </Link>
            </li>
            <a href="#" id="close">
              <i className="far fa-times"></i>
            </a>
          </ul>
        </div>
        <div id="mobile">
          <a href="cart.html">
            <i className="fa fa-shopping-bag" aria-hidden="true"></i>
          </a>
          <i id="bar" className="fas fa-outdent"></i>
        </div>
      </section>
    </>
  );
};
export default Header;
