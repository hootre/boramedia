import styled from 'styled-components';

export const VideoDetailBox = styled.div`
  display: flex;
  margin-left: 30px;
  width: 100%;
  padding-bottom: 30px;
  .video_box {
    width: 65%;
    margin-top: 70px;
    overflow: auto;
    -o-object-fit: cover;
    object-fit: cover;
    transition: 0.3s;
    .video {
      border-radius: 20px;
      overflow: hidden;
      position: relative;
      padding-bottom: 56.25%;
      height: 0;
      overflow: hidden;
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
  flex-direction: column;
  align-items: flex-start;
  margin-top: 30px;
  width: 100%;
  .title {
    font-size: 30px;
    color: #fff;
    line-height: 1.4em;
    margin: 16px 0 20px;
  }
  .subtitle {
    font-size: 14px;
    line-height: 1.5em;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    overflow: hidden;
    -webkit-box-orient: vertical;
  }
`;
export const VideoList = styled.div`
  margin-left: 30px;
  margin-top: 70px;
  overflow: auto;

  .title {
    color: #fff;
    font-size: 18px;
  }
`;
