import styled from 'styled-components';

export const CardListItemBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 26px;
  img {
    width: 100px;
    height: 80px;
    border-radius: 10px;
    -o-object-fit: cover;
    object-fit: cover;
    -o-object-position: right;
    object-position: right;
    margin-right: 16px;
    transition: 0.3s;
  }
  .name {
    color: #fff;
    font-size: 14px;
    line-height: 1.3em;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    overflow: hidden;
    -webkit-box-orient: vertical;
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
`;