import React from 'react';
import styles from './chat.module.css';

const Header: React.FC = () => {
  return (
    <div className={styles.stickyHeader}>

      {/* Navbar Left */}


      <nav className={styles.navbarLeft}>
        <img src="/taxsavvy.png" alt="Logo" className={styles.logo} />
        <ul className={styles.navbarList}>
          <li className={styles.navbarItem}>
            <a href="#" className={styles.navbarLink}>For Business</a>
          </li>
        </ul>
      </nav>

      <h1 className={styles.header}>
        TaxSavy
      </h1>

      {/* Navbar Right */}
      <nav className={styles.navbarRight}>
        <ul className={styles.navbarList}>
          <li className={styles.navbarItem}>
            <a href="#" className={styles.navbarLink}>Sign up</a>
          </li>
        </ul>
      </nav>

    </div>
  )
}

export default Header;
