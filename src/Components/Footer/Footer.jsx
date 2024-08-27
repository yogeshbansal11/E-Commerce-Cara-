import React from 'react'
import logo from '../../assets/Aboutimages/logo.png'
import appimg from '../../assets/footerimg/app.jpg'
import playimg from '../../assets/footerimg/play.jpg'
import payimg from '../../assets/footerimg/pay.png'

const Footer = () => {
  return (
    <footer className="section-p1">
    <div className="col">
      <img className="logo" src={logo}  alt=""/>
      <h4>contact</h4>
      <p><strong>Address: </strong> 562 Wellington Road, Street 32, San Francisco</p>
      <p><strong>Phone:</strong> +01 2222 365 /(+91) 01 2345 6789</p>
      <p><strong>Hours:</strong> 10:00 - 18:00, Mon - Sat</p>
      <div className="follow">
        <h4>Follow Us</h4>
        <div className="icon">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-pinterest-p"></i>
          <i className="fab fa-youtube"></i>
        </div>
      </div>
    </div>

    <div className="col">
      <h4>About</h4>
      <a href="#">About us</a>
      <a href="#">Delivery Information</a>
      <a href="#">Privacy Policy</a>
      <a href="#">Terms & Conditions</a>
      <a href="#">Contact Us</a>
    </div>

    <div className="col">
      <h4>My Account</h4>
      <a href="#">Sign In</a>
      <a href="#">View cart</a>
      <a href="#">My wishlist</a>
      <a href="#">Track My order</a>
      <a href="#">Help</a>
    </div>

    <div className="col install">
      <h4>Install App</h4>
      <p>From App Store or Google Play</p>
      <div className="row">
        <img src={appimg} alt="" />
        <img src={playimg} alt="" />
      </div>
      <p>Secured Payment Gateways </p>
      <img src={payimg} alt="" />
    </div>

    <div className="copyright">
      <p> 2021, Tech2 etc - HTML CSS Ecommerce Template</p>
    </div>
  </footer>
  )
}

export default Footer
