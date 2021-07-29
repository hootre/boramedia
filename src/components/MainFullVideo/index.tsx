import { useEffect, useState, VFC } from 'react';
import { FullVideo } from './styles';
import ReactPlayer from 'react-player';
import { PC, Mobile } from '@utils/MediaQuery';
interface Props {
  data_detail: {
    id: string;
  };
}

const MainFullVideo: VFC<Props> = ({ data_detail }) => {
  return (
    <>
      <PC>
        <FullVideo>
          <ReactPlayer
            className="react-player"
            url={'https://www.youtube.com/watch?v=' + data_detail.id}
            playing
            loop
            width="100%"
            height="100%"
          />
        </FullVideo>
      </PC>
      <Mobile></Mobile>
    </>
  );
};

export default MainFullVideo;
