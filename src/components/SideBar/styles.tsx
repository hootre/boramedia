import styled from 'styled-components';

export const MainSideMenu = styled.div`
  height: 100%;
  width: 20%;
  padding: 70px 40px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  transition-duration: 0.2s;
  overflow-y: auto;
  overflow-x: hidden;
  > .logo {
    position: sticky;
    top: 0;
    padding-left: 60px;
    img {
      width: 100px;
      height: 100px;
    }
  }
`;

export const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid rgb(128 129 145 / 24%);
  padding: 36px 0;
  color: #808191;
  & + & {
    border-bottom: none;
  }
  > h2 {
    color: #808191;
    font-size: 15px;
    letter-spacing: 0.07em;
    margin-bottom: 24px;
  }
  > ul > li {
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 20px;
    cursor: pointer;
    & + li {
      margin-top: 26px;
    }
    &.active {
      color: #fff;
      font-weight: 600;
    }
    > svg {
      width: 30px;
      padding: 8px;
      border-radius: 10px;
      background-color: #353340;
      flex-shrink: 0;
      margin-right: 16px;
    }
    a {
      font-size: 17px;
    }
  }
`;
