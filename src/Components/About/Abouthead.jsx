import React from 'react'
import Abtimg6 from '../../assets/Aboutimages/a6.jpg'

const Abouthead = () => {
  return (
    <section id="about-head" className="section-p1">
    <img src={Abtimg6} alt="" />
    <div>
      <h2>Who We Are?</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis auteirure dolor in reprehenderit in voluptate velit esse cillum dolore eu
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.</p>

      <abbr title="">Create stunning images with as much or as little control as you
        like thanks to a choice of Basic and Creative modes.</abbr>
      <br /><br />

      <marquee bgcolor="#ccc" loop="-1" scrollamount="5" width="100%">Create stunning images with as much or as little
        control as you like thanks to a choice of Basic and Creative modes.
      </marquee>
    </div>
  </section>
  )
}

export default Abouthead
