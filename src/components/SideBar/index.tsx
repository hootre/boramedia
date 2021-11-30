import { LogoBox, MainSideMenu, NavItem } from '@components/SideBar/styles';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { memo } from 'react';
const SideBar = () => {
  const router = useRouter();
  const title = router.pathname.split('/')[1];
  return (
    <MainSideMenu>
      <LogoBox className="logo">
        <Link href="/">
          <a></a>
        </Link>
      </LogoBox>
      <NavItem>
        <ul>
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
            <Link href="/Advertising/jK7H55YB2zA">광고</Link>
          </li>
        </ul>
      </NavItem>
    </MainSideMenu>
  );
};

export default memo(SideBar);
