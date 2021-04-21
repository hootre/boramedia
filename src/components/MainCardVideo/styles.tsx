import styled from 'styled-components';

export const MainCardBox = styled.div`
  background-image: url('https://assets.codepen.io/3364143/skate-removebg-preview.png');
  background-size: 80%;
  background-position-x: 150px;
  background-color: #31abbd;
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-radius: 20px;
  align-self: stretch;
  overflow: hidden;
  position: relative;
  transition: background 0.3s;
  background-repeat: no-repeat;
  .title {
    font-size: 25px;
    max-width: 12ch;
    font-weight: 600;
    letter-spacing: 1px;
    color: #fff;
    margin-bottom: 30px;
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
