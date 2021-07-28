import reset from 'styled-reset';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    ${reset}
    #__next {
              width: 100%;
              height: 100%;
    }
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    html{
        font-size: 10px;
    }
    body{
        background-color: #222222;
  background: repeating-linear-gradient(
      45deg,
      #2b2b2b 0%,
      #2b2b2b 10%,
      #222222 0%,
      #222222 50%
    )
    0 / 15px 15px;
        
    }
    
    @media all and (min-width:768px) and (max-width:1523px) {
        html{
            font-size: 6px;
        }
        
    }
    @media all and (max-width:767px) {
        html{
            font-size: 5px;
        }
    }
    // flickity css
    .carousel{
        top: 33%;
    }
    .flickity-button{
        display: none;
    }
    .flickity-page-dots > .dot {
        background-color: white;
    }
    /* scroll design */
    ::-webkit-scrollbar {
        width: 6px;
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: rgb(21 20 26 / 63%);
        border-radius: 10px;
    }
    @media (max-width: 768px) {
        
    ::-webkit-scrollbar {
        width: 6px;
        border-radius: 0px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #fff;
        border-radius: 0px;
    }
  }
    
    

    /* swiper-slide */
    .swiper-slide {
        height: 20%;
    }
    
    @font-face {
        font-family: 'BMEULJIROTTF';
        font-style: normal;
        font-weight: 100;
        src: url('../.././fonts/BMEULJIROTTF.ttf') format('ttf');
      }
`;
export default GlobalStyles;
