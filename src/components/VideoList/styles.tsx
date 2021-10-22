import styled from 'styled-components';

export const VideoListBox = styled.div`
  margin-left: 3rem;
  padding-right: 3rem;
  width: 30%;
  overflow-y: scroll;
  max-height: 800px;
  cursor: pointer;

  @media (max-width: 1200px) {
    margin-left: 0rem;
    padding-right: 0rem;
    width: 100%;
    height: 100%;
    margin-left: 0;
    max-height: 600px;
    overflow-y: scroll;
    ::-webkit-scrollbar {
      width: 0px;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: rgb(21 20 26 / 100%);
      border-radius: 10px;
    }
  }
`;
