import React, {ReactElement, useEffect, useState} from 'react';
import anime from 'animejs';
import {styled } from "styled-components";
import constants from "../../utility/constants";
import functions from "../../utility/functions";


const widthSpan = 50;
const heightSpan =4;
const fontSizeLogo = 25;

const StyledLogo = styled.div`

  &{
    position: relative;
    height: 95%;
    width: 120px;
    font-size: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    box-shadow: none;
    border: none;
    cursor: pointer;

    & {
      span{
        display: block;
        position: absolute;
        height: ${heightSpan}px;
        width: ${widthSpan}px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: ${constants.color2};
      }
      div {
        opacity: 1;
        color: ${constants.color2};
        position: absolute;
        top:50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: ${fontSizeLogo}px;
      }
      .first {
        top: calc(50% - ${widthSpan/2}px);
        transform: translate(-50%, 50%);
      }
      .second {
        top:  calc(50% + ${widthSpan/2}px);
        transform: translate(-50%, -50%);
      }
      .third {
        transform: rotate(90deg) ;
      }

      .fourth {
        transform: rotate(90deg);
        left: calc(50% - ${widthSpan}px);
      }
    }
  }
`

type LogoProps = {
    finishLoading: Function,
}

const Logo = (props : LogoProps): ReactElement =>  {


    return(
        <StyledLogo >
            <span className={'first'}></span>
            <span className={'second'}></span>
            <span className={'third'}></span>
            <span className={'fourth'}></span>
            <div>SL</div>
        </StyledLogo>
    );
}


export default Logo;