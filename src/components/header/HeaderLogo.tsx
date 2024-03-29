import React, {ReactElement} from 'react';
import {styled} from "styled-components";
import constants from "../../utility/constants";


const widthSpan: number = 50;
const heightSpan: number = 4;
const fontSizeLogo: number = 25;

const StyledLogo = styled.a`
  position: relative;
  margin-left: 30px;
  height: 95%;
  width: ${widthSpan + 10}px;
  font-size: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  box-shadow: none;
  border: none;
  cursor: pointer;

  &:hover {
    animation: ShakingLogoButton 0.8s ease forwards;
    animation-play-state: running;
    transform-origin: 0;
    @keyframes ShakingLogoButton {
      20% {
        transform: translateX(-10px);
      }
      40% {
        transform: translateX(10px);
      }
      60% {
        transform: translateX(-10px);
      }
      80% {
        transform: translateX(10px);
      }
      100% {
        transform: translateX(0);
      }
    }
  }

  span {
    display: block;
    position: absolute;
    height: ${heightSpan}px;
    width: ${widthSpan}px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${constants.colorLightGreen};
  }

  div {
    opacity: 1;
    color: ${constants.colorLightGreen};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: ${fontSizeLogo}px;
  }

  .first {
    top: calc(50% - ${widthSpan / 2}px);
    transform: translate(-50%, 50%);
  }

  .second {
    top: calc(50% + ${widthSpan / 2}px);
    transform: translate(-50%, -50%);
  }

  .third {
    transform: rotate(90deg);
  }

  .fourth {
    transform: rotate(90deg);
    left: calc(50% - ${widthSpan}px);
  }
`


const HeaderLogo = (): ReactElement => {

    return (
        <StyledLogo href={'/'} id={'header-logo'}>
            <span className={'first'}></span>
            <span className={'second'}></span>
            <span className={'third'}></span>
            <span className={'fourth'}></span>
            <div>SL</div>
        </StyledLogo>
    );
}


export default HeaderLogo;