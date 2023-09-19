
import { createGlobalStyle } from 'styled-components';
import constants from "./constants";

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
  
  h1 {
    font-size:  clamp(${constants.h1_min}px, 7vw, ${constants.h1_max}px);
    font-weight: bolder;
    color: ${constants.color1};
  }
  
  h2 {
    font-size: clamp(${constants.h2_min}px, 4vw, ${constants.h2_max}px);
  }
  
  p {
    font-size: clamp(${constants.p_min}px, 2vw, ${constants.p_max}px);
    color: ${constants.colorLight2}
  }
`;

export default GlobalStyle;