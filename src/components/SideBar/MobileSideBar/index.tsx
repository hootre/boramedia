import { useCallback, useState } from 'react';
import { MobileMenu } from './styles';

const MobileSideBar = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const onMenuClick = useCallback(() => {
    setMenuToggle((prev) => !prev);
  }, [menuToggle]);
  return (
    <MobileMenu className={`screen ${menuToggle && 'open'}`}>
      <div className="circle"></div>
      <div className="menu">
        <ul>
          <li className="">
            <a href="">About</a>
          </li>
          <li className="">
            <a href="">Share</a>
          </li>
          <li className="">
            <a href="">Activity</a>
          </li>
          <li className="">
            <a href="">Settings</a>
          </li>
          <li className="">
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
      <div className="burger" onClick={onMenuClick}>
        <div className="x"></div>
        <div className="y"></div>
        <div className="z"></div>
      </div>
    </MobileMenu>
  );
};

export default MobileSideBar;
