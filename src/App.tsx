import React, { CSSProperties} from 'react';
import CSS from 'csstype'
import '../src/components/style.scss'
import './App.css';
import Block from "./components/Block";
import Description from "./components/leftSideComponents/Description";
import SmallBlock from "./components/leftSideComponents/SmallBlock";

import manIcon from "./assets/man.svg"
import laptopIcon from "./assets/laptop.svg"
import ideaIcon from "./assets/idea.svg"

import { store } from './redux/redux'
import { Provider} from "react-redux";
import Page from "./utility/page";
import RightSectionBlock from "./components/RightSectionBlock";
import LeftSectionBlock from "./components/leftSideComponents/LeftSectionBlock";

interface IButton{
    name: string
    type: string
}

const buttonTabs = [
    {
        description: "EXPÉRIENCE PRO",
        icons: laptopIcon,
        pageName: "working",
    },
    {
        description: "PROJETS PERSO",
        icons: ideaIcon,
        pageName: "projects"
    },
    {
        description: "CONTACTEZ MOI",
        icons: manIcon,
        pageName: "contact"
    }
]


function App() {
    return (
        <Provider store={store}>
            <div className={'container'}>
                <LeftSectionBlock />
                <RightSectionBlock />
            </div>
        </Provider>
    );
}



export default App;
