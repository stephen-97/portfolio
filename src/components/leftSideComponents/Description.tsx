import React, {JSX} from 'react';
import "../style.scss"
import {styled} from "styled-components";
import ButtonLinksContainer from "./ButtonLinksContainer";


const StyledDescription = styled.section`
    div {
      text-align: center;
    }
    h1 {
      display: inline-block;
      text-align: center;
      font-weight: bolder;
      white-space: nowrap;
      overflow: hidden;
      font-size: 38px;
      letter-spacing: .15em;
      animation: typing 1s ease forwards ;
      animation-delay: 0s;
    }

  @keyframes typing {
    from { opacity: 0 }
    to { opacity: 1 }
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
            <div>
                <h1>
                    S.L
                </h1>
            </div>
        </StyledDescription>
);
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
export default Description;
