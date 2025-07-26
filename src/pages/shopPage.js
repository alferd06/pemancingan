// src/pages/ShopPage.js
import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard'; // Buat komponen ProductCard
import { productsData } from '../data/products'; // Data dummy produk
import '../styles/global.css';

function ShopPage() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({ category: 'all', priceRange: 'all', brand: 'all' });
  const [sort, setSort] = useState('popular'); // price_asc, price_desc, popular

  useEffect(() => {
    // Logika filtering dan sorting di sini
    let filtered = productsData;

    if (filters.category !== 'all') {
      filtered = filtered.filter(p => p.category === filters.category);
    }
    // ... tambahkan filter lain

    if (sort === 'price_asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sort === 'price_desc') {
      filtered.sort((a, b) => b.price - a.price);
    }
    // ... tambahkan sort lain

    setProducts(filtered);
  }, [filters, sort]);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  return (
    <div className="shop-page-container">
      <h1>Katalog Perlengkapan Memancing</h1>
      <div className="shop-controls">
        <div className="filters">
          {/* Contoh Filter Kategori */}
          <label htmlFor="category-filter">Kategori:</label>
          <select id="category-filter" name="category" onChange={handleFilterChange} value={filters.category}>
            <option value="all">Semua</option>
            <option value="rod">Joran</option>
            <option value="reel">Reel</option>
            <option value="bait">Umpan</option>
            {/* ... kategori lain */}
          </select>

          {/* Contoh Filter Harga */}
          {/* ... filter lain seperti brand, dll. */}
        </div>
        <div className="sort-options">
          <label htmlFor="sort-by">Urutkan berdasarkan:</label>
          <select id="sort-by" onChange={handleSortChange} value={sort}>
            <option value="popular">Populer</option>
            <option value="price_asc">Harga Terendah</option>
            <option value="price_desc">Harga Tertinggi</option>
            <option value="newest">Terbaru</option>
          </select>
        </div>
      </div>

      <div className="product-grid">
        {products.length > 0 ? (
          products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>Tidak ada produk yang ditemukan.</p>
        )}
      </div>
    </div>
  );
}

export default ShopPage;