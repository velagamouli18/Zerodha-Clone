import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './landing_page/home/HomePage';
import AboutPage from './landing_page/about/AboutPage';
import PricingPage from './landing_page/pricing/PricingPage';
import ProductsPage from './landing_page/products/ProductsPage';
import SignUp from './landing_page/signup/SignUp';
import SupportPage from './landing_page/support/SupportPage';
import NavBar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';
import Login from './landing_page/signup/Login';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/about' element={<AboutPage/>}></Route>
        <Route path='/pricing' element={<PricingPage/>}></Route>
        <Route path='/products' element={<ProductsPage/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/support' element={<SupportPage/>}></Route>
        <Route path='/*' element={<NotFound/>}></Route>
      </Routes>
      <Footer/>
  </BrowserRouter>
);
