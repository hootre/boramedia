import GlobalStyles from '@components/GlobalStyles';
import SideBar from '@components/SideBar';
import React, { FC } from 'react';
import styled from 'styled-components';

export const MainContainer = styled.div`
  background-color: #1f1d2b;
  max-height: 900px;
  height: 95vh;
  display: flex;
  overflow: hidden;
  width: 100%;
  border-radius: 20px;
  font-size: 15px;
  font-weight: 500;
  box-shadow: 0 20px 50px rgb(0 0 0 / 30%);
  position: relative;
`;

const AppLayout: FC<{}> = ({ children }) => {
  return (
    <MainContainer>
      <SideBar />
      {children}
      <GlobalStyles />
    </MainContainer>
  );
};
export default AppLayout;
