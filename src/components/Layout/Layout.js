import React from 'react';
import styles from './Layout.css';

const Layout = ({
  ...props
}) => {
  return (
    <div className={styles.layout}>
      <div className={styles.logo}>
        <a href="#" target="_blank">
          <img
            alt='logo'
            src='/assets/img/logo.png'
            className={styles.logo}
          />
        </a>
      </div>
      {props.children}
    </div>
  );
}

module.exports = Layout;
