import React from 'react';
import {styled} from "styled-components";
import constants from "../../utility/constants";
import Stephen_profile from "../../assets/Stephen-profile.jpg";

type PresentationProps = {
    animationDelay: number,
}

const borderRadiusImg: number = 30;
const imgAnimationDuration: number = 500;

const StyledPresentation = styled.section`
  position: relative;

  h1 {
    opacity: 0;
    margin: 0;
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
    color: ${constants.colorLight2};
    > span {
      color: ${constants.color2}
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
      background-color: ${constants.color2};
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

    return (
        <StyledPresentation>
            <h1>STEPHEN LOIOLA BASTOS</h1>
            <h2>Software Engineer - Team Typescript</h2>
            <span className={'description_picture'}>
                <div className={'description'}>
                    <p>
                        Bonjour et bienvenu sur mon portefolio ! Je suis un jeune développeur <span>javascript et typeScript Junior</span>  ayant
                        suivi des formations en alternance à Paris du bac <span>jusqu'au bac+5</span>.
                        Je maîtrise plusieurs langages comme HTML, CSS, TypeScript, PHP.. Je possède néanmoins une
                        grande préférence pour les langages Javascript & TypeScript, et les librairies comme
                        <span> React et React Native</span> !
                    </p>
                    <br/>
                    <p>
                        Je suis actuellement en quête de nouvelles opportunités pour développer mes compétences dans
                        le développement web et mobile.
                    </p>
                    <br/>
                    <p>
                        Lorsque je ne suis pas devant VSCODE ou Webstorm, j'aime généralement
                        lire Kingdom, jouer à Zelda et assister à des orchestres d'ost.
                    </p>
                </div>
                <picture>
                    <div id={'img_Background'}>
                        <img width={295} height={335} src={Stephen_profile} alt={""}/>
                    </div>
                </picture>
            </span>
        </StyledPresentation>
    );
}

export default Presentation;

