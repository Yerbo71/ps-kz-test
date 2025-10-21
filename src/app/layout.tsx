import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider, App as AntApp } from 'antd';
import { antdTheme } from '@/config/antdTheme';
import { MainLayout } from '@/layout/mainLayout/mainLayout';
import './globals.scss';

const openSans = Open_Sans({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-open-sans'
});

export const metadata: Metadata = {
  title: 'PS Test',
  description: 'Frontend position test',
  icons: {
    icon: '/ps-logo.svg'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={openSans.variable}>
        <AntdRegistry>
          <ConfigProvider theme={antdTheme}>
            <AntApp>
              <MainLayout>{children}</MainLayout>
            </AntApp>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
