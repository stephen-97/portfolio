import React, { CSSProperties} from 'react';
import CSS from 'csstype'
import '../src/components/style.scss'
import './App.css';
import Link from "./components/Link";
import Block from "./components/Block";
import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";
import Description from "./components/Description";
import SmallBlock from "./components/SmallBlock";

function App() {
    return (
        <div id={'container'}>
            <div>
                <Description />
                <div className={"smallBlocksContainer"}>
                    <SmallBlock description={"EXPERIENCES PRO"}/>
                    <SmallBlock description={"PROJETS PERSO"} />
                    <SmallBlock description={"CONTACTEZ MOI"}/>
                </div>
            </div>
            <div className={"blockContainer"}>
                <Block />
                <Block />
                <Block />
                <Block />
            </div>
        </div>
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
