import React, { CSSProperties} from 'react';
import { styled} from "styled-components";
import constants from "./constants/constants";
import '../src/components/style.scss'
import './App.css';

import { store } from './redux/redux'
import { Provider} from "react-redux";
import MainSection from "./components/MainSection";
import Header from "./components/headerComponents/Header";

const StyledMainComponent = styled.section`
  .container {
    //background: linear-gradient(to right, white, #f0f0f0);
    position:relative;
  }
  .right {
    overflow: auto;
    padding-top: ${constants.headerSize}px;
    position: relative;
    min-height: 100vh;
  }
 
`

function App() {
    return (
        <Provider store={store}>
            <StyledMainComponent>
                <div className={'container'}>
                    <Header />
                    <main className={"right"}>
                        <MainSection />
                    </main>
                </div>
            </StyledMainComponent>
        </Provider>
    );
}



export default App;
