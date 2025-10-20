'use client';
import { MenuOutlined } from '@ant-design/icons';
import styles from './header.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { Badge, Avatar } from 'antd';

interface HeaderProps {
  onToggleSidebar: () => void;
}

export const Header = ({ onToggleSidebar }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <div>
          <div className={styles.desktop}>
            <div className={styles.desktop__content}>
              <Link href="/" className={styles.link}>
                <Image src="/ps-logo.svg" alt="PS" width={34} height={30} />
              </Link>
              <div>
                Консоль <br /> управления
              </div>
            </div>
          </div>
          <div className={styles.mobile}>
            <div className={styles.mobile__content}>
              <button
                className={styles.mobile__burger}
                onClick={onToggleSidebar}
                aria-label="Open menu"
              >
                <MenuOutlined />
              </button>
              <Link href="/" className={styles.link}>
                <Image src="/ps-logo.svg" alt="PS" width={34} height={30} />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.profile}>
          <Badge dot color="green" style={{ top: 3, right: 14 }}>
            <Avatar
              size={30}
              style={{
                backgroundColor: '#F2F5F7',
                borderColor: '#52c41a',
                borderWidth: '2px',
                borderStyle: 'solid',
                marginRight: '10px'
              }}
            >
              <Image src="/icons/bell.svg" alt="Notification" width={16} height={16} />
            </Avatar>
          </Badge>

          <div className={styles.profile__info}>
            <Avatar size={30} style={{ backgroundColor: '#F2F5F7' }}>
              <Image
                src="/icons/tenge.svg"
                alt="Currency"
                width={16}
                height={16}
                style={{ marginTop: '6px' }}
              />
            </Avatar>
            <div>
              <div className={styles.profile__id}>ID123456</div>
              <div className={styles.profile__balance}>0 тг</div>
            </div>
          </div>
          <div className={styles.profile__user}>
            <Avatar size={30} style={{ backgroundColor: '#b83280' }}>
              К
            </Avatar>
            <div className={styles.profile__name}>
              <div className={styles.profile__first}>Имя</div>
              <div className={styles.profile__last}>Фамилия</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
