import React from 'react';
import logo from "../../assets/logo.svg";
import phone from "../../assets/phone.svg";
import "./index.scss";
 
const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo-container">
          <img src={logo} alt="Logo" />
        </div>
      </div>
      <div className="header-right">
        <div className="header-text">¡Compra por este medio!</div>
        <div className="phone-info">
          <a className="phone-link" href="tel:+014116001">
            <img src={phone} alt="Phone" className="phone-ico" />
            <span className="phone-text">(01) 4116001</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
