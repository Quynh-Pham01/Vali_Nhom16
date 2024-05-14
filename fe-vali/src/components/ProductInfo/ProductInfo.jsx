import React from 'react';
import { Button } from 'antd';
const ProductInfo = ({ name, price, discount, img, sizes, description, onImageClick, onSizeClick }) => {
  const discountedPrice = price - (price * discount / 100);

  return (
    <div style={{border: '1px solid #ddd', padding: '10px' }}>
      <h2>{name}</h2>
      {discount > 0 ? (
        <>
          <p>Giá gốc: <span style={{ textDecoration: 'line-through' }}>{price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span></p>
          <p style={{color:'red', fontSize:'20px'}}>Giá sau giảm: {discountedPrice.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
          <p>Giảm giá: {discount}%</p>
        </>
      ) : (
        <p>Giá: {price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
      )}
      <div style={{ display: 'flex', gap: '2px' }}> 
      <p>Màu sắc:</p>
        {Object.keys(img).map((color) => (
          <img
            key={color}
            src={img[color]}
            alt={color}
            style={{ width: '10%', height: 'auto', cursor: 'pointer', border:'1px solid gray', borderRadius:'10px' }}
            onClick={() => onImageClick(img[color])}
          />
        ))}
      </div>
      <div style={{ marginTop: '10px' }}>
        <p>Kích thước:</p>
        {sizes.map((size) => (
          <button
            key={size}
            style={{ margin: '2px', padding: '10px 20px', fontSize: '14px', borderRadius:'10px' }}
            onClick={() => onSizeClick(size)}
          >
            {size}
          </button>
        ))}
      </div>
      <Button type="primary" danger>Thêm sản phẩm</Button>
    </div>
  );
};

export default ProductInfo;





