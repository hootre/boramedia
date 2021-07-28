import styled from 'styled-components';

export const MainCardBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  border-radius: 20px;
  min-height: 25rem;
  height: 100%;
  align-self: stretch;
  overflow: hidden;
  position: relative;
  transition: background 0.3s;
  background-repeat: no-repeat;
  cursor: pointer;
  .time {
    position: absolute;
    background: rgba(21, 13, 13, 0.44);
    color: rgba(255, 255, 255, 0.85);
    padding: 0.3rem 0.8rem;
    font-size: 1.2rem;
    border-radius: 6px;
    top: 1rem;
    height: 2rem;
    z-index: 1;
    right: 8px;
  }
  &:hover {
    > img {
      transform: scale(1.2);
    }
    .blackBox {
      background-color: rgba(21, 13, 13, 0);
    }
  }
  .blackBox {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(21, 13, 13, 0.24);
    z-index: 5;
  }
  > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.4s;
  }
  .title {
    font-size: 2.5rem;
    font-weight: bold;
    max-width: 60rem;
    max-height: 5.5rem;
    letter-spacing: 1px;
    color: #fff;
    z-index: 7;
    position: absolute;
    left: 6%;
    top: 10%;
  }

  .time {
    background: rgba(21, 13, 13, 0.44);
    color: #fff;
    padding: 3px 8px;
    font-size: 1.2rem;
    border-radius: 6px;
    position: absolute;
    right: 20px;
    bottom: 20px;
  }
`;

export const Author = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 10px;
  z-index: 10;
  &.main {
    position: absolute;
    left: 5%;
    bottom: 10%;
  }
  .img {
    position: relative;
    flex-shrink: 0;
    > svg {
      width: 1.6rem;
      padding: 2px;
      background-color: #fff;
      color: #0daabc;
      border-radius: 50%;
      border: 2px solid #0daabc;
      position: absolute;
      bottom: 5px;
      right: 0;
    }
    > img {
      width: 5.2rem;
      height: 5.2rem;
      border: 1px solid rgba(255, 255, 255, 0.75);
      padding: 4px;
      border-radius: 50%;
      -o-object-fit: cover;
      object-fit: cover;
    }
  }
  .detail {
    margin-left: 16px;
    .name {
      font-size: 2rem;
      color: #fff;
      font-weight: bold;
      margin-bottom: 8px;
    }
    .info {
      font-size: 2rem;
      font-weight: 400;
      color: #fff;
    }
    .spot {
      width: 3px;
      height: 3px;
      display: inline-block;
      vertical-align: middle;
      border-radius: 50%;
      background-color: #fff;
      margin: 0 6px;
    }
  }
`;
