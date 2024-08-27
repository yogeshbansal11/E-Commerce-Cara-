    
import React from 'react'
import f1img from '../../assets/Featureimages/f1.png'
import f2img from '../../assets/Featureimages/f2.png'
import f3img from '../../assets/Featureimages/f3.png'
import f4img from '../../assets/Featureimages/f4.png'
import f5img from '../../assets/Featureimages/f5.png'
import f6img from '../../assets/Featureimages/f6.png'

const Feature = () => {
  return (
<section id="feature" className="section-p1">
<div className="fe-box">
  <img src={f1img} alt="" />
  <h6>Free Shipping</h6>
</div>

<div className="fe-box">
<img src={f2img} alt="" /> 
  <h6>Online Order</h6>
</div>

<div className="fe-box">
<img src={f3img} alt="" /> 
  <h6>Save Money</h6>
</div>

<div className="fe-box">
<img src={f4img} alt="" /> 
  <h6>Promotion</h6>
</div>

<div className="fe-box">
<img src={f5img} alt="" /> 
  <h6>Happy sell</h6>
</div>

<div className="fe-box">
<img src={f6img} alt="" /> 
  <h6>F24/7 Support </h6>
</div>
</section>

  )
}

export default Feature
