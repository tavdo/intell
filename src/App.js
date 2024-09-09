// src/App.js
import React from 'react';
import Header from './components/Header';
import ProductDetails from './components/ProductDetails';
import ProductInfoTabs from './components/ProductInfoTabs';
import RelatedProducts from './components/RelatedProducts';
import './App.css';

const App = () => {
  const product = {
    title: '4MP IP Camera - Bullet',
    description: 'This is a high-quality IP camera with great features.',
    price: '264.55 ₾',
    images: [
      'https://via.placeholder.com/500x300',
      'https://via.placeholder.com/500x300',
      'https://via.placeholder.com/500x300'
    ],
  };

  const specs = [
    { feature: 'Resolution', value: '4MP' },
    { feature: 'Lens', value: '2.8mm' },
    { feature: 'IR Range', value: '30m' },
  ];

  const relatedProducts = [
    { imageUrl: 'https://via.placeholder.com/150', title: 'Camera 1', price: '250 ₾' },
    { imageUrl: 'https://via.placeholder.com/150', title: 'Camera 2', price: '300 ₾' },
    { imageUrl: 'https://via.placeholder.com/150', title: 'Camera 3', price: '350 ₾' },
  ];

  return (
    <div className="App">
      <Header />
      <ProductDetails product={product} />
      <ProductInfoTabs description={product.description} specs={specs} />
      <RelatedProducts related={relatedProducts} />
    </div>
  );
};

export default App;
