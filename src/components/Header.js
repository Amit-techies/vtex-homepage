import React from 'react';
import './Header.css'; // CSS file for the header styling

const Header = () => {
  return (
    <header className="header">
      {/* Top bar with discounts */}
      <div className="top-bar">
        <span className="discount">خصومات الجملة - خصم 30%</span>
      </div>

      {/* Main header with logo, language, cart, and other elements */}
      <div className="main-header">
        {/* Logo */}
        <div className="logo">
          <img src="/assets/logo.png" alt="Logo" className="logo-image" />
        </div>

        {/* Navigation links */}
        <nav className="nav-links">
          <ul>
            <li><a href="#">ملابس مريضة</a></li>
            <li><a href="#">إكسسوارات</a></li>
            <li><a href="#">مجموعات</a></li>
            <li><a href="#">فساتين والقفاطنات</a></li>
            <li><a href="#">الإصدارات الجديدة</a></li>
          </ul>
        </nav>

        {/* Right section with account, language, and cart */}
        <div className="header-right">
          {/* Account/Login */}
          <a href="#" className="login">تسجيل الدخول / تسجيل حساب جديد</a>

          {/* Language and Country */}
          <div className="language-country">
            <span>ENG</span> <img src="/assets/flag-icon.png" alt="Flag" className="flag-icon" />
          </div>

          {/* Cart */}
          <div className="cart">
            <img src="/assets/cart-icon.png" alt="Cart" />
            <span className="cart-count">3</span>
          </div>

          {/* Search */}
          <div className="search">
            <input type="text" placeholder="البحث" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
