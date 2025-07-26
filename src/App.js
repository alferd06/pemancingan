// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import AboutPage from './pages/AboutPage';
import ProductDetail from './pages/ProductDetail';
import NotFoundPage from './pages/NotFoundPage'; // <--- IMPORT HALAMAN 404

import './styles/global.css';

function App() {
  return (
    <Router>
      <div id="root">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="*" element={<NotFoundPage />} /> {/* <--- RUTE 404 SEBAGAI YANG TERAKHIR */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;