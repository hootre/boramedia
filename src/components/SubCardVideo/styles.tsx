import styled from 'styled-components';

export const SubCardBox = styled.div`
  position: relative;
  background: #313131;
  border-radius: 20px;
  color: #fff;
  overflow: hidden;
  transition: 0.4s;
  margin: 1rem;
  height: 100%;
  box-shadow: 0 4px 20px 0 rgba(116, 79, 168, 0.75);
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
    font-size: 1.2rem;
    border-radius: 6px;
    top: 10px;
    z-index: 1;
    right: 8px;
  }
  .wrapper {
    position: relative;
    height: 65%;
    > img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: 0.4s;
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
    padding: 1.2rem 1.2rem 0;
    display: inline-flex;
    position: relative;
    font-size: 1.6rem;
    font-weight: bold;
    overflow: hidden;
    height: 3.5rem;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    &:after {
      content: '';
      background-color: #22b07d;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      position: absolute;
      top: 1.9rem;
      right: 0rem;
    }
  }
  .name {
    font-size: 1.6rem;
    padding: 1.2rem 1.2rem 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 28rem;
    height: 3.5rem;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .view {
    font-size: 1.5rem;
    padding: 0 1.2rem 0;
    position: relative;
  }
  @media (max-width: 1200px) {
    .maker,
    .name,
    .view {
      font-size: 2.2rem;
    }
  }
`;
