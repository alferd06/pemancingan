// src/pages/HomePage.js

// Import gambar
import heroFishingImg from '../assets/images/hero-fishing.jpg'; // Pastikan path ini benar!

// Gaya untuk HomePage
import '../styles/HomePage.css'; // Mengimpor HomePage.css yang sudah ada

// Mengimpor komponen Button yang reusable
import Button from '../components/Button';

function HomePage() {
  return (
    <div className="homepage-container">
      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundImage: `url(${heroFishingImg})` }}>
        <div className="hero-content">
          <h1>Petualangan Memancing Impianmu Dimulai Di Sini!</h1>
          <p className="promo-text">Dapatkan **Diskon Hingga 30%** untuk Perlengkapan Pancing Pilihan!</p>
          <div className="hero-buttons">
            {/* Menggunakan komponen Button untuk tombol utama */}
            <Button to="/shop" variant="primary" size="large">Belanja Perlengkapan Sekarang!</Button>
            <Button to="/about" variant="secondary" size="large">Pelajari Tentang Kami</Button>
          </div>
        </div>
      </section>

      {/* Bagian Promo dan Penawaran */}
      <section className="featured-promos">
        <h2>Penawaran Spesial Minggu Ini</h2>
        <div className="promo-grid">
          {/* Promo Card 1 */}
          <div className="promo-card">
            <img src="https://via.placeholder.com/150" alt="Promo Joran" /> {/* Placeholder, ganti dengan gambar asli */}
            <h3>Joran Premium Diskon 20%!</h3>
            <p>Joran ringan dan kuat untuk pemancing profesional. Terbatas!</p>
            {/* Menggunakan komponen Button */}
            <Button to="/shop?category=joran" variant="primary" size="small">Lihat Detail</Button>
          </div>

          {/* Promo Card 2 */}
          <div className="promo-card">
            <img src="https://via.placeholder.com/150" alt="Promo Reel" /> {/* Placeholder, ganti dengan gambar asli */}
            <h3>Reel Otomatis Terbaru Hanya Rp 1.5 Juta!</h3>
            <p>Rasakan kemudahan memancing dengan teknologi terkini.</p>
            {/* Menggunakan komponen Button - Hapus Link yang duplikat */}
            <Button to="/shop?category=reel" variant="primary" size="small">Beli Sekarang</Button>
          </div>

          {/* Promo Card 3 */}
          <div className="promo-card">
            <img src="https://via.placeholder.com/150" alt="Promo Umpan" /> {/* Placeholder, ganti dengan gambar asli */}
            <h3>Beli 2 Gratis 1 Umpan Segar</h3>
            <p>Umpan khusus yang disukai ikan target Anda. Jangan lewatkan!</p>
            {/* Menggunakan komponen Button */}
            <Button to="/shop?category=umpan" variant="primary" size="small">Lihat Umpan</Button>
          </div>
        </div>
      </section>

      {/* Bisa tambahkan bagian lain seperti "Mengapa Memilih Kami", "Artikel Terbaru", dll. */}
    </div>
  );
}

export default HomePage;