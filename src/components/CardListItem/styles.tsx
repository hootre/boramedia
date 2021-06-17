import styled from 'styled-components';

export const CardListItemBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 26px;
  position: relative;
  .imgBox {
    position: relative;
    width: 168px;
    height: 94px;
    margin-right: 16px;
    margin-left: 16px;
    img {
      border-radius: 10px;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: 0.3s ease-in-out;
      box-shadow: 0 6px 10px rgba(0, 0, 0, 0.14);
      transform: perspective(100px) translateZ(-5px);
      &:hover {
        transform: perspective(100px) translateZ(0px);
        box-shadow: 0 8px 40px rgba(0, 0, 0, 0.25);
      }
    }
  }

  .content {
    width: 202px;
    height: 72px;
    .name {
      color: #fff;
      font-size: 14px;
      line-height: 1.3em;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      overflow: hidden;
      -webkit-box-orient: vertical;
      transition: 0.3s;
      &:hover {
        font-weight: bold;
      }
    }
    .maker {
      margin: 6px 0;
    }
    .info {
      font-size: 13px;
      > span {
        width: 3px;
        height: 3px;
        display: inline-block;
        vertical-align: middle;
        border-radius: 50%;
        background-color: #fff;
        margin: 0 6px;
      }
    }
    .time {
      position: absolute;
      background: rgba(21, 13, 13, 0.44);
      color: rgba(255, 255, 255, 0.85);
      padding: 3px 8px;
      font-size: 12px;
      border-radius: 6px;
      width: 50px;
      top: 72px;
      z-index: 1;
      right: -6px;
    }
  }
`;
