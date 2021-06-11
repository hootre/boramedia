import MainCardVideo from '@components/MainCardVideo';
import SubCardVideo from '@components/SubCardVideo';
import { VFC } from 'react';
import { WrapperContainer } from './styles';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper/core';
import { useRouter } from 'next/dist/client/router';

SwiperCore.use([EffectCoverflow, Pagination]);
interface Props {
  data: any;
}
const MainWrapper: VFC<Props> = ({ data }) => {
  const router = useRouter();
  const title = router.pathname.split('/')[1];
  return (
    <WrapperContainer>
      <h1>{title ? title : '뮤직비디오'}</h1>
      <div className="MainCard">
        <MainCardVideo CardData={data[0]} titleName={title} />
        <MainCardVideo CardData={data[1]} titleName={title} />
      </div>
      <h2>Most Watched</h2>
      <div className="SubCard">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={false}
          pagination={{
            clickable: false,
          }}
          navigation={false}
          className="mySwiper"
        >
          {data &&
            data.map((item: any, index: number) => {
              return (
                <SwiperSlide>
                  <SubCardVideo key={item.id} CardData={item} titleName={router.pathname} />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </WrapperContainer>
  );
};

export default MainWrapper;
