import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { VFC } from 'react';
import { CardListItemBox } from './styles';
interface Props {
  titleName: string;
  CardData: {
    contentDetails: {
      duration: string;
    };
    snippet: {
      thumbnails: {
        maxres: {
          url: string;
        };
        standard: {
          url: string;
        };
        high: {
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
const CardListItem: VFC<Props> = ({ titleName, CardData }) => {
  const router = useRouter();
  const title = router.pathname.split('/');
  return (
    <Link href={title[2] ? CardData.id : `${titleName}/${CardData.id}`}>
      <CardListItemBox>
        <div className="imgBox">
          <img
            src={
              CardData.snippet?.thumbnails.maxres
                ? CardData.snippet?.thumbnails.maxres.url
                : CardData.snippet?.thumbnails.standard
                ? CardData.snippet?.thumbnails.standard.url
                : CardData.snippet?.thumbnails.high.url
            }
            alt="thumbnails"
          />
        </div>
        <div className="content">
          <div className="name">{CardData.snippet?.title}</div>
          <div className="maker">{CardData.snippet?.channelTitle}</div>
          <div className="info">{CardData.snippet?.publishedAt.substring(0, 10)}</div>
        </div>
      </CardListItemBox>
    </Link>
  );
};

export default CardListItem;
