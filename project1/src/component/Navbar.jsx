import React from 'react'
import styles from './Navbar.module.css'
function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className="logo">
        <img src="/images/brand_logo.png" alt="" />
      </div>
      <div className={styles.menudiv}>
        <ul className={styles.menudivul}>
          <li>MENU</li>
          <li>LOCATION</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
      </div>
      <div className={styles.btncont}>
        <button className={styles.btn}>Login</button>
      </div>
    </nav>
  );
}

export default Navbar