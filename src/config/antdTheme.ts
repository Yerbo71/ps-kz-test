import type { ThemeConfig } from 'antd';

export const antdTheme: ThemeConfig = {
  token: {
    colorPrimary: '#20a8d8',
    borderRadius: 8,
    fontFamily: 'var(--font-open-sans), sans-serif',
    colorBgContainer: '#ffffff'
  },
  components: {
    Button: {
      borderRadius: 10,
      fontWeight: 700
    }
  }
};
