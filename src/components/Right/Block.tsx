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

const waveHandDuration: number=0.3;
const StyledBockComponent = styled.section`
  .item {
    display: flex;
    position: relative;
    flex-direction: column;
    opacity: 0;
    background-color: white;
    margin: 0 20%;
    min-height: 100vh;
    border: 1px solid black;
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
    background-color: yellow;
    
    .line {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      border-bottom: 4px dashed black;
      width: 85%;
      
    }
    > img {
      position: absolute;
      height: 6em;
      top: 50%;
      transform: translateY(-50%);
      right: 0;
    }
  }
  
  #wave-img-presentation{
    animation: 
            animateWave ${waveHandDuration}s ease ${constants.firstAnim + constants.secondAnim + constants.thirdAnim}s,
            animateWave2  ${waveHandDuration}s ease ${constants.firstAnim + constants.secondAnim + constants.thirdAnim + waveHandDuration}s,
            animateWave3  ${waveHandDuration}s ease ${constants.firstAnim + constants.secondAnim + constants.thirdAnim + waveHandDuration*2}s;
  }

  @keyframes animateWave {
    from {
      transform: translateY(-50%) rotate(0deg);
    }
    to {
      transform: translateY(-50%) rotate(-45deg);
    }
  }

  @keyframes animateWave2 {
    from {
      transform: translateY(-50%) rotate(-45deg);
    }
    to {
      transform: translateY(-50%) rotate(45deg);
    }
  }

  @keyframes animateWave3 {
    from {
      transform: translateY(-50%) rotate(45deg);
    }
    to {
      transform: translateY(-50%) rotate(0deg);
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
                            <div className={'line'}></div>
                            <img src={props.icon} alt="React Logo" />
                        </div>
                    <div style={{ backgroundColor: "purple"}}>
                        {props.component}
                    </div>
                </div>
            </section>
        </StyledBockComponent>

    );
}

export default Block;