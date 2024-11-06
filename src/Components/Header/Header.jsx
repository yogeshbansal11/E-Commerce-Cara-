import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import logo from "../../assets/Aboutimages/logo.png";

const Header = () => {
  const [theme, setTheme] = useState("lightMode");

  const handleTheme = () => {
    theme === "lightMode" ? setTheme("darkMode") : setTheme("lightMode");
  };

  useEffect(()=>{
    document.body.className = theme;
  },[theme]);

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

            <li>
              <Link className="nav-link" onClick={handleTheme}>
                {theme === "lightMode" ?
                (<svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-sun-moon"
                >
                  <path d="M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4" />
                  <path d="M12 2v2" />
                  <path d="M12 20v2" />
                  <path d="m4.9 4.9 1.4 1.4" />
                  <path d="m17.7 17.7 1.4 1.4" />
                  <path d="M2 12h2" />
                  <path d="M20 12h2" />
                  <path d="m6.3 17.7-1.4 1.4" />
                  <path d="m19.1 4.9-1.4 1.4" />
                </svg>)
                :
                (<svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-moon"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>)}
              </Link>
            </li>
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
