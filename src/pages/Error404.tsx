import React, {ReactElement} from 'react';
import {IStyledComponent, styled} from "styled-components";
import constants from "../utility/constants";

const StyledError404: IStyledComponent<"web"> = styled.section`
  position: fixed;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  h1 {
    position: relative;
  }
  h2 {
    position: relative;
    text-align: center;
  }
  a {
    text-decoration: underline;
    cursor: pointer;
    color: ${constants.color2};
  }
`

const Error404 = (): ReactElement =>  {

    return (
        <StyledError404>
            <h1>404</h1>
            <h2>Perdu? <a href={'/'}>Revenir à la page principale</a> </h2>
        </StyledError404>
    );
}



export default Error404;
