import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { useCallback, useState } from 'react';
import { MobileMenu } from './styles';

const MobileSideBar = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const onMenuClick = useCallback(() => {
    setMenuToggle((prev) => !prev);
  }, [menuToggle]);

  const router = useRouter();
  const title = router.pathname.split('/')[1];
  return (
    <MobileMenu className={`screen `}>
      <div className="header">
        <span className="ion-ios-navicon pull-left" onClick={onMenuClick}>
          <i></i>
        </span>
        <Link href="/">
          <img src="/가로로고@4x.png" alt="logo" className="logo" />
        </Link>
      </div>
      <div className={`sidebar ${menuToggle ? 'active' : ''}`} onClick={onMenuClick}>
        <div className="sidebar-overlay"></div>
        <div className="sidebar-content">
          <div className="top-head">
            <div className="name">Bora Media</div>
            <div className="email">artinsky@boramedia.co.kr</div>
          </div>
          <ul className="nav-left">
            <li className={title == 'MusicVideo' ? 'active' : ''}>
              <Link href="/MusicVideo/uKDDwDHAft8">뮤직비디오</Link>
            </li>
            <li className={title === 'Promotion' ? 'active' : ''}>
              <Link href="/Promotion/cKMCPExesxs">제작영상</Link>
            </li>
            <li className={title === 'Interview' ? 'active' : ''}>
              <Link href="/Interview/JBR1MntFIaU">배우 프로필</Link>
            </li>

            <li className={title === 'Sketch' ? 'active' : ''}>
              <Link href="/Sketch/lY5mLZGCGp8">스케치/메이킹</Link>
            </li>

            <li className={router.pathname === '/Advertising' ? 'active' : ''}>
              <Link href="/Advertising/BHWYFfowcno">광고</Link>
            </li>
          </ul>
          <div className="sideBottomText">
            <h2>Phone | 010-2166-1895</h2>
            <h2>Email | artinsky@boramedia.co.kr</h2>
            <h2>2018 by boramedia</h2>
          </div>
        </div>
      </div>
    </MobileMenu>
  );
};

export default MobileSideBar;
