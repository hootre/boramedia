import MainCardVideo from '@components/MainCardVideo';
import SubCardVideo from '@components/SubCardVideo';
import { WrapperContainer } from './styles';

const MainWrapper = () => {
  return (
    <WrapperContainer>
      <h1>Discover</h1>
      <div className="MainCard">
        <MainCardVideo />
        <MainCardVideo />
      </div>
      <h2>Most Watched</h2>
      <div className="SubCard">
        <SubCardVideo />
        <SubCardVideo />
        <SubCardVideo />
        <SubCardVideo />
      </div>
    </WrapperContainer>
  );
};

export default MainWrapper;
