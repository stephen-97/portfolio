import { styled} from "styled-components";
import React, {Component, JSX, LegacyRef} from "react";
import constants from '../../utility/constants'


type BlockProps = {
    id: string,
    icon: string,
    ref: LegacyRef<HTMLDivElement>,
    keyItem: number,
    component: JSX.Element,
}

const waveHandDuration: number=1;
const StyledBockComponent = styled.section`

  & {
    position: relative;
    display: block;
  }
  
  .item {
    position: relative;
    opacity: 0;
    max-width: 1100px;
    margin: 40px auto;
    padding: 0 10px;
    min-height: 100vh;
    scroll-margin-top: 12vh;
    @media not all and (display-mode: fullscreen) {
      & {
        margin: 40px auto 100px auto;
      }
    }
  }

  .item.active {
    opacity: 1;
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
    max-height: 100px;
    position: relative;
    margin-bottom: 5vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .lineContainer {
      display: flex;
      flex: 1;
      justify-content: center;
      flex-direction: column;
      padding-right: 20px;
    }
    .line {
      opacity: 0;
      border-bottom:  3px dashed white;
      animation: animateLine 500ms ease ${constants.headerAnim+0.3}s forwards;
    }
    > img {
      opacity: 0;
      animation: animateIconOpacity 500ms ease ${constants.headerAnim+0.3}s forwards;
      filter: ${constants.colorWhiteFilter};
      height: clamp(60px, 10vw, 100px);
    }
  }
  
  #wave-img-presentation{
    animation: animateWaveTest ${waveHandDuration}s ease ${constants.headerAnim + constants.secondAnim + constants.thirdAnim}s forwards;
  }

  @keyframes animateWaveTest {
    0% {
      opacity: 1;
    }
    20% {
      opacity: 1;
      transform:  rotate(0deg);
    }
    40% {
      opacity: 1;
      transform:  rotate(-45deg);
    }
    60% {
      opacity: 1;
      transform: rotate(20deg);
    }
    80% {
      opacity: 1;
      transform: rotate(-45deg);
    }
    100% {
      opacity: 1;
      transform: rotate(0deg);
    }
  }


  @keyframes animateIconOpacity {
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

  
`


const Item = (props : BlockProps) =>  {

    return(
        <StyledBockComponent>
            <section ref={props.ref} className={`item item${props.keyItem}`}>
                <div className={'blockContainer'}>
                        <div className={'title'}>
                            <div className={'lineContainer'}>
                                <div className={'line'}></div>
                            </div>
                            <img  id={props.id} src={props.icon} alt="React Logo" />
                        </div>
                    <div >
                        {props.component}
                    </div>
                </div>
            </section>
        </StyledBockComponent>

    );
}

export default Item;