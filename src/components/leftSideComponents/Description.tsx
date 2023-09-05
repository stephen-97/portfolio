import React from 'react';
import "../style.scss"
import {styled} from "styled-components";
import ButtonLinksContainer from "./ButtonLinksContainer";


const StyledDescription = styled.section`

    h1 {
      text-align: center;
      font-size: 30px;
    }

  @media screen and (max-width:1000px){
    h1 {
      margin-left: 50px;
    }
  }
`

const Description = () =>  {

    return(
        <StyledDescription>
            <h1>
                SL
            </h1>
        </StyledDescription>
);
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
export default Description;
