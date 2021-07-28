import styled from 'styled-components';

export const WrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 3rem 3rem 0;
  flex-grow: 1;
  overflow: auto;
  /* border: 1rem solid #d45ad8; */
  .contentContainer {
    position: relative;
    top: 45%;
    transform: translateY(-50%);
  }
  h1 {
    font-size: 3rem;
    color: #fff;
    font-weight: 700;
    padding-top: 5rem;
    padding-bottom: 2rem;
    top: 0;
    left: 0;
    z-index: 11;
  }
  h2 {
    font-size: 24px;
    font-weight: bold;
    color: #fff;
    margin: 3rem 0 2rem;
  }
  .MainCard {
    display: grid;
    width: 100%;
    height: 50%;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
  }
  .SubCard {
    width: 100%;
    height: 50%;
  }
  .swiper-container {
    width: 100%;
    padding-bottom: 5rem;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 20rem;
    height: 30rem;
  }
`;
