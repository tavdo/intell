// src/components/ProductDetails.js
import React from 'react';
import ProductImageCarousel from './ProductImageCarousel';
import './ProductDetails.css';

const ProductDetails = ({ product }) => {
  return (
    <div className="product-details">
      <div className="product-images">

        <ProductImageCarousel images={product.images} />
      </div>
      <div className="product-info">
        <h2>{product.title}</h2>
        <p className="product-description">{product.description}</p>
        <h3>{product.price} ₾</h3>
        <button className='buy'>Buy</button>
      </div>
    </div>
  );
};

export default ProductDetails;
