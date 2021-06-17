import styled from 'styled-components';

export const MainSideMenu = styled.div`
  height: 100%;
  padding: 7rem 4rem;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  transition-duration: 0.2s;
  overflow-y: auto;
  overflow-x: hidden;
  > .logo {
    position: relative;
    top: 0;
    padding-left: 6rem;
    img {
      width: 10rem;
      height: 10rem;
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
    font-size: 1.5rem;
    letter-spacing: 0.07em;
    margin-bottom: 2.4rem;
  }
  > ul > li {
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 2rem;
    cursor: pointer;
    & + li {
      margin-top: 2.6rem;
    }
    &.active {
      color: #fff;
      font-weight: 600;
    }
    > svg {
      width: 3rem;
      padding: 0.8rem;
      border-radius: 10px;
      background-color: #353340;
      flex-shrink: 0;
      margin-right: 16px;
    }
    a {
      font-size: 1.7rem;
    }
  }
`;
