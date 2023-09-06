import {connect, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../redux/redux";
import { styled} from "styled-components";
import React from "react";


type SmallBlockProps = {
}


const StyledBoxContainer = styled.section`

  .containerBox {
    position: absolute;
    z-index: 1;
    height: 100px;
    width: 100px;
    background-color: red;
    top: 10%;
    left: 90%;
    transform: translate(-50%, -50%);
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
    height: 100px;
    width: 100px;
    text-align: center;
    padding: 50px 0;
    color: white;
    background-color: #cbd1d2;
    font-size: 15px;
    box-sizing: border-box;
    position: absolute;
    box-shadow: inset 0 0 28px -10px rgba(0,0,0,0.94);
  }
  #front {
    transform: translateZ(50px);
  }

  #back {
    transform: translateZ(-50px);
  }
  #right {
    left: 50px;
    transform: rotateY(90deg);
    background-color: #496e74;
  }
  #left {
    right: 50px;
    transform: rotateY(-90deg);
  }
  #top {
    bottom: 50px;
    transform: rotateX(90deg);
  }
  #bottom {
    top: 50px;
    transform: rotateX(90deg);
  }
`



const Box = (props : SmallBlockProps) =>  {

    return(
        <StyledBoxContainer>
            <div className={'containerBox'}>
                <div id={'box'}>
                    <div className={'card'} id={'front'}>Présentation</div>
                    <div className={'card'} id={'back'}>Expérience</div>
                    <div className={'card'} id={'left'}>Etudes</div>
                    <div className={'card'} id={'right'}>Projets personnels</div>
                    <div className={'card'} id={'top'}></div>
                    <div className={'card'} id={'bottom'}>Bottom</div>
                </div>
            </div>
        </StyledBoxContainer>

    );
}

export default Box;