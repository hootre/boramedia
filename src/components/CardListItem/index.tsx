import Link from 'next/link';
import { VFC } from 'react';
import { CardListItemBox } from './styles';
interface Props {
  CardData: {
    thumbnails: {
      maxres: {
        url: string;
      };
    };
    title: string;
    channelTitle: string;
    publishedAt: string;
    resourceId: {
      videoId: string;
    };
  };
}
const CardListItem: VFC<Props> = ({ CardData }) => {
  return (
    <Link href={`${CardData.resourceId.videoId}`}>
      <CardListItemBox>
        <img src={CardData.thumbnails.maxres.url} alt="thumbnails" />
        <div className="content">
          <div className="name">{CardData.title}</div>
          <div className="maker">{CardData.channelTitle}</div>
          <div className="info">{CardData.publishedAt}</div>
        </div>
      </CardListItemBox>
    </Link>
  );
};

export default CardListItem;
