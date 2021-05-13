import VideoDetail from '@components/VideoDetail';
import Axios from 'axios';
import { GetStaticPaths, GetStaticProps } from 'next';
import React, { useEffect, useState, VFC } from 'react';
interface Props {
  data: any;
  data_detail: any;
  detail: any;
}
const Detail: VFC<Props> = ({ data, data_detail }) => {
  const [titleName, setTitleName] = useState('');
  useEffect(() => {
    var para = document.location.href.split('/');
    setTitleName(para[3]);
  }, []);
  return <VideoDetail titleName={titleName} list={data} data_detail={data_detail} />;
};
export default React.memo(Detail);
export const getStaticPaths: GetStaticPaths = async () => {
  const playlistId = 'PLKihElkMe-Kr1X7ucexEX8VvHLckErSho';
  const apiUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=25&key=${process.env.YOUTUBE_KEY}`;
  const res = await Axios.get(apiUrl);
  const data = res.data.items;
  const paths = data.slice(1, 5).map((item: any) => ({
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const playlistId = 'PLKihElkMe-Kr1X7ucexEX8VvHLckErSho';
  const apiUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=25&key=${process.env.YOUTUBE_KEY}`;
  const res = await Axios.get(apiUrl);

  const apiUrl_detail = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${params?.id}&key=${process.env.YOUTUBE_KEY}`;
  const res_detail = await Axios.get(apiUrl_detail);

  const data = res.data.items;
  const data_detail = res_detail.data.items[0];

  return {
    props: {
      data,
      data_detail,
    },
  };
};
