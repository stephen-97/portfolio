import React, {createRef, Dispatch, ReactElement, RefObject, SetStateAction, useEffect, useRef, useState} from 'react';
import { Helmet } from 'react-helmet';
import {useOnClickOutside} from "usehooks-ts";
import {styled } from "styled-components";
import constants from "../../utility/constants";
import config from "../../configs/config";


const widthSpan = 60;
const heightSpan = 5;
const animDuration= 0.3;

const StyledLogo = styled.div`
  
  .menu-button {
    background-color: #282c34;
    position: relative;
    float: right;
    overflow: hidden;
    z-index: 10;
    margin: 0;
    padding: 0;
    width: 96px;
    height: ${constants.headerSize}px;
    font-size: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    box-shadow: none;
    border: none;
    cursor: pointer;
    //-webkit-transition: background 0.3s;
    //transition: background 0.3s;
    &:hover {

      div {
        opacity: 0;
        color: ${constants.color1};
        position: absolute;
        top:50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 30px;
        animation: animLogoText 0.6s ease-in-out ${animDuration*5}s forwards;
        @keyframes animLogoText {
          to {
            opacity: 1;
          }
        }
      }

      .first .second{
        animation: animLogo3 0.3s ease-in-out ${animDuration*2}s forwards;
        height: 100%;
        @keyframes animLogo3 {
          100% {
            transform: translateY(-${widthSpan/2}px);
          }
        }
      }
      
      .first::before {
        transition: ease-in-out ${animDuration}s;
        top: -${widthSpan-heightSpan}px;
      }
      
      .first::after, .second::after {
        transition: ease-in-out ${animDuration}s ${animDuration}s;
        top: -${widthSpan/2-heightSpan/2}px;
      }
      .first::after {
        animation: animLogo 0.3s ease-in-out ${animDuration*2}s forwards, animLogo2 0.3s ease-in-out ${animDuration*2 + 0.5}s forwards;
        @keyframes animLogo {
          100% {
            transform:rotate(90deg);
          }
        }
        @keyframes animLogo2 {
          100% {
            transform: rotate(90deg) translateY(${widthSpan/2}px);
          }
        }
      }
      .second::after {
        animation: animLogoSecond 0.3s ease-in-out ${animDuration*2}s forwards, animLogoSecond2 0.3s ease-in-out ${animDuration*2 + 0.5}s forwards;
        @keyframes animLogoSecond {
          100% {
            transform:rotate(90deg);
          }
        }
        @keyframes animLogoSecond2 {
          100% {
            transform: rotate(90deg) translateY(-${widthSpan/2}px);
          }
        }
      }
    }
  }

  
  
  .menu-button:focus {
    outline: none;
  }

  .menu-button .first, .menu-button .second {
    display: block;
    position: absolute;
    left: 50%;
    top:  calc(50% + ${widthSpan}px);
    transform: translate(-50%, calc(-50% - ${widthSpan/2}px - ${heightSpan/2}px));
    height: ${heightSpan}px;
    width: ${widthSpan}px;
    background-color: ${constants.color1};
  }
  
  .menu-button .first::before, 
  .menu-button .first::after,
  .menu-button .second::before,
  .menu-button .second::after
  {
    transition: ease-in-out .5s;
    position: absolute;
    display: block;
    top: 0;
    width: ${widthSpan}px;
    height: inherit;
    background-color: ${constants.color1};
    content: "";
  }
`



const Logo = (): ReactElement =>  {


    return(
        <StyledLogo >
            <button className={`menu-button lines}`}>
                <span className={'first'}></span>
                <span className={'second'}></span>
                <div>SL</div>
            </button>
        </StyledLogo>
    );
}


export default Logo;