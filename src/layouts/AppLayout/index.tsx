import GlobalStyles from '@components/GlobalStyles';
import SideBar from '@components/SideBar';
import MobileSideBar from '@components/SideBar/MobileSideBar';
import { PC, Mobile } from '@utils/MediaQuery';
import React, { FC } from 'react';
import styled from 'styled-components';

export const MainContainer = styled.div`
  background-color: rgb(0 0 0 / 80%);
  height: 100%;
  display: flex;
  overflow: hidden;
  width: 100%;
  font-size: 15px;
  font-weight: 500;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
  .BackImg {
    position: absolute;
    top: -80%;
    left: -90%;
    width: 159%;
    filter: blur(5px);
    opacity: 30%;
  }
  .bottomText {
    position: absolute;
    bottom: 3%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    h2 {
      padding: 0 5rem;
      color: #fff;
    }
  }
`;

const AppLayout: FC<{}> = ({ children }) => {
  return (
    <>
      <PC>
        <MainContainer>
          <img src="/보라미디어-로고-벡터.png" alt="Logo" className="BackImg" />
          <SideBar />
          {children}
          <GlobalStyles />
          <div className="bottomText">
            <h2>Phone | 010-2166-1895</h2>
            <h2>Email | artinsky@boramedia.co.kr</h2>
            <h2>©2018 by boramedia</h2>
          </div>
        </MainContainer>
      </PC>
      <Mobile>
        <MainContainer>
          <MobileSideBar />
          {children}
          <GlobalStyles />
        </MainContainer>
      </Mobile>
    </>
  );
};
export default AppLayout;
