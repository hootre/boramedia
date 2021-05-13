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
        transform: scale(1.3);
      }
      .author {
        bottom: -65px;
        transform: scale(0.7);
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
      max-width: 50rem;
      width: 100%;
      height: auto;
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
    padding: 12px 20px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 280px;
    height: 30px;
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
