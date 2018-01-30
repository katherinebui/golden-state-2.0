import React from 'react';
import styles from '../public/css/styles.css';

const Header = () => (
  <div>
    <img src={require('../public/images/logo.png')} />
    <header className="golden">
      <h2>Are the Golden State Warriors playing today?</h2>
    </header>
  </div>
);

export default Header;
