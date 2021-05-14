import GlobalStyles from '@components/GlobalStyles';
import SideBar from '@components/SideBar';
import Head from 'next/head';
import React, { FC } from 'react';
import styled from 'styled-components';

export const MainContainer = styled.div`
  background-color: #1f1d2b;
  height: 90%;
  display: flex;
  overflow: hidden;
  width: 80%;
  border-radius: 20px;
  font-size: 15px;
  font-weight: 500;
  box-shadow: 0 20px 50px rgb(0 0 0 / 30%);
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const AppLayout: FC<{}> = ({ children }) => {
  return (
    <>
      <MainContainer>
        <SideBar />
        {children}
        <GlobalStyles />
      </MainContainer>
    </>
  );
};
export default AppLayout;
