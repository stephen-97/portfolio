import React from 'react';
import {styled, ThemeProvider} from "styled-components";
import constants from "../../utility/constants";
import Stephen_profile from "../../assets/Stephen-profile.jpg";
import zeldaLogo from "../../assets/linkgif.gif"

type PresentationProps = {
    isBgColorLight: boolean,
}

const borderRadiusImg: number = 30;
const imgAnimationDuration: number = 500;

const StyledPresentation = styled.section`
  position: relative;

  h1 {
    opacity: 0;
    margin: 0;
    color: ${props => props.theme.isBgColorLight ? constants.colorDarkGreen : constants.colorLightGreen};
    animation: animatePresentation 0.5s ease ${constants.headerAnim + constants.secondAnim / 5}s forwards;
  }

  h2 {
    opacity: 0;
    animation: animatePresentation 0.5s ease ${constants.headerAnim + constants.secondAnim * 2 / 5}s forwards;
  }

  .description_picture {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  p {
    margin: 0;
    opacity: 0.8;

    > span {
      color: ${props => props.theme.isBgColorLight ? constants.colorDarkGreen : constants.colorLightGreen};;
      opacity: 1;
    }

    > #switch-span {
      cursor: url(${zeldaLogo}), pointer;
      //lg:cursor-[url('/images/koroks/Elma.png'),_pointer]
    }
  }

  .description {
    margin: 20px 0;
    min-width: 400px;
    padding: 0;
    flex: 1.5;
    opacity: 0;
    font-size: 22px;
    animation: animatePresentation 0.5s ease ${constants.headerAnim + constants.secondAnim * 3 / 4}s forwards;
    @media screen and (max-width: ${constants.maxWindowWidthForSideMenuButton}px) {
      & {
        min-width: 100%;
        margin-bottom: 50px;
      }
    }
  }

  picture {
    display: flex;
    opacity: 0;
    margin: 20px;
    flex: 1;
    animation: animateImg 0.5s ease ${constants.headerAnim + constants.secondAnim * 4 / 4}s forwards;
  }

  #img_Background {
    margin: auto;
    border-radius: ${borderRadiusImg}px;
    display: table;
    background-color: black;
    overflow: auto;
    max-width: 100%;

    &:hover {
      background-color: ${props => props.theme.isBgColorLight ? constants.colorDarkGreen : constants.colorLightGreen};
      transition: ease-in-out 0.5s;
    }
  }

  img {
    opacity: 0;
    align-items: center;
    transform: translate(20px, -20px);
    transition: ${imgAnimationDuration}ms ease;
    border-radius: ${borderRadiusImg}px;
    max-width: 100%;
    min-width: 200px;
    height: auto;
    animation: animateImg 0.5s ease ${constants.headerAnim + constants.secondAnim * 5 / 4}s forwards;

    &:hover {
      transform: translate(0) rotate(0);
    }
  }


  @keyframes animatePresentation {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes animateImg {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

const Presentation = (props: PresentationProps) => {

    const theme = {
        isBgColorLight: props.isBgColorLight,
    }

    return (
        <ThemeProvider theme={theme}>
            <StyledPresentation>
                <h1>STEPHEN LOIOLA BASTOS</h1>
                <h2>Software Engineer - Team Typescript</h2>
                <span className={'description_picture'}>
                <div className={'description'}>
                    <p>
                        Bonjour et bienvenu sur mon portefolio ! Je suis un jeune développeur
                        <span> Javascript et Typescript avec 3 ans d'expériences </span> ayant
                        suivi des formations en alternance à Paris du bac au bac+5.
                        Je maîtrise plusieurs langages comme le HTML, CSS, Javascript et TypeScript, PHP.. Je possède néanmoins
                        plus d'expertise et une grande préférence pour les langages Javascript & TypeScript, et les librairies comme
                        <span> React et React Native</span> !
                    </p>
                    <br/>
                    <p>
                        Je suis actuellement en quête de nouvelles opportunités pour développer mes compétences dans
                        le développement web et mobile.
                    </p>
                    <br/>
                    <p>
                        Lorsque je ne suis pas devant VSCODE ou Webstorm, j'aime beaucoup
                        voyager, <span id={'switch-span'}>jouer à la switch</span> et assister à des orchestres.
                    </p>
                </div>
                <picture>
                    <div id={'img_Background'}>
                        <img width={295} height={335} src={Stephen_profile} alt={"profile Stephen"}/>
                    </div>
                </picture>
            </span>
            </StyledPresentation>
        </ThemeProvider>
    );
}

export default Presentation;


