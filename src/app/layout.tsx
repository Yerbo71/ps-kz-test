import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
import { antdTheme } from '@/config/antdTheme';
import { MainLayout } from '@/components/layout/mainLayout/mainLayout';

const openSans = Open_Sans({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-open-sans'
});

export const metadata: Metadata = {
  title: 'PS Test',
  description: 'Frontend position test'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={openSans.variable}>
        <AntdRegistry>
          <ConfigProvider theme={antdTheme}>
            <MainLayout>{children}</MainLayout>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
