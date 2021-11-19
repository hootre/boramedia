import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, VFC } from 'react';
import { Controller } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MobileMenuContailner } from './styles';

interface Props {
  setFirstSwiper: any;
  secondSwiper: any;
}
const MobileMenu: VFC<Props> = ({ secondSwiper, setFirstSwiper }) => {
  const router = useRouter();
  const title = router.pathname.split('/')[1];
  return (
    <MobileMenuContailner>
      <Swiper className="mySwiper" slidesPerView={3} centeredSlides={true} grabCursor={true}>
        <SwiperSlide key="0" className={title == '' ? 'active' : ''}>
          <Link href="/">메인</Link>
        </SwiperSlide>
        <SwiperSlide key="1" className={title == 'MusicVideo' ? 'active' : ''}>
          <Link href="/MusicVideo">뮤직비디오</Link>
        </SwiperSlide>
        <SwiperSlide key="2" className={title === 'Promotion' ? 'active' : ''}>
          <Link href="/Promotion">제작영상</Link>
        </SwiperSlide>
        <SwiperSlide key="3" className={title === 'Interview' ? 'active' : ''}>
          <Link href="/Interview">배우 프로필</Link>
        </SwiperSlide>
        <SwiperSlide key="4" className={'sketch'}>
          <Link href="/Sketch">스케치/메이킹</Link>
        </SwiperSlide>
        <SwiperSlide key="5" className={router.pathname === '/Advertising' ? 'active' : ''}>
          <Link href="/Advertising">광고</Link>
        </SwiperSlide>
      </Swiper>
    </MobileMenuContailner>
  );
};

export default MobileMenu;