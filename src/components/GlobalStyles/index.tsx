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
        color: #808191;
        &:before {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-image: url('https://dark-ux.com/wp-content/uploads/2020/08/wordpress-581849_1920.jpg');
            background-size: cover;
            opacity: 0.4;
            content: "";
        }
        
    }
    
    @media all and (min-width:768px) and (max-width:1523px) {
        html{
            font-size: 8px;
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
`;
export default GlobalStyles;
