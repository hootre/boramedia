import styled from 'styled-components';

export const VideoListBox = styled.div`
  margin-left: 3rem;
  margin-top: 16rem;
  padding-right: 3rem;
  width: 30%;
  overflow-y: scroll;
  overflow-x: hidden;
  cursor: pointer;

  .title {
    color: #222;
    font-size: 18px;
  }
  @media (max-width: 1200px) {
    width: 100%;
    margin-left: 0;
    overflow: visible;
  }
`;
