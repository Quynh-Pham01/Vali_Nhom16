import React from 'react';
import Cart from '../Cart/Cart';

const Header = () => {
  return (
    <header>
      <nav>
        {/* Các liên kết điều hướng khác */}
        <Cart />
      </nav>
    </header>
  );
}

export default Header;

