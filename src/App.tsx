import React, { CSSProperties} from 'react';
import CSS from 'csstype'
import '../src/components/style.scss'
import './App.css';
import Block from "./components/Block";
import Description from "./components/Description";
import SmallBlock from "./components/SmallBlock";

import manIcon from "./assets/man.svg"
import laptopIcon from "./assets/laptop.svg"
import ideaIcon from "./assets/idea.svg"

import { store } from './redux/redux'
import { Provider} from "react-redux";
import {connect} from "react-redux";

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
                <div>
                    <Description />
                    <div className={"smallBlocksContainer"}>
                        {buttonTabs.map((item) => <SmallBlock description={item.description} icon={item.icons} pageName={item.pageName}/>)}
                    </div>
                </div>
                <div className={"blockContainer"}>
                    <Block />
                    <Block />
                    <Block />
                    <Block />
                </div>
            </div>
        </Provider>
    );
}


/**
 *
 * <div style={linksContainer}>
 *           <Link iconName={"Github"}/>
 *           <Link iconName={"Linkedin"} />
 *           <Link iconName={"Github"}/>
 *       </div>
 */
const container: CSS.Properties = {
    height: "100vh",
    width: "100%",
    backgroundColor: "gray"
}

const linksContainer: CSS.Properties = {
    position: "absolute",
    right: "300px",
    top: "50%",
    transform: "translateY(-50%)"
}

export default App;
