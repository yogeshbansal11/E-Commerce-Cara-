import React from 'react'
import abtimg1 from '../../assets/Aboutimages/1 (1).mp4'

const Aboutapp = () => {
  return (
    <section id="about-app" className="section-pl"> :
    <h1>Download Our <a href="#">App</a> </h1>
      <div className="video">
        <video autoplay muted loop src={abtimg1}></video>
      </div>

  </section>
  )
}

export default Aboutapp
