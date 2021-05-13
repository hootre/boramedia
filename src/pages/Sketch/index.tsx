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
  const playlistId = 'PLP4g2aiQuWr49VztCq2jbkncJwFJNzPi6';
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
