import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';
import Cart from './pages/Cart';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Category from './pages/category';
import Product from './pages/product';


function App() {
  return (
     <>
        <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/Shop" element={<Shop />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/Cart" element={<Cart/>} />Mobile/Tablet: Icons */}
          <Route path="/category/:categoryName" element={<Category />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
        <Footer />
      </Router>
      
    </>
  );
}

export default App;
