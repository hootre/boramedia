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
  border-radius: 20px;
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
    top: -60%;
    left: -70%;
    width: 119%;
    filter: blur(5px);
    opacity: 30%;
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
