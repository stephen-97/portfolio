import React, {Dispatch, ForwardedRef, forwardRef, useEffect, useState} from 'react';
import {css, styled} from "styled-components";
import {connect } from "react-redux";
import computer from "../../assets/computer.svg"
import { RootState} from "../../redux/redux";
import constants from "../../constants/constants";
import ExperienceBlock from "./experience/ExperienceBlock";

type ExperienceProps = {
    ref: HTMLDivElement | undefined,
    animationDelay: number,
}


const animationDelay: number = 0.5;
const transitionExperienceSkillBlock: number = 0.5;

const loopBlockList = () => {
    let style = '';

    for(let i=1; i<= 5; i++){
        style+= `
            > ol:nth-of-type(${i}) {
                animation: animationListBlockExperience 1s ease-in-out ${i/3+1}s forwards;
                transform: translateX(50px);
                @keyframes animationListBlockExperience {
                  from {
                    opacity: 1;
                  }
                  to {
                    opacity: 1;
                    transform: translateX(0);
                  }
                }
            } 
            > ol:nth-of-type(2n) {
                transform: translateX(-50px)
            } 
        `
    }
    return css`${style}`
}

const loopExperienceSkills = () => {
    let style = '';

    for(let i=0; i<= 10; i++){
        style+= `
            > span:nth-of-type(${i}) {
                position: relative;
                animation: animationSkills 0.2s ease-in-out ${i*0.2}s forwards;
                @keyframes animationSkills {
                  0% {
                    transform: translate(-20px, -20px);
                    opacity: 0;
                  }
                  20% { 
                    opacity: 1;
                  }
                  to {
                    transform: translate(0, 0);
                    opacity: 1;
                  }
                }
            } 
           
        `
    }
    return css`${style}`
}

const changeClassName = (e: Element) => {
    document.querySelectorAll('.s')
}

const StyledExperience = styled.section`
  & {
    position: relative;
  }

  #experienceList {
    position: relative;
    list-style-type: none;
    padding: 0;
    > li {
      
    }
  }
  
  
  .selected  {
      color: white;
  }

  #sectionBlock {
    min-height: 300px;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    margin-bottom: 50px;
  }
  
  .experience-skills-block {
    top: 0;
    margin: auto;
    border-radius: 10px;
    position: relative;
    width: 520px;
    min-height: 350px;
    
    text-align: center;
    padding: 10px 0;
    
    // RIGHT
    &:nth-of-type(1){
      height: auto;
      min-height: auto;
      > .experience-skills-block-title {
        display: block;
        color: black;
        font-size: ${constants.fontSize1};
        font-weight: bold;
        margin-bottom: 5px;
      }
    }
    
    // LEFT
    &:nth-of-type(2){
      background-color: ${constants.color3};
      box-shadow: ${constants.boxShadow};
      
      > .experience-skills-block-title {
        display: block;
        color: whitesmoke;
        font-size: ${constants.fontSize1};
        font-weight: bold;
        margin-bottom: 5px;
      }
    }
    
    > img {
      margin: 0;
    }
    
    //SKILLS RIGHT
    .skills-list  {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      
      
      > span {
        background-color: ${constants.color4};
        opacity: 0;
        margin-top: 20px;
        width: clamp(125px, 7vw, 175px);
        //width: 175px;
        //clamp(40px, 7vw, 70px);
        padding: 20px 0 20px clamp(10px, 2vw, 30px);
        border-radius: 10px;
        font-weight: bolder;
        font-size: clamp(17px, 1vw, 20px);
        position: relative;
        text-align: left;
        color: whitesmoke;

        >span {
          display: block;
          font-size: clamp(15px, 1vw, 18px);
          color: ${constants.color5};
          font-weight: 100;
        }
      }
    }
    
    
    
    
    // Choice BLOCK
    ul {
      padding: 0;
      margin-top: 30px;
      
      >ol {
        opacity: 0;
        margin: 10px auto;
        width: 150px;
        padding: 0;
        font-size: 25px;
        cursor: pointer;
        font-weight: bold;
        text-align: left;
        
        &:hover {
          color: red;
        }
      }
      a {
        display: block;
        position: absolute;
        height: 100%;
        width: 100%;
      
        //transform: scale(0);
      }
      .itemSelected {
        border-bottom: 4px solid black;
        transform: scaleX(0);
        z-index: -1;
        animation: scalingBorder 0.5s ease-in-out forwards;
        @keyframes scalingBorder {
          from {
            transform: scaleX(0);
            transform-origin: left ;
          }
          to {
            transform-origin: left ;
            transform: scaleX(1);
          }
        }
      }
    }
  }

  .active-experience-skills-block{
    
    &:nth-of-type(1) {
      ul {
        ${loopBlockList()}
      }
    }
    &:nth-of-type(2) {
      transform: translateX(250px);
      animation: animation-Skills-Block ${transitionExperienceSkillBlock}s ease-in-out ${animationDelay}s forwards;
      @keyframes animation-Skills-Block {
        to {
          transform: translateX(0);
        }
      }
    }
      
    >section {
      ${loopExperienceSkills()}
    }
  }
  

`
enum Level {
    Experienced= 'Expérimenté',
    Confirmed= 'Confirmé',
    Intermediate= 'Intermédiaire',
    Basic= 'Basic',
}
interface Skill {
    name: string,
    level: string,
}


const frontEndSkills: Array<Skill> =
    [
        {name: 'REACT NATIVE', level: Level.Experienced},
        {name: 'JAVASCRIPT', level: Level.Confirmed},
        {name: 'TYPESCRIPT', level: Level.Intermediate},
        {name: 'HTML', level: Level.Experienced},
        {name: 'SCSS', level: Level.Confirmed},
        {name: 'TWIG', level: Level.Basic},
    ]

const backEndSkills: Array<Skill> =
    [
        {name: 'SYMFONY', level:    Level.Confirmed},
        {name: 'NODE', level: Level.Intermediate},
        {name: 'Express', level: Level.Intermediate},
        {name: 'MYSQL', level: Level.Basic},
        {name: 'POSTGRESQL', level: Level.Intermediate},
        {name: 'MongoDB', level: Level.Basic},
    ]


const othersToolsSkills: Array<Skill> =
    [
        {name: 'Ansible', level:    Level.Confirmed},
        {name: 'Docker', level: Level.Intermediate},
        {name: 'Terraform', level: Level.Basic},
    ]


const Experience = forwardRef<HTMLDivElement, ExperienceProps>((props: ExperienceProps, ref: ForwardedRef<HTMLDivElement>) =>  {

    const [experiencePattern, setExperiencePattern]:[ string, Dispatch<string>] = useState('FrontEnd')

    return(
        <StyledExperience>
            <section id={'sectionBlock'} >
                <div className={'experience-skills-block'}>
                    <img height={80} width={80} src={computer} alt={'computer image'}/>
                    <span className={'experience-skills-block-title'}>3 YEARS EXPERIENCES</span>
                    <ul>
                        <ol onClick={() => setExperiencePattern('FrontEnd')}  >
                            <a  key={'BackEnd-Item'} className={`${experiencePattern==='FrontEnd' ? 'itemSelected': ''}`}></a>
                            <span>Front End</span>
                        </ol>
                        <ol onClick={() => setExperiencePattern('BackEnd')} >
                            <a  key={'FrontEnd-Item'} className={`${experiencePattern==='BackEnd' ? 'itemSelected': ''}`}></a>
                            <span>Back End</span>
                        </ol>
                        <ol onClick={() => setExperiencePattern('DevOps')} >
                            <a  key={'DevOps-Item'} className={`${experiencePattern==='DevOps' ? 'itemSelected': ''}`}></a>
                            <span>Devops</span>
                        </ol>
                    </ul>
                </div>
                <div className={'experience-skills-block'}>
                    <span className={'experience-skills-block-title'}>{experiencePattern}</span>
                    <section key={experiencePattern} className={'skills-list'} >
                        {
                            {
                                'FrontEnd':
                                    <>
                                        {frontEndSkills.map(e => <span>{e.name}<span>{e.level}</span></span>)}
                                    </>,
                                'BackEnd':
                                    <>
                                        {backEndSkills.map(e => <span>{e.name}<span>{e.level}</span></span>)}
                                    </>,
                                'DevOps':
                                    <>
                                        {othersToolsSkills.map(e => <span>{e.name}<span>{e.level}</span></span>)}
                                    </>
                            }[experiencePattern]
                        }
                    </section>
                </div>
            </section>
            <ul id={'experienceList'}>
                <li>
                    <ExperienceBlock
                        date1={2020}
                        date2={2023}
                        title={'GENDARMERIE NATIONALE'}
                        description={'Developpeur Web et Devops en apprentissage, trois projets effectués en tant que\n' +
                            'déveleoppeur web dont deux utilisant ReactJS et NodeJs en TypeScript et un utilisant\n' +
                            'Symfony. Un projet en Devops pour introduire la solution Airflow dans la messagerie,\n' +
                            'avec l\'utilisation de terraform, ansible et des principes architecturaux.'}

                    />
                </li>
            </ul>
        </StyledExperience>
    );
})

const mapState = (state: RootState) => state.page

export default connect(mapState)(Experience);

