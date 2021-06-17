import styled from 'styled-components';

export const VideoListBox = styled.div`
  margin-left: 30px;
  margin-top: 70px;
  width: 30%;
  overflow-y: scroll;
  overflow-x: hidden;
  cursor: pointer;

  .title {
    color: #fff;
    font-size: 18px;
  }
  @media (max-width: 1200px) {
    width: 100%;
    margin-left: 0;
    overflow: visible;
  }
`;
