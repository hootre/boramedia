import { AppProps } from 'next/app';
import AppLayout from 'src/layouts/AppLayout';
import Head from 'next/head';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>BORA</title>
        <meta name="MainPage" content="BORAMEDIA 홈페이지 입니다" />
        <meta
          name="viewport"
          content="target-densitydpi=device-dpi, user-scalable=0, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, width=device-width"
        />
        <meta name="title" property="og:title" content="BORAMEDIA" />
        <meta
          name="description"
          property="og:description"
          content="광고, 홍보, 스케치, 인터뷰 등등 트렌드있는 영상 제작!"
        />
        <meta name="image" property="og:image" content="%PUBLIC_URL%/보라미디어 로고 PNG@4x.png" />
        <meta name="url" property="og:url" content="https://boramedia.co.kr" />
      </Head>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  );
};

export default MyApp;
