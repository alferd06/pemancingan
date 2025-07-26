// src/pages/NotFoundPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFoundPage.css'; // Untuk styling dasar

function NotFoundPage() {
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <h2>Halaman Tidak Ditemukan</h2>
      <p>Maaf, halaman yang Anda cari tidak ada. Mungkin sudah pindah atau dihapus.</p>
      <Link to="/" className="btn btn-primary">Kembali ke Beranda</Link>
      <Link to="/shop" className="btn btn-secondary" style={{ marginLeft: '15px' }}>Lihat Katalog Produk</Link>
    </div>
  );
}

export default NotFoundPage;