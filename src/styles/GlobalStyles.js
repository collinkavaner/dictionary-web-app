import { createGlobalStyle } from 'styled-components';
// Lora - Supports weights 400-700
import '@fontsource/lora/400-italic.css';
import '@fontsource/lora/500-italic.css';
import '@fontsource/lora/600-italic.css';
import '@fontsource/lora/700-italic.css';
import '@fontsource/lora/400.css';
import '@fontsource/lora/500.css';
import '@fontsource/lora/600.css';
import '@fontsource/lora/700.css';

// Inter - Supports weights 100-900
import '@fontsource-variable/inter';

// Inconsolata - Supports weights 200-900
import '@fontsource-variable/inconsolata';

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
        font-family: ${props => props.font};
        background-color: ${props => props.theme.bgPrimary};
        transition: all 0.1s ease-in-out;

        word-break: break-word;
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

    button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        font-size: inherit;
        font-weight: inherit;
        line-height: inherit;
        padding: 0;
        margin: 0;
        text-align: inherit;
        text-decoration: none;
        color: inherit;
        appearance: none;
    }

    @media screen and (max-width: 442px) {
        h1 {
            font-size: 2rem;  //32px
            line-height: 42px;
        }

        h2 {
            font-size: 1.25rem; //20px
            line-height: 24px;
        }

        h3 {
            font-size: 1.125rem;    //18px
            line-height: 24px;
        }

        h4 {
            font-size: 1rem;    //16px
            line-height: 19px;
        }

        p {
            font-size: 1rem;    //16px
            line-height: 19px;
        }
    }

  `;

export default GlobalStyle;