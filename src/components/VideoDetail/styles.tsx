import styled from 'styled-components';

export const VideoDetailBox = styled.div`
  display: flex;
  margin-left: 30px;
  .video_box {
    width: 65%;
    margin-top: 70px;
    -o-object-fit: cover;
    object-fit: cover;
    transition: 0.3s;
    .video {
      border-radius: 20px;
      overflow: hidden;
      min-height: 414px;
      position: relative;
      iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  }
`;
export const VideoDetailText = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  width: 100%;
  .title {
    font-size: 24px;
    color: #fff;
    line-height: 1.4em;
    margin: 16px 0 20px;
  }
  .subtitle {
    font-size: 14px;
    line-height: 1.5em;
    max-width: 60ch;
  }
`;
export const VideoList = styled.div`
  margin-left: 30px;
  margin-top: 70px;

  .title {
    color: #fff;
    font-size: 18px;
  }
`;
