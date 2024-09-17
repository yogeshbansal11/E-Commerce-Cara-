import React, { useEffect, useState } from "react";
import Items from "./Product_Items";
// import arrivalimg1 from '../../assets/arrivalimages/n1 (1).jpg'
// import arrivalimg2 from '../../assets/arrivalimages/n2 (1).jpg'
// import arrivalimg3 from '../../assets/arrivalimages/n3 (1).jpg'
// import arrivalimg4 from '../../assets/arrivalimages/n4 (1).jpg'
// import arrivalimg5 from '../../assets/arrivalimages/n5 (1).jpg'
// import arrivalimg6 from '../../assets/arrivalimages/n6 (1).jpg'
// import arrivalimg7 from '../../assets/arrivalimages/n7 (1).jpg'
// import arrivalimg8 from '../../assets/arrivalimages/n8 (1).jpg'
import { Link } from 'react-router-dom';

const Product2 = () => {

  const [featurPro, setFeaturePro] = useState([]);


  const FirstPro = Items.filter((item) => {
    return item.category == "New Arrivals";
  });


  useEffect(() => {
    setFeaturePro(FirstPro);
  },[]);

  return (
    <>
    <section id="product1" className="section-p1">
    <h2>New Arrivals</h2>
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
  <section id="pagenation"  className="section-p1">
    <a href="#">1</a>
    <a href="#">2</a>
    <a href="#"><i className="fal fa-long-arrow-alt-right"></i></a>
  </section>
  </>
  )
}

export default Product2
