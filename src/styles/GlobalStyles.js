import { createGlobalStyle } from 'styled-components';
// Supports weights 400-700
import '@fontsource/lora/400-italic.css';
import '@fontsource/lora/500-italic.css';
import '@fontsource/lora/600-italic.css';
import '@fontsource/lora/700-italic.css';
import '@fontsource/lora/400.css';
import '@fontsource/lora/500.css';
import '@fontsource/lora/600.css';
import '@fontsource/lora/700.css';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }

    * {
        margin: 0;
    }

    body {
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
        font-family: 'Lora', sans-serif;
        background-color: ${props => props.theme.bgPrimary};
    }

    img, picture, video, canvas, svg {
        display: block;
        max-width: 100%;
    }

    input, button, textarea, select {
        font: inherit;
    }

    p, h1, h2, h3, h4, h5, h6 {
        overflow-wrap: break-word;
        color: ${props => props.theme.textPrimary};
    }
  
    #root, #__next {
        isolation: isolate;
    }

    h1 {
        font-size: 4rem;    //64px
        line-height: 77px;
    }

    h2 {
        font-size: 1.5rem;  //24px
        line-height: 29px;
    }

    h3 {
        font-size: 1.25rem; //20px
        line-height: 24px;
    }

    h4 {
        font-size: 0.875rem;    //14px
        line-height: 17px;
        text-decoration: underline;
    }

    p {
        font-size: 1.125rem;    //18px
        line-height: 24px;
    }


  `;

export default GlobalStyle;