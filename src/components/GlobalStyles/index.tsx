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
    @font-face {
    font-family: 'ONE-Mobile-Title';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/ONE-Mobile-Title.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    }
    html{
        font-size: 10px;
    }
    body{
        color: #808191;
        &:before {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-image: url('/이상한질감.jpg');
            background-size: cover;
            opacity: 0.4;
            content: "";
        }
        
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
    .swiper-pagination-bullet{
        background: #fff;
    }
    .swiper-pagination-bullet-active{
        width: 95px;
    border-radius: 15px;
    }

    
    
    
`;
export default GlobalStyles;
