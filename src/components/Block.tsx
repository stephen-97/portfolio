import React from 'react';
import imagetoAdd from "../assets/shanks.png";
import "./style.scss"
const Block = () =>  {

    return(
        <div className={"block"}>
            <img src={imagetoAdd} className={"image"} alt=""/>
            <span className={"text"}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis interdum, urna vitae aliquam venenatis, nunc arcu hendrerit felis, a fermentum nulla felis eget nibh. Pellentesque non lacus ornare, mattis leo et, dignissim erat. Sed vel metus purus. Maecenas mattis tellus sit amet nibh ornare, ac posuere odio rutrum.</span>
        </div>
    );
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
export default Block;
