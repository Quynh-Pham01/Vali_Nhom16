import React from 'react';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/CartProductPage'); // Điều hướng đến trang CartProductPage
  };

  return (
    <div>
      <ShoppingCartOutlined 
        style={{ fontSize: '24px', color: '#08c', cursor: 'pointer' }} 
        onClick={handleClick}
      />
    </div>
  );
}

export default Cart;
