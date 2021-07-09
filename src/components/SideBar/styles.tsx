import styled from 'styled-components';

export const MainSideMenu = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  transition-duration: 0.2s;
  overflow-y: auto;
  overflow-x: hidden;
  /* box-shadow: 10px 0 0 #d45ad8; */
  > .logo {
    height: 400px;
    img {
      width: 28rem;
      height: 28rem;
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

export const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid rgb(128 129 145 / 24%);
  color: #fff;
  & + & {
    border-bottom: none;
  }
  > ul > li {
    display: flex;
    align-items: center;
    padding: 1rem 7rem;
    text-decoration: none;
    font-size: 2rem;
    cursor: pointer;
    & + li {
      margin-top: 2.6rem;
    }
    &.active,
    &:hover {
      color: #fff;
      font-weight: 600;
      background: #d45ad8;
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
    }
    a:hover {
      color: #fff;
      font-weight: bold;
    }
    a {
      font-size: 1.7rem;
      height: 3rem;
      line-height: 3rem;
      white-space: normal;
      display: block;
    }
  }
`;
