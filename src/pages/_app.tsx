import { AppProps } from 'next/app';
import AppLayout from 'src/layouts/AppLayout';
import { ThemeProvider } from 'styled-components';
import { dark, light } from '@theme/theme';
import Head from 'next/head';
const MyApp = ({ Component, pageProps }: AppProps) => {
  const theme = true ? { mode: light } : { mode: dark };
  return (
    <>
      <Head>
        <title>SEROP</title>
        <meta name="MainPage" content="SEROP 홈페이지 입니다" />
        <meta
          name="viewport"
          content="target-densitydpi=device-dpi, user-scalable=0, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
