import styled from 'styled-components';

export const SwiperContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  top: 17%;
  z-index: 3;
  overflow: hidden;
  .sectionContainer {
    width: 100%;
    height: 100%;
    flex-direction: column;
    padding: 0px 30px 30px 30px;
    flex-grow: 1;
  }
  .swiper {
    height: 100%;
  }
`;
