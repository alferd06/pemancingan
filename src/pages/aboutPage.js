// src/pages/AboutPage.js
import React from 'react';
import '../styles/AboutPage.css'; // Untuk styling dasar

function AboutPage() {
  // Koordinat contoh untuk Google Maps (bisa diganti dengan lokasi temanmu)
  const mapCoordinates = "-6.200000, 106.816666"; // Contoh: Jakarta
  const mapZoom = 15; // Tingkat zoom peta

  return (
    <div className="about-page-container">
      <h1>Tentang Kami: Passion Memancing di Setiap Produk</h1>

      <section className="about-section mission-section">
        <h2>Tujuan Kami (Our Mission)</h2>
        <p>Kami hadir dengan satu misi: **meningkatkan setiap pengalaman memancing Anda**. Dari pemula hingga pemancing profesional, kami menyediakan perlengkapan terbaik, informasi terpercaya, dan dukungan komunitas untuk memastikan setiap trip memancing Anda tak terlupakan.</p>
        <p>Kami percaya bahwa memancing lebih dari sekadar hobi; ini adalah koneksi dengan alam, tantangan, dan relaksasi. Melalui website ini, kami ingin memfasilitasi passion tersebut dan menjadi sahabat setia setiap pemancing di Indonesia.</p>
      </section>

      <section className="about-section offer-section">
        <h2>Apa yang Kami Tawarkan (What We Offer)</h2>
        <ul>
          <li>**Katalog Produk Terlengkap:** Dari joran, reel, umpan, hingga aksesori dan pakaian, kami kurasi produk berkualitas dari merek-merek terkemuka dunia.</li>
          <li>**Panduan dan Tips Memancing:** Akses artikel, video, dan panduan gratis tentang teknik memancing, spot terbaik, dan cara merawat perlengkapan.</li>
          <li>**Komunitas Pemancing:** Bergabunglah dengan forum kami (akan datang) untuk berbagi pengalaman, bertanya, dan terhubung dengan pemancing lain yang memiliki passion yang sama.</li>
          <li>**Layanan Pelanggan Prima:** Tim kami siap membantu Anda memilih perlengkapan yang tepat dan menjawab pertanyaan seputar memancing dengan ramah dan profesional.</li>
        </ul>
      </section>

      <section className="about-section location-section">
        <h2>Lihat Lokasi Kami</h2>
        <p>Kami adalah toko online yang melayani seluruh Indonesia, namun kami memiliki titik distribusi dan mitra yang tersebar di beberapa lokasi. Untuk layanan tatap muka, pengambilan barang, atau sekadar kopi dan berbagi cerita memancing, Anda bisa kunjungi:</p>
        <address>
          <strong>Alamat Kantor/Gudang Utama:</strong><br/>
          Jl. Pemancingan Jaya Raya No. 17, RT 05 RW 03<br/>
          Kelurahan Ikantoman, Kecamatan Mancingland<br/>
          Jakarta Pusat, 10110, Indonesia<br/>
          <br/>
          <strong>Jam Operasional:</strong><br/>
          Senin - Jumat: 09.00 - 17.00 WIB<br/>
          Sabtu: 09.00 - 14.00 WIB<br/>
          Minggu/Hari Libur Nasional: Tutup<br/>
          <br/>
          Telepon: <a href="tel:+628123456789">+62 812 3456 789</a><br/>
          Email: <a href="mailto:info@pemancingananda.com">info@pemancingananda.com</a>
        </address>

        <div className="map-container">
          {/* Embed Google Maps Iframe */}
          <iframe
            src={`https://maps.google.com/maps?q=${mapCoordinates}&z=${mapZoom}&output=embed`}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi Toko Pemancingan"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;