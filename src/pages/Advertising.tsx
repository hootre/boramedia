import MainWrapper from '@components/MainWrapper';
import { VFC } from 'react';
import Axios from 'axios';
interface Props {
  item: any;
}
const Advertising: VFC<Props> = ({ item }) => {
  return <MainWrapper item={item} />;
};

export async function getStaticProps() {
  const channelId = 'UC1j3RC9YeL7sfrc5ZSrV9YA';
  const playlistId = 'PL5e68lK9hEzfJjS_Xzsz-0EwTGD0CmQLi';
  const apiUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=25&key=${process.env.YOUTUBE_KEY}`;
  const res = await Axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      item: data,
    },
  };
}

export default Advertising;
