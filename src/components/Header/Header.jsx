import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

import logoImage from '../../assets/img/logo.svg';

const Header = (props) => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={logoImage} alt="logo" />
        </Link>
      </div>
      <div className={styles['menu-wrapper']}>
        <div className={styles['menu-item']}>
          <a href="#Test-drive">
            <button>Тест-драйв</button>
          </a>
        </div>
        <div className={styles['menu-item']}>
          <a href="#Characteristics">
            <button>Характеристики</button>
          </a>
        </div>
        <div className={styles['menu-item']}>
          <a href="#Review">
            <button>Обзор</button>
          </a>
        </div>
        <div className={styles['menu-item']}>
          <a href="#Contacts">
            <button>Контакты</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
