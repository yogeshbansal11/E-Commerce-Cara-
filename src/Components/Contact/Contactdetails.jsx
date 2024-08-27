import React from 'react';

const Contactdetails = () => {
  return (
    <section id="contact-details" className="section-p1">
      <div className="details">
        <span>GET IN TOUCH</span>
        <h2>Visit one of our agency locations or contact us today</h2>
        <h3>Head Office</h3>
        <ul>
          <li>
            <i className="fal fa-map"></i>
            <p>56 Glassford Street Glasgow G1 1UL New York</p>
          </li>
          <li>
            <i className="fal fa-envelope"></i>
            <p>contact@example.com</p>
          </li>
          <li>
            <i className="fal fa-clock"></i>
            <p>Monday to Saturday: 9:00AM to 16:00PM</p>
          </li>
        </ul>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227749.0532085481!2d75.6257470087723!3d26.88511514579534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1723881979061!5m2!1sen!2sin"
          width="600" height="450" style={{ border: "0" }} allowFullScreen="" loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Contactdetails;
