import React from 'react'
import proimg1 from '../../assets/proimg/f1.jpg'
import proimg2 from '../../assets/proimg/f2.jpg'
import proimg3 from '../../assets/proimg/f3.jpg'
import proimg4 from '../../assets/proimg/f4.jpg'

const Prodetails = () => {
  return (
    <section id="prodetails" className="section-p1">
    <div className="single-pro-image">
      <img src={proimg1} width="100%" id="MainImg" alt="" />
      <div className="small-img-group">
        <div className="small-img-col">
          <img src={proimg1} width="100%" className="small-img" alt="" />
        </div>
        <div className="small-img-col">
          <img src={proimg2} width="100%" className="small-img" alt="" />
        </div>
        <div className="small-img-col">
          <img src={proimg3} width="100%" className="small-img" alt="" />
        </div>
        <div className="small-img-col">
          <img src={proimg4} width="100%" className="small-img" alt="" />
        </div>
      </div>
    </div>
    <div className="single-pro-details">
      <h6>Home / T-Shirt</h6>
      <h4>Men's Fashion T-shirt</h4>
      <h2>$139.00</h2>
      <select>
        <option>Select size</option>
        <option>XL</option>
        <option>XXL</option>
        <option>Small</option>
        <option>Large</option>
      </select>
      <input type="number" value="1" />
      <button className="normal">Add To Cart</button>
      <h4>Product Details</h4>
      <span>The Gildan Ultra Cotton T-shirt is made from a substantial 6.8 oz. per
        sq. yd. fabric constructed from 100% cotton, this classNameic fit preshrunk jersey
        knit provides unmatched comfort with each wear. Featuring a taped neck and
        shoulder, and a seamless double-needle collar, and available in a range of
        colors, it offers it all in the ultimate head-turning package.</span>
    </div>
  </section>
  )
}

export default Prodetails
