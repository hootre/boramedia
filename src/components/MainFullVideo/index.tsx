import { VFC } from 'react';
import { FullVideo, MobileLogoBox, MobileNavItem } from './styles';
import ReactPlayer from 'react-player';
import { PC, Mobile } from '@utils/MediaQuery';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';

const MainFullVideo: VFC = () => {
  const router = useRouter();
  const title = router.pathname.split('/')[1];
  return (
    <>
      <PC>
        <FullVideo>
          <ReactPlayer
            className="react-player"
            url={'https://www.youtube.com/watch?v=T23XQ8L2UK8'}
            playing
            loop
            muted
            width="100%"
            height="100%"
          />
        </FullVideo>
      </PC>
      <Mobile>
        <MobileLogoBox className="logo">
          <Link href="/">
            <a></a>
          </Link>
        </MobileLogoBox>
        <MobileNavItem>
          <ul>
          <li className={title == 'MusicVideo' ? 'active' : ''}>
            <Link href="/MusicVideo/uKDDwDHAft8">뮤직비디오</Link>
          </li>
          <li className={title === 'Promotion' ? 'active' : ''}>
            <Link href="/Promotion/kkQTPHwWRU4">제작영상</Link>
          </li>
          <li className={title === 'Interview' ? 'active' : ''}>
            <Link href="/Interview/JBR1MntFIaU">배우 프로필</Link>
          </li>

          <li className={title === 'Sketch' ? 'active' : ''}>
            <Link href="/Sketch/HeEpj8kBQtU">스케치/메이킹</Link>
          </li>

          <li className={router.pathname === '/Advertising' ? 'active' : ''}>
            <Link href="/Advertising/BHWYFfowcno">광고</Link>
          </li>
          </ul>
        </MobileNavItem>
      </Mobile>
    </>
  );
};

export default MainFullVideo;
