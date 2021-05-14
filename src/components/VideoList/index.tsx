import CardListItem from '@components/CardListItem';
import React, { VFC } from 'react';
import { VideoListBox } from './styles';
interface Props {
  titleName: string;
  list: [];
}
const VideoList: VFC<Props> = ({ titleName, list }) => {
  return (
    <VideoListBox>
      <div className="title">{titleName} Videos</div>
      {list &&
        list.map((item: any, index: number) => {
          return <CardListItem CardData={item} />;
        })}
    </VideoListBox>
  );
};

export default VideoList;
