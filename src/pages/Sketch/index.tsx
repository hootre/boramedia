import MainWrapper from '@components/MainWrapper';
import { VFC } from 'react';
import Axios from 'axios';
interface Props {
  item: any;
}
const Sketch: VFC<Props> = ({ item }) => {
  return <MainWrapper item={item} />;
};

export async function getStaticProps() {
  const channelId = 'NsBNBZYPqpc';
  const playlistId = 'PLZrww0kSsiiBwm9IQbjsWCmAbPhB7nwOu';
  const apiUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=25&key=${process.env.YOUTUBE_KEY}`;
  const res = await Axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      item: data,
    },
  };
}
export default Sketch;
