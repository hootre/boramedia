import { Author } from '@components/MainCardVideo/styles';
import VideoList from '@components/VideoList';
import React, { useCallback, useState, VFC } from 'react';
import { VideoDetailBox, VideoDetailText } from './styles';

import { Tablet } from '@utils/MediaQuery';
interface Props {
  titleName: string;
  data_detail: {
    snippet: {
      thumbnails: {
        maxres: {
          url: string;
        };
      };
      title: string;
      channelTitle: string;
      publishedAt: string;
      description: string;
    };
    id: string;
  };
  list: [];
}
const VideoDetail: VFC<Props> = ({ titleName, list, data_detail }) => {
  const [viewMoreButton, setViewMoreButton] = useState(false);
  const onClickViewMoreButton = useCallback(() => {
    setViewMoreButton((prev) => !prev);
  }, []);
  return (
    <VideoDetailBox>
      <div className="video_box">
        <div className="video">
          <iframe
            src={`https://www.youtube.com/embed/${data_detail.id}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <VideoDetailText viewMoreButton={viewMoreButton}>
          <div className="author">
            <Author>
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
                <div className="name">{data_detail.snippet.channelTitle}</div>
                <div className="info">{data_detail.snippet.publishedAt.substring(0, 10)}</div>
              </div>
            </Author>
          </div>
          <div className="title">{data_detail.snippet.title}</div>
          <div className="subtitle">{data_detail.snippet.description}</div>

          <div className="viewMoreBtn" onClick={onClickViewMoreButton}>
            {viewMoreButton ? '접기' : '더 보기'}
          </div>
        </VideoDetailText>
      </div>
      <VideoList titleName={titleName} list={list} />
      <Tablet></Tablet>
    </VideoDetailBox>
  );
};

export default React.memo(VideoDetail);
