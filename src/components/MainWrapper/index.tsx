import MainCardVideo from '@components/MainCardVideo';
import SubCardVideo from '@components/SubCardVideo';
import { VFC } from 'react';
import { WrapperContainer } from './styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import VideoList from '@components/VideoList';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper/core';
import { useRouter } from 'next/dist/client/router';
import { PC, Mobile } from '@utils/MediaQuery';
import Link from 'next/link';
SwiperCore.use([EffectCoverflow, Pagination]);
interface Props {
  data: any;
}
const MainWrapper: VFC<Props> = ({ data }) => {
  const router = useRouter();
  const title = router.pathname.split('/')[1];
  return (
    <WrapperContainer>
      <PC>
        <div className="contentContainer">
          <h1>{title ? title : '뮤직비디오'}</h1>

          <div className="MainCard">
            <MainCardVideo CardData={data[0]} titleName={title} />
            <MainCardVideo CardData={data[1]} titleName={title} />
          </div>
          <h2>Video List</h2>
          <div className="SubCard">
            <Swiper
              slidesPerView={3}
              spaceBetween={10}
              slidesPerGroup={3}
              loop={false}
              loopFillGroupWithBlank={false}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              className="mySwiper"
            >
              {data &&
                data.map((item: any) => {
                  return (
                    <SwiperSlide key={item.id}>
                      <SubCardVideo CardData={item} titleName={router.pathname} />
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </div>
        </div>
      </PC>
      <Mobile>
        <Swiper className="mySwiper" slidesPerView={3}>
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
          <SwiperSlide key="4" className={title === 'Sketch' ? 'active' : ''}>
            <Link href="/Sketch">스케치/메이킹</Link>
          </SwiperSlide>
          <SwiperSlide key="5" className={router.pathname === '/Advertising' ? 'active' : ''}>
            <Link href="/Advertising">광고</Link>
          </SwiperSlide>
        </Swiper>
        <VideoList titleName={title ? title : '뮤직비디오'} list={data} />
      </Mobile>
    </WrapperContainer>
  );
};

export default MainWrapper;
