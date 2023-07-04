import React, { CSSProperties} from 'react';
import CSS from 'csstype'
import '../src/components/style.scss'
import './App.css';
import Link from "./components/Link";
import Block from "./components/Block";
import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";

function App() {
    return (
        <div id={'container'}>
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
