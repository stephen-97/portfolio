import {connect } from "react-redux";
import {IStyledComponent, styled} from "styled-components";
import React, {SetStateAction, useEffect, useState, Dispatch, ReactElement} from "react";
import constants from "../utility/constants";



const StyledFooter: IStyledComponent<"web"> = styled.section`
  & {
    height: 80px;
    text-align: center;
    font-size: ${constants.fontSize5};
    font-weight: 500;
    color: ${constants.colorLight1};
    padding: 0 30px;
  }
`

const Footer = (): ReactElement =>  {

    return(
        <StyledFooter>
            <span>Created and designed by LOIOLA BASTOS Stephen. @ Copyright 2023. All right reserved.</span>
        </StyledFooter>
    );
}

export default (Footer);