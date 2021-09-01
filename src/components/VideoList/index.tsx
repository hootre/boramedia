import CardListItem from '@components/CardListItem';
import React, { memo, VFC } from 'react';
import { VideoListBox } from './styles';
interface Props {
  titleName: string;
  list: [];
}
const VideoList: VFC<Props> = memo(({ titleName, list }) => {
  return (
    <VideoListBox className={titleName}>
      {list &&
        list.map((item: any) => {
          return <CardListItem key={item.id} titleName={titleName} CardData={item} />;
        })}
    </VideoListBox>
  );
});

export default VideoList;
