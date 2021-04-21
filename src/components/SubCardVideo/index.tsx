import { Author } from '@components/MainCardVideo/styles';
import { SubCardBox } from './styles';

const SubCardVideo = () => {
  return (
    <SubCardBox>
      <div className="time">8 min</div>
      <div className="wrapper">
        <div className="video"></div>
        <Author className="author">
          <div className="img">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-check"
            >
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
            <img src="https://images.unsplash.com/photo-1560941001-d4b52ad00ecc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1650&amp;q=80"></img>
          </div>
        </Author>
      </div>
      <div className="maker">Andy William</div>
      <div className="name">Basic how to ride your skateboard comfortly</div>
      <div className="view">
        53K view <span className="spot" />2 weeks ago
      </div>
    </SubCardBox>
  );
};

export default SubCardVideo;
