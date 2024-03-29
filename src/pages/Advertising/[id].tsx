import VideoDetail from '@components/VideoDetail';
import Axios from 'axios';
import { GetStaticPaths, GetStaticProps } from 'next';
import React, { useEffect, useState, VFC } from 'react';
import Head from 'next/head';
interface Props {
  data: any;
  data_detail: any;
  detail: any;
}
const Detail: VFC<Props> = ({ data, data_detail }) => {
  const dataSort = data.sort((a: any, b: any) => {
    return new Date(b.snippet.publishedAt).valueOf() - new Date(a.snippet.publishedAt).valueOf();
  });
  const [titleName, setTitleName] = useState('');
  useEffect(() => {
    var para = document.location.href.split('/');
    setTitleName(para[3]);
  }, []);
  return (
    <>
      <Head>
        <title>BORAMEDIA | Advertising</title>
        <meta name="MainPage" content="BORAMEDIA Advertising." />
      </Head>
      <VideoDetail titleName={titleName} list={dataSort} data_detail={data_detail} />
    </>
  );
};
export default React.memo(Detail);

export const getStaticPaths: GetStaticPaths = async () => {
  Axios.defaults.baseURL = 'https://www.googleapis.com/youtube/v3';
  let params = {};

  // Video List Search
  params = {
    key: process.env.NEXT_PUBLIC_YOUTUBE_KEY,
    part: 'snippet',
    maxResults: 25,
    playlistId: process.env.NEXT_PUBLIC_ADVERTISING,
  };
  const res = await Axios.get('/playlistItems', { params });
  const data = res.data.items;
  const paths = data.map((item: any) => ({
    params: {
      id: `${item.snippet.resourceId.videoId}`,
    },
  }));
  return {
    // paths: [{ params: { id: '740' } }, { params: { id: '730' } }, { params: { id: '729' } }],
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  Axios.defaults.baseURL = 'https://www.googleapis.com/youtube/v3';
  let params = {};

  // Video List Search
  params = {
    key: process.env.NEXT_PUBLIC_YOUTUBE_KEY,
    part: 'snippet',
    maxResults: 25,
    playlistId: process.env.NEXT_PUBLIC_ADVERTISING,
  };
  const res = await Axios.get('/playlistItems', { params });

  const videoIdList = res.data.items
    .map((item: any) => {
      return item.snippet.resourceId.videoId;
    })
    .join();

  // Videos Data Search
  params = {
    key: process.env.NEXT_PUBLIC_YOUTUBE_KEY,
    part: 'snippet,contentDetails',
    maxResults: 25,
    id: videoIdList,
  };
  const videos_res = await Axios.get('/videos', { params });

  // Video Detail Search
  params = {
    key: process.env.NEXT_PUBLIC_YOUTUBE_KEY,
    part: 'snippet',
    maxResults: 25,
    id: context.params?.id,
  };

  const detail_res = await Axios.get('/videos', { params });

  const data = videos_res.data.items;
  const data_detail = detail_res.data.items[0];

  return {
    props: {
      data,
      data_detail,
    },
  };
};
