import React from 'react';
import imagetoAdd from "../assets/shanks.png";
import "./style.scss"

type SmallBlockProps = {
    description: string;
}

const SmallBlock = (props : SmallBlockProps) =>  {

    return(
        <div className={"smallBlock"}>
            <span className={"text"}> Lorem ipsum dolor sit amet, consectetur .</span>
        </div>
    );
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
export default SmallBlock;