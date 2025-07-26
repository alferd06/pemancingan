// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'; // <--- Ubah ini!

function Header() {
  return (
    <header>
      <div className="header-content">
        <h1>
          <Link to="/">Website Pemancingan</Link>
        </h1>
        <nav className="main-nav">
          <Link to="/">Beranda</Link>
          <Link to="/shop">Belanja</Link>
          <Link to="/about">Tentang Kami</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;