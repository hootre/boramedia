import { MainSideMenu, NavItem } from '@components/SideBar/styles';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { memo } from 'react';
const SideBar = () => {
  const router = useRouter();
  const title = router.pathname.split('/')[1];
  return (
    <MainSideMenu>
      <div className="logo">
        <Link href="/">
          <a>
            <img src="/보라미디어-로고-컬러백.png" alt="Logo" />
          </a>
        </Link>
      </div>
      <NavItem>
        <ul>
          <li className={title == '' ? 'active' : ''}>
            <Link href="/">
              <a>메인</a>
            </Link>
          </li>
          <li className={title == 'MusicVideo' ? 'active' : ''}>
            <Link href="/MusicVideo">뮤직비디오</Link>
          </li>
          <li className={title === 'Promotion' ? 'active' : ''}>
            <Link href="/Promotion">제작영상</Link>
          </li>
          <li className={title === 'Interview' ? 'active' : ''}>
            <Link href="/Interview">배우 프로필</Link>
          </li>

          <li className={title === 'Sketch' ? 'active' : ''}>
            <Link href="/Sketch">스케치/메이킹</Link>
          </li>

          <li className={router.pathname === '/Advertising' ? 'active' : ''}>
            <Link href="/Advertising">광고</Link>
          </li>
        </ul>
      </NavItem>
    </MainSideMenu>
  );
};

export default memo(SideBar);
