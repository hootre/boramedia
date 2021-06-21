import styled from 'styled-components';

export const MobileMenu = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  z-index: 10;
  .circle {
    border-radius: 50%;
    width: 0px;
    height: 0px;
    position: absolute;
    top: 35px;
    left: 36px;
    background: #fff;
    opacity: 1;
    -webkit-transition: all 300ms cubic-bezier(0, 0.995, 0.99, 1);
    -moz-transition: all 300ms cubic-bezier(0, 0.995, 0.99, 1);
    -ms-transition: all 300ms cubic-bezier(0, 0.995, 0.99, 1);
    -o-transition: all 300ms cubic-bezier(0, 0.995, 0.99, 1);
    transition: all 300ms cubic-bezier(0, 0.995, 0.99, 1);
  }
  .circle.expand {
    width: 1200px;
    height: 1200px;
    top: -560px;
    left: -565px;
    -webkit-transition: all 400ms cubic-bezier(0, 0.995, 0.99, 1);
    -moz-transition: all 400ms cubic-bezier(0, 0.995, 0.99, 1);
    -ms-transition: all 400ms cubic-bezier(0, 0.995, 0.99, 1);
    -o-transition: all 400ms cubic-bezier(0, 0.995, 0.99, 1);
    transition: all 400ms cubic-bezier(0, 0.995, 0.99, 1);
  }
  .menu {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
  }
  .menu ul li {
    list-style: none;
    position: absolute;
    top: 50px;
    left: 0;
    opacity: 0;
    width: 320px;
    text-align: center;
    font-size: 0px;
    -webkit-transition: all 70ms cubic-bezier(0, 0.995, 0.99, 1);
    -moz-transition: all 70ms cubic-bezier(0, 0.995, 0.99, 1);
    -ms-transition: all 70ms cubic-bezier(0, 0.995, 0.99, 1);
    -o-transition: all 70ms cubic-bezier(0, 0.995, 0.99, 1);
    transition: all 70ms cubic-bezier(0, 0.995, 0.99, 1);
  }
  .menu ul li a {
    color: #4a89dc;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 3px;
  }
  .menu li.animate {
    font-size: 21px;
    opacity: 1;
    -webkit-transition: all 150ms cubic-bezier(0, 0.995, 0.99, 1);
    -moz-transition: all 150ms cubic-bezier(0, 0.995, 0.99, 1);
    -ms-transition: all 150ms cubic-bezier(0, 0.995, 0.99, 1);
    -o-transition: all 150ms cubic-bezier(0, 0.995, 0.99, 1);
    transition: all 150ms cubic-bezier(0, 0.995, 0.99, 1);
  }
  .menu li.animate:nth-of-type(1) {
    top: 120px;
    transition-delay: 0s;
  }
  .menu li.animate:nth-of-type(2) {
    top: 190px;
    transition-delay: 0.03s;
  }
  .menu li.animate:nth-of-type(3) {
    top: 260px;
    transition-delay: 0.06s;
  }
  .menu li.animate:nth-of-type(4) {
    top: 330px;
    transition-delay: 0.09s;
  }
  .menu li.animate:nth-of-type(5) {
    top: 400px;
    transition-delay: 0.12s;
  }
  .menu li.animate:nth-of-type(6) {
    top: 470px;
    transition-delay: 0.15s;
  }
  .burger {
    height: 30px;
    width: 40px;
    position: absolute;
    top: 11px;
    left: 21px;
    cursor: pointer;
    .x,
    .y,
    .z {
      position: absolute;
      margin: auto;
      top: 0px;
      bottom: 0px;
      background: #fff;
      border-radius: 2px;
      -webkit-transition: all 200ms ease-out;
      -moz-transition: all 200ms ease-out;
      -ms-transition: all 200ms ease-out;
      -o-transition: all 200ms ease-out;
      transition: all 200ms ease-out;
      height: 3px;
      width: 26px;
    }
    .y {
      top: 18px;
    }
    .z {
      top: 37px;
    }
    .collapse {
      top: 20px;
      background: #4a89dc;
      -webkit-transition: all 70ms ease-out;
      -moz-transition: all 70ms ease-out;
      -ms-transition: all 70ms ease-out;
      -o-transition: all 70ms ease-out;
      transition: all 70ms ease-out;
    }
    .rotate30 {
      -ms-transform: rotate(30deg);
      -webkit-transform: rotate(30deg);
      transform: rotate(30deg);
      -webkit-transition: all 50ms ease-out;
      -moz-transition: all 50ms ease-out;
      -ms-transition: all 50ms ease-out;
      -o-transition: all 50ms ease-out;
      transition: all 50ms ease-out;
    }
    .rotate150 {
      -ms-transform: rotate(150deg);
      -webkit-transform: rotate(150deg);
      transform: rotate(150deg);
      -webkit-transition: all 50ms ease-out;
      -moz-transition: all 50ms ease-out;
      -ms-transition: all 50ms ease-out;
      -o-transition: all 50ms ease-out;
      transition: all 50ms ease-out;
    }
    .rotate45 {
      -ms-transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
      -webkit-transition: all 100ms ease-out;
      -moz-transition: all 100ms ease-out;
      -ms-transition: all 100ms ease-out;
      -o-transition: all 100ms ease-out;
      transition: all 100ms ease-out;
    }
    .rotate135 {
      -ms-transform: rotate(135deg);
      -webkit-transform: rotate(135deg);
      transform: rotate(135deg);
      -webkit-transition: all 100ms ease-out;
      -moz-transition: all 100ms ease-out;
      -ms-transition: all 100ms ease-out;
      -o-transition: all 100ms ease-out;
      transition: all 100ms ease-out;
    }
  }
`;
