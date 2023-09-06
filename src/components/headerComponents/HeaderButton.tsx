import React, {useEffect} from 'react';
import "../style.scss"
import {styled, css} from "styled-components";
import Graduation from "../../assets/casquette-de-graduation.svg";
import constants from "../../constants/constants";

type SmallBlockProps = {
    description: string;
    icon:  string,
    pageName: string,
    index: number,
}

const loopButtonList = () => {
    let style = '';
    for(let i=0; i<= 5; i++){
        const animDuration: number = 0.5;
        style+= `
            &:nth-of-type(${i}) > .button {
                opacity: 0;
                animation-name: example;
                animation-fill-mode: forwards;
                animation-duration: ${animDuration}s;
                animation-delay:  ${constants.headerAnim*i/5}s;
            }
            @keyframes example {
                from {opacity: 0; left: -100px}
                to {opacity: 1; left: 0px}
            }
        `
    }
    return css`${style}`
}

const StyledButton = styled.section`
  .button {
    position: relative;
    display: flex;
    line-height: 50px;
    margin: 0 clamp(10px, 2vw, 30px);
    overflow: hidden;
    cursor:  pointer;
    justify-content: center;
  }

  ${loopButtonList()}
  .button-img {
    height: 60px;
    width: 60px;
  }
  .button-img:hover {
    filter: invert(84%) sepia(64%) saturate(4580%) hue-rotate(59deg) brightness(105%) contrast(94%);
  }
  .titleButton {
    display: inline-block;
    vert-align: middle;
    line-height: normal;
    margin-left: 1vw;
    position: relative;
    z-index: 1;
    transition: 0.3s ease;
  }
  
  .buttonColorContainer {
    top:0;
    left: 0;
    position: absolute;
    height: 100%;
    width: 0;
    transform-origin: 0;
    transition: 0.3s ease;
  }

  .activeButton, .button-img:hover {

    .button-img {
      filter: invert(84%) sepia(64%) saturate(4580%) hue-rotate(59deg) brightness(105%) contrast(94%);
      transition: ease 0.5s;
    }
    .buttonColorContainer {
      top:0;
      left: 0;
      background-color: #4b4b4b;
      position: absolute;
      height: 100%;
      width: 100%;
      animation: scalingBackgroundButton 0.3s ease forwards;
      transform-origin: 0;
      
      @keyframes scalingBackgroundButton {
        from {
          transform: scaleX(0);
        }
        to {
          transform: scaleX(1);
        }
      }
    }
    .titleButton {
      filter: invert(1);
      transition: 0.3s ease;
    }
  }
`

const StyledButtonContainer = styled.section`
 


`

const HeaderButton = (props : SmallBlockProps) =>  {

    return(
            <StyledButton>
                    <div className={`button button${props.index + 1}`}>
                        <img className={'button-img'} src={props.icon} alt="React Logo" />
                    </div>
            </StyledButton>
    );
}


export default HeaderButton;

/**
 *
 * <div className={`${checkSelectedPage() ? 'smallBlockClicked' : 'smallBlock'}`} onClick={() => dispatch(setPage({name : props.pageName}))}>
 *             <span> {props.description}</span>
 *             <img src={props.icon} alt="React Logo" />
 *         </div>
 */

/**
 *
 *
 * <div className={`${checkSelectedPage() ? 'smallBlockClicked' : 'smallBlock'}`} onClick={() => dispatchPage() }>
 *             <span> {props.description}</span>
 *             <img src={props.icon} alt="React Logo" />
 *         </div>
 */