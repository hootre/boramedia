import Link from 'next/link';
import { useCallback, useState } from 'react';
import { MobileMenu } from './styles';

const MobileSideBar = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const onMenuClick = useCallback(() => {
    setMenuToggle((prev) => !prev);
  }, [menuToggle]);
  return (
    <MobileMenu className={`screen `}>
      <div className="header">
        <span className="ion-ios-navicon pull-left" onClick={onMenuClick}>
          <i></i>
        </span>
        <Link href="/">
          <span className="title">Home</span>
        </Link>
      </div>
      <div className={`sidebar ${menuToggle ? 'active' : ''}`} onClick={onMenuClick}>
        <div className="sidebar-overlay"></div>
        <div className="sidebar-content">
          <div className="top-head">
            <div className="name">Bora Media</div>
            <div className="email">artinsky@boramedia.co.kr</div>
          </div>
          <div className="nav-left">
            <Link href="/">메인</Link>
            <Link href="/MusicVideo">뮤직비디오</Link>
            <Link href="/Promotion">제작영상</Link>
            <Link href="/Interview">배우 프로필</Link>
            <Link href="/Sketch">스케치/메이킹</Link>
            <Link href="/Advertising">광고</Link>
          </div>
        </div>
      </div>
    </MobileMenu>
  );
};

export default MobileSideBar;
