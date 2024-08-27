import React from 'react'
import blogimg1 from '../../assets/Blogimages/1.png'
import blogimg2 from '../../assets/Blogimages/2.png'
import blogimg3 from '../../assets/Blogimages/3.png'

const Formdetails = () => {
  return (
    <section id="form-details">
    <form action="">
      <span>LEAVE A MESSAGE</span>
      <h2>We love to hear from you</h2>
      <input type="text" placeholder="Your Name" />
      <input type="text" placeholder="E-mail" />
      <input type="text" placeholder="Subject" />
      <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
      <button className="normal">Submit</button>
    </form>

    <div className="people">
      <div >
        <img src={blogimg1} alt="" />
        <p><span>John Doe</span> Senior Marketing Manager <br/> Phone: + 060 123
          ©00 77 88 <br />Email: contact@example.com</p>
      </div>
      <div>
        <img src={blogimg2} alt="" />
        <p>
          <span>John Doe</span> Senior Marketing Manager <br /> Phone: + 800 123 @0@
          77 88 <br />Email: contact@example.com
        </p>
      </div>
      <div>
        <img src={blogimg3} alt="" />
        <p><span>John Doe</span> Senior Marketing Manager <br /> Phone: + 800 123 00
          77 88 <br />Email: contact@example.com</p>
      </div>
    </div>
  </section >
  )
}

export default Formdetails
