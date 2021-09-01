import VideoList from '@components/VideoList';
import { useRouter } from 'next/router';
import React, { useEffect, VFC } from 'react';
import { Controller } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperContainer } from './styles';

interface Props {
  Advertising_list: any;
  Interview_list: any;
  MusicVideo_list: any;
  Promotion_list: any;
  Sketch_list: any;
  firstSwiper: any;
  setSecondSwiper: any;
}
const MobileOnePage: VFC<Props> = ({
  Advertising_list,
  Interview_list,
  MusicVideo_list,
  Promotion_list,
  Sketch_list,
  firstSwiper,
  setSecondSwiper,
}) => {
  const router = useRouter();
  const title = router.pathname.split('/')[1];
  useEffect(() => {
    document.querySelector('.listBox')?.addEventListener('mousewheel', function (e) {
      e.stopPropagation();
    });
  }, []);
  return (
    <SwiperContainer>
      <Swiper className="mySwiper" loop={false} speed={1000} grabCursor={false}>
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
