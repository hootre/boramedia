import styled from 'styled-components';
import { PC, Tablet, Mobile } from '@utils/MediaQuery';
interface DetailText {
  viewMoreButton: boolean;
}
const VideoDetailText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 10px;
  padding-left: 15px;
  border-bottom: 1px solid #888;
  width: 100%;
  position: relative;
  .author {
    > div {
      opacity: 1;
      padding-top: 1rem;
      .name {
        font-size: 3rem;
      }
    }
  }
  .title {
    font-size: 3rem;
    color: #fff;
    margin: 16px 0 20px;
  }
  .subtitle {
    font-size: 1.4rem;
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
    font-size: 1rem;
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
const VideoDetailBox = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 7rem;
  padding-left: 3rem;
  padding-top: 14rem;
  .video_box {
    width: 65%;
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

  @media (max-width: 1200px) {
    overflow: scroll;
    flex-direction: column;
    padding: 100px 30px 30px 30px;
    .video_box {
      width: 100%;
      padding: 0;
      margin: 0;
      overflow: visible;
    }
    .title {
      font-size: 5rem;
    }
    .subtitle {
      font-size: 2.4rem;
    }
  }
`;

export { VideoDetailBox, VideoDetailText };
