// src/components/Button.js
import React from 'react';
import { Link } from 'react-router-dom'; // Jika tombol bisa jadi link
import '../styles/global.css'; // Untuk class .btn dasar

function Button({ children, onClick, to, type = 'button', variant = 'primary', size = 'medium', className = '' }) {
  const baseClass = `btn btn-${variant} btn-${size} ${className}`;

  if (to) {
    return (
      <Link to={to} className={baseClass}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClass}>
      {children}
    </button>
  );
}

export default Button;