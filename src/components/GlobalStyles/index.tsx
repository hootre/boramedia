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
        overflow: hidden;
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size:16px;
        transition: all 600ms cubic-bezier(0.4, 0, 0.2, 1);
        background-color: ${(props) => props.theme.mode.BACKGROUND_COLOR};
        background-image: url('https://images.unsplash.com/photo-1445251836269-d158eaa028a6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1951&q=80');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-blend-mode: color-dodge;
        background-color: rgba(18, 21, 39, 0.86);
        color: #808191;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 1em 2em;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        &:before {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(
            163deg,
            rgba(31, 29, 43, 1) 21%,
            rgba(31, 29, 43, 0.3113620448179272) 64%
            );
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
    
`;
export default GlobalStyles;
