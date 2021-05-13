import { Author } from '@components/MainCardVideo/styles';
import Link from 'next/link';
import { VFC } from 'react';
import { SubCardBox } from './styles';

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
  titleName: string;
}
const SubCardVideo: VFC<Props> = ({ CardData, titleName }) => {
  return (
    <Link href={`${titleName}/${CardData.resourceId.videoId}`}>
      <SubCardBox>
        <div className="time">8 min</div>
        <div className="wrapper">
          <img src={CardData.thumbnails.maxres.url} alt="thumbnails" />
          <Author className="author">
            <div className="img">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-check"
              >
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
              <img src="https://yt3.ggpht.com/ytc/AAUvwngS5-09zaSrCJLnXd-neDFYwdJACaShRyp9ubzcNA=s88-c-k-c0x00ffffff-no-rj"></img>
            </div>
          </Author>
        </div>
        <div className="maker">{CardData.channelTitle}</div>
        <div className="name">{CardData.title}</div>
        <div className="view">{CardData.publishedAt.substring(0, 10)}</div>
      </SubCardBox>
    </Link>
  );
};

export default SubCardVideo;
