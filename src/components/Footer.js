// src/components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#f0f0f0', padding: '20px', textAlign: 'center', marginTop: 'auto' }}>
      <p>&copy; {new Date().getFullYear()} Website Pemancingan. Hak Cipta Dilindungi.</p>
      <p>Dibuat dengan semangat memancing!</p>
    </footer>
  );
}

export default Footer; // Pastikan ini ada dan benar