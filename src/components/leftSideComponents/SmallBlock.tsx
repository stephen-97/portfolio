import React from 'react';
import "../style.scss"
import styled from "styled-components";


type SmallBlockProps = {
    description: string;
    icon:  string,
    pageName: string,
    index: number,
}

const StyledButton = styled.section`
  .button {
    position: relative;
    line-height: 50px;
    width: 200px;
    border-radius: 20px;
    border: 1px solid black;
    margin: 15px 0;
    overflow: hidden;
    cursor:  pointer;

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
  }

  .activeButton, .button:hover {

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
      color: white;
      transition: 0.3s ease;
    }
    
  }
  
  
`

const SmallBlock = (props : SmallBlockProps) =>  {


    return(
        <StyledButton>
            <div className={`button button${props.index + 1}`}>
                <div className={`buttonColorContainer`}></div>
                <span className={'titleButton'}> {props.description}</span>
            </div>
        </StyledButton>
    );
}


export default SmallBlock;

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