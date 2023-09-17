import React, {ReactElement, useEffect, useState} from 'react';
import {styled, css} from "styled-components";
import constants from "../../utility/constants";

type HeaderButtonProps = {
    icon:  string,
    display: string,
    index?: number,
}

const loopButtonList = () => {
    let style: string = '';
    for(let i: number=0; i<= 5; i++){
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

const StyledButton = styled.section<{ displayButton?: string, firstAnimationIsFinished: boolean }>`
  
  .button {
    position: relative;
    display: ${props => props.displayButton};
    line-height: 50px;
    margin: 0 clamp(10px, 2vw, 30px);
    overflow: hidden;
    cursor:  pointer;
    justify-content: center;
  }

  ${({firstAnimationIsFinished}) => !firstAnimationIsFinished && loopButtonList()}
  
  .button-img {
    height: 60px;
    width: 60px;
    filter: ${constants.colorWhiteFilter};

  }
  .button-img:hover {
    filter: ${constants.color1Filter};
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
      filter: ${constants.color1Filter};
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


const HeaderButton = (props : HeaderButtonProps): ReactElement =>  {

    const [firstAnimationFinished, setFirstAnimationFinished] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setFirstAnimationFinished(true)
        }, constants.headerAnim*1500);
    }, []);

    return(
            <StyledButton displayButton={props.display} firstAnimationIsFinished={firstAnimationFinished}>
                    <div className={`button  ${props.index ? `button${props.index}` : null }`}>
                        <img className={'button-img'} src={props.icon} alt="React Logo" />
                    </div>
            </StyledButton>
    );
}


export default HeaderButton;
