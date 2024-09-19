import React from 'react';

const products = [
  {
    id: 1,
    title: '4MP IP Camera - Bullet',
    description: 'This is a high-quality IP camera with great features.',
    price: '264.55 ₾',
    images: ['image1.jpg', 'image2.jpg'], // Replace with actual image URLs
  },
  {
    id: 2,
    title: 'Camera 1',
    description: 'High-definition camera with night vision.',
    price: '250 ₾',
    images: ['camera1.jpg'], // Replace with actual image URLs
  },
  {
    id: 3,
    title: 'Camera 2',
    description: 'Wireless camera with motion detection.',
    price: '300 ₾',
    images: ['camera2.jpg'], // Replace with actual image URLs
  },
  {
    id: 4,
    title: 'Camera 3',
    description: 'Outdoor camera with weatherproof features.',
    price: '350 ₾',
    images: ['camera3.jpg'], // Replace with actual image URLs
  },
];

const ProductList = ({ onSelectProduct }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-item" onClick={() => onSelectProduct(product)}>
          <div className="product-image">
            {/* Replace with actual image element */}
            <img src={product.images[0]} alt={product.title} />
          </div>
          <h3>{product.title}</h3>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
