// src/pages/ShopPage.js
import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { productsData } from '../data/products';
import '../styles/ShopPage.css'; // Styling ShopPage

function ShopPage() {
  const [products, setProducts] = useState(productsData);
  const [filters, setFilters] = useState({
    category: 'all',
    brand: 'all',
    minPrice: '',
    maxPrice: '',
    searchTerm: '' // <--- TAMBAHKAN INI UNTUK PENCARIAN
  });
  const [sort, setSort] = useState('default');

  useEffect(() => {
    let filteredProducts = [...productsData];

    // Filter berdasarkan Search Term
    if (filters.searchTerm) {
      const lowerCaseSearchTerm = filters.searchTerm.toLowerCase();
      filteredProducts = filteredProducts.filter(product =>
        product.name.toLowerCase().includes(lowerCaseSearchTerm) ||
        product.description.toLowerCase().includes(lowerCaseSearchTerm) ||
        product.category.toLowerCase().includes(lowerCaseSearchTerm) ||
        product.brand.toLowerCase().includes(lowerCaseSearchTerm)
      );
    }

    // Filter berdasarkan Kategori
    if (filters.category !== 'all') {
      filteredProducts = filteredProducts.filter(product => product.category === filters.category);
    }

    // Filter berdasarkan Merek
    if (filters.brand !== 'all') {
      filteredProducts = filteredProducts.filter(product => product.brand === filters.brand);
    }

    // Filter berdasarkan Harga Minimum
    if (filters.minPrice !== '') {
      filteredProducts = filteredProducts.filter(product => product.price >= parseFloat(filters.minPrice));
    }

    // Filter berdasarkan Harga Maksimum
    if (filters.maxPrice !== '') {
      filteredProducts = filteredProducts.filter(product => product.price <= parseFloat(filters.maxPrice));
    }

    // Urutkan Produk
    if (sort === 'price_asc') {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sort === 'price_desc') {
      filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sort === 'name_asc') {
      filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === 'rating_desc') {
      filteredProducts.sort((a, b) => b.rating - a.rating);
    }

    setProducts(filteredProducts);
  }, [filters, sort]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value
    }));
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  const uniqueCategories = [...new Set(productsData.map(p => p.category))];
  const uniqueBrands = [...new Set(productsData.map(p => p.brand))];

  return (
    <div className="shop-page-container">
      <h1>Katalog Perlengkapan Memancing</h1>

      <div className="shop-controls">
        {/* Search Bar */}
        <div className="search-section">
            <input
                type="text"
                name="searchTerm"
                value={filters.searchTerm}
                onChange={handleFilterChange}
                placeholder="Cari produk..."
                className="search-input"
            />
        </div>

        {/* Filter Section */}
        <div className="filters-section">
          <h3>Filter Produk</h3>
          {/* ... Filter Kategori, Merek, Harga tetap di sini ... */}
          <div className="filter-group">
            <label htmlFor="category">Kategori:</label>
            <select id="category" name="category" value={filters.category} onChange={handleFilterChange}>
              <option value="all">Semua Kategori</option>
              {uniqueCategories.map(category => (
                <option key={category} value={category}>{category.charAt(0).toUpperCase() + category.slice(1)}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="brand">Merek:</label>
            <select id="brand" name="brand" value={filters.brand} onChange={handleFilterChange}>
              <option value="all">Semua Merek</option>
              {uniqueBrands.map(brand => (
                <option key={brand} value={brand}>{brand}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="minPrice">Harga Min:</label>
            <input
              type="number"
              id="minPrice"
              name="minPrice"
              value={filters.minPrice}
              onChange={handleFilterChange}
              placeholder="Rp Min"
            />
          </div>

          <div className="filter-group">
            <label htmlFor="maxPrice">Harga Maks:</label>
            <input
              type="number"
              id="maxPrice"
              name="maxPrice"
              value={filters.maxPrice}
              onChange={handleFilterChange}
              placeholder="Rp Maks"
            />
          </div>
        </div>

        {/* Sortir Section */}
        <div className="sort-section">
          <h3>Urutkan Berdasarkan</h3>
          <div className="sort-group">
            <select value={sort} onChange={handleSortChange}>
              <option value="default">Default</option>
              <option value="price_asc">Harga Terendah</option>
              <option value="price_desc">Harga Tertinggi</option>
              <option value="name_asc">Nama (A-Z)</option>
              <option value="rating_desc">Rating (Tertinggi)</option>
            </select>
          </div>
        </div>
      </div>

      <div className="product-grid">
        {products.length > 0 ? (
          products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>Tidak ada produk yang ditemukan dengan filter ini.</p>
        )}
      </div>
    </div>
  );
}

export default ShopPage;