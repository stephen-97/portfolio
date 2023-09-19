import { styled} from "styled-components";
import React, {ReactElement} from "react";
import constants from "../utility/constants";
import WaveIcon from "../assets/wave.svg";
import BriefCaseIcon from "../assets/briefcase.svg"
import GraduationIcon from "../assets/casquette-de-graduation.svg"
import IdeaIcon from "../assets/exchange-ideas.svg"
import LetterIcon from "../assets/letter.svg"

const size: number = 60;

const StyledBoxContainer = styled.section`

  #containerBox {
    position: relative;
    z-index: 1;
    height: ${size}px;
    width: ${size}px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-box-shadow: 0 0 45px -10px ${constants.color2};
    box-shadow: 0 0 45px -10px ${constants.color2};
    @media screen and (max-height:  450px) {
      display: none;
    }
  }

  #box {
    height: inherit;
    width: inherit;
    position: relative;
    transform-style: preserve-3d;
    transition: all .5s ease;
    transform: rotateX(45deg) rotate3d(5,5, 5, 45deg);
  }

  .card {
    height: ${size}px;
    width: ${size}px;
    text-align: center;
    color: white;
    background-color: ${constants.color2};
    //background-color: #cbd1d2;
    box-sizing: border-box;
    position: absolute;
    box-shadow: inset 0 0 28px -10px rgba(0,0,0,0.94);
    
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) ;
      filter: invert(0%) sepia(97%) saturate(0%) hue-rotate(291deg) brightness(104%) contrast(101%);
      height: 30px;
    }
  }
  #front {
    transform: translateZ(${size/2}px);
  }

  #back {
    transform: translateZ(-${size/2}px);
  }
  #right {
    left: ${size/2}px;
    transform: rotateY(90deg);
  }
  #left {
    right: ${size/2}px;
    transform: rotateY(-90deg);
  }
  #top {
    bottom: ${size/2}px;
    transform: rotateX(90deg);
  }
  #bottom {
    top: ${size/2}px;
    transform: rotateX(90deg);
  }
`

const Box = (): ReactElement =>  {

    return(
        <StyledBoxContainer>
            <div id={'containerBox'}>
                <div id={'box'}>
                    <div className={'card'} id={'front'}>
                        <img src={WaveIcon} alt="Wave Icon Logo" />
                    </div>
                    <div className={'card'} id={'left'}>
                        <img src={BriefCaseIcon} alt="BriefCase Icon" />
                    </div>
                    <div className={'card'} id={'back'}>
                        <img src={GraduationIcon} alt="Graduation Icon" />
                    </div>
                    <div className={'card'} id={'right'}>
                        <img src={IdeaIcon} alt="Idea Icon" />
                    </div>
                    <div className={'card'} id={'top'}>
                        <img src={LetterIcon} alt="Letter Icon" />
                    </div>
                    <div className={'card'} id={'bottom'}>
                    </div>
                </div>
            </div>
        </StyledBoxContainer>

    );
}

export default Box;