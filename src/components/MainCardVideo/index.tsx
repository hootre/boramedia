import { Author, MainCardBox } from './styles';

const MainCardVideo = () => {
  return (
    <MainCardBox>
      <div className="title">How to do Basic Jumping and how to landing safely</div>
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
      <div className="time">7 min</div>
    </MainCardBox>
  );
};

export default MainCardVideo;
