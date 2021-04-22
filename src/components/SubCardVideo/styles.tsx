import styled from 'styled-components';

export const SubCardBox = styled.div`
  position: relative;
  background-color: #252936;
  border-radius: 20px;
  overflow: hidden;
  transition: 0.4s;
  margin: 10px;
  &:hover {
    .wrapper {
      > img {
        transform: scale(1.6);
        transform-origin: center;
      }
      .author {
        bottom: -65px;
        transform: scale(0.6);
        right: -3px;
        z-index: 10;
      }
    }
    .maker {
      opacity: 0;
    }
  }

  .time {
    position: absolute;
    background: rgba(21, 13, 13, 0.44);
    color: rgba(255, 255, 255, 0.85);
    padding: 3px 8px;
    font-size: 12px;
    border-radius: 6px;
    top: 10px;
    z-index: 1;
    right: 8px;
  }
  .wrapper {
    position: relative;
    > img {
      max-width: 100%;
      width: 36.5rem;
      height: 20rem;
      border-radius: 20px 20px 0 0;
      display: block;
      cursor: pointer;
      transition: 0.4s;
      object-fit: cover;
    }
    .author {
      position: absolute;
      right: 10px;
      transition: 0.4s;
      bottom: -25px;
      svg {
        background-color: #0aa0f7;
        color: #fff;
        border-color: var(--video-bg);
      }
    }
  }
  .maker {
    transition: 0.3s;
    padding: 20px 20px 0px;
    display: inline-flex;
    position: relative;
    &:after {
      content: '';
      background-color: #22b07d;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      position: absolute;
      top: 26px;
      right: 5px;
    }
  }
  .name {
    color: #fff;
    font-size: 16px;
    line-height: 1.4em;
    padding: 12px 20px 0;
    overflow: hidden;
    background-color: #252936;
    z-index: 9;
    position: relative;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .view {
    font-size: 12px;
    padding: 12px 20px 20px;
    background-color: #252936;
    position: relative;
  }
`;
