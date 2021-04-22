import CardListItem from '@components/CardListItem';
import { Author } from '@components/MainCardVideo/styles';
import { useRouter } from 'next/dist/client/router';
import { VideoDetailBox, VideoDetailText, VideoList } from './styles';

const VideoDetail = () => {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <VideoDetailBox>
      <div className="video_box">
        <div className="video">
          <iframe
            src={`https://www.youtube.com/watch?v=${router.pathname}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <VideoDetailText>
          <div className="author">
            <Author>
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
                <img src="https://images.unsplash.com/photo-1560941001-d4b52ad00ecc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1650&amp;q=80"></img>
              </div>
              <div className="detail">
                <div className="name">Thomas Hope</div>
                <div className="info">
                  53K view <span className="spot" />2 weeks ago
                </div>
              </div>
            </Author>
          </div>
          <div className="title">Basic how to ride your Skateboard</div>
          <div className="subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus illum tempora consequuntur. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Debitis earum velit accusantium maiores qui sit quas, laborum
            voluptatibus vero quidem tempore facilis voluptate tempora deserunt!{' '}
          </div>
        </VideoDetailText>
      </div>
      <VideoList>
        <div className="title">Related Videos</div>
        <CardListItem />
        <CardListItem />
        <CardListItem />
      </VideoList>
    </VideoDetailBox>
  );
};

export default VideoDetail;
