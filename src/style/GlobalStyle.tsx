
import { createGlobalStyle } from 'styled-components';
import constants from "../constants/constants";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    width: 100%;
    scroll-behavior: smooth;
  }
  
  body{
    font-family: "Roboto Mono",Sans-serif;
    background-color: ${constants.colorDark2};
    //background-color: #0b3838;
    color: ${constants.colorLight1};
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