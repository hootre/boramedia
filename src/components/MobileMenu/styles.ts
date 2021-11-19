import styled from 'styled-components';

export const MobileMenuContailner = styled.div`
  position: absolute;
  top: 7%;
  left: 0;
  z-index: 2;
  .mySwiper {
    height: 50px;
    line-height: 50px;
    text-align: center;
    overflow: initial;
    border-bottom: 2px solid #808191;
    a {
      &:hover {
        color: #808191;
      }
    }
  }
  .swiper-slide-active a {
    font-weight: bold;
    color: #fff;
  }
`;