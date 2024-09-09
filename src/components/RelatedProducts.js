// src/components/RelatedProducts.js
import React from 'react';

const RelatedProducts = ({ related }) => (
  <div className="related-products">
    <h3>Related Products</h3>
    <div className="related-grid">
      {related.map((product, index) => (
        <div key={index} className="related-item">
          <img src={product.imageUrl} alt={product.title} />
          <p>{product.title}</p>
          <p className="price">{product.price} ₾</p>
        </div>
      ))}
    </div>
  </div>
);

export default RelatedProducts;
