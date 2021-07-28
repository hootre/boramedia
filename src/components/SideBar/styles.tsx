import styled from 'styled-components';

export const MainSideMenu = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  transition-duration: 0.2s;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 3rem;
  /* box-shadow: 10px 0 0 #d45ad8; */
  > .logo {
    height: 40rem;
    img {
      width: 18rem;
      height: 18rem;
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
    }
  }
`;

export const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  /* & + & {
    border-bottom: none;
  } */
  > ul > li {
    display: flex;
    align-items: center;
    padding: 1rem 7rem;
    text-decoration: none;
    font-size: 2rem;
    cursor: pointer;
    &:hover {
      animation-name: wobble-horizontal;
      animation-duration: 1s;
      animation-timing-function: ease-in-out;
      animation-iteration-count: 1;
    }
    & + li {
      margin-top: 2.6rem;
    }
    a {
      width: 20rem;
      font-size: 16px;
      font-weight: 600;
      color: #fff;
      cursor: pointer;
      height: 55px;
      line-height: 55px;
      text-align: center;
      border: none;
      background-size: 300% 100%;

      border-radius: 50px;
      moz-transition: all 0.4s ease-in-out;
      -o-transition: all 0.4s ease-in-out;
      -webkit-transition: all 0.4s ease-in-out;
      transition: all 0.4s ease-in-out;

      background-image: linear-gradient(to right, #667eea, #764ba2, #6b8dd6, #8e37d7);
      box-shadow: 0 4px 15px 0 rgba(116, 79, 168, 0.75);
    }

    a:hover {
      background-position: 100% 0;
      moz-transition: all 0.4s ease-in-out;
      -o-transition: all 0.4s ease-in-out;
      -webkit-transition: all 0.4s ease-in-out;
      transition: all 0.4s ease-in-out;
    }
  }
  @keyframes wobble-horizontal {
    16.65% {
      transform: translateX(8px);
    }

    33.3% {
      transform: translateX(-6px);
    }

    49.95% {
      transform: translateX(4px);
    }

    66.6% {
      transform: translateX(-2px);
    }

    83.25% {
      transform: translateX(1px);
    }

    100% {
      transform: translateX(0);
    }
  }
`;
