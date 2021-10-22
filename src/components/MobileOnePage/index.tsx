import VideoList from '@components/VideoList';
import { useRouter } from 'next/router';
import React, { useEffect, VFC } from 'react';
import { Controller } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperContainer } from './styles';

import SwiperCore, { Pagination } from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination]);
interface Props {
  Advertising_list: any;
  Interview_list: any;
  MusicVideo_list: any;
  Promotion_list: any;
  Sketch_list: any;
}
const MobileOnePage: VFC<Props> = ({
  Advertising_list,
  Interview_list,
  MusicVideo_list,
  Promotion_list,
  Sketch_list,
}) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };
  return (
    <SwiperContainer>
      <Swiper
        className="mySwiper"
        pagination={pagination}
        loop={false}
        speed={500}
        grabCursor={false}
      >
        <SwiperSlide className="sectionContainer">
          <VideoList titleName={'MusicVideo'} list={MusicVideo_list} />
        </SwiperSlide>
        <SwiperSlide className="sectionContainer">
          <VideoList titleName={'Promotion'} list={Promotion_list} />
        </SwiperSlide>
        <SwiperSlide className="sectionContainer">
          <VideoList titleName={'Interview'} list={Interview_list} />
        </SwiperSlide>
        <SwiperSlide className="sectionContainer">
          <VideoList titleName={'Sketch'} list={Sketch_list} />
        </SwiperSlide>
        <SwiperSlide className="sectionContainer">
          <VideoList titleName={'Advertising'} list={Advertising_list} />
        </SwiperSlide>
      </Swiper>
    </SwiperContainer>
  );
};

export default MobileOnePage;
