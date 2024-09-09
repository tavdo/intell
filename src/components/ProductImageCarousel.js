// src/components/ProductImageCarousel.js
import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ProductImageCarousel.css';

const ProductImageCarousel = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="product-carousel-container">
      {/* Main carousel displaying the selected image */}
      <Carousel
        selectedItem={selectedImage}
        onChange={(index) => setSelectedImage(index)}
        showThumbs={false} // Turn off the built-in thumbnails
        infiniteLoop={true}
      >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Product Image ${index}`} />
          </div>
        ))}
      </Carousel>

      {/* Horizontal scrollable thumbnail gallery */}
      <div className="thumbnail-container">
        <div className="thumbnails">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index}`}
              className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
              onClick={() => setSelectedImage(index)} // Clicking changes the main image
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductImageCarousel;
