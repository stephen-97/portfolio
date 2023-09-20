import React, {ReactElement, useEffect} from 'react';
import {styled} from "styled-components";
import constants from "../utility/constants";

const widthSpan: number = 80;
const heightSpan: number = 6;
const singleAnimDuration: number = 0.3;
const animDuration: number = singleAnimDuration * 5;

const StyledLogo = styled.div`
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

  .loader-container {
    background-color: ${constants.colorDark2};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 99;
    font-size: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    box-shadow: none;
    border: none;
    cursor: pointer;

    & {
      div {
        opacity: 0;
        color: ${constants.colorLightGreen};
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 30px;
        animation: animLogoText 0.6s ease-in-out ${singleAnimDuration * 5}s forwards;
        @keyframes animLogoText {
          to {
            opacity: 1;
          }
        }
      }

      .first {
        animation: animLogoFirst 0.3s ease-in-out ${singleAnimDuration}s forwards;
        @keyframes animLogoFirst {
          100% {
            top: calc(50% - ${widthSpan / 2}px);
            transform: translate(-50%, 50%);
          }
        }
      }

      .second {
        animation: animLogoSecond 0.3s ease-in-out ${singleAnimDuration * 2}s forwards;
        @keyframes animLogoSecond {
          100% {
            top: calc(50% + ${widthSpan / 2}px);
            transform: translate(-50%, -50%);
          }
        }
      }

      .third {
        animation: animLogoThird 0.3s ease-in-out ${singleAnimDuration * 3}s forwards, animLogoFourth 0.3s ease-in-out ${singleAnimDuration * 4}s forwards;
        @keyframes animLogoFourth {
          to {
            transform: rotate(90deg);
          }
        }
      }

      .fourth {
        animation: animLogoThird 0.3s ease-in-out ${singleAnimDuration * 3}s forwards, animLogoFifth 0.3s ease-in-out ${singleAnimDuration * 4}s forwards;
        @keyframes animLogoFifth {
          to {
            transform: rotate(90deg);
            left: calc(50% - ${widthSpan}px);
          }
        }
      }

      @keyframes animLogoThird {
        100% {
          transform: translateX(-50%) rotate(90deg);
        }
      }
    }
  }
`

type LoaderProps = {
    finishLoading: Function,
}
const Loader = (props: LoaderProps): ReactElement => {

    setTimeout(() => {
        props.finishLoading(true);
    }, animDuration * 1000 + 1000);

    return (
        <StyledLogo>
            <button className={`loader-container`}>
                <span className={'first'}></span>
                <span className={'second'}></span>
                <span className={'third'}></span>
                <span className={'fourth'}></span>
                <div>SL</div>
            </button>
        </StyledLogo>
    );
}

export default Loader;