'use client';

import { Layout, Grid, Drawer } from 'antd';
import { Header } from '@/layout/mainLayout/blocks/header/header';
import { Sidebar } from '@/layout/mainLayout/blocks/sidebar/sidebar';
import styles from './mainLayout.module.scss';
import { useState } from 'react';
import { MobileSidebar } from '@/layout/mainLayout/blocks/mobileSidebar/mobileSidebar';

const { useBreakpoint } = Grid;

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const screens = useBreakpoint();
  const isMobile = !screens.md;

  return (
    <Layout>
      <Header onMenuClick={() => setOpen(!open)} isMenuOpen={open} />
      <Layout>
        {!isMobile && (
          <Layout.Sider collapsible={false} width={60} collapsedWidth={0}>
            <Sidebar />
          </Layout.Sider>
        )}
        {isMobile && (
          <Drawer
            placement="left"
            open={open}
            onClose={() => setOpen(false)}
            closable={false}
            rootStyle={{
              position: 'absolute',
              top: '60px'
            }}
          >
            <MobileSidebar />
          </Drawer>
        )}
        <Layout.Content className={styles.content}>{children}</Layout.Content>
      </Layout>
    </Layout>
  );
};
