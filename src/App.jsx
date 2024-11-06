import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import HomeMain from "./Components/Main/HomeMain";
import ShopMain from "./Components/Main/ShopMain";
import BlogMain from "./Components/Main/BlogMain";
import AboutMain from "./Components/Main/AboutMain";
import ContactMain from "./Components/Main/ContactMain";
import CartMain from "./Components/Main/CartMain";
import SProductMain from "./Components/Main/SProductMain";
import ScrollToTop from "./ScrollToTop";
import Prodetails from "./Components/SingleProduct/Prodetails";
import SignUp from "./Components/Login & Signup/Signup";
import Login from "./Components/Login & Signup/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomeMain />}></Route>
          <Route path="/shop" element={<ShopMain />}></Route>
          <Route path="/blog" element={<BlogMain />}></Route>
          <Route path="/about" element={<AboutMain />}></Route>
          <Route path="/contact" element={<ContactMain />}></Route>
          <Route path="/cart" element={<CartMain />}></Route>
          <Route path="/prodetails/:id" element={<Prodetails />}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
          
        </Routes>
          <Footer />

       
      </BrowserRouter>
    </>
  );
}

export default App;
