
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    width: 100%;
    scroll-behavior: smooth;
  }
  
  body{
    font-family: "Roboto Mono",Sans-serif;

    main {
      transition: ease-in-out 0.3s;
    }
    
    &.sideMenuOpened {
      overflow: hidden;
      
      header {
      }
      main {
        filter: blur(5px) brightness(0.10);
        transition: ease-in-out 0.3s;
      }
    }
    
  }
`;

export default GlobalStyle;