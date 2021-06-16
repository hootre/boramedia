import styled from 'styled-components';
import { PC, Tablet, Mobile } from '@utils/MediaQuery';
interface DetailText {
  viewMoreButton: boolean;
}

const VideoDetailBox = styled.div`
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
const VideoDetailText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 30px;
  border-bottom: 1px solid #888;
  width: 100%;
  position: relative;
  .title {
    font-size: 30px;
    color: #fff;
    line-height: 1.4em;
    margin: 16px 0 20px;
  }
  .subtitle {
    font-size: 14px;
    line-height: 1.5em;
    margin-bottom: 30px;
    display: ${(props: DetailText) => (props.viewMoreButton ? 'block' : '-webkit-box')};
    -webkit-line-clamp: 2;
    overflow: hidden;
    transition: all 0.2s ease;
    -webkit-box-orient: vertical;
  }

  .viewMoreBtn {
    color: #888;
    background: #fff;
    position: absolute;
    z-index: 2;
    font-weight: bold;
    cursor: pointer;
    bottom: -10px;
    padding: 2px;
    border: 4px solid #f2f2f2;
    border-radius: 2em;
    left: 50%;
    transform: translateX(-50%);
  }
`;
const VideoList = styled.div`
  margin-left: 30px;
  margin-top: 70px;
  overflow: auto;

  .title {
    color: #fff;
    font-size: 18px;
  }
`;

export { VideoDetailBox, VideoDetailText, VideoList };
