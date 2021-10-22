import VideoDetail from '@components/VideoDetail';
import React, { useEffect, VFC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperContainer } from './styles';

import SwiperCore, { Mousewheel, Pagination } from 'swiper';

// install Swiper modules
SwiperCore.use([Mousewheel, Pagination]);
interface Props {
  Advertising_list: any;
  Interview_list: any;
  MusicVideo_list: any;
  Promotion_list: any;
  Sketch_list: any;
}
const OnePage: VFC<Props> = ({
  Advertising_list,
  Interview_list,
  MusicVideo_list,
  Promotion_list,
  Sketch_list,
}) => {
  return (
    <SwiperContainer>
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        speed={1000}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        height={1200}
        className="mySwiper"
      >
        <SwiperSlide className="sectionContainer">
          <VideoDetail
            titleName={'MusicVideo'}
            list={MusicVideo_list}
            data_detail={MusicVideo_list[1]}
          />
        </SwiperSlide>
        <SwiperSlide className="sectionContainer">
          <VideoDetail
            titleName={'Promotion'}
            list={Promotion_list}
            data_detail={Promotion_list[1]}
          />
        </SwiperSlide>
        <SwiperSlide className="sectionContainer">
          <VideoDetail
            titleName={'Interview'}
            list={Interview_list}
            data_detail={Interview_list[1]}
          />
        </SwiperSlide>
        <SwiperSlide className="sectionContainer">
          <VideoDetail titleName={'Sketch'} list={Sketch_list} data_detail={Sketch_list[1]} />
        </SwiperSlide>
        <SwiperSlide className="sectionContainer">
          <VideoDetail
            titleName={'Advertising'}
            list={Advertising_list}
            data_detail={Advertising_list[1]}
          />
        </SwiperSlide>
      </Swiper>
    </SwiperContainer>
  );
};

export default OnePage;
