import React from 'react';

const ProductImage = ({ selectedImage }) => {
  return (
    <div>
      <img src={selectedImage} alt="Product" style={{ maxWidth: '100%', height: 'auto'}} />
    </div>
  );
}

export default ProductImage;
