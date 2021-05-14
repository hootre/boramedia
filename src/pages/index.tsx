import { VFC } from 'react';
import Axios from 'axios';
import MainFullVideo from '@components/MainFullVideo';
import Head from 'next/head';
import { GetStaticProps } from 'next';
interface Props {
  data_detail: any;
}
const Home: VFC<Props> = ({ data_detail }) => {
  return (
    <>
      <MainFullVideo data_detail={data_detail} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const detail_id = 'T23XQ8L2UK8';
  const apiUrl_detail = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${detail_id}&key=${process.env.NEXT_PUBLIC_YOUTUBE_KEY}`;
  const res_detail = await Axios.get(apiUrl_detail);

  const data_detail = res_detail.data.items[0];

  return {
    props: {
      data_detail,
    },
  };
};
export default Home;
