import styled from 'styled-components';

export const FullVideo = styled.section`
  position: absolute;
  top: 50%;
  left: 55%;
  transform: translate(-50%, -50%);
  width: 70%;
  height: 70%;
  box-shadow: 0 4px 20px 0 rgba(116, 79, 168, 0.75);
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  cursor: none;
  @media all and (max-width: 767px) {
    left: 50%;
  }
`;
export const MobileLogoBox = styled.div`
  height: 30rem;
  a {
    display: inline-block;
    width: 20rem;
    height: 20rem;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: url('/보라미디어-로고-벡터.png') no-repeat 50% / 70% rgba(255, 255, 2555, 0);
    color: #d45ad8;
    box-shadow: inset 0 0 0 1px rgba(212, 90, 216, 0.5);
    &::before,
    &::after {
      display: inline-block;
      position: absolute;
      top: 0;
      color: #d45ad8;
      bottom: 0;
      z-index: -1;
      margin: -5%;
      left: 0;
      right: 0;
      content: '';
      box-shadow: inset 0 0 0 2px;
      box-sizing: border-box;
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
      clip: rect(0px, 22rem, 0.2rem, 0px);
    }
    100% {
      clip: rect(0px, 0.2rem, 22rem, 0px);
    }
  }
`;
export const MobileNavItem = styled.div`
  color: #fff;
  z-index: 1;
  position: absolute;
  top: 60%;
  left: 55%;
  transform: translate(-50%, -50%);
  > ul {
    display: flex;
    flex-wrap: wrap;
    width: 100vw;
  }
  > ul > li {
    display: flex;
    align-items: center;
    padding: 1rem;
    text-decoration: none;
    font-size: 2rem;
    cursor: pointer;
    &.active,
    &:hover {
      animation-name: wobble-horizontal;
      animation-duration: 1s;
      animation-timing-function: ease-in-out;
      animation-iteration-count: 1;
      a {
        background: #d45ad8;
        color: #fff;
      }
    }
    a {
      width: 20rem;
      font-size: 2rem;
      color: #000;
      cursor: pointer;
      height: 5rem;
      box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.75);
      /* border-left: 10px solid rgba(116, 79, 168, 0.75);
      border-right: 10px solid rgba(116, 79, 168, 0.75); */
      line-height: 5rem;
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
