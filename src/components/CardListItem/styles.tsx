import styled from 'styled-components';

export const CardListItemBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 26px;
  position: relative;
  img {
    width: 168px;
    height: 94px;
    border-radius: 10px;
    margin-right: 16px;
    transition: all 0.3s;
    &:hover {
      transform: scale(1.1);
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
