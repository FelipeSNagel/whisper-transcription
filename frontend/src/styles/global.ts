import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  a{
    text-decoration:  none;
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
    background: ${(props) => props.theme.colors.background};
  }
  ol, ul, li {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font: 400 16px 'Nunito', sans-serif;
    letter-spacing: 0.035em;

  }
  body {
    background: ${(props) => props.theme?.colors?.background};
    color: ${(props) => props.theme?.colors?.text.primary};
    font-family: 'Nunito', sans-serif;
  }


  button {
    border: 0px solid transparent;
    background: transparent;
    border-radius: 0;
    cursor: pointer;

    &:focus{
      outline: thin dotted;
      outline: 0px auto -webkit-focus-ring-color;
      outline-offset: 0px;
    }

    &:focus {
      outline: thin dotted;
      outline: 0px auto -webkit-focus-ring-color;
      outline-offset: 0px;
    }
  }

  html {
    font-size: 16px !important;
  }

  @media (max-width: 1720px) {
    html {
      font-size: 100%!important;
    }
  }
  
  @media (max-width: 1620px) {
    html {
      font-size: 94.79%!important;
    }
  }
  
  @media (max-width: 1520px) {
    html {
      font-size: 89.58%!important;
    }
  }
  
  @media (max-width: 1420px) {
    html {
      font-size: 84.38%!important;
    }
  }
  
  @media (max-width: 992px) {
    html {
      font-size: 79.17%!important;
    }
  }
  
  
  @media (max-width: 1312px) {
    html {
      font-size: 73.96%!important;
    }
  }
  
  
  @media (max-width: 688px) {
    html {
      font-size: 70%!important;
    }
  }
  
  @keyframes shimmer {
    100% {
      -webkit-mask-position: left;
    }
  }

  @keyframes pulse {
            0% {
                transform: scale(1);
            }
  
            100% {
                transform: scale(1.5);
            }
        }

        @keyframes shake {
            0% {
              transform: rotateZ(-2.5deg);
            }
  
            100% {
              transform: rotateZ(2.5deg);
            }
        }

`;
