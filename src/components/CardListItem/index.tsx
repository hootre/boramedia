import Link from 'next/link';
import { VFC } from 'react';
import { CardListItemBox } from './styles';
interface Props {
  CardData: {
    contentDetails: {
      duration: string;
    };
    snippet: {
      thumbnails: {
        maxres: {
          url: string;
        };
      };
      title: string;
      channelTitle: string;
      publishedAt: string;
    };

    id: string;
  };
}
const CardListItem: VFC<Props> = ({ CardData }) => {
  return (
    <Link href={`${CardData.id}`}>
      <CardListItemBox>
        <img src={CardData.snippet.thumbnails.maxres.url} alt="thumbnails" />
        <div className="content">
          <div className="name">{CardData.snippet.title}</div>
          <div className="maker">{CardData.snippet.channelTitle}</div>
          <div className="info">{CardData.snippet.publishedAt.substring(0, 10)}</div>
          <div className="time">{CardData.contentDetails.duration.substring(2, 3)} min</div>
        </div>
      </CardListItemBox>
    </Link>
  );
};

export default CardListItem;
