import {connect, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../redux/redux";
import { styled} from "styled-components";
import React, {Component, JSX, LegacyRef} from "react";
import BriefCase from "../../assets/briefcase.svg";
import Experience from "../ItemsComponents/Experience";
import constants from '../../constants/constants'


type BlockProps = {
    id: string,
    icon: string,
    ref: LegacyRef<HTMLDivElement>,
    key: number,
    component: JSX.Element,
}

const waveHandDuration: number=1;
const StyledBockComponent = styled.section`
  .item {
    display: flex;
    position: relative;
    flex-direction: column;
    opacity: 0;
    background-color: white;
    margin: 0 20%;
    min-height: 100vh;
  }

  .item.active {
    opacity: 1;
    padding: 70px 0;
  }

  .blockContainer{
    position: relative;
  }
  section > div {
    position: absolute;
    top: 30%;
    width: 100%;
  }
  
  .title {
    height: 100px;
    position: relative;
    margin-bottom: 5vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    
    .lineContainer {
      display: flex;
      flex: 1;
      justify-content: center;
      flex-direction: column;
    }
    .line {
      opacity: 0;
      border-bottom:  5px dashed black;
      animation: animateLine 500ms ease ${constants.headerAnim+0.3}s forwards;
    }
    > img {
      margin: 0 2vw;
      //font-size: clamp(30px, 4vw, 40px);
    }
  }
  
  #wave-img-presentation{
    opacity: 0;
    animation:
            animateWaveOpacity 1s ease ${constants.headerAnim + constants.secondAnim}s forwards,
            animateWaveTest ${waveHandDuration}s ease ${constants.headerAnim + constants.secondAnim + constants.thirdAnim}s forwards
  }

  @keyframes animateWaveTest {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform:  rotate(-45deg);
    }
    50% {
      transform: rotate(20deg);
    }
    75% {
      transform: rotate(-45deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }


  @keyframes animateWaveOpacity {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  
  @keyframes animateWave {
    from {
      transform: rotate(0deg);
    }
    to {
      transform:  rotate(-45deg);
    }
  }

  @keyframes animateWave2 {
    from {
      transform: rotate(-45deg);
    }
    to {
      transform: rotate(45deg);
    }
  }

  @keyframes animateWave3 {
    from {
      transform:  rotate(45deg);
    }
    to {
      transform: rotate(0deg);
    }
  }
  
  @keyframes animateLine {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media screen and (max-width:1000px){
    .item {
      margin: 0 5%;
    }
  }
`


const Block = (props : BlockProps) =>  {

    return(
        <StyledBockComponent>
            <section ref={props.ref} className={`item item${props.key}`}>
                <div className={'blockContainer'}>
                        <div className={'title'}>
                            <div className={'lineContainer'}>
                                <div className={'line'}></div>
                            </div>
                            <img id={props.id} src={props.icon} alt="React Logo" />
                        </div>
                    <div >
                        {props.component}
                    </div>
                </div>
            </section>
        </StyledBockComponent>

    );
}

export default Block;