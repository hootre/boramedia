import MainWrapper from '@components/MainWrapper';
import { VFC } from 'react';
import Axios from 'axios';
import { useRouter } from 'next/dist/client/router';
interface Props {
  item: any;
}
const Promotion: VFC<Props> = ({ item }) => {
  const router = useRouter();
  const { name } = router.query;
  console.log(item);
  return <MainWrapper key={item.id} item={item} />;
};

export async function getStaticProps() {
  const playlistId = 'PLv2d7VI9OotSn1ThdDeqvBx8QuRSd01qv';
  const apiUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=25&key=${process.env.YOUTUBE_KEY}`;
  const res = await Axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      item: data,
    },
  };
}
export default Promotion;
