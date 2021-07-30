import { VFC } from 'react';
import { FullVideo, MobileLogoBox, MobileNavItem } from './styles';
import ReactPlayer from 'react-player';
import { PC, Mobile } from '@utils/MediaQuery';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
interface Props {
  data_detail: {
    id: string;
  };
}

const MainFullVideo: VFC<Props> = ({ data_detail }) => {
  const router = useRouter();
  const title = router.pathname.split('/')[1];
  return (
    <>
      <PC>
        <FullVideo>
          <ReactPlayer
            className="react-player"
            url={'https://www.youtube.com/watch?v=' + data_detail.id}
            playing
            loop
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
        </MobileNavItem>
      </Mobile>
    </>
  );
};

export default MainFullVideo;
