import React, {useEffect, useState} from 'react';
import { styled} from "styled-components";
import './App.css';

import { store } from './redux/redux'
import { Provider} from "react-redux";
import MainSection from "./components/MainSection";
import Header from "./components/headerComponents/Header";
import GlobalStyle from "./utility/GlobalStyle";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
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

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

    }, [isLoading]);
    return (
        <Provider store={store}>
            <GlobalStyle />
            <StyledMainComponent>
                {isLoading ?
                    <Loader finishLoading={() => setIsLoading(false)} />
                    :
                    <>
                        <Header />
                        <MainSection/>
                        <Footer />
                        <StyledMainComponent />
                    </>
                }
            </StyledMainComponent>
        </Provider>
    );
}



export default App;
