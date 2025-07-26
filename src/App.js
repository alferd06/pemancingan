// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage';
import ShopPage from './pages/shopPage';
import AboutPage from './pages/aboutPage';
import Header from './components/Header'; // Buat komponen Header
import Footer from './components/Footer'; // Buat komponen Footer
import './App.css'; // Untuk styling global

function App() {
  return (
    <Router>
      <Header /> {/* Header akan selalu muncul */}
      <main> {/* Konten utama akan berganti sesuai route */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/about" element={<AboutPage />} />
          {/* Kamu bisa tambahkan route untuk detail produk, dll. */}
        </Routes>
      </main>
      <Footer /> {/* Footer akan selalu muncul */}
    </Router>
  );
}

export default App;