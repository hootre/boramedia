import styled from 'styled-components';

export const MobileMenu = styled.div`
  color: #fff;
  width: 100%;
  height: 100%;
  position: absolute;
  .header {
    overflow: hidden;
    padding-top: 15px;
    position: fixed;
    width: 100%;
    display: flex;
    padding: 15px;
    background-color: rgba(0 0 0 / 80%);
    z-index: 3;
  }

  .header .logo {
    width: 170px;
    height: 25px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .header > .title {
    font-size: 16px;
    line-height: 30px;
    margin-left: 15px;
  }
  .header .ion-ios-navicon > i {
    height: 1px;
    width: 20px;
    margin-top: 5px;
    background: #fff;
    position: relative;
    display: inline-block;
  }

  .header .ion-ios-navicon > i:after,
  .header .ion-ios-navicon > i:before {
    content: '';
    width: inherit;
    height: inherit;
    position: absolute;
    background: inherit;
  }
  .header .ion-ios-navicon > i:before {
    bottom: 12px;
  }

  .header .ion-ios-navicon > i:after {
    bottom: 6px;
  }
  .sidebar .sidebar-content,
  .sidebar .sidebar-overlay {
    top: 0;
    left: 0;
    bottom: 0;
    position: absolute;
    transition: all 0.3s ease-in-out 0s;
  }

  .sidebar .sidebar-overlay {
    right: 0;
    opacity: 0;
    width: 100%;
    z-index: 999;
    transform: scale(0);
    background: rgba(0, 0, 0, 0.4);
  }

  .sidebar .sidebar-content {
    width: 80%;
    color: #333;
    padding: 15px;
    z-index: 9999;
    background: #fff;
    transform: translateX(-100%);
    .sideBottomText {
      position: absolute;
      bottom: 3%;
      left: 55%;
      width: 100%;
      transform: translateX(-50%);
      h2 {
        padding: 1rem 0;
        display: block;
        color: #000;
      }
    }
  }

  .sidebar.active .sidebar-content {
    transform: translateX(0);
  }

  .sidebar.active .sidebar-overlay {
    opacity: 1;
    transform: scale(1);
  }

  .sidebar .sidebar-content .top-head .name {
    font-size: 28px;
    font-weight: 400;
    margin-bottom: 5px;
  }

  .sidebar .sidebar-content .top-head .email {
    font-size: 13px;
    margin-bottom: 50px;
  }

  .sidebar .sidebar-content .nav-left li {
    a {
      color: #333;
      display: block;
      font-size: 16px;
      padding: 10px 0;
      line-height: 24px;
      vertical-align: top;
      text-decoration: none;
    }

    &.active a {
      color: #000;
      font-weight: bold;
    }
  }
`;
