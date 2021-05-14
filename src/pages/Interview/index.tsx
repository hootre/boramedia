import MainWrapper from '@components/MainWrapper';
import { VFC } from 'react';
import Axios from 'axios';
interface Props {
  data: any;
}
const Interview: VFC<Props> = ({ data }) => {
  return <MainWrapper data={data} />;
};

export async function getStaticProps() {
  Axios.defaults.baseURL = 'https://www.googleapis.com/youtube/v3';
  let params = {};

  // Video List Search
  params = {
    key: process.env.NEXT_PUBLIC_YOUTUBE_KEY,
    part: 'snippet',
    maxResults: 25,
    playlistId: 'PLKihElkMe-Kr1X7ucexEX8VvHLckErSho',
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
  const data = videos_res.data.items;

  return {
    props: {
      data,
    },
  };
}
export default Interview;
