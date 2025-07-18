import React from 'react';
import logo from '../../assets/img/logo.png';
// import logo from '../../assets/img/new.jpg';
import Appimg from '../../assets/pay/app.jpg';
import Playimg from '../../assets/pay/play.jpg';
import Payimg from '../../assets/pay/pay.png';

const Footer = () => {
  return (
   <>
   <footer className="section-p1">
        <div className="col">
            <img className="logo w-12 h-12" src={logo} alt="" />
            <h4>Contact</h4>
            <p><strong>Address: </strong> 562 Wellington Road, Street 32, San Francisco</p>
            <p><strong>Phone:</strong> +01 2222 365 /(+491) 01 2345 6789</p>
            <p><strong>Hours:</strong> 10:00 - 18:00, Mon - Sat</p>
            <div className="follow">
                <h4>Follow us</h4>
                <div className="icon">
                    <a href="https://x.com/SumitJangir03"><i className="fab fa-twitter"></i></a>
                    <a href="https://www.instagram.com/sumitjangiir/"><i className="fab fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/in/sumit-jangir-056057253/"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="https://github.com/sumit-jangir/"><i className="fa-brands fa-github"></i></a>
                </div>
            </div>

        </div>

        <div className="col">
        <h4>About</h4>
        <a href="#">About us</a> 
        <a href="#">Delivery Information</a>
        <a href="#">Privacy Policy</a> 
        <a href="¢">Terms & Conditions</a>
        <a href="#">Contact Us</a>

        </div> 

        <div className="col">
            <h4>My Account</h4>
            <a href="#">Sign In</a>
            <a href="#">View Cart</a>
            <a href="#">My Wishlist</a>
            <a href="#">Track My Order</a>
            <a href="#">Help</a>
        </div>

        <div className="col install">
            <h4>Install App</h4>
                <p>From App Store or Google Play</p>
                <div className="row">
                    <img src={Appimg} alt="" />
                    <img src={Playimg} alt="" />
                </div>
                <p>Secured Payment Gateways </p>
                <img src={Payimg} alt="" />
        </div>

        <div className="copyright">
            <p>©2021, Tech2 etc - HTML CSS Ecommerce Template</p>
        </div>

    </footer>
   </>
  )
}

export default Footer