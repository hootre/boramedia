import styled from 'styled-components';

export const SubCardBox = styled.div`
  position: relative;
  border-radius: 20px;
  color: #fff;
  overflow: hidden;
  transition: 0.4s;
  margin: 1rem;
  height: 100%;
  box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.75);
  cursor: pointer;
  > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.4s;
  }
  &:hover {
    .wrapper {
      opacity: 1;
      background: rgba(49, 49, 49, 0.5);
    }

    transform: translateY(-5px);
  }

  .wrapper {
    position: relative;
    height: 50%;
    background: #313131;
    top: 70%;
    opacity: 0;
    transition: all 0.4s ease-in-out;
    .author {
      position: absolute;
      right: 10px;
      transition: 0.4s;
      top: 10%;
      opacity: 1;
      svg {
        background-color: #0aa0f7;
        color: #fff;
        border-color: var(--video-bg);
      }
    }
    .contentBox {
      position: absolute;
      top: 10%;
    }
  }

  .maker {
    transition: 0.3s;
    padding: 1.2rem 2.2rem 0;
    display: inline-flex;
    font-size: 1.6rem;
    font-weight: bold;
    overflow: hidden;
    height: 3.5rem;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    position: relative;
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
    padding: 1.2rem 2.2rem 0;
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
    padding: 0 2.2rem 0;
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
