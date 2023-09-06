import React, { CSSProperties} from 'react';
import { styled} from "styled-components";
import '../src/components/style.scss'
import './App.css';

import { store } from './redux/redux'
import { Provider} from "react-redux";
import RightSectionBlock from "./components/RightSectionBlock";
import LeftSectionBlock from "./components/headerComponents/Header";

const StyledMainComponent = styled.section`
  .container {
    //background: linear-gradient(to right, white, #f0f0f0);
    position:relative;
  }

  .right {
    overflow: auto;
    position: relative;
    min-height: 100vh;
    border: 1px solid black;
  }

 
`

function App() {
    return (
        <Provider store={store}>
            <StyledMainComponent>
                <div className={'container'}>
                    <LeftSectionBlock />
                    <main className={"right"}>
                        <RightSectionBlock />
                    </main>
                </div>
            </StyledMainComponent>
        </Provider>
    );
}



export default App;
