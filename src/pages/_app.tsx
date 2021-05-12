import { AppProps } from 'next/app';
import AppLayout from 'src/layouts/AppLayout';
import { ThemeProvider } from 'styled-components';
import { dark, light } from '@theme/theme';
import wrapper from 'src/module/configureStore';
const MyApp = ({ Component, pageProps }: AppProps) => {
  const theme = true ? { mode: light } : { mode: dark };
  return (
    <ThemeProvider theme={theme}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ThemeProvider>
  );
};

export default wrapper.withRedux(MyApp);
