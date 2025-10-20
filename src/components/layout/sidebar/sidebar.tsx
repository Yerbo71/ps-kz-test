'use client';

import { HomeOutlined, PhoneOutlined, MessageOutlined } from '@ant-design/icons';
import styles from './Sidebar.module.scss';

export const Sidebar = () => {
  return (
    <nav className={styles.sidebar}>
      <ul className={styles.sidebar__menu}>
        <li>
          <HomeOutlined />
        </li>
        <li>
          <PhoneOutlined />
        </li>
        <li>
          <MessageOutlined />
        </li>
      </ul>
    </nav>
  );
};
