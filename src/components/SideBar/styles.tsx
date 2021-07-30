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
`;
export const LogoBox = styled.div`
  height: 30rem;
  a {
    display: inline-block;
    width: 20rem;
    height: 20rem;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: url('/보라미디어 로고 PNG@4x.png') no-repeat 50% / 70% rgba(255, 255, 2555, 0);
    color: #7a44b1;
    box-shadow: inset 0 0 0 1px #442a5e;
    border-radius: 50%;
    &::before,
    &::after {
      display: inline-block;
      position: absolute;
      top: 0;
      bottom: 0;
      z-index: -1;
      margin: -5%;
      left: 0;
      right: 0;
      content: '';
      box-shadow: inset 0 0 0 2px;
      box-sizing: border-box;
      border-radius: 50%;
    }
    &::after {
      clip: rect(0px, 22rem, 0.2rem, 0px);
      animation: clipMeAfter 8s linear infinite;
    }
    &::before {
      clip: rect(21.8rem, 22rem, 22rem, 0px);
      animation: clipMeBefore 8s linear infinite;
    }
  }
  @keyframes clipMeAfter {
    0% {
      clip: rect(0px, 22rem, 0.2rem, 0px);
    }
    25% {
      clip: rect(0px, 0.2rem, 22rem, 0px);
    }
    50% {
      clip: rect(21.8rem, 22rem, 22rem, 0px);
    }
    75% {
      clip: rect(0px, 22rem, 22rem, 21.8rem);
    }
    100% {
      clip: rect(0px, 22rem, 0.2rem, 0px);
    }
  }
  @keyframes clipMeBefore {
    0% {
      clip: rect(21.8rem, 22rem, 22rem, 0px);
    }
    25% {
      clip: rect(0px, 22rem, 22rem, 21.8rem);
    }
    50% {
      clip: rect(0px, 22rem, 0.2rem, 0px);
    }
    75% {
      clip: rect(0px, 0.2rem, 22rem, 0px);
    }
    100% {
      clip: rect(21.8rem, 22rem, 22rem, 0px);
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
    &.active a {
      background: #000;
      color: #fff;
    }
    &:hover {
      animation-name: wobble-horizontal;
      animation-duration: 1s;
      animation-timing-function: ease-in-out;
      animation-iteration-count: 1;
      a {
        background: #000;
        color: #fff;
      }
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
      box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.75);
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
