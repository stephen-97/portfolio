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
    font-size: 55px;
    font-weight: bolder;
    margin: 0 0 15px 0;
    animation: animatePresentation 0.5s ease ${constants.firstAnim + constants.secondAnim}s forwards;
  }
  h2 {
    opacity: 0;
    background-color: red;
    font-size: 30px;
    animation: animatePresentation 0.5s ease ${constants.firstAnim + constants.secondAnim + 1/4}s forwards;
  }
  .description_picture {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    background-color: #61dafb;
    //grid-template-columns: 3fr 2fr;
    grid-template-columns: repreat(auto-fit, minmax(1000px, 1fr));
  }
  p {
    margin: 0 0 10px 0;
  }
  .description {
    flex: 1;
    opacity: 0;
    font-size: 22px;
    background-color: gray;
    animation: animatePresentation 0.5s ease ${constants.firstAnim + constants.secondAnim + 2/4}s forwards;
  }

  picture {
    flex: 1;
    text-align: center;
    background-color: aquamarine;
    justify-content: center;
  }
  img {
    opacity: 1;
    align-items: center;
    display: table-row;
    background-color: black;
    transform: rotate(10deg);
    transition: ${imgAnimationDuration}ms ease;
    border-radius: ${borderRadiusImg}px;
    animation: animateImg 0.5s ease ${constants.firstAnim + constants.secondAnim + 3/4}s forwards;
    &:hover {
      transform: rotate(0);
    }
  }
  #img_Background {
    margin-left: auto;
    margin-right: auto;
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
                        <img  width={350} height={400} src={Stephen_profile} alt={""}/>

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