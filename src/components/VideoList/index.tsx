import CardListItem from '@components/CardListItem';
import React, { memo, VFC } from 'react';
import { VideoListBox } from './styles';
interface Props {
  titleName: string;
  list: [];
}
const VideoList: VFC<Props> = memo(({ titleName, list }) => {
  return (
    <VideoListBox>
      <div className="title">{titleName} Videos</div>
      {list &&
        list.map((item: any, index: number) => {
          return <CardListItem key={item.id} CardData={item} />;
        })}
    </VideoListBox>
  );
});

export default VideoList;
