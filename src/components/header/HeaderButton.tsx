import React, {ReactElement, useEffect, useState} from 'react';
import {styled, css, ThemeProvider} from "styled-components";
import constants from "../../utility/constants";

type HeaderButtonProps = {
    name: string,
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

//${({firstAnimationIsFinished}) => !firstAnimationIsFinished && loopButtonList()}
const StyledButton = styled.section`
  
  .button {
    position: relative;
    display: ${props => props.theme.displayButton};
    line-height: 50px;
    margin: 0 clamp(10px, 2vw, 30px);
    overflow: hidden;
    cursor:  pointer;
    justify-content: center;
    align-items: center;
    
    &:hover {
      span {
        color: ${constants.color1}
      }
      .button-img {
        filter: ${constants.color1Filter};
      }
    }
  }

  ${props => !props.theme.firstAnimationFinished && loopButtonList()}
  
  span {
    color: ${constants.colorWhiteFilter}
  }
  .button-img {
    height: 30px;
    width: 30px;
    filter: ${constants.colorWhiteFilter};
    margin-left: 10px;
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

    span {
      color: ${constants.color1}
    }
    .button-img {
      filter: ${constants.color1Filter};
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

    const theme = {
        firstAnimationFinished : firstAnimationFinished,
        displayButton : props.display
    }
    return(
        <ThemeProvider theme={theme}>
            <StyledButton>
                <div className={`button  ${props.index ? `button${props.index}` : null }`}>
                    <span>{props.name}</span>
                    <img className={'button-img'} src={props.icon} alt="React Logo" />
                </div>
            </StyledButton>
        </ThemeProvider>
    );
}


export default HeaderButton;
