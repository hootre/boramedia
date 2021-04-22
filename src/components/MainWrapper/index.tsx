import MainCardVideo from '@components/MainCardVideo';
import SubCardVideo from '@components/SubCardVideo';
import { useState, VFC } from 'react';
import { WrapperContainer } from './styles';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import useTitle from '@hooks/useTitle';
interface Props {
  item: any;
}
const MainWrapper: VFC<Props> = ({ item: { items } }) => {
  console.log(items);
  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
  };
  return (
    <WrapperContainer>
      <h1>I AM</h1>
      <div className="MainCard">
        <MainCardVideo CardData={items[0].snippet} />
        <MainCardVideo CardData={items[1].snippet} />
      </div>
      <h2>Most Watched</h2>
      <div className="SubCard">
        <Slider {...settings}>
          {items &&
            items.map((item: any, index: number) => {
              if (index > 1) {
                return <SubCardVideo CardData={item.snippet} />;
              }
            })}
        </Slider>
      </div>
    </WrapperContainer>
  );
};

export default MainWrapper;
