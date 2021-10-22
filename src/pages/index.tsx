import { useState, VFC } from 'react';
import Axios from 'axios';
import MainFullVideo from '@components/MainFullVideo';
import { GetStaticProps } from 'next';
import { Mobile, PC } from '@utils/MediaQuery';
import MobileOnePage from '@components/MobileOnePage';
import useYoutebeList from '@hooks/useYoutebeList';
import OnePage from '@components/OnePage';
interface Props {
  Advertising_list: any;
  Interview_list: any;
  MusicVideo_list: any;
  Promotion_list: any;
  Sketch_list: any;
}
const Home: VFC<Props> = ({
  Advertising_list,
  Interview_list,
  MusicVideo_list,
  Promotion_list,
  Sketch_list,
}) => {
  return (
    <>
      <PC>
        <OnePage
          Advertising_list={Advertising_list}
          Interview_list={Interview_list}
          MusicVideo_list={MusicVideo_list}
          Promotion_list={Promotion_list}
          Sketch_list={Sketch_list}
        />
      </PC>
      <Mobile>
        <MobileOnePage
          Advertising_list={Advertising_list}
          Interview_list={Interview_list}
          MusicVideo_list={MusicVideo_list}
          Promotion_list={Promotion_list}
          Sketch_list={Sketch_list}
        />
      </Mobile>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const Advertising_list = await useYoutebeList(process.env.NEXT_PUBLIC_ADVERTISING);
  const Interview_list = await useYoutebeList(process.env.NEXT_PUBLIC_INTERVIEW);
  const MusicVideo_list = await useYoutebeList(process.env.NEXT_PUBLIC_MUSICVIDEO);
  const Promotion_list = await useYoutebeList(process.env.NEXT_PUBLIC_PROMOTION);
  const Sketch_list = await useYoutebeList(process.env.NEXT_PUBLIC_SKETCH);
  return {
    props: {
      Advertising_list,
      Interview_list,
      MusicVideo_list,
      Promotion_list,
      Sketch_list,
    },
  };
};
export default Home;
