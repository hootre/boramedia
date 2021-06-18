import { useCallback, useState } from 'react';
import { MobileMenu } from './styles';

const MobileSideBar = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const onMenuClick = useCallback(() => {
    setMenuToggle((prev) => !prev);
  }, [menuToggle]);
  return (
    <MobileMenu className={`base ${menuToggle && 'close'}`}>
      <div className="menu">
        <div className="icon" onClick={onMenuClick}>
          <div className="bar"></div>
        </div>
      </div>
      <div className="icons">
        <i className="fa fa-user" aria-hidden="true"></i>
        <i className="fa fa-calendar-o" aria-hidden="true"></i>
        <i className="fa fa-tachometer" aria-hidden="true"></i>

        <i className="fa fa-tachometer" aria-hidden="true"></i>

        <i className="fa fa-tachometer" aria-hidden="true"></i>
      </div>
      <div className="section">
        <div className="cover1">
          <div className="cover2">
            <a className="content" href="#calender"></a>
          </div>
        </div>
        <a className="section-static top" href="#profile"></a>
        <a className="section-static bottom" href="#dashboard"></a>
      </div>
    </MobileMenu>
  );
};

export default MobileSideBar;
