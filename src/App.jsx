
import './App.css'
import {Routes,Route,BrowserRouter} from "react-router-dom"

import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Feature from './Components/Home/Feature'
import Product1 from './Components/Home/Product1'
import Banner from './Components/Home/Banner'
import Product2 from './Components/Home/Product2'
import Smbanner from './Components/Home/Smbanner'
import Banner3 from './Components/Home/Banner3'
import Newsletter from './Components/Home/Newsletter'
import Pageheader from './Components/Shop/Pageheader'
import PageheaderBlog from './Components/Blog/PageheaderBlog'
import Blogs from './Components/Blog/Blogs'
import PageheaderAbout from './Components/About/PageheaderAbout'
import Abouthead from './Components/About/Abouthead'
import Aboutapp from './Components/About/Aboutapp'
import PageheaderContact from './Components/Contact/PageheaderContact'
import Contactdetails from './Components/Contact/Contactdetails'
import Formdetails from './Components/Contact/Formdetails'
import Pageheadercart from './Components/Cart/Pageheadercart'
import Carts from './Components/Cart/Cart'
import Cartadd from './Components/Cart/Cartadd'
import Prodetails from './Components/SingleProduct/Prodetails'


import HomeMain from './Components/Main/HomeMain'
import ShopMain from './Components/Main/ShopMain'
import BlogMain from './Components/Main/BlogMain'
import AboutMain from './Components/Main/AboutMain'
import ContactMain from './Components/Main/ContactMain'
import CartMain from './Components/Main/CartMain'
// import SProductMain from './Components/Main/SProductMain'
// import { BrowserRouter } from 'react-router-dom'



function App() {
  return (
    <>

<BrowserRouter>
<Header />
<Routes>
<Route path="/" element={<Home />}></Route>
<Route path="/index.html" element={<HomeMain />}></Route>
<Route path="/shop.html" element={<ShopMain />}></Route>
<Route path="/blog.html" element={<BlogMain />}></Route>
<Route path="/about.html" element={<AboutMain />}></Route>
<Route path="/contact.html" element={<ContactMain />}></Route>
<Route path="/cart.html" element={<CartMain />}></Route>
{/* <Route path="/sproduct hal" element={<SproductMain />}></Route> */}
</Routes>

   {/* <Header />
   <HomeMain/>
   <ShopMain/>
   <BlogMain/>
   <AboutMain/>
   <ContactMain/>
   <CartMain/>
   <SProductMain/> */}

   {/* <Home />
   <Feature />
   <Product1/>
   <Banner/>
   <Product2/>
   <Smbanner/>
   <Banner3/>
   <Newsletter/> */}

   {/* <Pageheader/>
   <Product1/>
   <Product2/>
   <Newsletter/> */}

   {/* <PageheaderBlog/>
   <Blogs/>
   <Newsletter/> */}

    {/* <PageheaderAbout/>
    <Abouthead/>
    <Aboutapp/>
    <Feature />
    <Newsletter/> */}

    {/* <PageheaderContact/>
    <Contactdetails/>
    <Formdetails/>
    <Newsletter/> */}

    {/* <Pageheadercart/>
    <Carts/>
    <Cartadd/>
    <Newsletter/> */}
{/* 
    <Prodetails/>
    <Product2/>
    <Newsletter/> */}


   <Footer/>
   </BrowserRouter>
   
    </>
  )
}



export default App
