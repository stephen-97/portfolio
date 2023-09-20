import {styled, ThemeProvider} from "styled-components";
import React, {Component, JSX, LegacyRef} from "react";
import constants from '../utility/constants'


type SectionProps = {
    id: string,
    icon: string,
    refProp: LegacyRef<HTMLDivElement>,
    keyItem: number,
    component: JSX.Element,
    isBgColorLight: boolean,
}

const waveHandDuration: number = 1;
const StyledBockComponent = styled.section`
  position: relative;
  display: block;
  background-color: ${props => props.theme.isBgColorLight ? constants.colorLight1 : constants.colorDark2};
  color: ${props => props.theme.isBgColorLight ? constants.colorDark2 : constants.colorLight1};
  padding: 0 150px;
  @media screen and (max-width: ${constants.maxWindowWidthForSideMenuButton}px) {
    padding: ${constants.headerSize}px 0 0 0;
  }

  .item {
    position: relative;
    opacity: 0;
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 20px 100px 10px;
    min-height: 100vh;
    scroll-margin-top: ${constants.headerSize}px;
    @media not all and (display-mode: fullscreen) {
      & {
        padding: 20px 10px 30px 10px;
      }
    }
  }

  .item.active {
    opacity: 1;
  }

  .blockContainer {
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
      border-bottom: 3px dashed ${props => props.theme.isBgColorLight ? constants.colorDark2 : constants.colorLight1};
      animation: animateLine 500ms ease ${constants.headerAnim + 0.3}s forwards;
    }

    > img {
      opacity: 0;
      animation: animateIconOpacity 500ms ease ${constants.headerAnim + 0.3}s forwards;
      filter:${props => props.theme.isBgColorLight ? constants.colorDarkFilter : constants.colorWhiteFilter};
      height: clamp(60px, 10vw, 100px);
    }
  }

  #wave-img-presentation {
    animation: animateWaveTest ${waveHandDuration}s ease ${constants.headerAnim + constants.secondAnim + constants.thirdAnim}s forwards;
  }

  @keyframes animateWaveTest {
    0% {
      opacity: 1;
    }
    20% {
      opacity: 1;
      transform: rotate(0deg);
    }
    40% {
      opacity: 1;
      transform: rotate(-45deg);
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
      transform: rotate(-45deg);
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
      transform: rotate(45deg);
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

const Section = (props: SectionProps) => {

    const theme = {
        isBgColorLight: props.isBgColorLight,
    }

    return (
        <ThemeProvider theme={theme}>
            <StyledBockComponent ref={props.refProp}>
                <section className={`item item${props.keyItem}`}>
                    <div className={'blockContainer'}>
                        <div className={'title'}>
                            <div className={'lineContainer'}>
                                <div className={'line'}></div>
                            </div>
                            <img id={props.id} src={props.icon} alt="React Logo"/>
                        </div>
                        <div>
                            {props.component}
                        </div>
                    </div>
                </section>
            </StyledBockComponent>
        </ThemeProvider>
    );
}

export default Section;