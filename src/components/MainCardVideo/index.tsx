import { useCallback, useState, VFC } from 'react';
import { Author, MainCardBox } from './styles';
import ReactPlayer from 'react-player';
import Link from 'next/link';
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
      videoId: String;
    };
  };
}
const MainCardVideo: VFC<Props> = ({ CardData }) => {
  return (
    <Link href={`view/${CardData.resourceId.videoId}`}>
      <MainCardBox>
        <div className="blackBox"></div>
        <img src={CardData.thumbnails.maxres.url} alt="thumbnails" />

        <div className="title">{CardData.title}</div>
        <Author className="main">
          <div className="img">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
            <img src="https://yt3.ggpht.com/ytc/AAUvwngS5-09zaSrCJLnXd-neDFYwdJACaShRyp9ubzcNA=s88-c-k-c0x00ffffff-no-rj"></img>
          </div>
          <div className="detail">
            <div className="name">{CardData.channelTitle}</div>
            <div className="info">{CardData.publishedAt}</div>
          </div>
        </Author>
      </MainCardBox>
    </Link>
  );
};

export default MainCardVideo;
