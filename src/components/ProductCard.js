// src/components/ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';
// import '../styles/global.css'; // Opsional jika kamu mau styling khusus untuk card di sini

function ProductCard({ product }) {
  // Format harga ke Rupiah
  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="product-category">{product.category}</p>
        <p className="product-brand">Merek: {product.brand}</p>
        <div className="product-rating">Rating: {product.rating} ★</div>
        <div className="product-price">{formatPrice(product.price)}</div>
        {/* Kamu bisa tambahkan tombol "Lihat Detail" atau "Tambah ke Keranjang" di sini */}
        <Link to={`/product/${product.id}`} className="btn btn-primary btn-small">Lihat Detail</Link>
      </div>
    </div>
  );
}

export default ProductCard;