import React from 'react';
import jsPDF from 'jspdf'; // Import jsPDF
import ProductImageCarousel from './ProductImageCarousel';
import './ProductDetails.css';

const ProductDetails = ({ product }) => {
  const generateInvoice = () => {
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text('Invoice', 20, 20);
    doc.setFontSize(12);
    doc.text(`Product Name: ${product.title}`, 20, 30);
    doc.text(`Description: ${product.description}`, 20, 40);
    doc.text(`Price: ${product.price}`, 20, 50);

    doc.save('invoice.pdf');
  };

  return (
    <div className="product-details">
      <div className="product-images">
        <ProductImageCarousel images={product.images} />
      </div>
      <div className="product-info">
        <h2>{product.title}</h2>
        <p className="product-description">{product.description}</p>
        <h3>{product.price}</h3>
        <button className='buy' onClick={generateInvoice}>Buy</button>
      </div>
    </div>
  );
};

export default ProductDetails;
