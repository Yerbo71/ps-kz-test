'use client';

import styles from './mobileSidebar.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export const MobileSidebar = () => {
  return (
    <nav className={styles.mobileSidebar}>
      <ul className={styles.mobileSidebar__menu}>
        <li>
          <Link href="/">
            <Image src="/icons/menu.svg" alt="Menu" width={20} height={20} />
            <span>Меню</span>
          </Link>
        </li>
        <li>
          <Link href="/">
            <Image src="/icons/question.svg" alt="Questions" width={20} height={20} />
            <span>Помощь</span>
          </Link>
        </li>
        <li>
          <Link href="/">
            <Image src="/icons/moon.svg" alt="Theme" width={20} height={20} />
            <span>Тема</span>
          </Link>
        </li>
        <li>
          <Link href="/">
            <Image src="/icons/translate.svg" alt="Language" width={20} height={20} />
            <span>Язык</span>
          </Link>
        </li>
        <li>
          <Link href="/">
            <Image src="/icons/pin.svg" alt="Pin" width={20} height={20} />
            <span>Закрепить</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
