// src/pages/AboutPage.js
import React from 'react';
import '../styles/global.css';

function AboutPage() {
  return (
    <div className="about-page-container">
      <h1>Tentang Kami: Passion Memancing di Setiap Produk</h1>
      <section className="our-mission">
        <h2>Tujuan Kami</h2>
        <p>Kami hadir dengan satu misi: **meningkatkan setiap pengalaman memancing Anda**. Dari pemula hingga pemancing profesional, kami menyediakan perlengkapan terbaik, informasi terpercaya, dan dukungan komunitas untuk memastikan setiap trip memancing Anda tak terlupakan.</p>
        <p>Kami percaya bahwa memancing lebih dari sekadar hobi; ini adalah koneksi dengan alam, tantangan, dan relaksasi. Melalui website ini, kami ingin memfasilitasi passion tersebut.</p>
      </section>

      <section className="what-we-offer">
        <h2>Apa yang Kami Tawarkan</h2>
        <ul>
          <li>**Katalog Produk Terlengkap:** Dari joran, reel, umpan, hingga aksesori dan pakaian, kami kurasi produk berkualitas dari merek-merek terkemuka dunia.</li>
          <li>**Panduan dan Tips Memancing:** Akses artikel, video, dan panduan gratis tentang teknik memancing, spot terbaik, dan cara merawat perlengkapan.</li>
          <li>**Komunitas Pemancing:** Bergabunglah dengan forum kami (akan datang) untuk berbagi pengalaman, bertanya, dan terhubung dengan pemancing lain.</li>
          <li>**Layanan Pelanggan Prima:** Tim kami siap membantu Anda memilih perlengkapan yang tepat dan menjawab pertanyaan seputar memancing.</li>
        </ul>
      </section>

      <section className="our-location">
        <h2>Lihat Lokasi Kami</h2>
        <p>Kami adalah toko online, namun kami memiliki titik distribusi dan mitra yang tersebar di beberapa lokasi. Untuk layanan tatap muka atau pengambilan barang, Anda bisa kunjungi:</p>
        <address>
          **Nama Toko / Gudang Utama**<br/>
          Jl. Pemancingan Bahagia No. 123<br/>
          Jakarta, 12345, Indonesia<br/>
          Telepon: <a href="tel:+628123456789">+62 812 3456 789</a><br/>
          Email: <a href="mailto:info@pemancingananda.com">info@pemancingananda.com</a>
        </address>
        {/* Di sini kamu bisa embed Google Maps */}
        <div style={{ height: '400px', width: '100%', border: '1px solid #ddd', marginTop: '20px' }}>
          {/* Ganti dengan iframe Google Maps embed dari lokasi sebenarnya */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1dXYZ!2dXYZ!3dXYZ!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3d9d7e7e7a7%3A0x7d2e2d2e2d2e2d2e!2sJakarta!5e0!3m2!1sen!2sid!4v1678901234567!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi Toko"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;