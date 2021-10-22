import { AppProps } from 'next/app';
import AppLayout from 'src/layouts/AppLayout';
import Head from 'next/head';
import { Provider } from 'react-redux';

import configureStore from '@reducers/ConfigureStore';
const store = configureStore();
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Head>
        <title>BORA</title>
        <meta name="MainPage" content="BORAMEDIA 홈페이지 입니다" />
        <meta
          name="viewport"
          content="target-densitydpi=device-dpi, user-scalable=0, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, width=device-width"
        />
      </Head>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </Provider>
  );
};

export default MyApp;
