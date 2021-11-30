import styled from 'styled-components';

export const FullVideo = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: 100%;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: none;
    pointer-events: none;
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
    width: 60rem;
    height:60rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: url('/보라미디어-로고-벡터.png') no-repeat 50% / 70% rgba(255, 255, 255, 0);
    color: #673895;
    box-shadow: inset 0 0 0 1px #673895;
    border-radius: 50%;
    background-color: #222;
    opacity: 0.2;
    &::before,
    &::after {
      display: inline-block;
      position: absolute;
      top: 0;
      color: #673895;
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
  top: 33%;
  width: 100%;
  > ul {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-content: center;
    width: 100vw;
  }
  > ul > li {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 2.5rem;
    text-decoration: none;
    font-size: 3rem;
    cursor: pointer;
    &.active,
    &:hover {
      animation-name: wobble-horizontal;
      animation-duration: 1s;
      animation-timing-function: ease-in-out;
      animation-iteration-count: 1;
      a {
        background: #d45ad8;
      box-shadow: 0 4px 5px 0 rgba(204, 76, 193, 0.75);
        color: #fff;
      }
    }
    a {
  font-family: 'Varela Round', sans-serif;
      width: 35rem;
      font-size: 3rem;
      color: #fff;
      font-weight: bold;
      cursor: pointer;
      height: 7rem;
    background-image: linear-gradient(to right, #944d94, #78357e, #652b76, #76436b);
    box-shadow: 0 4px 15px 0 rgba(45, 54, 65, 0.75);
      border-radius: 15px;
      /* border-left: 10px solid rgba(116, 79, 168, 0.75);  
      border-right: 10px solid rgba(116, 79, 168, 0.75); */
      line-height: 7rem;
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
