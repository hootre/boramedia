import styled from 'styled-components';

export const FullVideo = styled.section`
  position: absolute;
  top: 50%;
  left: 60%;
  transform: translate(-50%, -50%);
  width: 70%;
  height: 70%;
  border: 1rem solid #8e37d7;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  cursor: none;
`;
