import styled from 'styled-components';

export const WrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 30px 30px;
  flex-grow: 1;
  overflow: auto;
  > h1 {
    font-size: 30px;
    color: #fff;
    font-weight: 700;
    padding-top: 50px;
    padding-bottom: 20px;
    position: sticky;
    top: 0;
    left: 0;
    background: linear-gradient(to bottom, #1f1d2b 0%, #1f1d2b 78%, rgba(31, 29, 43, 0) 100%);
    z-index: 11;
  }
  > h2 {
    font-size: 24px;
    font-weight: 500;
    color: #fff;
    margin: 30px 0 20px;
  }
  > .MainCard {
    display: grid;
    width: 100%;
    height: 50%;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
  > .SubCard {
    width: 100%;
    height: 50%;
  }
  .swiper-container {
    width: 100%;
    padding-bottom: 50px;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 200px;
    height: 300px;
  }
`;
