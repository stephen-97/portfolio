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
    display: flex;
  }

  @media (max-width: 1200px) {
    .container {
      flex-direction: column;
    }
  }

  .left {
    position: fixed;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
    width: 8%;
    min-width: 150px;
    background-color: #282c34;
    box-shadow: 0 0 15px 10px #282c34;
  }
  

  .right {
    margin-left: 8%;
    flex-grow: 8;
    overflow: auto;
    position: relative;
    min-height: 100vh;
    border: 1px solid black;
  }

  @media screen and (max-width:1000px){
    .left {
      height: 10%;
      min-height: 100px;
      width: 100vw;
    }
    .right {
      margin-left: 0;
    }
  }
`

function App() {
    return (
        <Provider store={store}>
            <StyledMainComponent>
                <div className={'container'}>
                    <main className={'left'}>
                        <LeftSectionBlock />
                    </main>
                    <main className={"right"}>
                        <RightSectionBlock />
                    </main>
                </div>
            </StyledMainComponent>
        </Provider>
    );
}



export default App;
