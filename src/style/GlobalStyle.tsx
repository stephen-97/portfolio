
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    width: 100%;
    scroll-behavior: smooth;
  }
  
  body{
    font-family: "Roboto Mono",Sans-serif;
    
    &.sideMenuOpened {
      overflow: hidden;
      
      header {
      }
      main {
        filter: blur(5px) brightness(0.10);
      }
    }
  }
`;

export default GlobalStyle;