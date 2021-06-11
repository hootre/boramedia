import { useCallback, useEffect, useState, VFC } from 'react';
import { Author, MainCardBox } from './styles';
import ReactPlayer from 'react-player';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
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
  titleName: string;
}

const MainCardVideo: VFC<Props> = ({ CardData, titleName }) => {
  return (
    <Link href={`${titleName}/${CardData.id}`}>
      <MainCardBox>
        <div className="time">{CardData.contentDetails.duration.substring(2, 3)} min</div>
        <div className="blackBox"></div>
        <img
          src={
            CardData.snippet.thumbnails.maxres
              ? CardData.snippet.thumbnails.maxres.url
              : CardData.snippet.thumbnails.standard
              ? CardData.snippet.thumbnails.standard.url
              : CardData.snippet.thumbnails.high.url
          }
          alt="thumbnails"
        />

        <div className="title">{CardData.snippet.title}</div>
        <Author className="main">
          <div className="img">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
            <img
              src="https://yt3.ggpht.com/ytc/AAUvwngS5-09zaSrCJLnXd-neDFYwdJACaShRyp9ubzcNA=s88-c-k-c0x00ffffff-no-rj"
              alt="titleImg"
            />
          </div>
          <div className="detail">
            <div className="name">{CardData.snippet.channelTitle}</div>
            <div className="info">{CardData.snippet.publishedAt.substring(0, 10)}</div>
          </div>
        </Author>
      </MainCardBox>
    </Link>
  );
};

export default MainCardVideo;
