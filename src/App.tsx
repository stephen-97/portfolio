import React from 'react';
import { styled} from "styled-components";
import './App.css';

import { store } from './redux/redux'
import { Provider} from "react-redux";
import MainSection from "./components/MainSection";
import Header from "./components/headerComponents/Header";
import GlobalStyle from "./style/GlobalStyle";

const StyledMainComponent = styled.section`
  
  body {
    &.backGroundMenu {
      overflow: hidden;
      display: none;
      background-color: #61dafb;
      header {
        background-color: transparent;
      }
      .container {
        display: none;
      }
    }
  }
 
`

function App() {
    return (
        <Provider store={store}>
            <GlobalStyle />
            <StyledMainComponent>
                <Header />
                <MainSection/>
            </StyledMainComponent>
        </Provider>
    );
}



export default App;
