import styled from 'styled-components';

export const MainHeader = styled.div`
  // font import
  @import url('https://fonts.googleapis.com/css?family=Baloo+Paaji');
  @import url('https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap');

  position: fixed;
  top: 10%;
  left: 0;
  max-height: 800px;
  z-index: 200;
  & > ul > li {
    text-align: center;
    writing-mode: vertical-lr;
    transform: rotate(180deg);
    margin: 5px 33px;
    padding: 15px 0px;
    font-size: 20px;
    font-weight: bold;
    line-height: 45px;
    height: 100px;
    position: relative;
    overflow: hidden;
    color: ${(props) => props.theme.mode.TEXT_COLOR};
    transition: all 600ms cubic-bezier(0.4, 0, 0.2, 1);
    user-select: none;
    cursor: pointer;
    &:after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 43%;
      z-index: -10;
      width: 4px;
      height: 100%;
      padding: 1px;
      background-color: #00b0f0;
      transform: scaleY(0) translate(-50%, 2px);
      transition: transform 400ms cubic-bezier(0.4, 0, 0.2, 1);
      transform-origin: bottom;
    }
    &.active::after,
    &:active::after,
    &:focus::after,
    &:hover::after {
      transform: scaleY(1) translate(-50%, -2px);
      transform-origin: top;
    }
  }
  & img {
    width: 50px;
    height: 50px;
    margin: 33px;
  }
`;

export const NavIconItem = styled.div`
  margin: 33px;
  margin-top: 200px;
  margin-left: 40px;

  cursor: pointer;
  svg {
    fill: ${(props) => props.theme.mode.TEXT_COLOR};
    transition: all 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  svg:hover {
    fill: #0ebeff;
  }
`;

// Mobile

export const MobileNavIconItem = styled.div`
  position: absolute;
  left: 0;
  bottom: 20px;

  cursor: pointer;
  svg {
    fill: ${(props) => props.theme.mode.TEXT_COLOR};
    transition: all 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  svg:hover {
    fill: #0ebeff;
  }
`;

export const MobileNavBtn = styled.div`
  filter: url('#goo');
  z-index: 1024;
  cursor: pointer;
  position: fixed;
  top: 40px;
  right: 10px;
  height: 40px;
  width: 40px;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .bar {
    z-index: 1;
    transform: translate(-50%, -50%);
    &,
    &:before,
    &:after {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 20px;
      height: 2px;
      background-color: #000;
      border-radius: 2px;
      transition: 0.25s ease;
    }
    &:before,
    &:after {
      content: '';
    }
    &:before {
      transform: translate(-50%, -50%) translateY(-6px) rotate(0deg);
    }
    &:after {
      transform: translate(-50%, -50%) translateY(6px) rotate(0deg);
    }
  }
  &.close {
    .bar {
      background-color: rgba(0, 0, 0, 0);
      &:before {
        transform: translate(-50%, -50%) translateY(0px) rotate(45deg);
      }
      &:after {
        transform: translate(-50%, -50%) translateY(0px) rotate(-45deg);
      }
    }
  }
`;
export const MobileMainHeader = styled.div<{ mobileBtn: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  opacity: 1;
  background-color: ${(props) => props.theme.mode.MAINPOINT_COLOR};
  transition: all 600ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate3d(0, -100%, 0);
  transform: ${(props) => (props.mobileBtn ? 'translateZ(0)' : 'translateZ(1)')};
  > div {
    > img {
      width: 50px;
      height: 50px;
      margin: 25px;
    }
  }
  > .nav_box {
    position: absolute;
    left: 20px;
    bottom: 0;
    display: flex;
  }
  > ul {
    display: flex;
    justify-content: center;
    flex-direction: column;
    > li {
      display: block;
      text-align: center;
      margin: 25px;
      font-size: 20px;
      font-weight: bold;
      line-height: 45px;
      position: relative;
      overflow: hidden;
      color: ${(props) => props.theme.mode.TEXT_COLOR};
      transition: all 600ms cubic-bezier(0.4, 0, 0.2, 1);
      user-select: none;
      cursor: pointer;
      &:after {
        content: '';
        position: absolute;
        top: 50%;
        bottom: 0;
        left: 0;
        z-index: -10;
        height: 4px;
        width: 100%;
        padding: 1px;
        background-color: #00b0f0;
        transform: scaleX(0);
        transition: transform 400ms cubic-bezier(0.4, 0, 0.2, 1);
        transform-origin: right;
      }
      &.active::after,
      &:active::after,
      &:focus::after,
      &:hover::after {
        transform: scaleX(1);
        transform-origin: left;
      }
    }
  }
`;
