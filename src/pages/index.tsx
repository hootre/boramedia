import { VFC } from 'react';
import Axios from 'axios';
import MainFullVideo from '@components/MainFullVideo';
interface Props {
  item: any;
}
const Home: VFC<Props> = ({ item }) => {
  return <MainFullVideo />;
};

export async function getStaticProps() {
  const channelId = 'UC1j3RC9YeL7sfrc5ZSrV9YA';
  const playlistId = 'PLpfkvkkwITRlx3Dv0UB0kZC5sDGMlyAFh';
  const apiUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=25&key=${process.env.YOUTUBE_KEY}`;
  const res = await Axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      item: data,
    },
  };
}
export default Home;
