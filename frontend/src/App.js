import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/about';
import SignIn from './pages/SignIn';
import Cart from './pages/cart';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Category from './pages/category';
import Product from './pages/product';
import Subscription from './pages/subscription';


function App() {
  return (
     <>
        <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart/>} />
           <Route path="/sign-in" element={<SignIn />} />
          {/* <Route path="/Shop" element={<Shop />} />
         
          Mobile/Tablet: Icons */}
          <Route path="/category/:categoryName" element={<Category />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/subscription" element={< Subscription/>}/>
          
        </Routes>
        <Footer />
      </Router>
      
    </>
  );
}

export default App;
