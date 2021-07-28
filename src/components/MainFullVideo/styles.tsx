import styled from 'styled-components';

export const FullVideo = styled.section`
  position: absolute;
  top: 50%;
  left: 55%;
  transform: translate(-50%, -50%);
  width: 70%;
  height: 70%;
  box-shadow: 0 4px 20px 0 rgba(116, 79, 168, 0.75);
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  cursor: none;
`;
