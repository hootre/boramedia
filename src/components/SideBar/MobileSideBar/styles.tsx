import styled from 'styled-components';

export const MobileMenu = styled.div`
  z-index: 90;
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: #ffffff;
  width: 98px;
  height: 98px;
  transition: all 1s cubic-bezier(0.5, -0.75, 0.05, 1);
  border-bottom-right-radius: 100%;
  //overflow:hidden;
  .menu {
    z-index: 100;
    background-color: #ffffff;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100px;
    height: 100px;
    border-bottom-right-radius: 200px;
    cursor: pointer;
    transition: all 1s cubic-bezier(0.5, -0.75, 0.05, 1), background-color 1s ease;
    .icon {
      position: absolute;
      width: 25px;
      height: 25px;
      top: 50%;
      left: 50%;
      transform: translate(-100%, -100%);
      &:before,
      &:after {
        content: '';
        transform: rotate(0deg);
        transition: top 0.5s ease 0.5s, transform 0.5s ease, background-color 0.75s ease 0.25s;
      }
      .bar,
      &:before,
      &:after {
        position: absolute;
        height: 5px;
        left: 0px;
        right: 0px;
        border-radius: 5px;
        background-color: #21264b;
      }
      .bar {
        transition: opacity 0s linear 0.5s, background-color 0.75s ease 0.25s;
        opacity: 1;
        top: 10px;
      }
      &:before {
        top: 0px;
      }
      &:after {
        top: initial;
        top: 20px;
      }
    }
  }
  .icons {
    z-index: 98;
    position: absolute;
    top: 0px;
    left: 0px;
    > * {
      position: absolute;
      font-size: 40px;
      color: #21264b;
      transition: 0.3s cubic-bezier(0.5, -0.25, 0.05, 1);
    }
    .fa-user {
      top: 35px;
      left: 0px;
      transition-delay: 0.2s;
    }
    .fa-calendar-o {
      top: 0px;
      left: 0px;
      color: #fff;
      transition-delay: 0.1s;
    }
    .fa-tachometer {
      top: 0px;
      left: 35px;
    }
  }
  .section {
    //Overview of the arc: https://codepen.io/k-ya/pen/qrgZpx
    z-index: 96;
    position: absolute;
    top: 0px;
    left: 0px;
    height: 0px;
    width: 0px;
    transform-origin: 100% 100%;
    transform: rotate(135deg);
    .cover1 {
      transform-origin: 100% 100%;
      &,
      .cover2,
      .cover2 .content {
        position: absolute;
        width: 600px;
        height: 600px;
      }
      &,
      .cover2 {
        top: 50%;
        left: 50%;
        transform: translate(-100%, -100%) rotate(4deg);
        overflow: hidden;
        pointer-events: none;
        transition: transform 0.5s ease-in;
      }
      .cover2 {
        transform: translate(50%, -50%) rotate(-8deg);
        transform-origin: 0% 100%;
        .content {
          width: 150px;
          height: 150px;
          border-radius: 100%;
          background-color: #ee1b59;
          top: 100%;
          left: 0%;
          transform: translate(-50%, -50%);
          transition: background-color 0s, width 1.5s cubic-bezier(0.5, -0.5, 0.05, 1) 0s,
            height 1.5s cubic-bezier(0.5, -0.5, 0.05, 1) 0s;
          pointer-events: auto;
        }
      }
    }
  }
  .section-static {
    z-index: 94;
    width: 100px;
    height: 100px;
    position: absolute;
    top: 0px;
    left: 0px;
    transform-origin: 0% 0%;
    transition: width 1s cubic-bezier(0.5, -0.75, 0.05, 1),
      height 1s cubic-bezier(0.5, -0.75, 0.05, 1);
    &:hover {
      background-color: #eaeaea;
    }
    &.top {
      transform: rotate(-45deg);
      border-bottom-right-radius: 400px;
    }
    &.bottom {
      transform: rotate(45deg);
      border-bottom-right-radius: 400px;
    }
  }
  &.close {
    width: 300px;
    height: 300px;
    transition: all 1.25s cubic-bezier(0.5, 0, 0.05, 1.75);
    .menu {
      width: 150px;
      height: 150px;
      transition: all 1s cubic-bezier(0.5, 0, 0.05, 1.75), background-color 1s ease;
      background-color: #21264b;
      .icon {
        .bar,
        &:before,
        &:after {
          background-color: #ffffff;
        }
        .bar {
          opacity: 0;
        }
        &:before,
        &:after {
          transition: top 0.5s linear, transform 0.5s ease 0.5s, background-color 0.75s ease 0.25s;
        }
        &:before {
          top: 10px;
          transform: rotate(-45deg);
        }
        &:after {
          top: 10px;
          transform: rotate(45deg);
        }
      }
    }
    .icons {
      position: absolute;
      top: 0px;
      left: 0px;
      > * {
        position: absolute;
        font-size: 40px;
        color: #21264b;
        transition: 0.3s cubic-bezier(0.5, 0, 0.05, 1.75) 0.7s;
        pointer-events: none;
      }
      .fa-user {
        top: 35px;
        left: 200px;
      }
      .fa-calendar-o {
        top: 141px;
        left: 141px;
        color: #fff;
        transition-delay: 0.65s;
      }
      .fa-tachometer {
        top: 200px;
        left: 35px;
        transition-delay: 0.8s;
      }
    }
    .section {
      .cover1 {
        transform-origin: 100% 100%;
        &,
        .cover2,
        .cover2 .content {
          position: absolute;
          width: 600px;
          height: 600px;
        }
        &,
        .cover2 {
          top: 50%;
          left: 50%;
          transform: translate(-100%, -100%) rotate(16deg);
          overflow: hidden;
          transition: transform 0.5s ease-in 0.5s;
        }
        .cover2 {
          transform: translate(50%, -50%) rotate(-32deg);
          transform-origin: 0% 100%;
          .content {
            border-radius: 100%;
            background-color: #ee1b59;
            top: 100%;
            left: 0%;
            transform: translate(-50%, -50%);
            transition: background-color 0s, width 1.1s cubic-bezier(0.5, 0, 0.05, 1.75) 0.25s,
              height 1.1s cubic-bezier(0.5, 0, 0.05, 2) 0.25s;
            &:hover {
              background-color: #dd1350;
            }
          }
        }
      }
    }
    .section-static {
      width: 300px;
      height: 300px;
      transition: width 1.25s cubic-bezier(0.5, 0, 0.05, 2),
        height 1.25s cubic-bezier(0.5, 0, 0.05, 2);
    }
  }
`;
