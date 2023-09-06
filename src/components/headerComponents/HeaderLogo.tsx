import React, {JSX} from 'react';
import "../style.scss"
import {styled} from "styled-components";
import ButtonLinksContainer from "./ButtonLinksContainer";


const StyledDescription = styled.section`
    & {
      display: block;
      position: relative;
      flex: 1;
      margin: 0;
      padding: 0;
    }
    h1 {
      font-size: 38px;
      margin: 0;
      background-color: red;
      letter-spacing: .15em;
    }
`

const HeaderLogo = () =>  {

    return(
        <StyledDescription>
                <h1>
                    S.L
                </h1>
        </StyledDescription>
);
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
export default HeaderLogo;
