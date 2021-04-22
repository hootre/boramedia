import styled from 'styled-components';

export const MainCardBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-radius: 20px;
  height: 36rem;
  align-self: stretch;
  overflow: hidden;
  position: relative;
  transition: background 0.3s;
  background-repeat: no-repeat;
  cursor: pointer;
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

    transition: 0.4s;
  }
  .title {
    font-size: 25px;
    font-weight: 600;
    max-width: 600px;
    max-height: 50px;
    overflow: hidden;
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
    font-size: 12px;
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
      width: 16px;
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
      width: 52px;
      height: 52px;
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
      font-size: 15px;
      color: #fff;
      font-weight: 500;
      margin-bottom: 8px;
    }
    .info {
      font-size: 13px;
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
