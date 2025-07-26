// src/pages/ProductDetail.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; // useParams untuk membaca parameter URL
import { productsData } from '../data/products'; // Menggunakan data produk yang sudah ada
import '../styles/ProductDetail.css'; // Untuk styling dasar

function ProductDetail() {
  const { id } = useParams(); // Mengambil ID produk dari URL (e.g., /product/p1)
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Simulasi pengambilan data produk dari API (sekarang dari data dummy)
    const fetchProduct = () => {
      setLoading(true);
      setError(false);
      const foundProduct = productsData.find(p => p.id === id); // Cari produk berdasarkan ID

      if (foundProduct) {
        setProduct(foundProduct);
      } else {
        setError(true); // Jika produk tidak ditemukan
      }
      setLoading(false);
    };

    fetchProduct();
  }, [id]); // Terpicu setiap kali ID di URL berubah

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  if (loading) {
    return <div className="product-detail-container loading">Memuat detail produk...</div>;
  }

  if (error || !product) {
    return (
      <div className="product-detail-container error">
        <h2>Produk tidak ditemukan.</h2>
        <p>Maaf, kami tidak dapat menemukan produk yang Anda cari.</p>
        <Link to="/shop" className="btn btn-primary">Kembali ke Belanja</Link>
      </div>
    );
  }

  return (
    <div className="product-detail-container">
      <div className="product-detail-header">
        <Link to="/shop" className="back-to-shop-link">&larr; Kembali ke Katalog Produk</Link>
        <h1>{product.name}</h1>
      </div>

      <div className="product-detail-content">
        <div className="product-image-gallery">
          <img src={product.image} alt={product.name} className="main-image" />
          {/* Di sini bisa ditambahkan thumbnail gambar lain jika ada */}
        </div>

        <div className="product-info-detail">
          <p className="product-category">Kategori: <span>{product.category}</span></p>
          <p className="product-brand">Merek: <span>{product.brand}</span></p>
          <div className="product-rating">Rating: {product.rating} ★</div>
          <div className="product-price-detail">{formatPrice(product.price)}</div>

          <h3>Deskripsi Produk:</h3>
          <p className="product-description">{product.description}</p>

          {/* Tombol Aksi */}
          <div className="product-actions">
            <button className="btn btn-primary add-to-cart-btn">Tambahkan ke Keranjang</button>
            <button className="btn btn-secondary buy-now-btn">Beli Sekarang</button>
          </div>

          {/* Bagian ulasan atau spesifikasi lebih lanjut bisa ditambahkan di sini */}
          <section className="product-specs">
              <h3>Spesifikasi:</h3>
              <ul>
                  <li>Bahan: {product.category === 'joran' ? 'Carbon Fiber' : product.brand === 'Shimano' ? 'Aluminium' : 'N/A'}</li> {/* Contoh spesifikasi dummy */}
                  <li>Ukuran: {product.category === 'reel' ? 'FX4000' : 'N/A'}</li>
                  {/* ... tambahkan spec lain sesuai kebutuhan */}
              </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;