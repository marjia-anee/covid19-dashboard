import React from 'react';
import headerImg from '../../images/images.jpg';
import './Header.css';

const Header = () => {
      return (
            <div className="headerCont">
            <img src={headerImg} className="image" alt=""/>
        </div>
      );
};

export default Header;