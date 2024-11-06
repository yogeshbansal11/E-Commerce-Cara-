import React from 'react'
import Home from '../Home/Home'
import Feature from '../Home/Feature'
import Product1 from '../Home/Product1'
import Banner from '../Home/Banner'
import Product2 from '../Home/Product2'
import Smbanner from '../Home/Smbanner'
import Banner3 from '../Home/Banner3'
import Newsletter from '../Home/Newsletter'


const HomeMain = () => {
  return (
    <>
    <Home />
   <Feature />
   <Product1/>
   <Banner/>
   {/* <Product2/> */}
   <Smbanner/>
   <Banner3/>
   <Newsletter/>
   </>
  )
}

export default HomeMain
