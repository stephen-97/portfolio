import React from 'react';
import "../style.scss"
import {connect, useSelector} from "react-redux";
import { RootState} from "../../redux/redux";
import {styled} from "styled-components";
import Briefcase from "../../assets/briefcase.svg";
import Wave from "../../assets/wave.svg"
import constants from "../../constants/constants";
import Stephen_profile from "../../assets/Stephen-profile.jpg"

type PresentationProps = {
    animationDelay: number,
}

const borderRadiusImg: number = 30;
const imgAnimationDuration: number = 500;

const StyledPresentation = styled.section`
  // PRESENTATION BLOCK
  & {
    position: relative;
  }
  h1 {
    opacity: 0;
    font-size:  clamp(40px, 7vw, 70px);
    font-weight: bolder;
    margin: 0 0 0 0;
    animation: animatePresentation 0.5s ease ${constants.headerAnim + constants.secondAnim/5}s forwards;
  }
  h2 {
    opacity: 0;
    font-size: clamp(30px, 4vw, 40px);
    animation: animatePresentation 0.5s ease ${constants.headerAnim + constants.secondAnim*2/5}s forwards;
  }
  .description_picture {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }
  p {
    margin: 0 0 10px 0;
  }
  .description {
    margin: 20px 0;
    padding: 0 clamp(20px, 8vw, 50px) 0 0;
    flex: 1.5;
    opacity: 0;
    font-size: 22px;
    animation: animatePresentation 0.5s ease ${constants.headerAnim + constants.secondAnim*3/4}s forwards;
  }

  picture {
    display: flex;
    opacity: 0;
    margin:  20px 0;
    flex: 1;
    animation: animateImg 0.5s ease ${constants.headerAnim + constants.secondAnim*4/4}s forwards;
  }
  img {
    opacity: 0;
    align-items: center;
    display: table-row;
    background-color: black;
    transform: rotate(10deg);
    transition: ${imgAnimationDuration}ms ease;
    border-radius: ${borderRadiusImg}px;
    animation: animateImg 0.5s ease ${constants.headerAnim + constants.secondAnim*5/4}s forwards;
    &:hover {
      transform: rotate(0);
    }
  }
  #img_Background {
    margin: auto;
    border-radius: ${borderRadiusImg}px;
    display: table;
    background-color: black;
    overflow: auto;
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

const Presentation = (props : PresentationProps) =>  {


    return(
        <StyledPresentation>
            <h1>STEPHEN LOIOLA BASTOS</h1>
            <h2>Software Engineer - Team Typescript</h2>
            <span className={'description_picture'}>
                <div className={'description'}>
                    <p>
                        Bonjour et bienvenu sur mon portefolio! Je suis jeune développeur TypeScript Junior ayant
                        suivi des formations en alternance à Paris du bac jusqu'au bac+5.
                        Je maîtrise plusieurs langages de programmation comme HTML, CSS, TypeScript, PHP.. Par contre j'ai
                        une grande préférence énorme préférence pour le TypeScript et les bibliothèques comme
                        React et React Native !
                    </p>
                    <br/>
                    Je suis actuellement en quête de nouvelles opportunités pour développer mes compétences dans
                    le développement web et mobile.
                </div>
                <picture>
                    <div id={'img_Background'}>
                        <img  width={350} height={400} src={Stephen_profile} alt={""}/>
                    </div>
                </picture>
            </span>
        </StyledPresentation>
    );
}

const mapState = (state: RootState) => state.page

export default connect(mapState)(Presentation);


/**
 *
 * <span id={'img_Background'}>
 *                         <img  width={350} height={400} src={Stephen_profile} alt={""}/>
 *                     </span>
 */