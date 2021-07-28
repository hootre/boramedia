import styled from 'styled-components';

export const MainSideMenu = styled.div`
  height: max-content;
  position: relative;
  top: 45%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  transition-duration: 0.2s;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 3rem;
  font-family: 'ONE-Mobile-Title';
  /* box-shadow: 10px 0 0 #d45ad8; */
  > .logo {
    height: 30rem;
    img {
      width: 20rem;
      height: 20rem;
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
      width: 15rem;
      font-size: 2rem;
      color: #000;
      cursor: pointer;
      height: 55px;
      /* border-left: 10px solid rgba(116, 79, 168, 0.75);
      border-right: 10px solid rgba(116, 79, 168, 0.75); */
      line-height: 55px;
      background-color: rgba(255, 255, 255, 0.5);
      text-align: center;
      background-size: 300% 100%;
      moz-transition: all 0.4s ease-in-out;
      -o-transition: all 0.4s ease-in-out;
      -webkit-transition: all 0.4s ease-in-out;
      transition: all 0.4s ease-in-out;
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
