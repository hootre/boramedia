import MainCardVideo from '@components/MainCardVideo';
import SubCardVideo from '@components/SubCardVideo';
import { VFC } from 'react';
import { WrapperContainer } from './styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import VideoList from '@components/VideoList';
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper/core';
import { useRouter } from 'next/dist/client/router';
import { useIsMobile } from '@utils/MediaQuery';
SwiperCore.use([EffectCoverflow, Pagination]);
interface Props {
  data: any;
}
const MainWrapper: VFC<Props> = ({ data }) => {
  const isMobile = useIsMobile();
  const router = useRouter();
  const title = router.pathname.split('/')[1];
  return (
    <WrapperContainer>
      {isMobile ? (
        <VideoList titleName={title ? title : '뮤직비디오'} list={data} />
      ) : (
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
      )}
    </WrapperContainer>
  );
};

export default MainWrapper;
