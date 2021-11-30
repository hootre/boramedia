import GlobalStyles from '@components/GlobalStyles';
import SideBar from '@components/SideBar';
import MobileSideBar from '@components/SideBar/MobileSideBar';
import { PC, Mobile } from '@utils/MediaQuery';
import React, { FC, useCallback, useEffect } from 'react';
import styled from 'styled-components';

export const MainContainer = styled.div`
  background-color: rgb(0 0 0 / 80%);
  height: 100%;
  display: flex;
  overflow: hidden;
  width: 100%;
  font-size: 15px;
  font-weight: 500;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'ONE-Mobile-Regular';
  .BackImg {
    position: absolute;
    top: -80%;
    left: -90%;
    width: 159%;
    filter: blur(5px);
    opacity: 30%;
  }
  .bottomBack {
    position: absolute;
    width: 100%;
    height: 45px;
    bottom: 0;
    background: #292929;
  }
  .bottomText {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;

    img {
      opacity: 0.5;
    }
    h2 {
      font-size: 1.5rem;
      text-align: left;
      padding: 0 2rem 2rem 2rem;
      color: #fff;
      opacity: 0.5;
    }
  }
  .footerImg {
    width: 7.5rem;
    height: 4.5rem;
    margin-top: 5px;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
`;

const AppLayout: FC<{}> = ({ children }) => {
  useEffect(() => {
    window.addEventListener('load',function(){
      setTimeout(scrollTo,0,0,1);
      },false);
    }, []);
  
  // const onScroll = useCallback((e) => {
  //   window.removeEventListener('mousewheel', onScroll);
  //   let prevTop = 0;
  //   let nextTop = 0;
  //   // e.path.map((item: Element) => {
  //   //   if (item.nodeName == 'SECTION') {
  //   //     item.previousSibling?.nodeName == 'SECTION'
  //   //       ? (prevTop =
  //   //           window.pageYOffset + Number(item.previousSibling?.getBoundingClientRect().top))
  //   //       : 0;
  //   //     item.nextSibling?.nodeName == 'SECTION'
  //   //       ? (nextTop = window.pageYOffset + Number(item.nextSibling?.getBoundingClientRect().top))
  //   //       : 0;
  //   //   }
  //   // });
  //   if (e.wheelDelta == 120) {
  //     // downscroll code
  //     console.log('아래서 위로');
  //     window.scrollTo({ top: prevTop, behavior: 'smooth' });
  //   } else {
  //     // upscroll code
  //     console.log('위에서 아래로');
  //     window.scrollTo({ top: nextTop, behavior: 'smooth' });
  //   }
  //   setTimeout(() => {
  //     window.addEventListener('mousewheel', onScroll, { passive: false });
  //   }, 500);
  // }, []);

  // let startX: number, startY: number, endX: number, endY: number;
  // const onTouchStart = useCallback((e) => {
  //   startX = e.touches[0].screenX;
  //   startY = e.touches[0].screenY;
  // }, []);
  // const onTouchEnd = useCallback((e) => {
  //   endX = e.changedTouches[0].screenX;
  //   endY = e.changedTouches[0].screenY;
  //   let prevTop = 0;
  //   let nextTop = 0;
  //   // e.path.map((item: Element) => {
  //   //   if (item.nodeName == 'SECTION') {
  //   //     item.previousSibling?.nodeName == 'SECTION'
  //   //       ? (prevTop =
  //   //           window.pageYOffset + Number(item.previousSibling?.getBoundingClientRect().top))
  //   //       : 0;
  //   //     item.nextSibling?.nodeName == 'SECTION'
  //   //       ? (nextTop = window.pageYOffset + Number(item.nextSibling?.getBoundingClientRect().top))
  //   //       : 0;
  //   //   }
  //   // });
  //   if (startY - endY > 50) {
  //     // 아래서 위로
  //     console.log('아래서 위로');
  //     window.scrollTo({ top: nextTop, behavior: 'smooth' });
  //   } else if (endY - startY > 50) {
  //     // 위에서 아래로
  //     console.log('위에서 아래로');

  //     window.scrollTo({ top: prevTop, behavior: 'smooth' });
  //   }
  // }, []);

  // useEffect(() => {
  //   window.addEventListener('mousewheel', onScroll, { passive: false });
  //   // window.addEventListener('touchstart', onTouchStart, { passive: false });
  //   // window.addEventListener('touchend', onTouchEnd, { passive: false });
  // }, []);
  return (
    <>
      <PC>
        <MainContainer>
          <SideBar />
          {children}
          <GlobalStyles />
          <div className="bottomBack">
            <div className="bottomText">
              <h2>
                보라미디어 | 사업자등록번호 : 593-56-00232  
              </h2>
              <h2>
              주소 : 광진구 면목로 173
              </h2>
              <h2>
                메일주소 : artinsky@boramedia.co.kr  
              </h2>
              <h2>
              Phone : 010-2166-1895
              </h2>
            </div>
          </div>
        </MainContainer>
      </PC>
      <Mobile>
        <MainContainer>
          <MobileSideBar />
          {children}
          <GlobalStyles />
        </MainContainer>
      </Mobile>
    </>
  );
};
export default AppLayout;
