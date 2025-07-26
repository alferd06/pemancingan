// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/global.css'; // Pastikan ada file CSS ini

function HomePage() {
  return (
    <div className="homepage-container">
      <section className="hero-section" style={{ backgroundImage: `url('/assets/hero-fishing.jpg')` }}>
        <div className="hero-content">
          <h1>Petualangan Memancing Dimulai Di Sini!</h1>
          <p className="promo-text">Dapatkan diskon 20% untuk semua joran pancing bulan ini!</p>
          <div className="hero-buttons">
            <Link to="/shop" className="btn btn-primary">Belanja Sekarang!</Link>
            <Link to="/about" className="btn btn-secondary">Detail Tentang Kami</Link>
          </div>
        </div>
      </section>

      <section className="featured-promos">
        <h2>Penawaran Pilihan Kami</h2>
        <div className="promo-grid">
          {/* Contoh promo, bisa berupa komponen CardPromo */}
          <div className="promo-card">
            <h3>Promo Reel Terbaru!</h3>
            <p>Diskon hingga 15% untuk koleksi reel Shimano dan Daiwa.</p>
            <Link to="/shop?category=reel" className="btn btn-small">Lihat Reel</Link>
          </div>
          <div className="promo-card">
            <h3>Paket Umpan Terbaik</h3>
            <p>Hemat dengan paket umpan komplet untuk segala jenis ikan.</p>
            <Link to="/shop?category=bait" className="btn btn-small">Beli Umpan</Link>
          </div>
        </div>
      </section>

      {/* Kamu bisa tambahkan bagian lain seperti testimonial, blog post terbaru, dll. */}
    </div>
  );
}

export default HomePage;