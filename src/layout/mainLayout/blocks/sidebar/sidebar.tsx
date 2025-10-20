'use client';

import styles from './sidebar.module.scss';
import Image from 'next/image';

export const Sidebar = () => {
  return (
    <nav className={styles.sidebar}>
      <ul className={styles.sidebar__menu}>
        <li>
          <button>
            <Image src="/icons/menu.svg" alt="Menu" width={20} height={20} />
          </button>
          <button>
            <Image src="/icons/question.svg" alt="Questions" width={20} height={20} />
          </button>
        </li>
        <li>
          <button>
            <Image src="/icons/question.svg" alt="Questions" width={20} height={20} />
          </button>
        </li>
        <li>
          <button>
            <Image src="/icons/moon.svg" alt="Theme" width={20} height={20} />
          </button>
          <button>
            <Image src="/icons/translate.svg" alt="Language" width={20} height={20} />
          </button>
          <button>
            <Image src="/icons/pin.svg" alt="Pin" width={20} height={20} />
          </button>
        </li>
      </ul>
    </nav>
  );
};
