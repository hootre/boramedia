import Axios from 'axios';
import Head from 'next/head';
import { Container } from '@styles/view-styles';
import useSWR from 'swr';
import fetcher from 'src/util/fetcher';
import { VFC } from 'react';

interface Props {
  item: any;
}
const Post: VFC<Props> = ({ item }) => {
  const { items } = item;
  console.log(items);
  return (
    <>
      {item && (
        <>
          <Head>
            <title>{item.name}</title>
            <meta name="description" content={item.description}></meta>
          </Head>
          <div>테스트성공</div>
          <Container>{items && items.map((item: any) => <li>{item.snippet.title}</li>)}</Container>
        </>
      )}
    </>
  );
};

export default Post;

export async function getServerSideProps() {
  const channelKey = 'UC1j3RC9YeL7sfrc5ZSrV9YA';
  const { data: videoDatas } = useSWR<any>(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelKey}&key=${process.env.YOUTUBE_KEY}`,
    fetcher,
  );
  return {
    props: {
      item: videoDatas,
    },
  };
}
