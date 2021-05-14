import MainCardVideo from '@components/MainCardVideo';
import SubCardVideo from '@components/SubCardVideo';
import { useEffect, useState, VFC } from 'react';
import { WrapperContainer } from './styles';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import useTitle from '@hooks/useTitle';
import { useRouter } from 'next/dist/client/router';
interface Props {
  data: any;
}
const settings = {
  focusOnSelect: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  speed: 500,
};
const MainWrapper: VFC<Props> = ({ data }) => {
  console.log(data);
  const router = useRouter();
  return (
    <WrapperContainer>
      <h1>{router.pathname.substring(1) ? router.pathname.substring(1) : 'MusicVideo'}</h1>
      <div className="MainCard">
        <MainCardVideo CardData={data[0]} titleName={router.pathname.substring(1)} />
        <MainCardVideo CardData={data[1]} titleName={router.pathname.substring(1)} />
      </div>
      <h2>Most Watched</h2>
      <div className="SubCard">
        <Slider {...settings}>
          {data &&
            data.map((item: any, index: number) => {
              if (index > 1) {
                return <SubCardVideo key={item.id} CardData={item} titleName={router.pathname} />;
              }
            })}
        </Slider>
      </div>
    </WrapperContainer>
  );
};

export default MainWrapper;
