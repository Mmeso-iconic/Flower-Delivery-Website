import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/about';
import SignIn from './components/SignIn';
import Cart from './pages/cart';
import Checkout from './pages/checkout';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Category from './pages/category';
import Product from './pages/product';
import Subscription from './pages/subscription';
import {useEffect, useState} from 'react';



function App() {
  const [showSignin, setShowSignin] = useState(false);

  // Automatically show Signin only on Home page if not logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token && window.location.pathname === "/") {
      setShowSignin(true);
    }
  }, []);

  const redirectAfterLogin = () => {
    setShowSignin(false); // simply hide modal
  };

  return (
     <>
        <Router>
        <Navbar onSignInClick={() => setShowSignin(true)} />
        <SignIn
          isOpen={showSignin}
          onClose={() => setShowSignin(false)}
          redirectAfterLogin={redirectAfterLogin}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart onRequireSignin={() => setShowSignin(true)} />} />
          <Route path="/checkout" element={<Checkout onRequireSignin={() => setShowSignin(true)} />} />
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
